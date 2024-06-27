import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"
// firebase/firestore funcs
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase.config"
// app context
import { useGlobalContext } from "../../context"
// components
import AllPostedListingsGridView from "../AllPostedListingsGridView"
import Pagination from "../Pagination"
// toastify
import { toast } from "react-toastify"


const UserPostedListingsContainer = () => {
    const allUserPostedListings = useLoaderData()

    const [userPostedListings, setUserPostedListings] = useState(allUserPostedListings)

    const { displayedListingsList, setDisplayedListingsList } = useGlobalContext()

    useEffect(() => {
        setDisplayedListingsList({
            totalListOfPostedListings: userPostedListings,
            displayedListOfPostedListings: userPostedListings?.length >= 10 ? userPostedListings.slice(0, 9) : userPostedListings
        })
    }, [userPostedListings])

    const deleteUserPostedListing = async (userPostedListingID) => {
        if (window.confirm('Are you sure you want to delete?')) {
            try {
                await deleteDoc(doc(db, 'listings', userPostedListingID))

                const updatedListOfUserPostedListings = userPostedListings.filter(listing => listing.id !== userPostedListingID)

                setUserPostedListings(updatedListOfUserPostedListings)

                // success message after listing removal 
                toast.success('Uspešno ste obrisali Vaš oglas');
            } catch (error) {
                //error message
                toast.error('Greška prilikom uklanjanja Vaš oglas, molimo Vas probajte ponovo')

                return
            }
        }
    }

    return (
        <>
            <section className="user-posted-listings mb-4">
                {!userPostedListings || userPostedListings.length == 0 ? (
                    <h2 className="fw-bold text-center">
                        Trenutno nemate postavljenih oglasa
                    </h2>
                ) : (
                    <>
                        <h2 className="fw-bold text-center mb-5">
                            Moji oglasi
                        </h2>

                        {/* AllPostedListingsGridView component */}
                        <AllPostedListingsGridView userDisplayedPostedListings={displayedListingsList.displayedListOfPostedListings} deleteUserPostedListing={deleteUserPostedListing} />
                    </>
                )}
            </section>

            {/* Pagination */}
            {(userPostedListings && userPostedListings?.length >= 10) && (
                <Pagination allPostedListingsData={userPostedListings} setDisplayedListingsList={setDisplayedListingsList} />
            )}
        </>
    )
}

export default UserPostedListingsContainer
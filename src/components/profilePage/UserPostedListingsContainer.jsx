import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"
// firebase/firestore funcs
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase.config"
// components
import AllPostedListingsGridView from "../AllPostedListingsGridView"
import Pagination from "../Pagination"
// context
import { useGlobalContext } from "../../context"


const UserPostedListingsContainer = () => {
    const allUserPostedListings = useLoaderData()
    // console.log(userPostedListings);
    const [userPostedListings, setUserPostedListings] = useState(allUserPostedListings)

    // console.log(allUserPostedListings);
    // console.log(userPostedListings);

    const { displayedListingsList, setDisplayedListingsList } = useGlobalContext()    
    useEffect(() => {
        setDisplayedListingsList({
            totalListOfPostedListings: userPostedListings,
            displayedListOfPostedListings: userPostedListings?.length >= 7 ? userPostedListings.slice(0, 6) : userPostedListings
        })
    }, [])    

    const deleteUserPostedListing = async (userPostedListingID) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await deleteDoc(doc(db, 'listings', userPostedListingID))

            const updatedListOfUserPostedListings = userPostedListings.filter(listing => listing.id !== userPostedListingID)

            setUserPostedListings(updatedListOfUserPostedListings)
            console.log('Uspešno ste obrisali Vaš oglas');
        }
    }


    return (
        <>
            <section className="user-posted-offers my-5">
            {!userPostedListings || userPostedListings.length == 0 ? (
                <h2 className="fw-bold text-center">
                    Trenutno nemate postavljenih oglasa
                </h2>
            ) : (
                <>
                    <h2 className="fw-bold text-center mb-5">
                        Moji oglasi
                    </h2>

                    {/* user posted listings component */}
                    {/* <AllPostedListingsGridView userDisplayedPostedListings={userPostedListings} deleteUserPostedListing={deleteUserPostedListing} /> */}
                    <AllPostedListingsGridView userDisplayedPostedListings={displayedListingsList.displayedListOfPostedListings} deleteUserPostedListing={deleteUserPostedListing} />
                </>
            )}
        </section>

        {/* Pagination */}
        {(userPostedListings && userPostedListings?.length >= 7) && (
                <Pagination allPostedListingsData={userPostedListings} setDisplayedListingsList={setDisplayedListingsList} />
            )}
        </>        
    )
}

export default UserPostedListingsContainer
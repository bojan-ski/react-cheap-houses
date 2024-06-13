import { useState } from "react"
import { useLoaderData } from "react-router-dom"
// firebase/firestore funcs
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase.config"
// components
import AllPostedListingsGridView from "../AllPostedListingsGridView"

const UserPostedListingsContainer = () => {
    const userPostedListings = useLoaderData()
    // console.log(userPostedListings);

    const [displayUserPostedListings, setDisplayUserPostedListings] = useState(userPostedListings)
    
    const deleteUserPostedListing = async (userPostedListingID) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await deleteDoc(doc(db, 'listings', userPostedListingID))

            const updatedListOfUserPostedListings = displayUserPostedListings.filter(listing => listing.id !== userPostedListingID)

            setDisplayUserPostedListings(updatedListOfUserPostedListings)
            console.log('Uspešno ste obrisali Vaš oglas');
        }
    }

    return (
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

                    {/* user posted listings */}
                    <AllPostedListingsGridView allPostedListings={displayUserPostedListings} deleteUserPostedListing={deleteUserPostedListing}/>
                </>
            )}
        </section>
    )
}

export default UserPostedListingsContainer
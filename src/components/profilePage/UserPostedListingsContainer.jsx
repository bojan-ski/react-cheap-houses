import { useState } from "react"
import { useLoaderData } from "react-router-dom"
// firebase/firestore funcs
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase.config"
// components
import AllPostedListingsGridView from "../AllPostedListingsGridView"

const UserPostedListingsContainer = () => {
    const userOffersList = useLoaderData()

    const [userPostedListings, setUserPostedListings] = useState(userOffersList)
    
    const deleteUserPostedListing = async (postedOfferID) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await deleteDoc(doc(db, 'listings', postedOfferID))

            const updatedListings = userPostedListings.filter(listing => listing.id !== postedOfferID)

            setUserPostedListings(updatedListings)
            console.log('Uspešno ste obrisali Vaš oglas');
        }
    }

    return (
        <section className="user-posted-offers mb-5">
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
                    <AllPostedListingsGridView allPostedListings={userPostedListings} deleteUserPostedListing={deleteUserPostedListing}/>
                </>
            )}
        </section>
    )
}

export default UserPostedListingsContainer
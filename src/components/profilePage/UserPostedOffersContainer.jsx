import { useState } from "react"
import { useLoaderData } from "react-router-dom"
// firebase/firestore funcs
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase.config"
// components
import PostedOffersGridView from "../offersPage/PostedOffersGridView"

const UserPostedOffersContainer = () => {
    const userOffersList = useLoaderData()
    // console.log(userOffersList);

    const [listings, setListings] = useState(userOffersList)
    
    const deleteUserPostedListing = async (postedOfferID) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await deleteDoc(doc(db, 'listings', postedOfferID))

            const updatedListings = listings.filter(listing => listing.id !== postedOfferID)

            setListings(updatedListings)
            console.log('Uspešno ste obrisali Vaš oglas');
        }
    }

    // console.log(listings);

    return (
        <section className="user-posted-offers mb-5">
            {!listings || listings.length == 0 ? (
                <h2 className="fw-bold text-center">
                    Trenutno nemate postavljenih oglasa
                </h2>
            ) : (
                <>
                    <h2 className="fw-bold text-center mb-5">
                        Moji oglasi
                    </h2>

                    {/* user posted offers/listings */}
                    <PostedOffersGridView postedOffers={listings} deleteUserPostedListing={deleteUserPostedListing}/>
                </>
            )}
        </section>
    )
}

export default UserPostedOffersContainer
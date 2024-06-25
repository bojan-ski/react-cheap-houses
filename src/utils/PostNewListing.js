// firebase/firestore funcs
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
// utils funcs
import getCurrentTimeAndDate from "./getCurrentTimeAndDate";
// toastify
import { toast } from "react-toastify";

const postNewListing = async (formData, imageUrls) => {
    try {
        const formDataCopy = {
            ...formData,
            imageUrls,
            timestamp: serverTimestamp(),
            listingCreated: getCurrentTimeAndDate()
        }

        delete formDataCopy.propertyImages

        await addDoc(collection(db, 'listings'), formDataCopy)

        // success message
        toast.success('Uspešno ste postavili Vaš oglas')

        // after the user has posted a new listing, the user is redirected to the Listings page
        window.location.href = '/oglasi'
    } catch (error) {
        // success message
        toast.error('Greška prilikom objavljivanja Vašeg oglasa, molimo Vas probajte ponovo')

        return
    }
}

export default postNewListing
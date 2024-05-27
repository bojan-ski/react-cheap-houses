import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

const fetchListingsFromFirebase = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "listings"));

        let listings = []

        querySnapshot.forEach((document) => {
            // console.log(document);
            // console.log(document.id);
            // console.log(document.data());
            return listings.push({
                id: document.id,
                data: document.data()
            })
        })
        // console.log(listings);

        return listings
    } catch (error) {
        console.log(error)
        console.log('Could not fetch data')
    }
}

export default fetchListingsFromFirebase
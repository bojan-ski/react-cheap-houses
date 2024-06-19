import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase.config";

const fetchAllListingsFromFirebase = async () => {
    try {
        const q = query(collection(db, 'listings'), orderBy('timestamp', 'desc'))

        const querySnapshot = await getDocs(q)

        // const querySnapshot = await getDocs(collection(db, "listings"));

        let allPostedListings = []

        querySnapshot.forEach((document) => {
            // console.log(document);
            // console.log(document.id);
            // console.log(document.data());
            return allPostedListings.push({
                id: document.id,
                data: document.data()
            })
        })
        // console.log(listings);

        return allPostedListings
    } catch (error) {
        console.log(error)
        console.log('Could not fetch all listings')
    }
}

export default fetchAllListingsFromFirebase
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";

const fetchSelectedOfferDetailsFromFirebase = async (id) => {
    try {
        const docRef = doc(db, "listings", id);
        const docSnap = await getDoc(docRef);

        // console.log(docSnap.data());
        return docSnap.data()       
    } catch (error) {
        console.log(error);
        console.log('can not fetch selected offer data');
    }
}

export default fetchSelectedOfferDetailsFromFirebase
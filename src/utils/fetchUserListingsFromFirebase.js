import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore"
import { db } from "../firebase.config";

const fetchUserListingsFromFirebase = async () => {
    const auth = getAuth()
    // console.log(auth);
    // console.log(auth.currentUser);

    if (!auth.currentUser) return null
    // console.log(auth);

    try {
        const offersRef = collection(db, 'listings')
        const q = query(offersRef, where('userRef', '==', auth.currentUser.uid), orderBy('timestamp', 'desc'))

        const querySnap = await getDocs(q)

        let userPostedListings = []

        querySnap.forEach((offer) => {
            return userPostedListings.push({
                id: offer.id,
                data: offer.data()
            })
        })
        // console.log(userPostedListings);

        return userPostedListings
    } catch (error) {
        console.log(error)
        console.log('Could not fetch user data')
    }
}

export default fetchUserListingsFromFirebase
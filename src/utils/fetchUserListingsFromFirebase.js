import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore"
import { db } from "../firebase.config";

const fetchUserListingsFromFirebase = async () => {
    const auth = getAuth()
    // console.log(auth);
    // console.log(auth.currentUser.displayName);

    if (!auth.currentUser) return null
    // console.log(auth);

    try {
        const q = query(collection(db, 'listings'),
            where('userRef', '==', auth.currentUser.uid),
            orderBy('timestamp', 'desc'))

        const querySnapshot = await getDocs(q)

        let userPostedListings = []

        querySnapshot.forEach((listing) => {
            return userPostedListings.push({
                id: listing.id,
                data: listing.data()
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
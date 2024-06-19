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
        // const auth = getAuth()
        // if (!auth.currentUser) return null
        const q = query(collection(db, 'listings'),
            where('userRef', '==', auth.currentUser.uid),
            orderBy('timestamp', 'desc'))

        const querySnapshot = await getDocs(q)

        let allUserPostedListings = []

        querySnapshot.forEach((listing) => {
            return allUserPostedListings.push({
                id: listing.id,
                data: listing.data()
            })
        })
        // console.log(allUserPostedListings);

        return allUserPostedListings
    } catch (error) {
        console.log(error)
        console.log('Could not fetch user data')
    }
}

export default fetchUserListingsFromFirebase
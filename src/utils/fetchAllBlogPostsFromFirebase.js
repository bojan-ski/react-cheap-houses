import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase.config";
// toastify
import { toast } from "react-toastify"

const fetchAllBlogPostsFromFirebase = async () => {
    try {
        const q = query(collection(db, 'blogPosts'), orderBy('timestamp', 'desc'))

        const querySnapshot = await getDocs(q)

        let allBlogPosts = []

        querySnapshot.forEach((document) => {
            return allBlogPosts.push({
                id: document.id,
                data: document.data()
            })
        })

        // console.log(allBlogPosts);
        return allBlogPosts
    } catch (error) {
        //error message
        console.log(error);
        toast.error('Greška prilikom prikazivanja svi objavljenih blog postova, molimo Vas probajte ponovo')

        return
    }
}

export default fetchAllBlogPostsFromFirebase
// firebase/firestore funcs
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
// toastify
import { toast } from "react-toastify";

const subscribeToNewsletter = async (userEmail) => {
    try {
        const newsletterSubscriber = {
            email: userEmail,
            timestamp: serverTimestamp()
        }

        await addDoc(collection(db, 'newsletterSubscribers'), newsletterSubscriber)

        // success message
        toast.success('Uspešno ste prosledili Vašu email adresu')
    } catch (error) {
        console.log(error);
        // error message
        toast.error('Greška prilikom prosleđivanja Vašu email adrese, molimo Vas probajte ponovo')

        return
    }
}

export default subscribeToNewsletter
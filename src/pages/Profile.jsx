import { useEffect, useState } from "react"
// app context
import { useGlobalContext } from "../context"
// firebase/firestore func
import { onAuthStateChanged } from "firebase/auth"
// utils func
import fetchUserListingsFromFirebase from "../utils/fetchUserListingsFromFirebase"
// components
import PageLocation from "../components/PageLocation"
import UserNotLoggedIn from "../components/profilePage/UserNotLoggedIn"
import UserLoggedIn from "../components/profilePage/UserLoggedIn"
import CreateNewOffer from "../components/profilePage/CreateNewOffer"
import UserPostedOffersContainer from "../components/profilePage/UserPostedOffersContainer"


// LOADER
export const loader = async () => {
    const userPostedOffers = await fetchUserListingsFromFirebase()

    return userPostedOffers

    // const auth = getAuth()

    // if (auth.currentUser) {
    //     const userPostedOffers = await fetchUserListingsFromFirebase()

    //     console.log(userPostedOffers)
    //     return { userPostedOffers, auth }
    // } else {
    //     console.log('user nije prijavljen');
    //     return null
    // }
}

const Profile = () => {
    const { auth } = useGlobalContext()
    const [userData, setUserData] = useState({
        userID: '',
        userName: ''
    })
    const [showPostNewOffer, setShowPostNewOffer] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                auth.currentUser ? (
                    setUserData({
                        userID: user.uid,
                        userName: user.displayName
                    })
                ) : (
                    setUserData({
                        userID: '',
                        userName: ''
                    })
                )
            }
        })
    }, [userData])

    return (
        <div className="profile-page">
            {/* page location component */}
            <PageLocation />

            <div className="container">
                {!userData.userName ? (
                    <UserNotLoggedIn />
                ) : (
                    <>
                        {/* user logged in component */}
                        <UserLoggedIn userName={userData.userName} showPostNewOffer={showPostNewOffer} setShowPostNewOffer={setShowPostNewOffer} />

                        {/* post new offer component */}
                        <CreateNewOffer userID={userData.userID} showPostNewOffer={showPostNewOffer} />

                        {/* user posted offers component */}
                        <UserPostedOffersContainer />
                    </>
                )}
            </div>
        </div>
    )
}

export default Profile
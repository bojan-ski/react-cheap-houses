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
import PostNewListing from "../components/profilePage/PostNewListing"
import UserPostedListingsContainer from "../components/profilePage/UserPostedListingsContainer"

// LOADER
export const loader = async () => {
    const userPostedListings = await fetchUserListingsFromFirebase()

    return userPostedListings

    // const auth = getAuth()

    // if (auth.currentUser) {
    //     const userPostedListings = await fetchUserListingsFromFirebase()

    //     console.log(userPostedListings)
    //     return { userPostedListings, auth }
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
    const [showPostNewListingForm, setShowPostNewListingForm] = useState(false)

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
                        <UserLoggedIn userName={userData.userName} showPostNewListingForm={showPostNewListingForm} setShowPostNewListingForm={setShowPostNewListingForm} />

                        {/* post new offer component */}
                        <PostNewListing userID={userData.userID} showPostNewListingForm={showPostNewListingForm} />

                        {/* user posted offers component */}
                        <UserPostedListingsContainer/>
                    </>
                )}
            </div>
        </div>
    )
}

export default Profile
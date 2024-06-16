import { useEffect, useState } from "react"
// firebase/firestore func
import { getAuth, onAuthStateChanged } from "firebase/auth"
// utils func
import fetchUserListingsFromFirebase from "../utils/fetchUserListingsFromFirebase"
// components
import PageLocation from "../components/PageLocation"
import UserNotLoggedIn from "../components/profilePage/UserNotLoggedIn"
import UserLoggedIn from "../components/profilePage/UserLoggedIn"
import UserPostedListingsContainer from "../components/profilePage/UserPostedListingsContainer"

// LOADER
export const loader = async () => {
    const userPostedListings = await fetchUserListingsFromFirebase()
    // console.log(userPostedListings);

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
    const auth = getAuth()
    // console.log(auth.currentUser);
    // console.log(auth.currentUser.displayName);
    // console.log(auth.currentUser.uid);

    // const [userData, setUserData] = useState({
    //     userID: auth?.currentUser?.uid,
    //     userName: auth?.currentUser?.displayName
    // })

    const [userData, setUserData] = useState({
        userID: '',
        userName: ''
    })

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
    }, [])

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
                        <UserLoggedIn userData={userData} />

                        {/* user posted offers component */}
                        <UserPostedListingsContainer />
                    </>
                )}
            </div>
        </div>
    )
}

export default Profile
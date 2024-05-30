import { useEffect, useState } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
// firebase/firestore funcs
import { getAuth, onAuthStateChanged } from "firebase/auth"
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
    // const { auth } = useLoaderData()
    // console.log(auth);

    const auth = getAuth()
    const navigate = useNavigate()
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
    }, [userData])

    const logOutUser = () => {
        auth.signOut()

        // after the user has logged out, the user is redirected to the Dashboard page
        navigate('/')
    }

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
                        <UserLoggedIn userName={userData.userName} logOutUser={logOutUser} />

                        {/* post new offer component */}
                        <CreateNewOffer userID={userData.userID} />

                        {/* user posted offers component */}
                        <UserPostedOffersContainer />
                    </>
                )}
            </div>
        </div>
    )
}

export default Profile
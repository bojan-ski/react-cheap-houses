import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PageLocation from "../components/PageLocation"
import UserNotLoggedIn from "../components/profilePage/UserNotLoggedIn"
import CreateNewOffer from "../components/profilePage/CreateNewOffer"

const Profile = () => {
    const auth = getAuth()
    const [userData, setUserData] = useState({
        userID: '',
        userName: ''
    })
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                auth.currentUser ? (
                    // console.log(auth)
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

    // console.log(userData);

    return (
        <div className="profile-page">
            {/* page location component */}
            <PageLocation />

            <div className="container">
                <section className="section-header">
                    {!userData.userName ? (
                        <UserNotLoggedIn />
                    ) : (
                        <div>
                            <h1 className="text-center fw-bold">
                                Dobrodošli {userData.userName.toUpperCase()}
                            </h1>
                            <div>
                                <button className="btn btn-primary my-5" onClick={logOutUser}>
                                    Log Out
                                </button>
                            </div>
                        </div>
                    )}
                </section>

                {/* new offer component */}
                {userData.userName && <CreateNewOffer userID={userData.userID} />}
            </div>
        </div>
    )
}

export default Profile
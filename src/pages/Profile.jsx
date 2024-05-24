import PageLocation from "../components/PageLocation"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserNotLoggedIn from "../components/profilePage/UserNotLoggedIn"

const Profile = () => {
    const auth = getAuth()
    const [userData, setUserData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                auth.currentUser ? setUserData(auth.currentUser.displayName) : setUserData(null)
            }
        })
    }, [userData])

    const LogOut = () => {
        auth.signOut()

        // after the user has logged out, the user is redirected to the Dashboard page
        navigate('/')
    }

    return (
        <div className="profile-page">
            {/* page location */}
            <PageLocation />

            <div className="container">
                {!userData ? (
                    <UserNotLoggedIn />
                ) : (
                    <div>
                        <h1>Dobrodošli {userData.toUpperCase()}</h1>
                        <div>
                            <button className="btn btn-primary my-5" onClick={LogOut}>
                                Log Out
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Profile
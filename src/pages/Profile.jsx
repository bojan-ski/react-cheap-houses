// utils func
import fetchUserListingsFromFirebase from "../utils/fetchUserListingsFromFirebase"
// app context
import { useGlobalContext } from "../context"
// components
import PageLocation from "../components/PageLocation"
import UserNotLoggedIn from "../components/profilePage/UserNotLoggedIn"
import UserLoggedIn from "../components/profilePage/UserLoggedIn"
import UserPostedListingsContainer from "../components/profilePage/UserPostedListingsContainer"

// LOADER
export const loader = async () => {
    const allUserPostedListings = await fetchUserListingsFromFirebase()

    return allUserPostedListings
}

const Profile = () => {
    const { userData } = useGlobalContext()

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
                        <UserLoggedIn />

                        {/* user posted offers component */}
                        <UserPostedListingsContainer />
                    </>
                )}
            </div>
        </div>
    )
}

export default Profile
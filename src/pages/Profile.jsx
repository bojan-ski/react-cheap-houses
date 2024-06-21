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
    // console.log(allUserPostedListings);

    return allUserPostedListings

    // const auth = getAuth()

    // if (auth.currentUser) {
    //     const allUserPostedListings = await fetchUserListingsFromFirebase()

    //     console.log(allUserPostedListings)
    //     return { allUserPostedListings, auth }
    // } else {
    //     console.log('user nije prijavljen');
    //     return null
    // }
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
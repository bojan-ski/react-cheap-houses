import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// firebase/firestore funcs
import { getAuth, signOut } from 'firebase/auth'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    // log out user
    const auth = getAuth()
    const navigate = useNavigate()

    const logOutUser = async () => {
        if (window.confirm('Da li ste sigurni da želite da se odjavite?')) {
            try {
                await signOut(auth)
                console.log(auth.currentUser);

                // success message
                console.log('uspesno ste se odjavili');

                // after the user has logged out, the user is redirected to the Dashboard page
                navigate('/')
            } catch (error) {
                console.log('greska prilikom odjave');
            }
        }
    }

    // filter option
    const [allPostedListingsData, setAllPostedListingsData] = useState({})
    const [filterOptionsApplied, setFilterOptionsApplied] = useState(false)
    const [selectedFilterOptions, setSelectedFilterOptions] = useState({
        selectedListingType: 'Svi oglasi',
        selectedPropertyType: 'Svi tipovi imovine',
        selectedDistrict: 'Svi okruzi',
    })

    // pagination
    const [displayedListingsList, setDisplayedListingsList] = useState({
        totalListOfPostedListings: null,
        displayedListOfPostedListings: null
    })

    return <AppContext.Provider value={{
        logOutUser, // NavbarUserOnboarding, UserLoggedIn
        filterOptionsApplied, //PostedListingsFilterOptions
        setFilterOptionsApplied, // DashboardFilterOptions, PostedListingsFilterOptions
        allPostedListingsData, // DashboardFilterOptions, PostedListingsContainer, PostedListingsFilterOptions
        setAllPostedListingsData, // DashboardFilterOptions, PostedListingsContainer, PostedListingsFilterOptions
        selectedFilterOptions, // DashboardFilterOptions, PostedListingsFilterOptions
        setSelectedFilterOptions, // DashboardFilterOptions, PostedListingsFilterOptions
        displayedListingsList, // PostedListingsContainer, UserPostedListingsContainer
        setDisplayedListingsList, // PostedListingsContainer, UserPostedListingsContainer
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)
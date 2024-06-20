import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// firebase/firestore funcs
import { getAuth, signOut } from 'firebase/auth'
import fetchAllListingsFromFirebase from "./utils/fetchAllListingsFromFirebase";

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

    // fetch all listings from DB
    const [allPostedListingsData, setAllPostedListingsData] = useState({})

    const fetchAllListings = async () => {
        const allPostedListings = await fetchAllListingsFromFirebase()
        setAllPostedListingsData(allPostedListings)
    }

    useEffect(() => {
        fetchAllListings()
    }, [])
    // console.log(allPostedListingsData);

    // filter option
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
        setAllPostedListingsData, // DashboardFilterOptions, PostedListingsFilterOptions
        selectedFilterOptions, // DashboardFilterOptions, PostedListingsFilterOptions
        setSelectedFilterOptions, // DashboardFilterOptions, PostedListingsFilterOptions
        displayedListingsList, // PostedListingsContainer, UserPostedListingsContainer
        setDisplayedListingsList, // PostedListingsContainer, UserPostedListingsContainer
        fetchAllListings, // PostedListingsFilterOptions
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)
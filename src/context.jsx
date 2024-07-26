import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// firebase/firestore funcs
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
// utils func
import fetchAllListingsFromFirebase from "./utils/fetchAllListingsFromFirebase.js";
// toastify
import { toast } from 'react-toastify'


const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const auth = getAuth()

    // user details
    const [userData, setUserData] = useState({
        userID: '',
        userName: '',
        userVerified: false
    })

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                auth.currentUser ? (
                    setUserData({
                        userID: user.uid,
                        userName: user.displayName,
                        userVerified: user.emailVerified
                    })
                ) : (
                    setUserData({
                        userID: '',
                        userName: '',
                        userVerified: false
                    })
                )
            }
        })
    }, [])

    // log out user
    const navigate = useNavigate()

    const logOutUser = async () => {
        if (window.confirm('Da li ste sigurni da želite da se odjavite?')) {
            try {
                await signOut(auth)

                setUserData({
                    userID: '',
                    userName: ''
                })

                // success message
                toast.success('Odjavili ste se')

                // after the user has logged out, the user is redirected to the Dashboard page
                navigate('/')
            } catch (error) {
                //error message
                toast.error('Greška prilikom odjave')
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

    // filter option
    const [filterOptionsApplied, setFilterOptionsApplied] = useState(false)
    const [selectedFilterOptions, setSelectedFilterOptions] = useState({
        selectedListingType: 'Svi oglasi',
        selectedPropertyType: 'Svi tipovi imovine',
        selectedDistrict: 'Svi okruzi',
    })

    // pagination
    const [currentPageNumber, setCurrentPageNumber] = useState(1)
    const [displayedListingsList, setDisplayedListingsList] = useState({
        totalDataList: null,
        displayedDataList: null
    })

    return <AppContext.Provider value={{
        userData, //Profile, NavbarUserOnboarding, UserLoggedIn, PostNewListingModal
        logOutUser, // NavbarUserOnboarding, UserLoggedIn
        filterOptionsApplied, //PostedListingsFilterOptions
        setFilterOptionsApplied, // DashboardFilterOptions, PostedListingsFilterOptions
        allPostedListingsData, // DashboardFilterOptions, PostedListingsContainer, PostedListingsFilterOptions
        setAllPostedListingsData, // DashboardFilterOptions, PostedListingsFilterOptions
        selectedFilterOptions, // DashboardFilterOptions, PostedListingsFilterOptions
        setSelectedFilterOptions, // DashboardFilterOptions, PostedListingsFilterOptions
        currentPageNumber, // Pagination
        setCurrentPageNumber, // Pagination, PostedListingsContainer, UserPostedListingsContainer BlogPostsContainer
        displayedListingsList, // PostedListingsContainer, UserPostedListingsContainer
        setDisplayedListingsList, // PostedListingsContainer, UserPostedListingsContainer
        fetchAllListings, // PostedListingsFilterOptions
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)
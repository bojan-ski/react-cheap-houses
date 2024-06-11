import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// firebase/firestore funcs
import { getAuth, signOut } from 'firebase/auth'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
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

    return <AppContext.Provider value={{
        logOutUser, // NavbarUserOnboarding, UserLoggedIn
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)
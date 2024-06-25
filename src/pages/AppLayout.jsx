import { Outlet, useNavigation } from "react-router-dom"
// app context - provider
import { AppProvider } from "../context"
// toastify
import { ToastContainer } from 'react-toastify';
// components
import Loading from "../components/Loading"
import Footer from "../components/appLayout/footer/Footer"
import Navbar from "../components/appLayout/navbar/Navbar"

const AppLayout = () => {
    const navigation = useNavigation()
    const isPageLoading = navigation.state === 'loading'

    // console.log(navigation);
    // console.log(isPageLoading);

    return (
        <AppProvider>
            <>
                <Navbar />

                <main>
                    {isPageLoading ? <Loading /> : <Outlet />}
                </main>

                <Footer />
            </>
            <ToastContainer />
        </AppProvider>
    )
}

export default AppLayout
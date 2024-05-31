import { Outlet, useNavigation } from "react-router-dom"
import Loading from "../components/Loading"
import Footer from "../components/appLayout/footer/Footer"
import Navbar from "../components/appLayout/navbar/Navbar"

const AppLayout = () => {
    const navigation = useNavigation()
    const isPageLoading = navigation.state === 'loading'

    return (
        <>
            <Navbar />

            <main>
                {isPageLoading ? <Loading /> : <Outlet />}
            </main>

            <Footer />
        </>
    )
}

export default AppLayout
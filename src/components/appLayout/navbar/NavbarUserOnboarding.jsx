import { Link } from 'react-router-dom'
// firebase/firestore funcs
import { getAuth } from 'firebase/auth'
// app context
import { useGlobalContext } from '../../../context'
// asset
import headerLogo from '../../../assets/header-assets/jeftine_kuce_logo_text_header.png'
// modals
import SignUp from '../../../modals/SignUp'
import LogIn from '../../../modals/LogIn'
import ForgotPassword from '../../../modals/ForgotPassword'
// React Icons
import { BiSolidUserCheck } from 'react-icons/bi'
import { IoLogIn } from 'react-icons/io5'


const NavbarUserOnboarding = () => {
    const auth = getAuth()
    const { logOutUser } = useGlobalContext()

    return (
        <>
            <div className='user-onboarding container-fluid d-flex align-items-center justify-content-between pb-1 border-bottom'>
                <Link className="navbar-brand" to="/">
                    <img src={headerLogo} alt="portal jefitene kuce - logo" />
                </Link>

                <div className="header-btn-container d-flex align-items-center">
                    {auth.currentUser ? (
                        <>
                            <p className='mb-0 fw-bold text-muted me-3'>
                                Dobrodošli
                                <span className='ms-2 text-dark'>
                                    {auth.currentUser.displayName}
                                </span>
                            </p>

                            <button type="button" className="btn btn-danger px-2 py-1" onClick={logOutUser}>
                                Odjavi se
                            </button>
                        </>
                    ) : (
                        <>
                            {/* sign up modal btn */}
                            <button type="button" className="display-signUp-modal btn p-0 mx-1" data-bs-toggle="modal" data-bs-target="#signUpModal">
                                <BiSolidUserCheck size={20} />
                                <span>
                                    Registracija
                                </span>
                            </button>

                            <span>
                                /
                            </span>

                            {/* log in modal btn */}
                            <button type="button" className="display-logIn-modal btn p-0 mx-1" data-bs-toggle="modal" data-bs-target="#logInModal">
                                <IoLogIn size={20} />
                                <span>
                                    Prijava
                                </span>
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* sign up modal */}
            <SignUp />

            {/* log in modal */}
            <LogIn />

            {/* forgot password modal */}
            <ForgotPassword />
        </>
    )
}

export default NavbarUserOnboarding
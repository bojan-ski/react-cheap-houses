import { Link } from 'react-router-dom'
// React Icons
import { BiSolidUserCheck } from 'react-icons/bi'
// asset
import headerLogo from '../../../assets/header-assets/jeftine_kuce_logo_text_header.png'
// modals
import SignUp from '../../../modals/SignUp'
import LogIn from '../../../modals/LogIn'
import ForgotPassword from '../../../modals/ForgotPassword'

const NavbarUserOnboarding = () => {
    return (
        <>
            <div className='user-onboarding container-fluid d-flex align-items-center justify-content-between pb-1 border-bottom'>
                <Link className="navbar-brand" to="/">
                    <img src={headerLogo} alt="logo" />
                </Link>

                <div className="btn-container">
                    <button type="button" className="display-signUp-modal btn p-0 mx-1" data-bs-toggle="modal" data-bs-target="#signUpModal">
                        <BiSolidUserCheck size={20} style={{ verticalAlign: 'top' }} />
                        <span>
                            Registracija
                        </span>
                    </button>

                    <span>
                        /
                    </span>

                    {/* log in modal btn */}
                    <button type="button" className="display-logIn-modal btn p-0 mx-1" data-bs-toggle="modal" data-bs-target="#logInModal">
                        Prijava
                    </button>
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
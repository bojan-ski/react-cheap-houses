import { Link, NavLink } from "react-router-dom"
import appNavigationLinks from "../../utils/appNavigationLinks"
import headerLogo from '../../assets/header-assets/jeftine_kuce_logo_text_header.png'
// import registrationModalImg from '../../assets/header-assets/jeftine_kuce_register_bg.jpg'
// import logInModalImg from '../../assets/header-assets/jeftine_kuce_login_bg.jpg'

// React Icons
import { IoReorderThreeOutline } from "react-icons/io5"
import { BsHouseHeart } from "react-icons/bs"
import { BiSolidUserCheck } from "react-icons/bi"

// Modals
import LogIn from "../../modals/LogIn"
import SignUp from "../../modals/SignUp"
import ForgotPassword from "../../modals/ForgotPassword"


const Navbar = () => {
  return (
    <>
      {/* HEADER - NAVBAR */}
      <header id="header" className="px-2">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="header-logo">
              <Link className="navbar-brand" to="/">
                <img src={headerLogo} alt="logo" />
              </Link>
            </div>

            {/* navbar (collapse) container */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav w-50 mx-auto justify-content-around">
                {appNavigationLinks.map(link => {
                  return <li className="nav-item" key={link.label}>
                    <NavLink to={link.href} className="fw-bold">
                      {link.label}
                    </NavLink>
                  </li>
                })}
              </ul>
            </div>

            {/* navbar (collapse) toggle btn */}
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <IoReorderThreeOutline size={40}/>
            </button>

            <div className="btn-container">
              {/* sign up modal btn */}
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

              {/* home btn - link */}
              <Link to="/" className="home-btn fw-bolder text-white ms-3">
                <BsHouseHeart size={30} style={{ verticalAlign: 'bottom' }} />
                <span className="ms-1">
                  Nekretnine
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* sign up modal */}
      <SignUp/>

      {/* log in modal */}
      <LogIn />

      {/* forgot password modal */}
      <ForgotPassword />
    </>
  )
}

export default Navbar
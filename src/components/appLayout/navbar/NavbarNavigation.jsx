import { Link, NavLink } from "react-router-dom"
// import from data folder
import appNavigationLinks from "../../../data/appNavigationLinks"
// React Icons
import { BsHouseHeart } from "react-icons/bs"
import { IoReorderThreeOutline } from "react-icons/io5"

const NavbarNavigation = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                {/* home btn - link */}
                <Link className="home-btn fw-bolder text-white"  to="/">
                    <BsHouseHeart size={30} style={{ verticalAlign: 'bottom' }} />
                    <span className="ms-1">
                        Nekretnine
                    </span>
                </Link>

                {/* navbar (collapse) container */}
                <div className="collapse navbar-collapse" id="navbarNavigation">
                    <ul className="navbar-nav w-50 ms-auto justify-content-around">
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
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavigation" aria-controls="navbarNavigation" aria-expanded="false" aria-label="Toggle navigation">
                    <IoReorderThreeOutline size={50} />
                </button>
            </div>
        </nav>
    )
}

export default NavbarNavigation
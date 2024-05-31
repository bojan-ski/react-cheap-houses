// components
import NavbarNavigation from "./NavbarNavigation"
import NavbarUserOnboarding from "./NavbarUserOnboarding"

const Navbar = () => {
  return (
    <>
      {/* HEADER */}
      <header id="header" className="px-2">
        {/* NavbarUserOnboarding component */}
        <NavbarUserOnboarding />

        {/* NavbarUserOnboarding component */}
        <NavbarNavigation />
      </header>
    </>
  )
}

export default Navbar
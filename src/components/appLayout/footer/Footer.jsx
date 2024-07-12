// components
import MainFooterContent from "./MainFooterContent"
import NavAndSocialFooterLinks from "./NavAndSocialFooterLinks"
import RightsFooter from "./RightsFooter"

const Footer = () => {
  return (
    <footer id="footer">

      {/* MainFooterContent component */}
      <MainFooterContent />

      {/* NavAndSocialFooterLinks component */}
      <NavAndSocialFooterLinks />

      {/* RightsFooter component */}
      <RightsFooter />
    </footer>
  )
}

export default Footer
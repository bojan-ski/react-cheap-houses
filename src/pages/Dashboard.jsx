import ExpertAdvices from "../components/dashboardPage/ExpertAdvices"
import Hero from "../components/dashboardPage/Hero"
import Partners from "../components/dashboardPage/Partners"
import Testimonials from "../components/dashboardPage/Testimonials"


const Dashboard = () => {
  return (
    <div>
      {/* hero component */}
      <Hero />

      {/* partners - swiper component */}
      <Partners />

      {/* expert advices component */}
      <ExpertAdvices />

      {/* testimonials component */}
      <Testimonials />
    </div>
  )
}

export default Dashboard
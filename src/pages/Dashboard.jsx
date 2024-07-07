// components
import ExpertAdvices from "../components/dashboardPage/ExpertAdvices"
import Hero from "../components/dashboardPage/Hero"
import Testimonials from "../components/dashboardPage/Testimonials"

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      {/* hero component */}
      <Hero />

      {/* expert advices component */}
      <ExpertAdvices />

      {/* testimonials component */}
      <Testimonials />
    </div>
  )
}

export default Dashboard
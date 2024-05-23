import ExpertAdvices from "../components/dashboardPage/ExpertAdvices"
import Testimonials from "../components/dashboardPage/Testimonials"


const Dashboard = () => {
  return (
    <div>
      <h1 className="bg-warning text-center">Dashboard</h1>  

      {/* expert advices */}
      <ExpertAdvices/>

      {/* testimonials */}
      <Testimonials/>
    </div>
  )
}

export default Dashboard
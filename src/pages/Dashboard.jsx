import ExpertAdvices from "../components/dashboardPage/ExpertAdvices"
import Hero from "../components/dashboardPage/Hero"
import Partners from "../components/dashboardPage/Partners"
import Testimonials from "../components/dashboardPage/Testimonials"

// import fetchAllListingsFromFirebase from "../utils/fetchAllListingsFromFirebase"

// LOADER
// export const loader = async () => {
//   const allPostedListings = await fetchAllListingsFromFirebase()

//   return allPostedListings
// }

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
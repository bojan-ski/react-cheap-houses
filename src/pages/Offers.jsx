// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import fetchListingsFromFirebase from "../utils/fetchListingsFromFirebase";

// COMPONENTS
import PageLocation from "../components/PageLocation"
// import Spinner from "../components/Spinner";

// LOADER
export const loader = async () => {
  const postedOffers = await fetchListingsFromFirebase()

  return postedOffers
}

const Offers = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const postedOffers = useLoaderData()
  // console.log(postedOffers);

  // useEffect(()=>{
  //   setIsLoading(!postedOffers ? true : false)
  // },[postedOffers])

  return (
    <div className="blog-page">
      {/* page location */}
      <PageLocation />

      <div className="container">
        <h1>Oglasi</h1>

          {/* {isLoading && <Spinner />} */}
      </div>
    </div>
  )
}

export default Offers
import { useLoaderData } from "react-router-dom";
// utils func
import fetchAllListingsFromFirebase from "../utils/fetchAllListingsFromFirebase";
// components
import PageLocation from "../components/PageLocation"
import NoPostedOffersMessage from "../components/offersPage/NoPostedOffersMessage";
import PostedOffersContainer from "../components/offersPage/PostedOffersContainer";

// LOADER
export const loader = async () => {
  const postedOffers = await fetchAllListingsFromFirebase()
  // return null
  return postedOffers
}

const Offers = () => {
  const postedOffers = useLoaderData()
  // console.log(postedOffers);
  // console.log(postedOffers.length);

  return (
    <div className="offers-page">
      {/* page location */}
      <PageLocation />

      <div className="container">
        {!postedOffers || postedOffers.length == 0 ? (
          <NoPostedOffersMessage />
        ) : (
          <>
            <section className="text-center mb-5">
              <h1 className="fw-bold mb-2">
                Oglasi
              </h1>
              <h6 className="text-muted fw-bold">
                Trenutno imamo {postedOffers.length} {postedOffers.length == 1 ? "oglas" : 'oglasa'} za nekretnine
              </h6>
            </section>

            {/* posted offers - list */}
            <PostedOffersContainer />
          </>
        )}
      </div>
    </div>
  )
}

export default Offers
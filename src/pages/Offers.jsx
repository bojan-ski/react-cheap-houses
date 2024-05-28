import { useLoaderData } from "react-router-dom";
import fetchListingsFromFirebase from "../utils/fetchListingsFromFirebase";
// COMPONENTS
import PageLocation from "../components/PageLocation"
import PostedOffersList from "../components/offersPage/PostedOffersList";
import Spinner from "../components/Spinner";

// LOADER
export const loader = async () => {
  const postedOffers = await fetchListingsFromFirebase()

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
        {!postedOffers ? (
          <Spinner />
        ) : (
          postedOffers.length == 0 ? <h1>Nema postavljenih oglasa</h1> : (
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
              <PostedOffersList />       
            </>
          )
        )}
      </div>
    </div>
  )
}

export default Offers
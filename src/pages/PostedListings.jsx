import { useLoaderData } from "react-router-dom";
// utils func
import fetchAllListingsFromFirebase from "../utils/fetchAllListingsFromFirebase";
// components
import PageLocation from "../components/PageLocation"
import NoPostedListingsMessage from "../components/postedListingsPage/NoPostedListingsMessage";
import PostedListingsContainer from "../components/postedListingsPage/PostedListingsContainer";

// LOADER
export const loader = async () => {
  const allPostedListings = await fetchAllListingsFromFirebase()

  return allPostedListings
}

const PostedListings = () => {
  const allPostedListings = useLoaderData()

  return (
    <div className="offers-page">
      {/* page location */}
      <PageLocation />

      <div className="container">
        {!allPostedListings || allPostedListings.length == 0 ? (
          <NoPostedListingsMessage />
        ) : (
          <>
            <section className="text-center mb-5">
              <h1 className="fw-bold mb-2">
                Oglasi
              </h1>
              <h6 className="text-muted fw-bold">
                Trenutno imamo {allPostedListings.length} {allPostedListings.length == 1 ? "oglas" : 'oglasa'} za nekretnine
              </h6>
            </section>

            {/* posted offers - list */}
            <PostedListingsContainer />
          </>
        )}
      </div>
    </div>
  )
}

export default PostedListings
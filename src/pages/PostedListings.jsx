import { useLoaderData } from "react-router-dom";
// utils func
import fetchAllListingsFromFirebase from "../utils/fetchAllListingsFromFirebase.js";
// components
import PageLocation from "../components/PageLocation.jsx"
import NoDataAvailableMessage from "../components/NoDataAvailableMessage.jsx";
import PostedListingsContainer from "../components/postedListingsPage/PostedListingsContainer.jsx";


// REACT QUERY
const fetchAllListingsFromFirebaseQuery = {
  queryKey: ['allPostedListings'],
  queryFn: () => fetchAllListingsFromFirebase()
}

// LOADER
export const loader = (queryClient) => async () => {
  const allPostedListings = await queryClient.ensureQueryData(fetchAllListingsFromFirebaseQuery)

  return allPostedListings
}

// export const loader = async () => {
//   const allPostedListings = await fetchAllListingsFromFirebase()

//   return allPostedListings
// }

const PostedListings = () => {
  const allPostedListings = useLoaderData()

  return (
    <div className="posted-listings-page">
      {/* page location */}
      <PageLocation />

      <div className="container">
        {!allPostedListings || allPostedListings.length == 0 ? (
          // <NoPostedListingsMessage />
          <NoDataAvailableMessage text='oglasa'/>
        ) : (
          <>
            <section className="text-center mb-5">
              <h1 className="fw-bold mb-3">
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
import { useLoaderData } from "react-router-dom";
// utils func
import fetchAllBlogPostsFromFirebase from "../utils/fetchAllBlogPostsFromFirebase.js";
// components
import PageLocation from "../components/PageLocation.jsx"


// LOADER
export const loader = async () => {
  const allBlogPosts = await fetchAllBlogPostsFromFirebase()

  console.log(allBlogPosts);
  return allBlogPosts
}

const Blog = () => {
  return (
    <div className="blog-page">
      {/* page location */}
      <PageLocation />

      <div className="blog-content">
        <div className="container text-center py-5">
          <h1 className="fw-bold mb-3">
            Hvala Vam što ste pokazali interesovanje za našu Blog stranicu
          </h1>
          <h2 className="text-muted mb-3">
            Stranica je i dalje u fazi izrade. 
          </h2>
          <h2 className="text-muted mb-3">
            Molimo Vas dođite nam kasnije
          </h2>
          <h3 className="fw-bold">
            S poštovanjem Vaš Portal JEFTINA KUĆA
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Blog
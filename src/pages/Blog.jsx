import { useLoaderData } from "react-router-dom";
// utils func
import fetchAllBlogPostsFromFirebase from "../utils/fetchAllBlogPostsFromFirebase.js";
// components
import PageLocation from "../components/PageLocation.jsx"
import NoDataAvailableMessage from "../components/NoDataAvailableMessage.jsx";
import BlogPostsContainer from "../components/blogPage/BlogPostsContainer.jsx";


// LOADER
export const loader = async () => {
  const allBlogPosts = await fetchAllBlogPostsFromFirebase()

  return allBlogPosts
}

const Blog = () => {
  const allBlogPosts = useLoaderData()

  return (
    <div className="blog-page">
      {/* page location */}
      <PageLocation />

      <div className="container">

        {!allBlogPosts || allBlogPosts.length == 0 ? (
          <NoDataAvailableMessage text='Blog post-ova' />
        ) : (
          <BlogPostsContainer />
        )}
      </div>
    </div>
  )
}

export default Blog
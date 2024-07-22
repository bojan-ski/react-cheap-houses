import { useLoaderData } from "react-router-dom";
// utils func
import fetchAllBlogPostsFromFirebase from "../utils/fetchAllBlogPostsFromFirebase.js";
// components
import PageLocation from "../components/PageLocation.jsx"
import BlogPostsCard from "../components/blogPage/BlogPostsCard.jsx";


// LOADER
export const loader = async () => {
  const allBlogPosts = await fetchAllBlogPostsFromFirebase()

  return allBlogPosts
}

const Blog = () => {
  const allBlogPosts = useLoaderData()
  // console.log(allBlogPosts);

  return (
    <div className="blog-page">
      {/* page location */}
      <PageLocation />


      <div className="container">

        <section className="text-center mb-5">
          <h1 className="fw-bold mb-3">
            Blog
          </h1>
        </section>

        <section>
          <div className="row">
            {allBlogPosts.map(blogPost => {
              return <BlogPostsCard key={blogPost.id} blogPost={blogPost}/>              
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Blog
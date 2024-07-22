import { useLoaderData } from "react-router-dom";
// utils func
import fetchAllBlogPostsFromFirebase from "../utils/fetchAllBlogPostsFromFirebase.js";
// components
import PageLocation from "../components/PageLocation.jsx"
import NoDataAvailableMessage from "../components/NoDataAvailableMessage.jsx";

import BlogPostsCard from "../components/blogPage/BlogPostsCard.jsx";



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

        {allBlogPosts || allBlogPosts.length == 0 ? (
          <NoDataAvailableMessage text='Blog post-ova' />
          // <NoPostedBlogPostsMessage />
        ) : (
          <>
            <section className="text-center mb-5">
              <h1 className="fw-bold">
                Blog
              </h1>
            </section>

            <section className="pb-5">
              <div className="row">
                {allBlogPosts.map(blogPost => {
                  return <BlogPostsCard key={blogPost.id} blogPost={blogPost} />
                })}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  )
}

export default Blog
import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"
// context
import { useGlobalContext } from "../../context.jsx"
// component
import BlogPostsCard from "./BlogPostsCard.jsx"
import Pagination from "../Pagination.jsx"
import AllBlogPostsList from "./AllBlogPostsList.jsx"


const BlogPostsContainer = () => {
    const allBlogPosts = useLoaderData()

    // const [blogPostsList, setBlogPostsList] = useState(allBlogPosts)

    // const { displayedListingsList, setDisplayedListingsList } = useGlobalContext()

    const [blogPostsList, setBlogPostsList] = useState({
        totalListOfPostedListings: null,
        displayedListOfPostedListings: null
    })

    // useEffect(() => {
    //     setBlogPostsList({
    //         totalListOfBlogPosts: allBlogPosts,
    //         displayedListOfBlogPosts: allBlogPosts.length >= 10 ? allBlogPosts.slice(0, 9) : allBlogPosts
    //     })

    //     setDisplayedListingsList({
    //         totalListOfPostedListings: blogPostsList,
    //         displayedListOfPostedListings: blogPostsList.length >= 10 ? blogPostsList.slice(0, 9) : blogPostsList
    //     })
    // }, [])

    useEffect(() => {
        setBlogPostsList({
            totalListOfPostedListings: allBlogPosts,
            displayedListOfPostedListings: allBlogPosts?.length >= 10 ? allBlogPosts.slice(0, 9) : allBlogPosts
        })
    }, [])

    // Search function
    const handleSearch = e => {
        const searchTerm = e.target.value.toLowerCase()

        const searchResults = allBlogPosts.filter(blogPost => blogPost.data.blogTitle.toLowerCase().includes(searchTerm))

        setBlogPostsList({
            totalListOfBlogPosts: searchResults,
            displayedListOfBlogPosts: searchResults.length >= 10 ? searchResults.slice(0, 9) : searchResults
        })

        // setDisplayedListingsList({
        //     totalListOfPostedListings: searchResults,
        //     displayedListOfPostedListings: searchResults.length >= 10 ? searchResults.slice(0, 9) : searchResults
        // })
    }

    // console.log(blogPostsList.displayedListOfBlogPosts);
    // console.log(displayedListingsList);

    return (
        <>
            <section className="mb-5">
                <h1 className="fw-bold text-center">
                    Blog
                </h1>
            </section>

            <section className="pb-5">
                <div className="mb-4">
                    <input type="text" className="form-control" onChange={handleSearch} placeholder="Unesite naziv Blog-a" />
                </div>

                <AllBlogPostsList listOfBlogPosts={blogPostsList.displayedListOfPostedListings}/>

                {/* <div className="row">
                    {displayedListingsList.displayedListOfPostedListings?.map(blogPost => {
                        return <BlogPostsCard key={blogPost.id} blogPost={blogPost} />
                    })}

                    {blogPostsList.displayedListOfBlogPosts !== null && (
                        blogPostsList?.displayedListOfBlogPosts?.map(blogPost => {
                            return <BlogPostsCard key={blogPost.id} blogPost={blogPost} />
                        })
                    )}
                </div> */}
            </section>

            {/* Pagination */}
            {(blogPostsList.totalListOfPostedListings && blogPostsList.totalListOfPostedListings.length >= 10) && (
                <Pagination allPostedListingsData={allBlogPosts} setDisplayedListingsList={setBlogPostsList} />
            )}
        </>
    )
}

export default BlogPostsContainer
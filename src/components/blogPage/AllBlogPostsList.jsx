import BlogPostsCard from "./BlogPostsCard";

const AllBlogPostsList = ({listOfBlogPosts}) => {
    return (
        <div className='row'>
            {(listOfBlogPosts !== null && listOfBlogPosts.length > 0) && (
                listOfBlogPosts?.map(blogPost => {
                    // console.log(blogPost);
                    return <BlogPostsCard key={blogPost.id} blogPost={blogPost} />
                })
            )}
        </div>
    )
}

export default AllBlogPostsList
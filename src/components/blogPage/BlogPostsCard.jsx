import { Link } from "react-router-dom";

const BlogPostsCard = ({ blogPost }) => {
    const { id, data } = blogPost

    return (
        <div className="col-6 col-md-4">
            <div className="blog-post-card bg-white rounded-4 p-4">
                
                <div className="blog-post-card-main border-bottom pb-3 mb-3">
                    <h3 className="text-center">
                        {data.blogTitle}
                    </h3>
                    <p className="mb-0 fw-bold">
                        {data.blogContent.slice(0, 300)} ...
                    </p>
                </div>

                <div className="blog-post-card-footer">
                    <Link to={`/blog/${id}`} className="btn bg-orange-hover text-white fw-bold py-2 px-4">
                        Pročitaj više
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogPostsCard
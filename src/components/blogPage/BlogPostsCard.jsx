import { Link } from "react-router-dom";

const BlogPostsCard = ({ blogPost }) => {
    const { id, data } = blogPost

    return (
        <div className="col-6 col-md-4">
            <div className="blog-post-card rounded-4 p-3">
                <div className="blog-post-card-main border-bottom pb-2 mb-3">
                    <h3 className="text-center">
                        {data.blogTitle}
                    </h3>
                    <h6>
                        {data.blogContent.slice(0, 200)}...
                    </h6>
                </div>

                <div className="blog-post-card-footer">
                    <Link to={`/blog/${id}`} className="btn bg-orange-hover text-white fw-bold px-4">
                        Pročitaj više
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogPostsCard
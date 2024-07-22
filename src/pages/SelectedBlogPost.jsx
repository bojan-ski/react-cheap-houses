import { useLoaderData, Link } from "react-router-dom";
// utils func
import fetchSelectedBlogPostFromFirebase from "../utils/fetchSelectedBlogPostFromFirebase.js";

export const loader = async ({ params }) => {
    const selectedBlogPost = await fetchSelectedBlogPostFromFirebase(params.id)

    return selectedBlogPost
}

const SelectedBlogPost = () => {
    const selectedBlogPost = useLoaderData()
    const { blogTitle, blogContent } = selectedBlogPost

    return (
        <div className="selected-blog-post-page py-5">
            <div className="container py-3 px-5 rounded-4 bg-white">

                <div className="blog-post-details">
                    <section className="mt-5 mb-4">
                        <Link to='/blog' className="btn bg-orange-hover text-white fw-bold px-4">
                            Nazad
                        </Link>
                    </section>

                    <section>
                        <h2 className="text-center mb-4">
                            {blogTitle}
                        </h2>
                        <p className="fw-bold">
                            {blogContent}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default SelectedBlogPost
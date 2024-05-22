import { Link } from "react-router-dom";

const PageLocation = () => {
    const currentPage = window.location.pathname.slice(1)
    // console.log(currentPage);

    return (
        <div className="container">
            <section className="page-url py-4 mb-4 border-bottom">
                <Link to='/' className="home-link fw-bold">
                    Početna
                </Link>
                <span className="text-capitalize">
                    {currentPage}
                </span>
            </section>
        </div>
    )
}

export default PageLocation
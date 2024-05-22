import { Link } from "react-router-dom";

const PageLocation = () => {
    const currentPage = window.location.pathname.slice(1)
    // console.log(currentPage);

    return (
        <section className="page-location">
            <div className="container">
                <div className="border-bottom py-4 mb-4">
                    <Link to='/' className="home-link fw-bold">
                        Početna
                    </Link>
                    <span className="text-capitalize">
                        {currentPage}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default PageLocation
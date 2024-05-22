import { Link } from "react-router-dom"
import { FaArrowRight, FaRegFolderOpen } from "react-icons/fa"

const ExpertAdviceCard = ({ cardImg, cardMonth }) => {
    // console.log(cardImg, cardMonth);

    return (
        <div className="col-12 col-lg-4">
            <div className="box-content">
                
                {/* image */}
                <div className="box-image-content mb-5 position-relative overflow-hidden">
                    <Link to="/blog">
                        <img src={cardImg} alt="house-img-one" className="box-image img-fluid" />

                        <div className="box-image-text fw-bold position-absolute d-flex align-items-center justify-content-center">
                            <p className="text-muted mb-0 me-3">
                                Jun
                            </p>
                            <FaRegFolderOpen size={15} className="text-muted me-1" />
                            <span>
                                Housing
                            </span>
                        </div>
                    </Link>
                </div>

                {/* link */}
                <div className="box-link">
                    <Link to="/blog" className="fw-bold d-flex align-items-center justify-content-center">
                        <span className="me-2">
                            {cardMonth}
                        </span>
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ExpertAdviceCard
import { Link } from "react-router-dom"
// React Icons
import { LiaTapeSolid } from 'react-icons/lia'
import { MdConfirmationNumber, MdOutlineBedroomChild } from 'react-icons/md'
import { PiBathtubLight } from 'react-icons/pi'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const PostedListingGridViewCard = ({ postedListing, deleteUserPostedListing }) => {
    // console.log(postedListing);
    // console.log(postedListing.data);

    const { listingType, propertyType, propertyName, numRooms, numBathrooms, lotNumber, squareFootage, propertyLocation, propertyDistrict, imageUrls, askingPrice, listingCreated } = postedListing.data

    return (
        <div className="grid-card col-12 col-md-6 col-lg-4 p-1 text-center text-lg-start">

            <div className="grid-card-details">

                <h4 className="text-orange text-center fw-bold mb-3">
                    {listingType === 'izdajem' ? "IZDAJE SE" : 'NA PRODAJU'}
                </h4>

                <div className="grid-card-details-images d-flex mb-3">
                    <Swiper
                        slidesPerView={1}
                        // loop={true}
                        modules={[Pagination, Navigation]}
                        navigation={true}
                        pagination={{
                            dynamicBullets: true,
                        }}
                    >
                        {imageUrls?.map((image, idx) => {
                            return (
                                <SwiperSlide key={idx} className="text-center grid-card-details-image">
                                    <img src={image} alt="slike-imovine" className="rounded-4" />
                                    {/* <div
                                    style={{
                                        background: `url(${imageUrls[idx]}) center no-repeat`,
                                        backgroundSize: 'cover',
                                        
                                    }}
                                    className='grid-card-details-image rounded-4'
                                >
                                </div> */}
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

                <div className="grid-card-details-header">
                    <h5 className="capitalize">
                        {propertyType}
                    </h5>
                    <h5 className="capitalize">
                        {propertyName}
                    </h5>
                </div>

                {/* grid-card-details-info row border-bottom pb-3 mb-3 */}

                <div className={listingType === 'izdajem' ? 'grid-card-details-info row border-bottom pb-3 mb-3' : 'grid-card-details-info row border-bottom pb-4 mb-4 pb-lg-3 mb-lg-3' }>
                    <div className="col-6 col-lg-12">
                        <h6 className="text-muted">
                            Mesto:<span className="ms-1 text-dark capitalize">{propertyLocation}</span>
                        </h6>
                        <h6 className="text-muted">
                            Okrug:<span className="ms-1 text-dark capitalize">{propertyDistrict}</span>
                        </h6>
                        <h6 className="text-orange fw-bold">
                            {askingPrice} EUR {listingType === 'izdajem' ? 'mesečno' : ''}
                        </h6>
                    </div>
                    <div className="col-6 col-lg-12">
                        {propertyType === 'plac' ? (
                            <>
                                <p className="mb-0" >
                                    <MdConfirmationNumber className='me-2' />
                                    Broj parcele:<span className="ms-1 fw-bold text-dark">{lotNumber}</span>
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="mb-0 d-flex align-items-center" >
                                    <MdOutlineBedroomChild className='me-2' />
                                    Sobe:<span className="ms-1 fw-bold text-dark">{numRooms}</span>
                                </p>
                                <p className="mb-0 d-flex align-items-center">
                                    <PiBathtubLight className='me-2' />
                                    Kupatila:<span className="ms-1 fw-bold text-dark">{numBathrooms}</span>
                                </p>
                            </>
                        )}
                        <p className={propertyType === 'plac' ? "d-flex align-items-center mb-4" : "d-flex align-items-center mb-0"}>
                            <LiaTapeSolid className='me-2' />
                            Prostor:
                            <span className="ms-1 fw-bold text-dark">
                                {squareFootage}
                            </span>
                            <span className="ms-1 fw-bold text-dark">
                                {propertyType == 'plac' ? 'ari' : 'kv.'}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    {deleteUserPostedListing ? (
                        <>
                            <Link to={`/nalog/${postedListing.id}`} className="btn bg-orange-hover text-white fw-bold px-4">
                                Detailji
                            </Link>
                            <button type="button" className="btn btn-danger fw-bold" onClick={() => deleteUserPostedListing(postedListing.id)}>
                                Obriši oglas
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to={`/oglasi/${postedListing.id}`} className="btn bg-orange-hover text-white fw-bold px-4">
                                Detailji
                            </Link>
                            <p className="fw-bold mb-0">
                                {listingCreated.split('-')[1]}
                            </p>
                        </>
                    )}
                </div>

            </div>

        </div>
    )
}

export default PostedListingGridViewCard
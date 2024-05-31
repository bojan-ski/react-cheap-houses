import { Link } from "react-router-dom"
// React Icons
import { LiaTapeSolid } from 'react-icons/lia'
import { MdOutlineBedroomChild } from 'react-icons/md'
import { PiBathtubLight } from 'react-icons/pi'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const PostedOffersGridViewCard = ({ postedOffer, deleteUserPostedListing }) => {
    // console.log(postedOffer);
    // console.log(postedOffer.data.timestamp);

    const { offerType, propertyType, propertyName, numRooms, numBathrooms, squareFootage, propertyLocation, propertyDistrict, imageUrls, askingPrice } = postedOffer.data

    return (
        <div className="grid-card-posted-offer-details col-12 col-lg-4 p-3 border border-1 rounded-4 text-center text-lg-start">
            <h4 className="text-orange text-center fw-bold mb-3">
                {offerType === 'izdajem' ? "IZDAJE SE" : 'NA PRODAJU'}
            </h4>

            <div className="grid-card-posted-offer-images d-flex mb-3">
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    navigation={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                >
                    {imageUrls?.map((image, idx) => {
                        return (
                            <SwiperSlide key={idx} className="text-center">
                                <img src={image} alt="slike-imovine" className="rounded-4 img-fluid" />
                                {/* <div
                                    style={{
                                        background: `url(${imageUrls[idx]}) center no-repeat`,
                                        backgroundSize: 'cover',
                                        
                                    }}
                                    className='grid-card-posted-offer-image rounded-4'
                                >
                                </div> */}
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            <h5 className="capitalize">
                {propertyType}, {propertyName}
            </h5>

            <div className="grid-card-posted-offer-info row border-bottom pb-3 mb-3">
                <div className="col-6 col-lg-12 grid-card-posted-offer-info-1">
                    <h6 className="text-muted">
                        Mesto:<span className="ms-1 text-dark capitalize">{propertyLocation}</span>
                    </h6>
                    <h6 className="text-muted">
                        Okrug:<span className="ms-1 text-dark capitalize">{propertyDistrict}</span>
                    </h6>
                    <h6 className="text-orange fw-bold">
                        {askingPrice} EUR {offerType === 'izdajem' ? 'mesečno' : ''}
                    </h6>
                </div>
                <div className="col-6 col-lg-12 grid-card-posted-offer-info-2">
                    <p className="mb-0" >
                        <MdOutlineBedroomChild className='me-2' />
                        Sobe:<span className="ms-1 fw-bold text-dark">{numRooms}</span>
                    </p>
                    <p className="mb-0">
                        <PiBathtubLight className='me-2' />
                        Kupatila:<span className="ms-1 fw-bold text-dark">{numBathrooms}</span>
                    </p>
                    <p className="mb-0">
                        <LiaTapeSolid className='me-2' />
                        Kvadratura:<span className="ms-1 fw-bold text-dark"> {squareFootage} m²</span>
                    </p>
                </div>
            </div>

            <div className="d-flex align-items-center justify-content-between">
                {deleteUserPostedListing ? (
                    <>
                        <Link to={`/moj-nalog/${postedOffer.id}`} className="btn bg-orange-hover text-white fw-bold px-4">
                            Detailji
                        </Link>
                        <button type="button" className="btn btn-danger fw-bold" onClick={()=>deleteUserPostedListing(postedOffer.id)}>
                            Obriši oglas
                        </button>
                    </>
                ) : (
                    <>
                        <Link to={`/oglasi/${postedOffer.id}`} className="btn bg-orange-hover text-white fw-bold px-4">
                            Detailji
                        </Link>
                        <p className="fw-bold mb-0">
                            {postedOffer.data.timestamp.seconds}
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}

export default PostedOffersGridViewCard
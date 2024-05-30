import { useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom";
import fetchSelectedOfferDetailsFromFirebase from "../utils/fetchSelectedOfferDetailsFromFirebase";
// React Icons
import { LiaTapeSolid } from 'react-icons/lia'
import { MdOutlineBedroomChild } from 'react-icons/md'
import { PiBathtubLight } from 'react-icons/pi'
// components
import ImgsGallery from "../components/selectedOfferPage/ImgsGallery";
import SelectedImageModal from "../modals/SelectedImageModal";

export const loader = async ({ params }) => {
    // console.log(params.id);
    const selectedOfferDetails = await fetchSelectedOfferDetailsFromFirebase(params.id)

    return selectedOfferDetails
}

const SelectedOffer = () => {
    const selectedOfferDetails = useLoaderData()
    // console.log(selectedOfferDetails);  

    const { offerType, propertyType, propertyName, numRooms, numBathrooms, squareFootage, propertyAddress, propertyLocation, propertyDistrict, imageUrls, askingPrice, contactPhoneNumber, contactEmailAddress } = selectedOfferDetails
    const [imageSrc, setImageSrc] = useState('')    

    const urlBackPath = window.location.pathname.split('/').includes('oglasi')

    return (
        <>
            <div className="selected-posted-offer-page my-5">
                <div className="container px-5 rounded-4 border bg-white">

                    <section className="d-flex align-items-center justify-content-between my-5">
                        <Link to={urlBackPath ? '/oglasi' : '/moj-nalog'} className="btn bg-orange-hover text-white fw-bold px-4">
                            Nazad
                        </Link>
                        <h2 className="text-orange fw-bold">
                            {offerType === 'izdajem' ? "IZDAJE SE" : 'NA PRODAJU'}
                        </h2>
                    </section>

                    <section className="mb-5 text-center">
                        <h4 className="text-muted fw-bold capitalize">
                            {propertyType}
                        </h4>
                        <h2 className="fw-bold capitalize mb-3">
                            {propertyName}
                        </h2>
                        <h4 className="text-orange fw-bold">
                            {askingPrice} EUR {offerType === 'izdajem' ? 'mesečno' : ''}
                        </h4>
                    </section>

                    <section className="posted-offer-details">
                        <div className="row">

                            {/* row item 1 */}
                            <div className="col-12 col-md-6 mb-4">
                                <p className='mb-0 fw-bold text-muted'>
                                    Adresa:<span className='ms-1 text-dark capitalize'>{propertyAddress}</span>
                                </p>
                                <p className='mb-0 fw-bold text-muted'>
                                    Mesto:<span className='ms-1 text-dark capitalize'>{propertyLocation}</span>
                                </p>
                                <p className='mb-0 fw-bold text-muted'>
                                    Okrug:<span className='ms-1 text-dark capitalize'>{propertyDistrict}</span>
                                </p>
                            </div>

                            {/* row item 2 */}
                            <div className="col-12 col-md-6 mb-4">
                                <p className="mb-0 fw-bold text-muted d-flex align-items-center" >
                                    <MdOutlineBedroomChild className='me-2' />
                                    Sobe:<span className="ms-1 fw-bold text-dark">{numRooms}</span>
                                </p>
                                <p className="mb-0 fw-bold text-muted d-flex align-items-center">
                                    <PiBathtubLight className='me-2' />
                                    Kupatila:<span className="ms-1 fw-bold text-dark">{numBathrooms}</span>
                                </p>
                                <p className="mb-0 fw-bold text-muted d-flex align-items-center">
                                    <LiaTapeSolid className='me-2' />
                                    Kvadratura:<span className="ms-1 fw-bold text-dark"> {squareFootage} m²</span>
                                </p>
                            </div>

                            {/* row item 3 */}
                            <div className="col-12 pb-4 mb-4 border-bottom">
                                <h4 className="mb-3">
                                    Kontakt informacije:
                                </h4>
                                <p className='mb-0 fw-bold text-muted'>
                                    Email:<span className='ms-1 text-dark'>{contactEmailAddress}</span>
                                </p>
                                <p className='mb-0 fw-bold text-muted'>
                                    Telefon:<span className='ms-1 text-dark'>{contactPhoneNumber}</span>
                                </p>
                            </div>

                            {/* row item 4 */}
                            <div className="col-12 mb-4">
                                <h6 className="text-center text-muted mb-3">
                                    Kliknite na sliku radi bolje preglednosti
                                </h6>

                                {/* ImgsGallery - component */}
                                <ImgsGallery imageUrls={imageUrls} setImageSrc={setImageSrc}/>

                                {/* SelectedImageModal - modal */}
                                <SelectedImageModal imageSrc={imageSrc}/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default SelectedOffer
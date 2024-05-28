import { Link } from "react-router-dom"
// React Icons
import { LiaTapeSolid } from 'react-icons/lia'
import { MdOutlineBedroomChild } from 'react-icons/md'
import { PiBathtubLight } from 'react-icons/pi'

const PostedOffersGridViewCard = (postedOffer) => {
    // console.log(postedOffer);
    const { offerType, propertyType, propertyName, numRooms, numBathrooms, squareFootage, propertyAddress, propertyLocation, propertyDistrict, imageUrls, askingPrice, contactPhoneNumber, contactEmailAddress } = postedOffer.data

    return (
        <div className="grid-card-posted-offer-details col-12 col-lg-4 p-3 border border-1 rounded-4 text-center text-lg-start">
            <h4 className="text-orange text-center fw-bold mb-3">
                {offerType === 'izdajem' ? "IZDAJE SE" : 'NA PRODAJU'}
            </h4>

            <div className="grid-card-posted-offer-images mb-3">
                <img src={imageUrls[1]} alt="slike-imovine" className="rounded-4" />
            </div>

            <h5 className="capitalize">
                {propertyType}, {propertyName}
            </h5>

            <div className="grid-card-posted-offer-info row border-bottom pb-3 mb-3">
                <div className="col-6 col-lg-12 grid-card-posted-offer-info-1">
                    <h6 className="text-muted">
                        Mesto: <span className="text-dark capitalize">{propertyLocation}</span>
                    </h6>
                    <h6 className="text-muted">
                        Okrug: <span className="text-dark capitalize">{propertyDistrict}</span>
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

            <Link to={`/oglasi/${postedOffer.id}`} className="btn bg-orange-hover text-white fw-bold px-4">
                Detailji
            </Link>
        </div>
    )
}

export default PostedOffersGridViewCard
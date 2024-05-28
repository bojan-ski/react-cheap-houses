import { Link } from 'react-router-dom'
// React Icons
import { LiaTapeSolid } from 'react-icons/lia'
import { MdOutlineBedroomChild } from 'react-icons/md'
import { PiBathtubLight } from 'react-icons/pi'

const PostedOffersListViewCard = ( postedOffer ) => {

    const { offerType, propertyType, propertyName, numRooms, numBathrooms, squareFootage, propertyAddress, propertyLocation, propertyDistrict, imageUrls, askingPrice, contactPhoneNumber, contactEmailAddress } = postedOffer.data

    return (
        <div className="list-card-posted-offer-details p-3 border border-1 rounded-4 d-flex flex-column flex-md-row align-items-center justify-content-around text-center text-md-start">
            <h4 className="text-orange fw-bold mb-2 mb-md-0">
                {offerType === 'izdajem' ? "IZDAJE SE" : 'NA PRODAJU'}
            </h4>

            <div className="list-card-posted-offer-image d-none d-lg-block">
                <img src={imageUrls[0]} alt="slike-imovine" className="rounded-4" />
            </div>

            <div className="list-card-posted-offer-info-1 mb-3 mb-md-0">
                <h6 className="fw-bold text-orange">
                    {askingPrice} EUR {offerType === 'izdajem' ? 'mesečno' : ''}
                </h6>
                <h6 className='capitalize'>
                    {propertyType}
                </h6>
                <h6 className='capitalize mb-0'>
                    {propertyName}
                </h6>
            </div>
            {/* <div className="list-card-posted-offer-info-2 mb-3 mb-md-0">
              <p className='mb-0 fw-bold'>
                Adresa: <span className='text-dark capitalize'>{propertyAddress}</span>
              </p>
              <p className='mb-0 fw-bold'>
                Mesto: <span className='text-dark capitalize'>{propertyLocation}</span>
              </p>
              <p className='mb-0 fw-bold'>
                Okrug: <span className='text-dark capitalize'>{propertyDistrict}</span>
              </p>
            </div> */}
            <div className="list-card-posted-offer-info-3 mb-3 mb-md-0">
                <p className="mb-0">
                    <MdOutlineBedroomChild className='me-2' />
                    Sobe: {numRooms}
                </p>
                <p className="mb-0">
                    <PiBathtubLight className='me-2' />
                    Kupatila: {numBathrooms}
                </p>
                <p className="mb-0 d-flex align-items-center">
                    <LiaTapeSolid className='me-2' />
                    Kvadratura: {squareFootage} m²
                </p>
            </div>

            <Link to={`/oglasi/${postedOffer.id}`} className="btn bg-orange-hover text-white fw-bold px-4">
                Detailji
            </Link>
        </div>
    )
}

export default PostedOffersListViewCard
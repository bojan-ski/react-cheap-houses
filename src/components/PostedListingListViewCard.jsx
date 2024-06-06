import { Link } from 'react-router-dom'
// React Icons
import { LiaTapeSolid } from 'react-icons/lia'
import { MdConfirmationNumber, MdOutlineBedroomChild } from 'react-icons/md'
import { PiBathtubLight } from 'react-icons/pi'

const PostedListingListViewCard = (postedListing) => {
    const { offerType, propertyType, propertyName, numRooms, numBathrooms, lotNumber, squareFootage, propertyAddress, propertyLocation, propertyDistrict, imageUrls, askingPrice, contactPhoneNumber, contactEmailAddress } = postedListing.data

    return (
        <div className="col-12 list-card p-3 border border-1 rounded-4 d-flex flex-column flex-md-row align-items-center justify-content-around text-center text-md-start mb-3">
            {offerType === 'izdajem' ? (
                <h4 className="text-orange fw-bold mb-2 mb-md-0 mx-0 mx-md-3">
                    IZDAJE SE
                </h4>
            ) : (
                <h4 className="text-orange fw-bold mb-2 mb-md-0">
                    NA PRODAJU
                </h4>
            )}
            <div className="list-card-image d-none d-lg-block">
                <img src={imageUrls[0]} alt="slike-imovine" className="rounded-4" />
            </div>

            <div className="mb-3 mb-md-0">
                <h6 className="fw-bold text-orange">
                    {askingPrice} EUR {offerType === 'izdajem' ? 'mes.' : ''}
                </h6>
                <h6 className='capitalize'>
                    {propertyType}
                </h6>
                <h6 className='capitalize mb-0'>
                    {propertyName}
                </h6>
            </div>
            {/* <div className="mb-3 mb-md-0">
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
            <div className="mb-3 mb-md-0">
                {propertyType === 'plac' ? (
                    <>
                        <p className="mb-0 d-flex align-items-center" >
                            <MdConfirmationNumber className='me-2 text-muted' />
                            Br. parcele:
                        </p>
                        <p className='mb-0 fw-bold text-dark'>
                            {lotNumber}
                        </p>
                    </>
                ) : (
                    <>
                        <p className="mb-0 d-flex align-items-center">
                            <MdOutlineBedroomChild className='me-2' />
                            Sobe: {numRooms}
                        </p>
                        <p className="mb-0 d-flex align-items-center">
                            <PiBathtubLight className='me-2' />
                            Kupatila: {numBathrooms}
                        </p>
                    </>
                )}
                <p className="mb-0 d-flex align-items-center">
                    <LiaTapeSolid className='me-2' />
                    Prostor: {squareFootage}
                </p>
            </div>

            <Link to={`/oglasi/${postedListing.id}`} className="btn bg-orange-hover text-white fw-bold px-4">
                Detailji
            </Link>
        </div>
    )
}

export default PostedListingListViewCard
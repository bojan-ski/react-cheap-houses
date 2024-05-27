import { Link } from "react-router-dom"

const PostedOffersListCard = ( postedOffer ) => {
    // console.log(postedOffer);
    const { offerType, propertyType, propertyName, numRooms, numBathrooms, squareFootage, propertyAddress, propertyLocation, propertyDistrict, imageUrls, askingPrice, contactPhoneNumber, contactEmailAddress } = postedOffer.data

    return (
        <div className="col-12 col-md-4 p-3 border border-1 rounded-4">
            <h3 className="text-center">
                {offerType}
            </h3>

            <div className="card-posted-offer-images mb-2">
                <img src={imageUrls[0]} alt="slike-imovine" className="rounded-4 img-fluid" />
            </div>

            <div className="card-posted-offer-details mb-2">
                <h5>
                    {propertyType} - {propertyName}
                </h5>
                <h6>
                    Mesto: {propertyLocation}
                </h6>
                <h6>
                    Okrug: {propertyDistrict}
                </h6>
                <h6 className="fw-bold">
                    Cena: {askingPrice} EUR {offerType === 'izdajem' ? 'mesečno' : ''}
                </h6>
            </div>
            <div className="card-posted-offer-property-details border-bottom pb-3 mb-3">
                <p className="mb-0">
                    Sobe: {numRooms}
                </p>
                <p className="mb-0">
                    Kupatila: {numBathrooms}
                </p>
                <p className="mb-0">
                    Kvadratura: {squareFootage}
                </p>
            </div>

            <Link to={`/oglasi/${postedOffer.id}`} className="btn btn-primary">
                Detailji
            </Link>
        </div>
    )
}

export default PostedOffersListCard
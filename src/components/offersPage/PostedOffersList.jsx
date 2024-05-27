import PostedOffersListCard from "./PostedOffersListCard"

const PostedOffersList = ({ postedOffers }) => {
    // console.log(postedOffers);

    return (
        <section className="posted-offers-list mb-5">
            <div className="row">
                {postedOffers.map(postedOffer => {
                    // console.log(postedOffer);
                    
                    // const { offerType, propertyType, propertyName, numRooms, numBathrooms, squareFootage, propertyAddress, propertyLocation, propertyDistrict, imageUrls, askingPrice, contactPhoneNumber, contactEmailAddress } = data

                    return <PostedOffersListCard key={postedOffer.id} {...postedOffer}/>

                    // return <div key={id} className="bg-info col-12 col-md-4 p-3 rounded-4">
                    //     <h3>
                    //         {offerType}
                    //     </h3>

                    //     <div className="offer-images">
                    //         <img src={imageUrls[0]} alt="slike-imovine" className="rounded-4 img-fluid"/>
                    //     </div>

                    //     <div className="offer-details">
                    //         <h5>
                    //             {propertyType} - {propertyName}
                    //         </h5>
                    //         <h6>
                    //             Mesto: {propertyLocation}
                    //         </h6>
                    //         <h6>
                    //             Okrug: {propertyDistrict}
                    //         </h6>
                    //         <h6 className="fw-bold">
                    //             Cena: {askingPrice} EUR {offerType === 'izdajem' ? 'mesečno' : ''}
                    //         </h6>
                    //     </div>
                    //     <div className="offer-property-details">
                    //         <p>
                    //             Sobe: {numRooms}
                    //         </p>
                    //         <p>
                    //             Kupatila: {numBathrooms}
                    //         </p>
                    //         <p>
                    //             Kvadratura: {squareFootage}
                    //         </p>
                    //     </div>
                    // </div>
                })}
            </div>
        </section>
    )
}

export default PostedOffersList
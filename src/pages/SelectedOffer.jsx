import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";
import fetchSelectedOfferDetailsFromFirebase from "../utils/fetchSelectedOfferDetailsFromFirebase";

export const loader = async ({ params }) => {
    // console.log(params.id);
    const selectedOfferDetails = await fetchSelectedOfferDetailsFromFirebase(params.id)

    return selectedOfferDetails
}

const SelectedOffer = () => {
    const selectedOfferDetails = useLoaderData()
    // console.log(selectedOfferDetails);  

    const { offerType, propertyType, propertyName, numRooms, numBathrooms, squareFootage, propertyAddress, propertyLocation, propertyDistrict, imageUrls, askingPrice, contactPhoneNumber, contactEmailAddress } = selectedOfferDetails

    return (
        <>
            <div className="posted-offer container my-5">
                <Link to='/oglasi' className="btn btn-success px-4">
                    Nazad
                </Link>
                <section className="my-2">
                    <div>
                        <h2>
                            {offerType}
                        </h2>
                        <h3>
                            {propertyType} - {propertyName}
                        </h3>
                    </div>
                </section>

                <section className="posted-offer-details">
                    <div className="row">

                        {/* row item 1 */}
                        <div className="col-12 col-md-6 mb-4">
                            {/* <img src={} alt={} className="img-fluid rounded border border-secondary" /> */}
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-md-6 mb-4">
                            <p className="mb-1">

                            </p>
                            <p className="mb-1">

                            </p>
                            <p className="mb-1">

                            </p>
                        </div>

                        {/* row item 3 */}
                        <div className="col-12">
                            <h5 className="text-center">

                            </h5>
                            <p>
                                { }
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SelectedOffer
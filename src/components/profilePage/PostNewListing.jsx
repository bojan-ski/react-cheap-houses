import { useState } from "react";
import { useNavigate } from "react-router-dom";
// firebase/firestore funcs
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from '../../firebase.config'
// helper func
import storeUploadedImage from "../../utils/storeUploadedImage";
// components
import Spinner from "../Spinner"
// imported data
import districts from "../../data/districts";

const PostNewListing = ({ userID, showPostNewListingForm }) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        userRef: userID,
        offerType: 'prodajem',
        propertyType: 'kuca',
        propertyName: '',
        lotNumber: '',
        numRooms: '',
        numBathrooms: '',
        squareFootage: '',
        propertyAddress: '',
        propertyLocation: '',
        propertyDistrict: '',
        propertyImages: [],
        askingPrice: '',
        contactPhoneNumber: '',
        contactEmailAddress: '',
    })

    const { offerType, propertyType, propertyName, lotNumber, numRooms, numBathrooms, squareFootage, propertyAddress, propertyLocation, propertyDistrict, propertyImages, askingPrice, contactPhoneNumber, contactEmailAddress } = formData

    const onMutate = (e) => {
        // images - files
        if (e.target.files) {
            setFormData(prevState => ({
                ...prevState,
                propertyImages: e.target.files
            }))
        }

        // text or numbers
        if (!e.target.files) {
            setFormData(prevState => ({
                ...prevState,
                [e.target.id]: e.target.value
            }))
        }
    }

    const handleCreateNewOfferSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true)

        if (propertyImages.length > 6) {
            setIsLoading(false)
            console.log('Preko 6 slika');
            return
        }

        const imageUrls = await Promise.all(
            [...propertyImages].map(uploadedImage => storeUploadedImage(uploadedImage))
        ).catch(() => {
            setIsLoading(false)
            console.log('greska prilikom upload images');
            return
        })

        const formDataCopy = {
            ...formData,
            imageUrls,
            timestamp: serverTimestamp()
        }

        delete formDataCopy.propertyImages

        const docRef = await addDoc(collection(db, 'listings'), formDataCopy)

        setIsLoading(false)

        // success message
        console.log('uspesno ste postavili/objavili novi oglas');

        // after the user has posted a new offer, the user is redirected to the Offers page
        navigate(`/oglasi`)
    }

    if (isLoading) return <Spinner />

    return (
        <section className={!showPostNewListingForm ? "create-new-offer hide my-5" : "create-new-offer my-5"} >
            <h2 className="text-center fw-bold mb-4">
                Postavi novi oglas
            </h2>

            <div className="new-offer-details">
                <form className="bg-info p-4 rounded-5" onSubmit={handleCreateNewOfferSubmit}>
                    <div className="row">

                        {/* row item 1 */}
                        <div className="col-12 col-md-6">

                            {/* offer type */}
                            <div className="mb-3">
                                <label className='form-label fw-bold'>
                                    Prodajem / Izdajem
                                </label>
                                <div className='offer-type-btns'>
                                    <button
                                        type='button'
                                        className={offerType === 'prodajem' ? 'form-btn-active' : 'form-btn'}
                                        id='offerType'
                                        value='prodajem'
                                        onClick={onMutate}
                                    >
                                        Prodajem
                                    </button>
                                    <button
                                        type='button'
                                        className={offerType === 'izdajem' ? 'form-btn-active' : 'form-btn'}
                                        id='offerType'
                                        value='izdajem'
                                        onClick={onMutate}
                                    >
                                        Izdajem
                                    </button>
                                </div>
                            </div>

                            {/* property type */}
                            <div className="mb-3">
                                <label className='form-label fw-bold'>
                                    Tip nekretnine
                                </label>
                                <div className='property-type-btns'>
                                    <button
                                        type='button'
                                        className={propertyType === 'kuca' ? 'form-btn-active' : 'form-btn'}
                                        id='propertyType'
                                        value='kuca'
                                        onClick={onMutate}
                                    >
                                        Kuca
                                    </button>
                                    <button
                                        type='button'
                                        className={propertyType === 'stan' ? 'form-btn-active' : 'form-btn'}
                                        id='propertyType'
                                        value='stan'
                                        onClick={onMutate}
                                    >
                                        Stan
                                    </button>
                                    <button
                                        type='button'
                                        className={propertyType === 'vikendica' ? 'form-btn-active' : 'form-btn'}
                                        id='propertyType'
                                        value='vikendica'
                                        onClick={onMutate}
                                    >
                                        Vikendica
                                    </button>
                                    <button
                                        type='button'
                                        className={propertyType === 'lokal' ? 'form-btn-active' : 'form-btn'}
                                        id='propertyType'
                                        value='lokal'
                                        onClick={onMutate}
                                    >
                                        Lokal
                                    </button>
                                    <button
                                        type='button'
                                        className={propertyType === 'plac' ? 'form-btn-active' : 'form-btn'}
                                        id='propertyType'
                                        value='plac'
                                        onClick={onMutate}
                                    >
                                        Plac
                                    </button>
                                </div>
                            </div>

                            {/* property name */}
                            <div className="mb-3">
                                <label className='form-label fw-bold'>
                                    Naziv imovine
                                </label>
                                <input
                                    className='form-control'
                                    type='text'
                                    id='propertyName'
                                    value={propertyName}
                                    onChange={onMutate}
                                    maxLength='50'
                                    minLength='8'
                                    placeholder="Porodična kuća, jednoiposoban stan ..."
                                    required
                                />
                            </div>

                            {propertyType === 'plac' ? (
                                <>
                                    {/* lot number */}
                                    <div className="mb-3">
                                        <label className='form-label fw-bold'>
                                            Broj parcele
                                        </label>
                                        <input
                                            className='form-control'
                                            type='number'
                                            id='lotNumber'
                                            value={lotNumber}
                                            onChange={onMutate}
                                            // min='10'
                                            // max='10000'
                                            placeholder="Broj parcele"
                                        />
                                    </div>

                                    {/* square footage */}
                                    <div className="mb-3">
                                        <label className='form-label fw-bold'>
                                            Prostor (ari)
                                        </label>
                                        <input
                                            className='form-control'
                                            type='number'
                                            id='squareFootage'
                                            value={squareFootage}
                                            onChange={onMutate}
                                            placeholder="Površina"
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* number of rooms */}
                                    <div className="mb-3">
                                        <label className='form-label fw-bold'>
                                            Ukupan broj soba
                                        </label>
                                        <input
                                            className='form-control'
                                            type='number'
                                            id='numRooms'
                                            value={numRooms}
                                            onChange={onMutate}
                                            min='1'
                                            max='15'
                                            placeholder="0"
                                        />
                                    </div>

                                    {/* number of bathrooms */}
                                    <div className="mb-3">
                                        <label className='form-label fw-bold'>
                                            Ukupan broj kupatila
                                        </label>
                                        <input
                                            className='form-control'
                                            type='number'
                                            id='numBathrooms'
                                            value={numBathrooms}
                                            onChange={onMutate}
                                            min='1'
                                            max='5'
                                            placeholder="0"
                                        />
                                    </div>

                                    {/* square footage */}
                                    <div className="mb-3">
                                        <label className='form-label fw-bold'>
                                            Prostor (metara kvadratnih)
                                        </label>
                                        <input
                                            className='form-control'
                                            type='number'
                                            id='squareFootage'
                                            value={squareFootage}
                                            onChange={onMutate}
                                            // min='10'
                                            // max='10000'
                                            placeholder="Kvadratura imovine"
                                        />
                                    </div>
                                </>
                            )}

                            {/* property address */}
                            <div className="mb-3">
                                <label className='form-label fw-bold'>
                                    Adresa
                                </label>
                                <textarea
                                    className='form-control'
                                    type='text'
                                    id='propertyAddress'
                                    value={propertyAddress}
                                    onChange={onMutate}
                                    placeholder="Adreasa na kojoj se nalazi imovina"
                                    required
                                />
                            </div>
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-md-6">
                            {/* property location */}
                            <div className="mb-3">
                                <label className='form-label fw-bold'>
                                    Lokacija
                                </label>
                                <textarea
                                    className='form-control'
                                    type='text'
                                    id='propertyLocation'
                                    value={propertyLocation}
                                    onChange={onMutate}
                                    placeholder="Naziv grada, sela..."
                                    required
                                />
                            </div>

                            {/* property district */}
                            <div className="mb-3">
                                <label className='form-label fw-bold'>
                                    Okrug
                                </label>
                                <select id="propertyDistrict" className="form-select" onChange={onMutate} >
                                    {districts.map((district, idx) => {
                                        return <option value={district} key={idx}>
                                            {district}
                                        </option>
                                    })}
                                </select>
                            </div>

                            {/* property images */}
                            <div className="mb-3">
                                <label className='form-label fw-bold'>
                                    Slike - do 5 slika, veličine do 2MB
                                </label>
                                <input
                                    className='form-control'
                                    type='file'
                                    id='propertyImages'
                                    onChange={onMutate}
                                    max='5'
                                    accept='.jpg,.png,.jpeg'
                                    multiple
                                // required
                                />
                            </div>

                            {/* asking price*/}
                            <div className="mb-3">
                                <label className='form-label fw-bold'>
                                    Cena
                                </label>
                                <div className='asking-price-info d-flex align-items-center'>
                                    <input
                                        className='form-control'
                                        type='number'
                                        id='askingPrice'
                                        value={askingPrice}
                                        onChange={onMutate}
                                        min='50'
                                        max='1000000'
                                        placeholder="Unesite trazenu cenu/kiriju"
                                        required
                                    />
                                    {offerType === 'izdajem' && <p className='fw-bold ms-2 mb-0'>Mesečno</p>}
                                </div>
                            </div>

                            {/* contact info*/}
                            <div className="my-5">
                                <h4 className="fw-bold">
                                    Kontakt informacije:
                                </h4>
                                {/* contact phone */}
                                <div className="mb-3">
                                    <label className='form-label fw-bold'>
                                        Telefon
                                    </label>
                                    <input
                                        className='form-control'
                                        type='number'
                                        id='contactPhoneNumber'
                                        value={contactPhoneNumber}
                                        onChange={onMutate}
                                        required
                                    />
                                </div>
                                {/* contact email */}
                                <div>
                                    <label className='form-label fw-bold'>
                                        Email adresa
                                    </label>
                                    <input
                                        className='form-control'
                                        type='email'
                                        id='contactEmailAddress'
                                        value={contactEmailAddress}
                                        onChange={onMutate}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* submit btn */}
                    <button type='submit' className='w-100 btn btn-primary'>
                        Objavi Oglas
                    </button>
                </form>
            </div>
        </section>
    )
}

export default PostNewListing
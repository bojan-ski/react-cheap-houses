import { useState } from "react";
import { useNavigate } from "react-router-dom";
// firebase/firestore funcs
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
// utils funcs
import storeUploadedImage from "../utils/storeUploadedImage";
import getCurrentTimeAndDate from "../utils/getCurrentTimeAndDate";
import closeModalOnSubmit from "../utils/closeModalOnSubmit";
// data
import districts from "../data/districts";
// components
import Spinner from "../components/Spinner";


const PostNewListingModal = ({ userID }) => {
    // console.log(userID);
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        userRef: userID,
        listingType: 'prodajem',
        propertyType: 'kuca',
        propertyName: '',
        lotNumber: '',
        numRooms: '',
        numBathrooms: '',
        squareFootage: '',
        propertyAddress: '',
        propertyLocation: '',
        propertyDistrict: 'Beograd',
        propertyImages: [],
        askingPrice: '',
        contactFullName: '',
        contactPhoneNumber: '',
        contactEmailAddress: '',
    })

    const { listingType, propertyType, propertyName, lotNumber, numRooms, numBathrooms, squareFootage, propertyAddress, propertyLocation, propertyDistrict, propertyImages, askingPrice, contactFullName, contactPhoneNumber, contactEmailAddress } = formData

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

        // console.log(formData.propertyImages.length);
        if (formData.propertyImages.length > 8) {
            setIsLoading(false)

            // error message
            console.log('Preko 7 slika');
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
            timestamp: serverTimestamp(),
            listingCreated: getCurrentTimeAndDate()
        }

        delete formDataCopy.propertyImages

        const docRef = await addDoc(collection(db, 'listings'), formDataCopy)

        setIsLoading(false)

        // success message
        console.log('uspesno ste postavili/objavili novi oglas');

        // after the user has posted a new listing, the user is redirected to the Listings page
        navigate(`/oglasi`)

        // close Modal on Submit
        closeModalOnSubmit('#postNewModal')
    }

    if (isLoading) return <Spinner />

    return (
        <div className="modal fade" id="postNewModal" tabIndex="-1" aria-labelledby="postNewModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">

                    {/* modal-header */}
                    <div className="modal-header border-0">
                        <div className="text-center w-100">
                            <h2 className="modal-title fw-bolder">
                                Postavi novi oglas
                            </h2>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>

                    {/* modal-body */}
                    <div className="modal-body">
                        <form className="p-4 rounded-5" onSubmit={handleCreateNewOfferSubmit}>
                            <div className="row">

                                {/* row item 1 */}
                                <div className="col-12 col-lg-6">

                                    {/* listing type */}
                                    <div className="mb-3">
                                        <label className='form-label fw-bold'>
                                            Prodajem / Izdajem
                                        </label>
                                        <div className='offer-type-btns'>
                                            <button
                                                type='button'
                                                className={listingType === 'prodajem' ? 'form-btn-active' : 'form-btn'}
                                                id='listingType'
                                                value='prodajem'
                                                onClick={onMutate}
                                            >
                                                Prodajem
                                            </button>
                                            <button
                                                type='button'
                                                className={listingType === 'izdajem' ? 'form-btn-active' : 'form-btn'}
                                                id='listingType'
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
                                                className={propertyType === 'kuca' ? 'form-btn-active mb-1' : 'form-btn mb-1'}
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
                                            minLength='10'
                                            maxLength='25'
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
                                                    type='text'
                                                    id='lotNumber'
                                                    value={lotNumber}
                                                    onChange={onMutate}
                                                    maxLength='10'
                                                    minLength='6'
                                                    placeholder="112233, 1122/3"
                                                    required
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
                                                    required
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
                                                    required
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
                                                    required
                                                />
                                            </div>

                                            {/* square footage */}
                                            <div className="mb-3">
                                                <label className='form-label fw-bold'>
                                                    Prostor (kvadrata)
                                                </label>
                                                <input
                                                    className='form-control'
                                                    type='number'
                                                    id='squareFootage'
                                                    value={squareFootage}
                                                    onChange={onMutate}
                                                    placeholder="Površina"
                                                    required
                                                />
                                            </div>
                                        </>
                                    )}

                                    {/* property address */}
                                    <div className="mb-3">
                                        <label className='form-label fw-bold'>
                                            Adresa
                                        </label>
                                        <input
                                            className='form-control'
                                            type='text'
                                            id='propertyAddress'
                                            value={propertyAddress}
                                            onChange={onMutate}
                                            minLength='10'
                                            maxLength='30'
                                            placeholder="Adreasa na kojoj se nalazi imovina"
                                            required
                                        />
                                    </div>

                                    {/* property location */}
                                    <div className="mb-3">
                                        <label className='form-label fw-bold'>
                                            Lokacija
                                        </label>
                                        <input
                                            className='form-control'
                                            type='text'
                                            id='propertyLocation'
                                            value={propertyLocation}
                                            onChange={onMutate}
                                            minLength='10'
                                            maxLength='20'
                                            placeholder="Naziv grada, sela..."
                                            required
                                        />
                                    </div>
                                </div>

                                {/* row item 2 */}
                                <div className="col-12 col-lg-6">

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
                                            Slike - do 7 slika, veličine do 2MB
                                        </label>
                                        <input
                                            className='form-control'
                                            type='file'
                                            id='propertyImages'
                                            onChange={onMutate}
                                            accept='.jpg,.png,.jpeg'
                                            multiple
                                            required
                                        />
                                    </div>

                                    {/* asking price*/}
                                    <div className="mb-3">
                                        <label className='form-label fw-bold'>
                                            Cena (EUR)
                                        </label>
                                        <div className='asking-price-info d-flex align-items-center'>
                                            <input
                                                className='form-control'
                                                type='number'
                                                id='askingPrice'
                                                value={askingPrice}
                                                onChange={onMutate}
                                                placeholder="Unesite trazenu cenu/kiriju"
                                                required
                                            />
                                            {listingType === 'izdajem' && <p className='fw-bold ms-2 mb-0'>Mesečno</p>}
                                        </div>
                                    </div>

                                    {/* contact info*/}
                                    <div className="my-5">
                                        <h4 className="fw-bold">
                                            Kontakt informacije:
                                        </h4>

                                        {/* owner full name */}
                                        <div className="mb-3">
                                            <label className='form-label fw-bold'>
                                                Vaše ime i prezime
                                            </label>
                                            <input
                                                className='form-control'
                                                type='text'
                                                id='contactFullName'
                                                value={contactFullName}
                                                onChange={onMutate}
                                                maxLength='25'
                                                required
                                            />
                                        </div>

                                        {/* contact phone */}
                                        <div className="mb-3">
                                            <label className='form-label fw-bold'>
                                                Telefon
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="phone-number">+381</span>
                                                <input
                                                    className='form-control'
                                                    type='number'
                                                    id='contactPhoneNumber'
                                                    aria-describedby="phone-number"
                                                    value={contactPhoneNumber}
                                                    onChange={onMutate}
                                                    required
                                                />
                                            </div>
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
                                                maxLength='30'
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* submit btn */}
                            <div className="submit-button text-center">
                                <button type='submit' className='px-5 py-3 fw-bold text-white btn bg-orange-hover'>
                                    Objavi Oglas
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostNewListingModal
import { useState } from "react"
import { useLoaderData } from 'react-router-dom'
// components
import PostedOffersGridView from "./PostedOffersGridView"
import PostedOffersListView from "./PostedOffersListView"
// React Icons
import { FaListUl } from "react-icons/fa"
import { BsGrid3X3Gap } from "react-icons/bs"
// imported data
import districts from "../../data/districts";
import propertyTypes from '../../data/propertyTypes'

const PostedOffersContainer = () => {
    const postedOffers = useLoaderData()

    const [previousListOfPostedOffers, setPreviousListOfPostedOffers] = useState(postedOffers)
    const [currentListOfPostedOffers, setCurrentListOfPostedOffers] = useState(postedOffers)

    // const [postedOffersList, setPostedOffersList] = useState({
    //     totalListOfPostedOffers: postedOffers,
    //     displayedListOfPostedOffers: postedOffers
    // })

    const [layout, setLayout] = useState('grid')

    const handleSearch = e => {
        const searchTerm = e.target.value.toLowerCase()

        const searchResults = postedOffers.filter(postedOffer => postedOffer.data.propertyLocation.toLowerCase().includes(searchTerm))
        currentListOfPostedOffers(searchResults)
    }

    const handleSelectOfferType = e => {
        if (e.target.value == 'svi oglasi') {
            setCurrentListOfPostedOffers(previousListOfPostedOffers)
        } else {
            setPreviousListOfPostedOffers(currentListOfPostedOffers)
            const sortResults = postedOffers.filter(postedOffer => postedOffer.data.offerType == e.target.value)
            setCurrentListOfPostedOffers(sortResults)
        }
    }

    const propertyTypesList = ['svi tipovi imovine', ...propertyTypes]

    const handleSelectPropertyType = e => {
        if (e.target.value == 'svi tipovi imovine') {
            setCurrentListOfPostedOffers(previousListOfPostedOffers)
        } else {
            setPreviousListOfPostedOffers(currentListOfPostedOffers)
            const sortResults = postedOffers.filter(postedOffer => postedOffer.data.propertyType == e.target.value)
            setCurrentListOfPostedOffers(sortResults)
        }
    }

    const handleSelectDistrict = e => {
        console.log(e);
    }


    return (
        <>
            <section className="search-filter-posted-offers-container mb-5">
                <div className="row">

                    {/* row item 1 - display selected offer type */}
                    <div className="col-12 col-sm-4 mb-3">
                        <select className="form-select" onChange={handleSelectOfferType}>
                            <option value="svi oglasi">Svi oglasi</option>
                            <option value="prodajem">Na prodaju</option>
                            <option value="izdajem">Izdaje se</option>
                        </select>
                    </div>

                    {/* row item 2 - display selected offer type */}
                    <div className="col-12 col-sm-4 mb-3">
                        <select className="form-select" onChange={handleSelectPropertyType}>
                            {propertyTypesList.map((propertyType, idx) => {
                                return <option key={idx} value={propertyType} className="capitalize">
                                    {propertyType}
                                </option>
                            })}
                        </select>
                    </div>

                    {/* row item 3 - display selected district */}
                    <div className="col-12 col-sm-4 mb-3">
                        <select className="form-select" onChange={handleSelectDistrict}>
                            <option value="svi-oglasi">Svi oglasi</option>
                        </select>
                    </div>

                    {/* row item 4 - search feature */}
                    <div className="col-12 col-sm-8">
                        <input type="text" className="form-control" id="searchByPlaceName" onChange={handleSearch} placeholder="Unesite naziv mesta" />
                    </div>

                    {/* row item 5 - reset */}
                    <div className="col-12 col-sm-2">
                        <button type="button" className="btn btn-warning px-5" onClick={() =>setCurrentListOfPostedOffers(postedOffers)}>
                            Reset
                        </button>
                    </div>

                    {/* row item 6 - display offers (grid view or list view) */}
                    <div className="col-12 col-sm-2 text-end">
                        <button type='button' className="layout-btn btn text-muted me-2" onClick={() => setLayout('grid')}>
                            <BsGrid3X3Gap size={18} />
                        </button>
                        <button type='button' className="layout-btn btn text-muted" onClick={() => setLayout('list')}>
                            <FaListUl size={18} />
                        </button>
                    </div>
                </div>
            </section>

            <section className="display-posted-offers-container">
                {layout === 'grid' ? (
                    <PostedOffersGridView postedOffers={currentListOfPostedOffers} />
                ) : (
                    <PostedOffersListView postedOffers={currentListOfPostedOffers} />
                )}
            </section>
        </>
    )
}

export default PostedOffersContainer
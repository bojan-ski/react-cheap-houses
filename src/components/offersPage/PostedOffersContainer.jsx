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
    const [currentListOfPostedOffers, setCurrentListOfPostedOffers] = useState(postedOffers)

    const [layout, setLayout] = useState('grid')
    const propertyTypesList = ['Svi tipovi imovine', ...propertyTypes]
    const districtsList = ['Svi okruzi', ...districts]

    const [filterOptionsApplied, setFilterOptionsApplied] = useState(false)
    const [selectedFilterOptions, setSelectedFilterOptions] = useState({
        selectedOfferType: 'Svi oglasi',
        selectedPropertyType: 'Svi tipovi imovine',
        selectedDistrict: 'Svi okruzi',
    })

    // Search function
    const handleSearch = e => {
        const searchTerm = e.target.value.toLowerCase()

        const searchResults = postedOffers.filter(postedOffer => postedOffer.data.propertyLocation.toLowerCase().includes(searchTerm))
        setCurrentListOfPostedOffers(searchResults)
    }

    // filter functions
    const handleSelectedFilterOption = e => {
        // console.log(e.target.value);

        setSelectedFilterOptions(curState => ({
            ...curState,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmittedFilterOptions = e => {
        e.preventDefault();

        const { selectedOfferType, selectedPropertyType, selectedDistrict } = selectedFilterOptions
        // console.log(selectedOfferType, selectedPropertyType, selectedDistrict);

        if (selectedOfferType == 'Svi oglasi' && selectedPropertyType == 'Svi tipovi imovine' && selectedDistrict == 'Svi okruzi') {
            setCurrentListOfPostedOffers(postedOffers)
        } else {
            setFilterOptionsApplied(true)

            if (selectedOfferType !== 'Svi oglasi') {
                const filterResult = currentListOfPostedOffers.filter(listing => listing.data.offerType == selectedOfferType)
                // console.log(filterResult);
                setCurrentListOfPostedOffers(filterResult)
            }
            if (selectedPropertyType !== 'Svi tipovi imovine') {
                const filterResult = currentListOfPostedOffers.filter(listing => listing.data.propertyType == selectedPropertyType)
                // console.log(filterResult);
                setCurrentListOfPostedOffers(filterResult)
            }
            if (selectedDistrict !== 'Svi okruzi') {
                const filterResult = currentListOfPostedOffers.filter(listing => listing.data.propertyDistrict == selectedDistrict)
                // console.log(filterResult);
                setCurrentListOfPostedOffers(filterResult)
            }
        }
    }

    // reset function
    const handleResetFilterOptions = () => {
        setCurrentListOfPostedOffers(postedOffers)
        setFilterOptionsApplied(false)
        setSelectedFilterOptions({
            selectedOfferType: 'Svi oglasi',
            selectedPropertyType: 'Svi tipovi imovine',
            selectedDistrict: 'Svi okruzi',
        })
    }

    return (
        <>
            <section className="search-filter-posted-offers-container mb-5">
                <div className="row">

                    {/* row item 1 - filter form */}
                    <div className="col-12 mb-4">

                        <form onSubmit={handleSubmittedFilterOptions}>
                            <div className="row">
                                {/* sub row item 1 - display selected offer type */}
                                <div className="col-12 col-md-3 mb-3">
                                    <select className="form-select" value={selectedFilterOptions.selectedOfferType} id="selectedOfferType" onChange={handleSelectedFilterOption}>
                                        <option value="Svi oglasi">Svi oglasi</option>
                                        <option value="prodajem">Na prodaju</option>
                                        <option value="izdajem">Izdaje se</option>
                                    </select>
                                </div>

                                {/* sub row item 2 - display selected property type */}
                                <div className="col-12 col-md-3 mb-3">
                                    <select className="form-select" value={selectedFilterOptions.selectedPropertyType} id="selectedPropertyType" onChange={handleSelectedFilterOption}>
                                        {propertyTypesList.map((propertyType, idx) => {
                                            return <option key={idx} value={propertyType} className="capitalize">
                                                {propertyType}
                                            </option>
                                        })}
                                    </select>
                                </div>

                                {/* sub row item 3 - display selected district */}
                                <div className="col-12 col-md-3 mb-3">
                                    <select className="form-select" value={selectedFilterOptions.selectedDistrict} id="selectedDistrict" onChange={handleSelectedFilterOption}>
                                        {districtsList.map((district, idx) => {
                                            return <option key={idx} value={district} className="capitalize">
                                                {district}
                                            </option>
                                        })}
                                    </select>
                                </div>

                                {!filterOptionsApplied && (
                                    <div className="col-12 col-md-3 mb-3">
                                        <button type="submit" className="fw-bold btn btn-warning w-100 text-white">
                                            Primeni filter
                                        </button>
                                    </div>
                                )}
                            </div>

                        </form>
                        {filterOptionsApplied && (
                            <button type="button" className="btn btn-warning px-5" onClick={handleResetFilterOptions}>
                                Reset
                            </button>
                        )}
                    </div>

                    {/* row item 2 - search feature */}
                    <div className="col-12 col-sm-8">
                        <input type="text" className="form-control" id="searchByPlaceName" onChange={handleSearch} placeholder="Unesite naziv mesta" />
                    </div>


                    {/* row item 3 - display offers (grid view or list view) */}
                    <div className="col-12 col-sm-4 text-end">
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
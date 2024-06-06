import { useEffect, useState } from "react"
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


import { useGlobalContext } from "../../context"
import FilterOptions from "./FilterOptions"

const PostedOffersContainer = () => {
    const postedOffers = useLoaderData()
    // const {allPostedListings, setAllPostedListings} = useGlobalContext()

    const [allPostedListings, setAllPostedListings] = useState(postedOffers)

    // useEffect(()=>{
    //     setAllPostedListings(postedOffers)
    // },[])

    // console.log(postedOffers);
    // console.log(allPostedListings);

    // const [currentListOfPostedOffers, setCurrentListOfPostedOffers] = useState(postedOffers)

    const [layout, setLayout] = useState('grid')

    // const propertyTypesList = ['Svi tipovi imovine', ...propertyTypes]
    // const districtsList = ['Svi okruzi', ...districts]

    // const [filterOptionsApplied, setFilterOptionsApplied] = useState(false)
    // const [selectedFilterOptions, setSelectedFilterOptions] = useState({
    //     selectedOfferType: 'Svi oglasi',
    //     selectedPropertyType: 'Svi tipovi imovine',
    //     selectedDistrict: 'Svi okruzi',
    // })

    // Search function
    const handleSearch = e => {
        const searchTerm = e.target.value.toLowerCase()

        const searchResults = postedOffers.filter(listing => listing.data.propertyLocation.toLowerCase().includes(searchTerm))
        setAllPostedListings(searchResults)
    }

    // filter functions
    // const handleSelectedFilterOption = e => {
    //     setSelectedFilterOptions(curState => ({
    //         ...curState,
    //         [e.target.id]: e.target.value
    //     }))
    // }

    // const handleSubmittedFilterOptions = e => {
    //     e.preventDefault();
    //     const { selectedOfferType, selectedPropertyType, selectedDistrict } = selectedFilterOptions

    //     if (selectedOfferType == 'Svi oglasi' && selectedPropertyType == 'Svi tipovi imovine' && selectedDistrict == 'Svi okruzi') {
    //         setCurrentListOfPostedOffers(postedOffers)
    //     } else {
    //         setFilterOptionsApplied(true)

    //         if (selectedOfferType !== 'Svi oglasi') {
    //             const filterResult = currentListOfPostedOffers.filter(listing => listing.data.offerType == selectedOfferType)
    //             setCurrentListOfPostedOffers(filterResult)
    //         }
    //         if (selectedPropertyType !== 'Svi tipovi imovine') {
    //             const filterResult = currentListOfPostedOffers.filter(listing => listing.data.propertyType == selectedPropertyType)
    //             setCurrentListOfPostedOffers(filterResult)
    //         }
    //         if (selectedDistrict !== 'Svi okruzi') {
    //             const filterResult = currentListOfPostedOffers.filter(listing => listing.data.propertyDistrict == selectedDistrict)
    //             setCurrentListOfPostedOffers(filterResult)
    //         }
    //     }
    // }

    // reset function
    // const handleResetFilterOptions = () => {
    //     setCurrentListOfPostedOffers(postedOffers)
    //     setFilterOptionsApplied(false)
    //     setSelectedFilterOptions({
    //         selectedOfferType: 'Svi oglasi',
    //         selectedPropertyType: 'Svi tipovi imovine',
    //         selectedDistrict: 'Svi okruzi',
    //     })
    // }

    return (
        <>
            <section className="search-filter-posted-offers-container mb-5">
                <div className="row">

                    {/* row item 1 - filter form */}
                    <div className="col-12 mb-4">

                        <FilterOptions allPostedListings={allPostedListings} setAllPostedListings={setAllPostedListings} />
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
                    <PostedOffersGridView postedOffers={allPostedListings} />
                ) : (
                    <PostedOffersListView postedOffers={allPostedListings} />
                )}
            </section>
        </>
    )
}

export default PostedOffersContainer
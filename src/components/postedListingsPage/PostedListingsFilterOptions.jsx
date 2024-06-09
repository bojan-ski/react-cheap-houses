import { useState } from "react";
import { useLoaderData } from "react-router-dom"
// imported data
import districts from "../../data/districts";
import propertyTypes from '../../data/propertyTypes'
// import fetchSelectedFilterOptionsResults from "../../utils/fetchSelectedFilterOptionsResults";

const PostedListingsFilterOptions = ({ displayAllPostedListings, setDisplayAllPostedListings }) => {
    const allPostedListings = useLoaderData()

    const propertyTypesList = ['Svi tipovi imovine', ...propertyTypes]
    const districtsList = ['Svi okruzi', ...districts]

    const [filterOptionsApplied, setFilterOptionsApplied] = useState(false)
    const [selectedFilterOptions, setSelectedFilterOptions] = useState({
        selectedOfferType: 'Svi oglasi',
        selectedPropertyType: 'Svi tipovi imovine',
        selectedDistrict: 'Svi okruzi',
    })

    // filter functions
    const handleSelectedFilterOption = e => {
        setSelectedFilterOptions(curState => ({
            ...curState,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmittedFilterOptions = (e) => {
        e.preventDefault();
        const { selectedOfferType, selectedPropertyType, selectedDistrict } = selectedFilterOptions

        // console.log(selectedOfferType, selectedPropertyType, selectedDistrict);

        if (selectedOfferType == 'Svi oglasi' && selectedPropertyType == 'Svi tipovi imovine' && selectedDistrict == 'Svi okruzi') {
            setDisplayAllPostedListings(allPostedListings)
        } else {
            setFilterOptionsApplied(true)

            let filteredListOfPostedListings = displayAllPostedListings
            // console.log(filteredListOfPostedListings);

            if (selectedOfferType !== 'Svi oglasi') {
                // console.log(selectedOfferType);
                const filterResult = filteredListOfPostedListings.filter(listing => {
                    // console.log(listing);
                    // console.log(listing.data.offerType);
                    return listing.data.offerType == selectedOfferType
                    // console.log(listing.data.offerType == selectedOfferType);
                })
                // console.log(filterResult);
                // setDisplayAllPostedListings(filterResult)
                // console.log(displayAllPostedListings);
                filteredListOfPostedListings = filterResult
                // console.log(filteredListOfPostedListings);
            }
            if (selectedPropertyType !== 'Svi tipovi imovine') {
                const filterResult = filteredListOfPostedListings.filter(listing => {
                    return listing.data.propertyType == selectedPropertyType
                    // console.log(listing.data.propertyType == selectedPropertyType);
                })
                // console.log(filterResult);
                // setDisplayAllPostedListings(filterResult)
                // console.log(displayAllPostedListings);
                filteredListOfPostedListings = filterResult
                // console.log(filteredListOfPostedListings);
            }
            if (selectedDistrict !== 'Svi okruzi') {
                const filterResult = filteredListOfPostedListings.filter(listing => {
                    return listing.data.propertyDistrict == selectedDistrict
                    // console.log(listing.data.propertyDistrict == selectedDistrict);
                })
                // console.log(filterResult);
                // setDisplayAllPostedListings(filterResult)
                // console.log(displayAllPostedListings);
                filteredListOfPostedListings = filterResult
                // console.log(filteredListOfPostedListings);
            }

            // console.log(filteredListOfPostedListings);
            setDisplayAllPostedListings(filteredListOfPostedListings)

            // fetchSelectedFilterOptionsResults(selectedFilterOptions)
            // const results = await fetchSelectedFilterOptionsResults(selectedFilterOptions)

            // if (selectedOfferType !== 'Svi oglasi') {
            //     const filterResult = displayAllPostedListings.filter(listing => {
            //         listing.data.offerType == selectedOfferType
            //         console.log(listing.data.offerType == selectedOfferType);
            //     })
            //     setDisplayAllPostedListings(filterResult)
            // }
            // if (selectedPropertyType !== 'Svi tipovi imovine') {
            //     const filterResult = displayAllPostedListings.filter(listing => {
            //         listing.data.propertyType == selectedPropertyType
            //         console.log(listing.data.propertyType == selectedPropertyType);
            //     })
            //     setDisplayAllPostedListings(filterResult)
            // }
            // if (selectedDistrict !== 'Svi okruzi') {
            //     const filterResult = displayAllPostedListings.filter(listing => {
            //         listing.data.propertyDistrict == selectedDistrict
            //         console.log(listing.data.propertyDistrict == selectedDistrict);
            //     })
            //     setDisplayAllPostedListings(filterResult)
            // }
        }
    }

    // console.log(displayAllPostedListings);

    // reset function
    const handleResetFilterOptions = () => {
        setDisplayAllPostedListings(allPostedListings)
        setFilterOptionsApplied(false)
        setSelectedFilterOptions({
            selectedOfferType: 'Svi oglasi',
            selectedPropertyType: 'Svi tipovi imovine',
            selectedDistrict: 'Svi okruzi',
        })
    }

    return (
        <form onSubmit={handleSubmittedFilterOptions}>
            <div className="row">
                {/* row item 1 - display selected offer type */}
                <div className="col-12 col-md-3 mb-3">
                    <select className="form-select" value={selectedFilterOptions.selectedOfferType} id="selectedOfferType" onChange={handleSelectedFilterOption}>
                        <option value="Svi oglasi">Svi oglasi</option>
                        <option value="prodajem">Na prodaju</option>
                        <option value="izdajem">Izdaje se</option>
                    </select>
                </div>

                {/* row item 2 - display selected property type */}
                <div className="col-12 col-md-3 mb-3">
                    <select className="form-select" value={selectedFilterOptions.selectedPropertyType} id="selectedPropertyType" onChange={handleSelectedFilterOption}>
                        {propertyTypesList.map((propertyType, idx) => {
                            return <option key={idx} value={propertyType} className="capitalize">
                                {propertyType}
                            </option>
                        })}
                    </select>
                </div>

                {/* row item 3 - display selected district */}
                <div className="col-12 col-md-3 mb-3">
                    <select className="form-select" value={selectedFilterOptions.selectedDistrict} id="selectedDistrict" onChange={handleSelectedFilterOption}>
                        {districtsList.map((district, idx) => {
                            return <option key={idx} value={district} className="capitalize">
                                {district}
                            </option>
                        })}
                    </select>
                </div>

                {/* row item 4 - submit/reset buttons */}
                {!filterOptionsApplied ? (
                    <div className="col-12 col-md-3 mb-3">
                        <button type="submit" className="fw-bold btn bg-orange-hover text-white w-100">
                            Primeni
                        </button>
                    </div>
                ) : (
                    <div className="col-12 col-md-3 mb-3">
                        <button type="button" className="fw-bold btn btn-warning w-100 text-white" onClick={handleResetFilterOptions}>
                            Reset
                        </button>
                    </div>
                )}
            </div>
        </form>
    )
}

export default PostedListingsFilterOptions
import { useState } from "react";
import { useLoaderData } from "react-router-dom"
// imported data
import districts from "../../data/districts";
import propertyTypes from '../../data/propertyTypes'
// app context
import { useGlobalContext } from "../../context";
// import fetchSelectedFilterOptionsResults from "../../utils/fetchSelectedFilterOptionsResults";

const PostedListingsFilterOptions = () => {
    const allPostedListings = useLoaderData()    

    const {allPostedListingsData, setAllPostedListingsData, filterOptionsApplied, setFilterOptionsApplied, selectedFilterOptions, setSelectedFilterOptions} = useGlobalContext()

    const propertyTypesList = ['Svi tipovi imovine', ...propertyTypes]
    const districtsList = ['Svi okruzi', ...districts]

    // const [filterOptionsApplied, setFilterOptionsApplied] = useState(false)
    // const [selectedFilterOptions, setSelectedFilterOptions] = useState({
    //     selectedListingType: 'Svi oglasi',
    //     selectedPropertyType: 'Svi tipovi imovine',
    //     selectedDistrict: 'Svi okruzi',
    // })

    // filter functions
    const handleSelectedFilterOption = e => {
        setSelectedFilterOptions(curState => ({
            ...curState,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmittedFilterOptions = (e) => {
        e.preventDefault();
        const { selectedListingType, selectedPropertyType, selectedDistrict } = selectedFilterOptions

        // console.log(selectedListingType, selectedPropertyType, selectedDistrict);

        if (selectedListingType == 'Svi oglasi' && selectedPropertyType == 'Svi tipovi imovine' && selectedDistrict == 'Svi okruzi') {
            setAllPostedListingsData(allPostedListings)
        } else {
            setFilterOptionsApplied(true)

            let filteredListOfPostedListings = allPostedListingsData
            // console.log(filteredListOfPostedListings);

            if (selectedListingType !== 'Svi oglasi') {
                // console.log(selectedListingType);
                const filterResult = filteredListOfPostedListings.filter(listing => {
                    // console.log(listing);
                    // console.log(listing.data.listingType);
                    return listing.data.listingType == selectedListingType
                    // console.log(listing.data.listingType == selectedListingType);
                })
                // console.log(filterResult);
                // setAllPostedListingsData(filterResult)
                // console.log(allPostedListingsData);
                filteredListOfPostedListings = filterResult
                // console.log(filteredListOfPostedListings);
            }
            if (selectedPropertyType !== 'Svi tipovi imovine') {
                const filterResult = filteredListOfPostedListings.filter(listing => {
                    return listing.data.propertyType == selectedPropertyType
                    // console.log(listing.data.propertyType == selectedPropertyType);
                })
                // console.log(filterResult);
                // setAllPostedListingsData(filterResult)
                // console.log(allPostedListingsData);
                filteredListOfPostedListings = filterResult
                // console.log(filteredListOfPostedListings);
            }
            if (selectedDistrict !== 'Svi okruzi') {
                const filterResult = filteredListOfPostedListings.filter(listing => {
                    return listing.data.propertyDistrict == selectedDistrict
                    // console.log(listing.data.propertyDistrict == selectedDistrict);
                })
                // console.log(filterResult);
                // setAllPostedListingsData(filterResult)
                // console.log(allPostedListingsData);
                filteredListOfPostedListings = filterResult
                // console.log(filteredListOfPostedListings);
            }

            // console.log(filteredListOfPostedListings);
            setAllPostedListingsData(filteredListOfPostedListings)

            // fetchSelectedFilterOptionsResults(selectedFilterOptions)
            // const results = await fetchSelectedFilterOptionsResults(selectedFilterOptions)

            // if (selectedListingType !== 'Svi oglasi') {
            //     const filterResult = allPostedListingsData.filter(listing => {
            //         listing.data.listingType == selectedListingType
            //         console.log(listing.data.listingType == selectedListingType);
            //     })
            //     setAllPostedListingsData(filterResult)
            // }
            // if (selectedPropertyType !== 'Svi tipovi imovine') {
            //     const filterResult = allPostedListingsData.filter(listing => {
            //         listing.data.propertyType == selectedPropertyType
            //         console.log(listing.data.propertyType == selectedPropertyType);
            //     })
            //     setAllPostedListingsData(filterResult)
            // }
            // if (selectedDistrict !== 'Svi okruzi') {
            //     const filterResult = allPostedListingsData.filter(listing => {
            //         listing.data.propertyDistrict == selectedDistrict
            //         console.log(listing.data.propertyDistrict == selectedDistrict);
            //     })
            //     setAllPostedListingsData(filterResult)
            // }
        }
    }

    // console.log(allPostedListingsData);

    // reset function
    const handleResetFilterOptions = () => {
        setAllPostedListingsData(allPostedListings)
        setFilterOptionsApplied(false)
        setSelectedFilterOptions({
            selectedListingType: 'Svi oglasi',
            selectedPropertyType: 'Svi tipovi imovine',
            selectedDistrict: 'Svi okruzi',
        })
    }

    return (
        <form onSubmit={handleSubmittedFilterOptions}>
            <div className="row">
                {/* row item 1 - display selected offer type */}
                <div className="col-12 col-md-3 mb-3">
                    <select className="form-select" value={selectedFilterOptions.selectedListingType} id="selectedListingType" onChange={handleSelectedFilterOption} disabled={filterOptionsApplied}>
                        <option value="Svi oglasi">Svi oglasi</option>
                        <option value="prodajem">Na prodaju</option>
                        <option value="izdajem">Izdaje se</option>
                    </select>
                </div>

                {/* row item 2 - display selected property type */}
                <div className="col-12 col-md-3 mb-3">
                    <select className="form-select" value={selectedFilterOptions.selectedPropertyType} id="selectedPropertyType" onChange={handleSelectedFilterOption} disabled={filterOptionsApplied}>
                        {propertyTypesList.map((propertyType, idx) => {
                            return <option key={idx} value={propertyType} className="capitalize">
                                {propertyType}
                            </option>
                        })}
                    </select>
                </div>

                {/* row item 3 - display selected district */}
                <div className="col-12 col-md-3 mb-3">
                    <select className="form-select" value={selectedFilterOptions.selectedDistrict} id="selectedDistrict" onChange={handleSelectedFilterOption} disabled={filterOptionsApplied}>
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
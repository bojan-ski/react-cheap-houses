// app context
import { useGlobalContext } from "../../context.jsx";
// utils func
import applySelectedFilterOptions from "../../utils/applySelectedFilterOptions.js";
// imported data
import districts from "../../data/districts.js";
import propertyTypes from '../../data/propertyTypes.js'


const PostedListingsFilterOptions = () => {
    const { allPostedListingsData, setAllPostedListingsData, filterOptionsApplied, setFilterOptionsApplied, selectedFilterOptions, setSelectedFilterOptions, fetchAllListings } = useGlobalContext()

    const propertyTypesList = ['Svi tipovi imovine', ...propertyTypes]
    const districtsList = ['Svi okruzi', ...districts]

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

        if (selectedListingType == 'Svi oglasi' && selectedPropertyType == 'Svi tipovi imovine' && selectedDistrict == 'Svi okruzi') {
            fetchAllListings()
        } else {
            setFilterOptionsApplied(true)

            let filteredListOfPostedListings = applySelectedFilterOptions(selectedFilterOptions, allPostedListingsData)

            setAllPostedListingsData(filteredListOfPostedListings)
        }
    }

    // reset function
    const handleResetFilterOptions = () => {
        fetchAllListings()
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
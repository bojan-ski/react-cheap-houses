import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// app context
import { useGlobalContext } from '../../context.jsx';
// data
import propertyTypes from '../../data/propertyTypes.js';
import districts from '../../data/districts.js';
// utils func
import applySelectedFilterOptions from '../../utils/applySelectedFilterOptions.js';
// react icons
import { FaMagnifyingGlass } from 'react-icons/fa6';


const DashboardFilterOptions = () => {
    const { allPostedListingsData, setAllPostedListingsData, setFilterOptionsApplied, selectedFilterOptions, setSelectedFilterOptions, fetchAllListings } = useGlobalContext()

    const navigate = useNavigate()

    const propertyTypesList = ['Svi tipovi imovine', ...propertyTypes]
    const districtsList = ['Svi okruzi', ...districts]

    useEffect(() => {       
        fetchAllListings()
        setFilterOptionsApplied(false)
        setSelectedFilterOptions({
            selectedListingType: 'Svi oglasi',
            selectedPropertyType: 'Svi tipovi imovine',
            selectedDistrict: 'Svi okruzi',
        })
    }, [])

    // filter functions
    const handleSelectedFilterOption = e => {
        setSelectedFilterOptions(curState => ({
            ...curState,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()

        const { selectedListingType, selectedPropertyType, selectedDistrict } = selectedFilterOptions

        if (selectedListingType == 'Svi oglasi' && selectedPropertyType == 'Svi tipovi imovine' && selectedDistrict == 'Svi okruzi') {
            navigate('/oglasi')
        } else {
            setFilterOptionsApplied(true)

            let filteredListOfPostedListings = applySelectedFilterOptions(selectedFilterOptions, allPostedListingsData)

            setAllPostedListingsData(filteredListOfPostedListings)

            // after submitting selected filter options, redirect user to the Listings (Oglasi) page
            navigate('/oglasi')
        }
    }

    return (
        <div className="hero-filter">
            <form className='dashboard-form' onSubmit={handleSubmit}>
                <div className="row">

                    {/* row item 1 - display selected offer type */}
                    <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <select className="form-select" value={selectedFilterOptions.selectedListingType} id="selectedListingType" onChange={handleSelectedFilterOption}>
                            <option value="Svi oglasi">Svi oglasi</option>
                            <option value="prodajem">Na prodaju</option>
                            <option value="izdajem">Izdaje se</option>
                        </select>
                    </div>

                    {/* row item 2 - display selected property type */}
                    <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <select className="form-select" value={selectedFilterOptions.selectedPropertyType} id="selectedPropertyType" onChange={handleSelectedFilterOption}>
                            {propertyTypesList.map((propertyType, idx) => {
                                return <option key={idx} value={propertyType} className="capitalize">
                                    {propertyType}
                                </option>
                            })}
                        </select>
                    </div>

                    {/* row item 3 - display selected district */}
                    <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <select className="form-select" value={selectedFilterOptions.selectedDistrict} id="selectedDistrict" onChange={handleSelectedFilterOption}>
                            {districtsList.map((district, idx) => {
                                return <option key={idx} value={district} className="capitalize">
                                    {district}
                                </option>
                            })}
                        </select>
                    </div>

                    {/* row item 4 - submit/reset buttons */}
                    <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <button type="submit" className="fw-bold btn bg-orange-hover text-white w-100">
                            Pretražite
                            <FaMagnifyingGlass className='ms-2' />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DashboardFilterOptions
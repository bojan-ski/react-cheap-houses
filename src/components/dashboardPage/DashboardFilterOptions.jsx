import { useEffect, useState } from 'react';
import propertyTypes from '../../data/propertyTypes';
import districts from '../../data/districts';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const DashboardFilterOptions = () => {
    const allPostedListings = useLoaderData()
    // console.log(allPostedListings);

    // const [test, setTest] = useState(allPostedListings)
    const { allPostedListingsData, setAllPostedListingsData, setFilterOptionsApplied, selectedFilterOptions, setSelectedFilterOptions} = useGlobalContext()

    useEffect(()=>{
        // setAllPostedListingsData(allPostedListings)

        setFilterOptionsApplied(false)
        setSelectedFilterOptions({
            selectedListingType: 'Svi oglasi',
            selectedPropertyType: 'Svi tipovi imovine',
            selectedDistrict: 'Svi okruzi',
        })
    },[])

    const navigate = useNavigate()

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

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.elements[0].value);
        console.log(e.target.elements[1].value);
        console.log(e.target.elements[2].value);

        const { selectedListingType, selectedPropertyType, selectedDistrict } = selectedFilterOptions

        // console.log(selectedListingType, selectedPropertyType, selectedDistrict);

        if (selectedListingType == 'Svi oglasi' && selectedPropertyType == 'Svi tipovi imovine' && selectedDistrict == 'Svi okruzi') {
            navigate('/oglasi')
        } else {
            navigate('/oglasi')

            setFilterOptionsApplied(true)

            let filteredListOfPostedListings = allPostedListingsData
            // console.log(allPostedListingsData);

            if (selectedListingType !== 'Svi oglasi') {
                const filterResult = filteredListOfPostedListings.filter(listing => {
                    return listing.data.listingType == selectedListingType
                })
                filteredListOfPostedListings = filterResult
            }
            if (selectedPropertyType !== 'Svi tipovi imovine') {
                const filterResult = filteredListOfPostedListings.filter(listing => {
                    return listing.data.propertyType == selectedPropertyType
                })
                filteredListOfPostedListings = filterResult
            }
            if (selectedDistrict !== 'Svi okruzi') {
                const filterResult = filteredListOfPostedListings.filter(listing => {
                    return listing.data.propertyDistrict == selectedDistrict
                })
                filteredListOfPostedListings = filterResult
            }
            setAllPostedListingsData(filteredListOfPostedListings)
        }

        navigate('/oglasi')
        // console.log(allPostedListingsData);
    }

    // console.log(allPostedListingsData);


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

                        {/* {!filterOptionsApplied ? (
                            <button type="submit" className="fw-bold btn bg-orange-hover text-white w-100">
                                Pretražite
                                <FaMagnifyingGlass className='ms-2' />
                            </button>
                        ) : (
                            <button type="button" className="fw-bold btn btn-warning w-100 text-white" >
                                Reset
                            </button>
                        )} */}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DashboardFilterOptions
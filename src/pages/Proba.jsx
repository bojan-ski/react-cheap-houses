import { useState, useEffect } from "react";
// firebase func
import { collection, query, orderBy, startAfter, limit, getDocs, where } from "firebase/firestore";
import { db } from "../firebase.config";
// data
import propertyTypes from "../data/propertyTypes.js";
import districts from "../data/districts.js";
// components
import PageLocation from '../components/PageLocation.jsx'
import Loading from "../components/Loading";
import PostedListingGridViewCard from "../components/PostedListingGridViewCard";
import PostedListingListViewCard from "../components/PostedListingListViewCard.jsx";
// react icons
import { GrNext, GrPrevious } from "react-icons/gr";
import { BsGrid3X3Gap } from "react-icons/bs";
import { FaFilter, FaListUl, FaSearch } from "react-icons/fa";
// toastify
import { toast } from "react-toastify";
// utils func
import scrollToTop from "../utils/scrollToTop.js";



const Pagination = (itemsPerPage) => {
    const [listings, setListings] = useState([]);
    const [lastVisible, setLastVisible] = useState(null);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchListings = async (pageNumber = 0, condition = '', reset = false) => {
        setLoading(true);

        try {
            let constraints = [
                orderBy('timestamp', 'desc'),
                limit(itemsPerPage)
            ]         

            if (typeof condition == 'string' && condition.length > 0) {
                constraints.push(where('propertyLocation', '==', condition));
            }

            const { selectedListingType, selectedPropertyType, selectedDistrict } = condition

            if (selectedListingType && selectedListingType !== "Svi oglasi") {
                constraints.push(where('listingType', '==', selectedListingType));
            }
            if (selectedPropertyType && selectedPropertyType !== "Svi tipovi imovine") {
                constraints.push(where('propertyType', '==', selectedPropertyType));
            }
            if (selectedDistrict && selectedDistrict !== "Svi okruzi") {
                constraints.push(where('propertyDistrict', '==', selectedDistrict));
            }

            let q;

            if (reset || pageNumber === 0) {
                // Fetch the first page or reset to the first page
                q = query(
                    collection(db, 'listings'),
                    ...constraints,
                );

                // Reset the last visible document when looping back
                setLastVisible(null);
            } else {
                // Fetch the next set based on the last visible document
                if (lastVisible) {
                    q = query(
                        collection(db, 'listings'),
                        ...constraints,
                        startAfter(lastVisible),
                    );
                }
            }

            const querySnapshot = await getDocs(q);

            // Check if the end of the collection is reached
            if (querySnapshot.docs.length == 0 && pageNumber !== 0) {
                // Loop back to the first page
                fetchListings(0, condition, true); 
                return;
            }

            // Update the last visible document for the next page
            const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
            setLastVisible(newLastVisible);

            // Replace the listings with the new set of documents for the current page
            setListings(querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
            setPage(pageNumber);
        } catch (error) {
            //error message
            toast.error('Greška prilikom prikazivanja svi objavljenih oglasa, molimo Vas probajte ponovo')
        } finally {
            setLoading(false);
        }
    };

    return {
        listings,
        fetchListings,
        loading,
        page,
    };
};


const Proba = () => {
    const itemsPerPage = 6;
    const { listings, fetchListings, loading, page } = Pagination(itemsPerPage);

    // Fetch the first page on mount
    useEffect(() => {
        fetchListings();
    }, []);

    // VIEW OPTIONS
    const [layout, setLayout] = useState('grid')
    const [conditionOption, setConditionOption] = useState('search')

    // SEARCH & FILTER
    const [disableOption, setDisableOption] = useState(false)

    // FILTER -------------
    const [condition, setCondition] = useState()

    const propertyTypesList = ['Svi tipovi imovine', ...propertyTypes]
    const districtsList = ['Svi okruzi', ...districts]

    const handleSelectedFilterOption = e => {
        setCondition(curState => ({
            ...curState,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmittedFilterOptions = e => {
        e.preventDefault()

        setDisableOption(true)

        fetchListings(0, condition)
    }

    // SEARCH -------------

    const handleSearch = () => {
        setDisableOption(true)

        fetchListings(0, condition.toLowerCase())
    }

    // RESET --------------
    const handleReset = () => {
        setDisableOption(false)

        setCondition()

        fetchListings()
    }

    // PAGINATION OPTIONS
    const handleNextPage = () => {
        fetchListings(page + 1, condition);
        scrollToTop()
    };

    const handlePreviousPage = () => {
        if (page > 0) {
            fetchListings(page - 1, condition);
            scrollToTop()
        }
    };

    if (loading) return <Loading />

    return (
        <div className="proba-page">

            <PageLocation />

            <div className="text-center mb-5">
                <h1 className="fw-bold mb-3">
                    Oglasi
                </h1>
            </div>

            <div className="container">
                
                {/* OPTIONS */}
                <section className="pb-3 mb-4 border-bottom">
                    <div className="row">

                        <div className="col-6">
                            <button type='button' className={conditionOption == 'search' ? "layout-selected layout-btn btn text-muted me-2" : "layout-btn btn text-muted me-2"} onClick={() => setConditionOption('search')}>
                                <FaFilter size={18} />
                            </button>
                            <button type='button' className={conditionOption == 'filter' ? "layout-selected layout-btn btn text-muted" : "layout-btn btn text-muted"} onClick={() => setConditionOption('filter')}>
                                <FaSearch size={18} />
                            </button>
                        </div>

                        <div className="col-6 text-end">
                            <button type='button' className={layout == 'grid' ? "layout-selected layout-btn btn text-muted me-2" : "layout-btn btn text-muted me-2"} onClick={() => setLayout('grid')}>
                                <BsGrid3X3Gap size={18} />
                            </button>
                            <button type='button' className={layout == 'list' ? "layout-selected layout-btn btn text-muted" : "layout-btn btn text-muted"} onClick={() => setLayout('list')}>
                                <FaListUl size={18} />
                            </button>
                        </div>
                    </div>
                </section>


                {/* SEARCH AND FILTER */}
                <section>
                    <div className="row">

                        {conditionOption == 'search' ? (
                            <>
                                {/* row item 1 - FILTER */}
                                < div className="col-12 mb-3">
                                    <form className='dashboard-form' onSubmit={handleSubmittedFilterOptions}>
                                        <div className="row">

                                            {/* row item 1 - display selected offer type */}
                                            <div className="col-12 col-md-3 mb-3">
                                                <select className="form-select" value={typeof condition == 'object' && condition.selectedListingType} id="selectedListingType" onChange={handleSelectedFilterOption} disabled={disableOption}>
                                                    <option value="Svi oglasi">Svi oglasi</option>
                                                    <option value="prodajem">Na prodaju</option>
                                                    <option value="izdajem">Izdaje se</option>
                                                </select>
                                            </div>

                                            {/* row item 2 - display selected property type */}
                                            <div className="col-12 col-md-3 mb-3">
                                                <select className="form-select" value={typeof condition == 'object' && condition.selectedPropertyType} id="selectedPropertyType" onChange={handleSelectedFilterOption} disabled={disableOption}>
                                                    {propertyTypesList.map((propertyType, idx) => {
                                                        return <option key={idx} value={propertyType} className="capitalize">
                                                            {propertyType}
                                                        </option>
                                                    })}
                                                </select>
                                            </div>

                                            {/* row item 3 - display selected district */}
                                            <div className="col-12 col-md-3 mb-3">
                                                <select className="form-select" value={typeof condition == 'object' && condition.selectedDistrict} id="selectedDistrict" onChange={handleSelectedFilterOption} disabled={disableOption}>
                                                    {districtsList.map((district, idx) => {
                                                        return <option key={idx} value={district} className="capitalize">
                                                            {district}
                                                        </option>
                                                    })}
                                                </select>
                                            </div>

                                            {/* row item 4 - submit/reset buttons */}
                                            {!disableOption ? (
                                                <div className="col-12 col-md-3 mb-3">
                                                    <button type="submit" className="fw-bold btn bg-orange-hover text-white w-100">
                                                        Primeni
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="col-12 col-md-3 mb-3">
                                                    <button type="button" className="fw-bold btn btn-warning w-100 text-white" onClick={handleReset}>
                                                        Reset
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* row item 2 - SEARCH */}
                                <div className="col-12 mb-3">
                                    <div className="row">

                                        {/* row item 1 */}
                                        <div className="col-12 col-md-8 mb-3">
                                            <input type="text" className="form-control" value={typeof condition == 'string' ? condition : ''} placeholder="Unesite naziv mesta" onChange={e => setCondition(e.target.value)} disabled={disableOption} />
                                        </div>

                                        {/* row item 2 */}
                                        <div className="col-12 col-md-4 mb-3">
                                            {!disableOption ? (
                                                <button type="button" className="fw-bold btn bg-orange-hover text-white w-100" onClick={handleSearch}>
                                                    Primeni
                                                </button>
                                            ) : (
                                                <button type="button" className="fw-bold btn btn-warning text-white w-100" onClick={handleReset}>
                                                    Reset
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </section >

                {/* LISTINGS LIST */}
                < section >
                    <div className="row">
                        {layout === 'grid' ? (
                            <>
                                {listings.map(postedListing => {
                                    return <PostedListingGridViewCard key={postedListing.id} postedListing={postedListing} />
                                })}
                            </>
                        ) : (
                            <>
                                {listings.map(postedListing => {
                                    return <PostedListingListViewCard key={postedListing.id} {...postedListing} />
                                })}
                            </>
                        )}

                    </div>
                </section >

                {/* PAGINATION */}
                < div className="pagination-btn my-5 d-flex align-items-center justify-content-between" >
                    <p className="fw-bold text-muted mb-0 fs-5">
                        Broj stranice:
                        <span className="text-dark ms-2">
                            {page + 1}
                        </span>
                    </p>

                    <div className="pagination-btn-container">
                        <button className="btn me-3" onClick={handlePreviousPage} disabled={page === 0}>
                            <GrPrevious className="text-white" />
                        </button>
                        <button className="btn" onClick={handleNextPage} disabled={listings.length === 0}>
                            <GrNext className="text-white" />
                        </button>
                    </div>
                </div >
            </div >
        </div>

    );
};

export default Proba;
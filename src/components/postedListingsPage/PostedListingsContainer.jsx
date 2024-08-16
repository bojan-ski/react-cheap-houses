import { useEffect, useState } from "react"
// app context
import { useGlobalContext } from "../../context.jsx"
// components
import PostedListingsFilterOptions from "./PostedListingsFilterOptions.jsx"
import AllPostedListingsGridView from "../AllPostedListingsGridView.jsx"
import AllPostedListingsListView from "../AllPostedListingsListView.jsx"
import Pagination from "../Pagination.jsx"
// React Icons
import { FaListUl } from "react-icons/fa"
import { BsGrid3X3Gap } from "react-icons/bs"


const PostedListingsContainer = () => {
    const { allPostedListingsData, displayedListingsList, setDisplayedListingsList, setCurrentPageNumber } = useGlobalContext()
    
    const [layout, setLayout] = useState('grid')

    useEffect(() => {        
        setDisplayedListingsList({
            totalDataList: allPostedListingsData,
            displayedDataList: allPostedListingsData.length >= 10 ? allPostedListingsData.slice(0, 9) : allPostedListingsData
        })
        setCurrentPageNumber(1)
    }, [allPostedListingsData])

    // Search function
    const handleSearch = e => {
        const searchTerm = e.target.value.toLowerCase()

        const searchResults = allPostedListingsData.filter(listing => listing.data.propertyLocation.toLowerCase().includes(searchTerm))

        setDisplayedListingsList({
            totalDataList: searchResults,
            displayedDataList: searchResults.length >= 10 ? searchResults.slice(0, 9) : searchResults
        })
        setCurrentPageNumber(1)
    }

    return (
        <>
            <section className="search-filter-options-container mb-5">
                <div className="row">

                    {/* row item 1 - filter form */}
                    <div className="col-12 mb-4">
                        <PostedListingsFilterOptions  />
                    </div>

                    {/* row item 2 - search feature */}
                    <div className="col-12 col-sm-9 mb-3">
                        <input type="text" className="form-control" id="searchByPlaceName" onChange={handleSearch} placeholder="Unesite naziv mesta" />
                    </div>

                    {/* row item 3 - display listings (grid view or list view) */}
                    <div className="col-12 col-sm-3 text-end">
                        <button type='button' className={layout == 'grid' ? "layout-selected layout-btn btn text-muted me-2" : "layout-btn btn text-muted me-2"} onClick={() => setLayout('grid')}>
                            <BsGrid3X3Gap size={18} />
                        </button>
                        <button type='button' className={layout == 'list' ? "layout-selected layout-btn btn text-muted" : "layout-btn btn text-muted"} onClick={() => setLayout('list')}>
                            <FaListUl size={18} />
                        </button>
                    </div>
                </div>
            </section>

            <section className="display-posted-listings-container mb-4">
                {layout === 'grid' ? (
                    <AllPostedListingsGridView displayedListingsList={displayedListingsList.displayedDataList} />
                ) : (
                    <AllPostedListingsListView displayedListingsList={displayedListingsList.displayedDataList} />
                )}
            </section>

            {/* Pagination */}
            {(displayedListingsList.totalDataList && displayedListingsList.totalDataList.length >= 10) && (
                <Pagination dataLength={allPostedListingsData} setDisplayedContent={setDisplayedListingsList} />
            )}
        </>
    )
}

export default PostedListingsContainer
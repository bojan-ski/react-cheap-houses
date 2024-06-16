import { useState } from "react"
import { useLoaderData } from 'react-router-dom'
// components
import PostedListingsFilterOptions from "./PostedListingsFilterOptions"
import AllPostedListingsGridView from "../AllPostedListingsGridView"
import AllPostedListingsListView from "../AllPostedListingsListView"
import Pagination from "../Pagination"
// React Icons
import { FaListUl } from "react-icons/fa"
import { BsGrid3X3Gap } from "react-icons/bs"


const PostedListingsContainer = () => {
    const allPostedListings = useLoaderData()
    const [allPostedListingsData, setAllPostedListingsData] = useState(allPostedListings)
    // const [displayAllPostedListings, setDisplayAllPostedListings] = useState(allPostedListings)
    const [displayedListingsList, setDisplayedListingsList] = useState({
        totalListOfPostedListings: allPostedListingsData,
        displayedListOfPostedListings: allPostedListingsData.length >= 7 ? allPostedListingsData.slice(0, 6) : allPostedListingsData
    })
    const [layout, setLayout] = useState('grid')

    // Search function
    const handleSearch = e => {
        const searchTerm = e.target.value.toLowerCase()

        const searchResults = allPostedListings.filter(listing => listing.data.propertyLocation.toLowerCase().includes(searchTerm))
        setAllPostedListingsData(searchResults)
    }

    return (
        <>
            <section className="search-filter-posted-offers-container mb-5">
                <div className="row">

                    {/* row item 1 - filter form */}
                    <div className="col-12 mb-4">
                        <PostedListingsFilterOptions allPostedListingsData={allPostedListingsData} setAllPostedListingsData={setAllPostedListingsData} />
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

            <section className="display-posted-offers-container mb-5">
                {layout === 'grid' ? (
                    <AllPostedListingsGridView userDisplayedPostedListings={displayedListingsList.displayedListOfPostedListings} />
                ) : (
                    <AllPostedListingsListView userDisplayedPostedListings={displayedListingsList.displayedListOfPostedListings} />
                )}

                {/* Pagination */}
                {allPostedListingsData.length >= 7 && (
                    <Pagination allPostedListingsData={allPostedListingsData} setDisplayedListingsList={setDisplayedListingsList}/>
                )}
            </section>
        </>
    )
}

export default PostedListingsContainer
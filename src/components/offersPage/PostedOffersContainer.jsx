import { useState } from "react"
import { useLoaderData } from 'react-router-dom'
// components
import PostedOffersGridView from "./PostedOffersGridView"
import PostedOffersListView from "./PostedOffersListView"
// React Icons
import { FaListUl } from "react-icons/fa"
import { BsGrid3X3Gap } from "react-icons/bs"

const PostedOffersContainer = () => {
    const postedOffers = useLoaderData()
    const [postedOffersList, setPostedOffersList] = useState({
        totalListOfPostedOffers: postedOffers,
        displayedListOfPostedOffers: postedOffers
    })
    const [layout, setLayout] = useState('grid')

    const handleSearch = e => {
        const searchTerm = e.target.value.toLowerCase()

        const searchResults = postedOffers.filter(postedOffer => postedOffer.data.propertyLocation.toLowerCase().includes(searchTerm))
        setPostedOffersList(curStat => ({
            ...curStat,
            displayedListOfPostedOffers: searchResults
        }))
    }

    const handleSort = e => {
        // console.log(e.target.value);

        if (e.target.value == 'svi-oglasi') {
            setPostedOffersList(curStat => ({
                ...curStat,
                displayedListOfPostedOffers: postedOffers
            }))
        } else {
            const sortResults = postedOffers.filter(postedOffer => postedOffer.data.offerType == e.target.value)
            setPostedOffersList(curStat => ({
                ...curStat,
                displayedListOfPostedOffers: sortResults
            }))
        }
    }

    return (
        <>
            <section className="search-filter-posted-offers-container mb-5">
                <div className="row">

                    {/* row item 1 - sort */}
                    <div className="col-2">
                        <select className="form-select" onChange={handleSort}>
                            <option value="svi-oglasi">Svi oglasi</option>
                            <option value="prodajem">Na prodaju</option>
                            <option value="izdajem">Izdaje se</option>
                        </select>
                    </div>

                    {/* row item 2 - search feature */}
                    <div className="col-8">
                        <input type="text" className="form-control" id="searchByPlaceName" onChange={handleSearch} placeholder="Unesite naziv mesta" />
                    </div>

                    {/* row item 2 - display offers (grid view or list view) */}
                    <div className="col-2 text-end">
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
                    <PostedOffersGridView postedOffers={postedOffersList.displayedListOfPostedOffers} />
                ) : (
                    <PostedOffersListView postedOffers={postedOffersList.displayedListOfPostedOffers} />
                )}
            </section>
        </>
    )
}

export default PostedOffersContainer
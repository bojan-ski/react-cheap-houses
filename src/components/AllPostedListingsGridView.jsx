import PostedListingGridViewCard from "./PostedListingGridViewCard"
// import { useLoaderData } from 'react-router-dom'

const AllPostedListingsGridView = ({ allPostedListings, deleteUserPostedListing }) => {
    // const postedOffers = useLoaderData()
    // console.log(postedOffers);

    return (
        <div className='row'>
            {allPostedListings.map(postedListing => {
                return <PostedListingGridViewCard key={postedListing.id} postedListing={postedListing} deleteUserPostedListing={deleteUserPostedListing} />
            })}
        </div>
    )
}

export default AllPostedListingsGridView
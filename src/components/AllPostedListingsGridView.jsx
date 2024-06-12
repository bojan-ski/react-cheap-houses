import PostedListingGridViewCard from "./PostedListingGridViewCard"

const AllPostedListingsGridView = ({ allPostedListings, deleteUserPostedListing }) => {

    return (
        <div className='row'>
            {allPostedListings?.map(postedListing => {
                return <PostedListingGridViewCard key={postedListing.id} postedListing={postedListing} deleteUserPostedListing={deleteUserPostedListing} />
            })}
        </div>
    )
}

export default AllPostedListingsGridView
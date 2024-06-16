import PostedListingGridViewCard from "./PostedListingGridViewCard"

const AllPostedListingsGridView = ({ userDisplayedPostedListings, deleteUserPostedListing }) => {

    return (
        <div className='row'>
            {userDisplayedPostedListings?.map(postedListing => {
                return <PostedListingGridViewCard key={postedListing.id} postedListing={postedListing} deleteUserPostedListing={deleteUserPostedListing} />
            })}
        </div>
    )
}

export default AllPostedListingsGridView
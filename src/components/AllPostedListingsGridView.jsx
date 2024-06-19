import PostedListingGridViewCard from "./PostedListingGridViewCard"

const AllPostedListingsGridView = ({ userDisplayedPostedListings, deleteUserPostedListing }) => {
    // console.log(userDisplayedPostedListings);
    // console.log(userDisplayedPostedListings !== null);

    return (
        <div className='row'>
            {userDisplayedPostedListings !== null && userDisplayedPostedListings.length > 0 && (
                userDisplayedPostedListings?.map(postedListing => {
                    return <PostedListingGridViewCard key={postedListing.id} postedListing={postedListing} deleteUserPostedListing={deleteUserPostedListing} />
                })
            )}
            {/* {userDisplayedPostedListings?.map(postedListing => {
                return <PostedListingGridViewCard key={postedListing.id} postedListing={postedListing} deleteUserPostedListing={deleteUserPostedListing} />
            })} */}
        </div>
    )
}

export default AllPostedListingsGridView
import PostedListingListViewCard from "./PostedListingListViewCard"

const AllPostedListingsListView = ({ userDisplayedPostedListings }) => {
  return (
    <div className='row'>
      {userDisplayedPostedListings?.map(postedListing => {
        return <PostedListingListViewCard key={postedListing.id} {...postedListing} />
      })}
    </div>
  )
}

export default AllPostedListingsListView
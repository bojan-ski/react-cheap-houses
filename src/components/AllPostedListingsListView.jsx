import PostedListingListViewCard from "./PostedListingListViewCard"

const AllPostedListingsListView = ({ allPostedListings }) => {

  return (
    <div className='row'>
      {allPostedListings?.map(postedListing => {
        return <PostedListingListViewCard key={postedListing.id} {...postedListing} />
      })}
    </div>
  )
}

export default AllPostedListingsListView
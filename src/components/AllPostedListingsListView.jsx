import PostedListingListViewCard from "./PostedListingListViewCard"
// import { useLoaderData } from "react-router-dom"

const AllPostedListingsListView = ({ allPostedListings }) => {
  // const allPostedListings = useLoaderData()
  // console.log(allPostedListings);    

  return (
    <div className='row'>
      {allPostedListings.map(postedListing => {
        return <PostedListingListViewCard key={postedListing.id} {...postedListing} />
      })}
    </div>
  )
}

export default AllPostedListingsListView
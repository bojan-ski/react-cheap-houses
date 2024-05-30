// import { useLoaderData } from 'react-router-dom'
import PostedOffersListViewCard from './PostedOffersListViewCard'

const PostedOffersListView = ({ postedOffers }) => {
  // const postedOffers = useLoaderData()
  // console.log(postedOffers);

  return (
    <div className='row'>
      {postedOffers.map(postedOffer => {
        return <PostedOffersListViewCard key={postedOffer.id} {...postedOffer} />
      })}
    </div>
  )
}

export default PostedOffersListView
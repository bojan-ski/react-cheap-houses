import { useLoaderData } from 'react-router-dom'
import PostedOffersListViewCard from './PostedOffersListViewCard'

const PostedOffersListView = () => {
  const postedOffers = useLoaderData()

  return (
    <div className='row'>
      {postedOffers.map(postedOffer => {
        return <PostedOffersListViewCard key={postedOffer.id} {...postedOffer} />
      })}
    </div>
  )
}

export default PostedOffersListView
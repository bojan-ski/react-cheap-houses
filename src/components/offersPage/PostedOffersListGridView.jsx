import { useLoaderData } from 'react-router-dom'
import PostedOffersListCard from './PostedOffersListCard';

const PostedOffersGridView = () => {
    const postedOffers = useLoaderData()

    return (
        <div className='row'>
            {postedOffers.map(postedOffer => {
                return <PostedOffersListCard key={postedOffer.id} {...postedOffer} />
            })}
        </div>
    )
}

export default PostedOffersGridView
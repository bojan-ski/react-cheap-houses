// import { useLoaderData } from 'react-router-dom'
import PostedOffersGridViewCard from './PostedOffersGridViewCard';

const PostedOffersGridView = ({ postedOffers }) => {
    // const postedOffers = useLoaderData()
    // console.log(postedOffers);

    return (
        <div className='row'>
            {postedOffers.map(postedOffer => {
                return <PostedOffersGridViewCard key={postedOffer.id} {...postedOffer} />
            })}
        </div>
    )
}

export default PostedOffersGridView
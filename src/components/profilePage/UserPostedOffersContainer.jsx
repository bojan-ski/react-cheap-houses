import { useLoaderData } from "react-router-dom"
// components
import PostedOffersGridView from "../offersPage/PostedOffersGridView"

const UserPostedOffersContainer = () => {
    const userOffersList = useLoaderData()
    // console.log(userOffersList);

    // console.log(auth);

    // const [isLoading, setIsLoading] = useState(false)
    // const [userOffersList, setUserOffersList] = useState(null)

    // const fetchUserPostedOffers = async () => {
    //     const offersRef = collection(db, 'listings')
    //     const q = query(offersRef, where('userRef', '==', auth.currentUser.uid), orderBy('timestamp', 'desc'))

    //     const querySnap = await getDocs(q)

    //     let userOffersList = []

    //     querySnap.forEach((offer) => {
    //         return userOffersList.push({
    //             id: offer.id,
    //             data: offer.data
    //         })
    //     })

    //     setUserOffersList(userOffersList)
    //     setIsLoading(false)
    // }

    // useEffect(() => {
    //     setIsLoading(true)
    //     fetchUserPostedOffers()
    //     console.log(userOffersList);

    // }, [])

    // if (isLoading) return <Spinner />

    // if(userOffersList.length > 0){
    //     return <section>
    //         <h2 className="text-center fw-bold">
    //             Trenutno nemate objavljenih oglasa
    //         </h2>
    //     </section>
    // } 

    return (
        <section className="user-posted-offers mb-5">
            {!userOffersList ? (
                <h2 className="fw-bold text-center">
                    Trenutno nemate postavljenih oglasa
                </h2>
            ) : (
                <>
                    <h2 className="fw-bold text-center mb-5">
                        Moji oglasi
                    </h2>

                    {/* user posted offers/listings */}
                    <PostedOffersGridView postedOffers={userOffersList} />
                </>
            )}
        </section>
    )
}

export default UserPostedOffersContainer
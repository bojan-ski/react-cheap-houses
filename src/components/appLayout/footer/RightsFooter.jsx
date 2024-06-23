import { Link } from "react-router-dom"

const RightsFooter = () => {
  return (
    <div className="container">
        <div className='rights-footer my-4'>
            <p className='mb-0 text-center text-white'>
                Autorsko Pravo © 2022 - 2024 . <Link to='/' className="text-orange-hover">Portal JEFTINE KUĆE</Link> | Sva prava su zadržana | Code & Design <Link to='https://msdagencija.rs/' target="_blank" className="text-orange-hover">msd</Link>
            </p>
        </div>
    </div>
  )
}

export default RightsFooter
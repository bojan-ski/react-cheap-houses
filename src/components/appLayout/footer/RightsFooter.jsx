import { Link } from "react-router-dom"

const RightsFooter = () => {
  return (
    <div className="container">
        <div className='rights-footer my-4'>
            <p className='mb-0 text-center text-white'>
                Autorsko Pravo © 2022 - 2024 . <Link to='/'>Portal JEFTINE KUĆE</Link> | Sva prava su zadržana | Code & Design <Link to='https://msdagencija.rs/' target="_blank">msd</Link>
            </p>
        </div>
    </div>
  )
}

export default RightsFooter
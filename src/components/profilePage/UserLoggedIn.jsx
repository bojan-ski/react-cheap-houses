const UserLoggedIn = ({ userName, logOutUser, showPostNewOffer, setShowPostNewOffer }) => {

    return (
        <section className="page-heading my-5">
            <div className="mb-4">
                <h1 className="text-center fw-bold">
                    Dobrodošli 
                </h1>
                <h2 className="text-center fw-bold">
                    {userName.toUpperCase()}
                </h2>
            </div>

            <div className="row text-center">
                {/* row item 1 */}
                <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <h5 className="fw-bold mb-3">
                        Ako zelite objavili Vaš oglas:
                    </h5>
                    <button className="btn bg-orange-hover text-white fw-bold" onClick={()=>setShowPostNewOffer(!showPostNewOffer)}>
                        Postavi oglas
                    </button>
                </div>

                {/* row item 2 */}
                <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <h5 className="fw-bold mb-3">
                        Ako zelite da se odjavite (log out):
                    </h5>
                    <button className="btn bg-danger text-white fw-bold" onClick={logOutUser}>
                        Odjavi se
                    </button>
                </div>
                
            </div>
        </section>
    )
}

export default UserLoggedIn
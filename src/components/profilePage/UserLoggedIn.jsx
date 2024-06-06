import { useGlobalContext } from "../../context"

const UserLoggedIn = ({ userName, showPostNewListingForm, setShowPostNewListingForm }) => {
    const {logOutUser} = useGlobalContext()

    return (
        <section className="page-heading my-5">
            <div className="mb-4">
                <h2 className="text-center fw-bold">
                    Dobrodošli 
                </h2>
                <h2 className="text-center fw-bold">
                    {userName.toUpperCase()}
                </h2>
            </div>

            <div className="row text-center">
                {/* row item 1 */}
                <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <h5 className="text-muted mb-3">
                        Ako zelite objaviti Vaš oglas:
                    </h5>
                    <button className="btn bg-orange-hover text-white fw-bold" onClick={()=>setShowPostNewListingForm(!showPostNewListingForm)}>
                        Postavi oglas
                    </button>
                </div>

                {/* row item 2 */}
                <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <h5 className="text-muted mb-3">
                        Ako zelite da se odjavite (log out):
                    </h5>
                    <button type="button" className="btn btn-danger fw-bold" onClick={logOutUser}>
                        Odjavi se
                    </button>
                </div>
                
            </div>
        </section>
    )
}

export default UserLoggedIn
import logInModalImg from '../assets/header-assets/jeftine_kuce_login_bg.jpg'

const ForgotPassword = () => {
    const handleNewPasswordSubmit = e =>{
        e.preventDefault()
        console.log(e);
        console.log(e.target);
        console.log(e.target.elements);
    }

    return (
        <div className="modal fade" id="forgotPasswordModal" tabIndex="-1" aria-labelledby="forgotPasswordModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                {/* <div className="w-50 mx-auto modal-dialog-centered"> */}
                <div className="modal-content">
                    <div className="row">

                        {/* row item 1 */}
                        <div className="col-5 d-none d-xl-block">
                            <img src={logInModalImg} alt="forgotPassword-img" className="h-100 img-fluid" />
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-xl-7 p-4">
                            {/* modal-header */}
                            <div className="modal-header border-0">
                                <h2 className="modal-title fw-bolder">
                                    Zaboraviliste šifru?
                                </h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>

                            {/* modal-body */}
                            <div className="modal-body">
                                {/* form */}
                                <form onSubmit={handleNewPasswordSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="userName" className="col-form-label fw-bolder mb-1">
                                            Korisničko ime
                                        </label>
                                        <input type="text" className="form-control" id="userName" placeholder="vaše korisničko ime" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="userEmail" className="col-form-label fw-bolder mb-1">
                                            Email adresa (elektronska pošta)
                                        </label>
                                        <input type="email" className="form-control" id="userEmail" placeholder="vaše email adresa" required />
                                    </div>
                                    <button type="submit" className="forgot-password-btn btn fw-bolder text-white py-3 w-100 rounded-4">
                                        Šifra
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
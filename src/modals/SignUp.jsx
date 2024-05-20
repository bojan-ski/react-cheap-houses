import registrationModalImg from '../assets/header-assets/jeftine_kuce_register_bg.jpg'

const SignUp = () => {
    return (
        <div className="modal fade" id="signUpModal" tabIndex="-1" aria-labelledby="signUpModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                {/* <div className="w-50 mx-auto modal-dialog-centered"> */}
                <div className="modal-content">
                    <div className="row">

                        {/* row item 1 */}
                        <div className="col-5 d-none d-xl-block">
                            <img src={registrationModalImg} alt="registration-img" className="h-100 img-fluid" />
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-xl-7 p-4">
                            {/* modal-header */}
                            <div className="modal-header border-0">
                                <h2 className="modal-title fw-bolder" id="signUpModalLabel">
                                    Registracija
                                </h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            {/* modal-body */}
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="userRegistrationName" className="col-form-label fw-bolder mb-1">
                                            Korisničko ime
                                        </label>
                                        <input type="text" className="form-control" id="userRegistrationName" placeholder="vaše korisničko ime" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="userRegistrationEmail" className="col-form-label fw-bolder mb-1">
                                            Email adresa (elektronska pošta)
                                        </label>
                                        <input type="email" className="form-control" id="userRegistrationEmail" placeholder="vaše email adresa" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="userRegistrationPassword" className="col-form-label fw-bolder mb-1">
                                            Lozinka
                                        </label>
                                        <input type="password" className="form-control" id="userRegistrationPassword" placeholder="vaše lozinka" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="userConfirmRegistrationPassword" className="col-form-label fw-bolder mb-1">
                                            Potvrda lozinke
                                        </label>
                                        <input type="password" className="form-control" id="userConfirmRegistrationPassword" placeholder="potvrda vaše lozinke" required />
                                    </div>
                                    <button type="submit" className="registration-btn btn fw-bolder text-white py-3 w-100 rounded-4">
                                        Registrujte se
                                    </button>
                                </form>
                            </div>
                            
                            {/* modal-footer */}
                            <div className="modal-footer border-0 justify-content-center">
                                <p>
                                    Već posedujete nalog na našem portalu?
                                </p>
                                <button type="button" className="btn p-0 m-0" data-bs-toggle="modal" data-bs-target="#logInModal">
                                    Prijavite se
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
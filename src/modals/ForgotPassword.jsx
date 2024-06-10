import { useNavigate } from 'react-router-dom'
// firebase/firestore funcs
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
// app asset
import logInModalImg from '../assets/header-assets/jeftine_kuce_login_bg.jpg'

const ForgotPassword = () => {
    const navigate = useNavigate()

    const handleNewPasswordSubmit = (e) =>{
        e.preventDefault()

        const enteredEmail = e.target.elements[0].value.trim()

        resetPassword(enteredEmail)

        e.target.elements[0].value = ''
    }

    const resetPassword = async (enteredEmail) => {
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, enteredEmail)

            // success message
            console.log('Proverite svoj email radi promere sifre');

            // after the user has submitted for a new password, the user is redirected to the Profile page
            navigate('/nalog')
        } catch (error) {
            console.log(error);
        }
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
                                    {/* <div className="mb-3">
                                        <label htmlFor="userName" className="col-form-label fw-bolder mb-1">
                                            Korisničko ime
                                        </label>
                                        <input type="text" className="form-control" id="userName" placeholder="vaše korisničko ime" required />
                                    </div> */}
                                    <div className="mb-4">
                                        <label htmlFor="userEmail" className="col-form-label fw-bolder mb-1">
                                            Email adresa (elektronska pošta)
                                        </label>
                                        <input type="email" className="form-control" id="userEmail" placeholder="vaše email adresa" required />
                                    </div>
                                    <button type="submit" className="forgot-password-btn btn fw-bolder text-white py-3 w-100 rounded-4">
                                        Nova Šifra
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
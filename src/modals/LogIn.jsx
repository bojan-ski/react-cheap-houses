import logInModalImg from '../assets/header-assets/jeftine_kuce_login_bg.jpg'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const LogIn = () => {
    const navigate = useNavigate()

    const handleLogInSubmit = e => {
        e.preventDefault()

        const enteredEmail = e.target.elements[0].value.trim()
        const enteredPassword = e.target.elements[1].value

        logInUser(enteredEmail, enteredPassword)

        e.target.elements[0].value = ''
        e.target.elements[1].value = ''
    }

    const logInUser = async (enteredEmail, enteredPassword) =>{
        try {
            const auth = getAuth()
            await signInWithEmailAndPassword(auth, enteredEmail, enteredPassword) 

            // after the user has logged in, the user is redirected to the Profile page
            navigate('/moj-nalog')
        } catch (error) {
            console.log(error);            
        }       
    }

    return (
        <div className="modal fade" id="logInModal" tabIndex="-1" aria-labelledby="logInModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                {/* <div className="w-50 mx-auto modal-dialog-centered"> */}
                <div className="modal-content">
                    <div className="row">

                        {/* row item 1 */}
                        <div className="col-5 d-none d-xl-block">
                            <img src={logInModalImg} alt="logIn-img" className="h-100 img-fluid" />
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-xl-7 p-4">
                            {/* modal-header */}
                            <div className="modal-header border-0">
                                <h2 className="modal-title fw-bolder">
                                    Prijava
                                </h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>

                            {/* modal-body */}
                            <div className="modal-body">
                                {/* form */}
                                <form onSubmit={handleLogInSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="userLogInEmail" className="col-form-label fw-bolder mb-1">
                                            Email adresa (elektronska pošta)
                                        </label>
                                        <input type="email" className="form-control" id="userLogInEmail" placeholder="vaše email adresa" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="userLogInPassword" className="col-form-label fw-bolder mb-1">
                                            Lozinka
                                        </label>
                                        <input type="password" className="form-control" id="userLogInPassword" placeholder="vaše lozinka" required />
                                    </div>
                                    <button type="submit" className="log-in-btn btn fw-bolder text-white py-3 w-100 rounded-4">
                                        Prijavite se
                                    </button>
                                </form>

                                {/* forgot password btn */}
                                <div className='forgot-password-container text-end'>
                                    <button type="button" className="btn p-0 mt-2" data-bs-toggle="modal" data-bs-target="#forgotPasswordModal">
                                        Zaboravili ste lozinku?
                                    </button>
                                </div>
                            </div>

                            {/* modal-footer */}
                            <div className="modal-footer border-0 justify-content-center">
                                <p>
                                    Da li još uvek niste naš registrovani korisnik?
                                </p>
                                <button type="button" className="btn p-0 m-0" data-bs-toggle="modal" data-bs-target="#signUpModal">
                                    Registrujte se
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn
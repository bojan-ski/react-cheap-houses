import { useState } from "react"
import { Link } from "react-router-dom"
import footerIcon1 from '../../../assets/footer-assets/jeftine_kuce_footer_1.png'
import footerIcon2 from '../../../assets/footer-assets/jeftine_kuce_footer_2.png'


const MainFooterContent = () => {
    const [submittedEmail, setSubmittedEmail] = useState()

    const handleNewsletterEmailSummation = (e) => {
        e.preventDefault()
        
        setSubmittedEmail(e.target.elements[0].value);
        e.target.elements[0].value = ""
    }

    return (
        <div className="container">
            <div className="main-footer-content">
                <div className="row">

                    {/* row item 1 */}
                    <div className="col-12 col-lg-6 mb-5">
                        <div className="group-icon">
                            <div className="box-icons d-flex rounded-3">
                                <div className="images me-3">
                                    <img src={footerIcon1} alt="img-footer-1" />
                                </div>

                                <div className="content">
                                    <h3 className="mb-3 fw-bold">
                                        Tražite nekretninu
                                    </h3>
                                    <p>
                                        Ukoliko tražite bilo kakvu vrstu nekretnine (kupovina ili najam), tu smo za vas, od bogate ponude, preko stručnih saveta, pa do pomoći naših iskusnih menadžera iz ovih oblasti.
                                    </p>
                                </div>
                            </div>
                            <div className="button-footer text-center">
                                <Link to='/kontakt' className="cs-button text-white px-5 py-3 rounded-3">
                                    Kontakt
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* row item 2 */}
                    <div className="col-12 col-lg-6 mb-5">
                        <div className="group-icon">
                            <div className="box-icons d-flex rounded-3">
                                <div className="images me-3">
                                    <img src={footerIcon2} alt="img-footer-2" />
                                </div>

                                <div className="content">
                                    <h3 className="mb-3 fw-bold">
                                        Prodajete / Izdajete
                                    </h3>
                                    <p>
                                        Ukoliko prodajete ili možda iznajmljujete bilo kakvu vrstu nepokretnosti, onda se nalazite na pravom mestu. Možete postaviti oglas, zatražiti savet ili dobiti ličnog menadžera.
                                    </p>
                                </div>
                            </div>
                            <div className="button-footer text-center">
                                <Link to='/kontakt' className="cs-button text-white px-5 py-3 rounded-3">
                                    Kontakt
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* row item 3 */}
                    <div className="col-12 col-md-6 col-lg-3 mb-5">
                        <div className="widget-info text-white">
                            <h5 className="mb-4">
                                Adresa
                            </h5>
                            <p className="sub-title mb-1">
                                Info Centar:
                            </p>
                            <p className="mb-3 fw-bolder">
                                Tabačka Čaršija BB, 12000 Požarevac
                            </p>
                            <p className="sub-title mb-1">
                                Kancelarije:
                            </p>
                            <p className="mb-1">
                                Naselje Tulba BB, 12000 Požarevac
                            </p>
                            <p className="mb-1">
                                Naselje Tulba BB, 12000 Požarevac
                            </p>
                        </div>
                    </div>

                    {/* row item 4 */}
                    <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <div className="widget-info text-white">
                            <h5 className="mb-4">
                                Kontakt
                            </h5>
                            <div className="row">
                                <div className="col-6 director-info mb-2">
                                    <p className="sub-title mb-1">
                                        Generalni Direktor:
                                    </p>
                                    <p className="fw-bolder mb-1">
                                        Dejan Stošić
                                    </p>
                                    <p className="sub-title mb-1">
                                        Telefon:
                                    </p>
                                    <p className="mb-1">
                                        +381 66 60 70 222
                                    </p>
                                    <p className="sub-title mb-1">
                                        Elektronska pošta:
                                    </p>
                                    <p className="mb-1">
                                        jeftinekuce@gmail.com
                                    </p>
                                </div>
                                <div className="col-6 director-info mb-2">
                                    <p className="sub-title mb-1">
                                        Menadžer:
                                    </p>
                                    <p className="fw-bolder mb-1">
                                        Nenad
                                    </p>
                                    <p className="sub-title mb-1">
                                        Telefon:
                                    </p>
                                    <p className="mb-1">
                                        +381 66 60 70 222
                                    </p>
                                    <p className="sub-title mb-1">
                                        Elektronska pošta:
                                    </p>
                                    <p className="mb-1">
                                        jeftinekuce@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* row item 5 */}
                    <div className="col-12 col-md-6 col-lg-2 mb-5">
                        <div className="widget-info text-white">
                            <h5 className="mb-4">
                                Kategorije
                            </h5>
                            <ul className="footer-category-links list-unstyled">
                                <li className="footer-category-link mb-2">
                                    <Link to='/'>
                                        Kuće
                                    </Link>
                                </li>
                                <li className="footer-category-link mb-2">
                                    <Link to='/'>
                                        Stanovi
                                    </Link>
                                </li>
                                <li className="footer-category-link mb-2">
                                    <Link to='/'>
                                        Vikendice
                                    </Link>
                                </li>
                                <li className="footer-category-link mb-2">
                                    <Link to='/'>
                                        Placevi
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* row item 6 */}
                    <div className="col-12 col-md-6 col-lg-3 mb-5">
                        <div className="widget-info text-white">
                            <h5 className="mb-4">
                                Novosti sa portala
                            </h5>
                            <p>
                                Ukoliko ste zainteresovani da primate obaveštenja sa Portala "Jeftine Kuće", registrujte se ovde:
                            </p>
                            <form onSubmit={handleNewsletterEmailSummation}>
                                <input type="email" className="form-control p-2 mb-2" name="email" id="email" placeholder="Vaša adresa elektronske pošte" required/>
                                <button type="submit" className="footer-form-btn btn text-white fw-bolder w-100 mb-2">
                                    Prijavite se {'->'}
                                </button>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" name="check" id="check" required/>
                                    <label className="form-check-label" htmlFor="check">
                                        Slažem se da primam elektronsku poštu sa ovog portala
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFooterContent
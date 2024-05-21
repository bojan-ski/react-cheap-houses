import { FaRegPaperPlane } from "react-icons/fa"

const ContactForm = () => {
    const handleContactFormSubmit = e => {
        e.preventDefault()

        console.log(e.target.elements[0].value);
        console.log(e.target.elements[1].value);
        console.log(e.target.elements[2].value);
        console.log(e.target.elements[3].value);
    }

    return (
        <div className="container">
            <section className="contact-form rounded-4 p-4 mx-5">
                <div className="heading-section text-center mb-4">
                    <h3 className="fw-bolder">
                        K O N T A K T
                    </h3>
                    <p className="fw-bold text-muted">
                        Ukoliko imate dodatnih pitanja vezano za bilo koju od naših aktivnosti i delokruga rada molimo Vas da nas kontaktirate preko ove forme.
                    </p>
                </div>

                <form onSubmit={handleContactFormSubmit}>
                    <div className="row">

                        {/* row item 1 */}
                        <div className="col-12 col-lg-4 mb-4">
                            <label htmlFor="userContactFormName" className="form-label fw-bold">
                                Vaše ime i prezime
                            </label>
                            <input type="text" className="form-control px-3 py-2" id="userContactFormName" placeholder="vaše ime i prezime" required />
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-lg-4 mb-4">
                            <label htmlFor="userContactFormEmail" className="form-label fw-bold">
                                Adresa E-Pošte
                            </label>
                            <input type="email" className="form-control px-3 py-2" id="userContactFormEmail" placeholder="vaša adresa e-pošte" required />
                        </div>

                        {/* row item 3 */}
                        <div className="col-12 col-lg-4 mb-4">
                            <label htmlFor="topic" className="form-label fw-bold">
                                Tema kontakta
                            </label>
                            <select id="topic" className="form-select px-3 py-2">
                                <option>Odaberite</option>
                                <option value="Prodaja" className="option">Prodaja</option>
                                <option value="Kupovina" className="option">Kupovina</option>
                                <option value="Najam" className="option">Najam</option>
                                <option value="Renoviranje" className="option">Renoviranje</option>
                                <option value="Dekoracije" className="option">Dekoracije</option>
                                <option value="Majstori" className="option">Majstori</option>
                                <option value="Ostalo" className="option">Ostalo</option>
                            </select>
                        </div>

                        {/* row item 4 */}
                        <div className="col-12 mb-3">
                            <label htmlFor="userContactFormMessage" className="form-label fw-bold">
                                Poruka
                            </label>
                            <textarea rows="5" className="form-control" id="userContactFormMessage" placeholder="tekst vaše poruke..." required />
                        </div>
                    </div>
                    <button type="submit" className="contact-form-btn btn text-white">
                        <FaRegPaperPlane />
                        <span className="fw-bold">
                            Pošaljite zahtev
                        </span>                        
                    </button>
                </form>
            </section>
        </div>
    )
}

export default ContactForm
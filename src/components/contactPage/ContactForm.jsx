//data
import contactTopic from "../../data/contactTopic"
// react icon
import { FaRegPaperPlane } from "react-icons/fa"

const ContactForm = () => {
    const handleContactFormSubmit = e => {
        e.preventDefault()

        console.log(e.target.elements[0].value);
        console.log(e.target.elements[1].value);
        console.log(e.target.elements[2].value);
        console.log(e.target.elements[3].value);

        e.target.elements[0].value = '';
        e.target.elements[1].value = '';
        e.target.elements[2].value = 'Odaberite';
        e.target.elements[3].value = '';
    }

    return (
        <section className="contact-form py-3">
            <div className="container">

                <div className="form-area rounded-4 py-5 px-4 mx-lg-5">
                    <div className="heading-section text-center mb-4">
                        <h3 className="fw-bolder mb-3">
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
                                    {contactTopic.map((topic, idx) => {
                                        return <option key={idx} value={topic} className="option">
                                            {topic}
                                        </option>
                                    })}
                                </select>
                            </div>

                            {/* row item 4 */}
                            <div className="col-12 mb-4">
                                <label htmlFor="userContactFormMessage" className="form-label fw-bold">
                                    Poruka
                                </label>
                                <textarea rows="5" className="form-control" id="userContactFormMessage" placeholder="tekst vaše poruke..." required />
                            </div>
                        </div>
                        <button type="submit" className="contact-form-btn bg-orange-hover btn text-white d-flex align-items-center">
                            <FaRegPaperPlane />
                            <span className="fw-bold">
                                Pošaljite zahtev
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
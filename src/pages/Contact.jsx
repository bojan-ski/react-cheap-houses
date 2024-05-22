import PageLocation from '../components/PageLocation';
import ContactDetails from '../components/contactPage/ContactDetails'
import ContactMap from '../components/contactPage/ContactMap'
import ContactForm from '../components/contactPage/ContactForm'

const Contact = () => {
  return (
    <div className='contact-page'>
      {/* page location */}
      <PageLocation />

      {/* section 1 - details */}
      <ContactDetails />

      {/* section 2 - map */}
      <ContactMap />

      {/* section 3 - form */}
      <ContactForm />
    </div>
  )
}

export default Contact
import ContactDetails from '../components/contactPage/ContactDetails'
import ContactForm from '../components/contactPage/ContactForm'
import ContactMap from '../components/contactPage/ContactMap'

const Contact = () => {
  return (
    <div className='contact-page'>
      

        {/* section 1 - details */}
        <ContactDetails/>

        {/* section 2 - map */}
        <ContactMap />

        {/* section 3 - form */}
        <ContactForm/>
    </div>
  )
}

export default Contact
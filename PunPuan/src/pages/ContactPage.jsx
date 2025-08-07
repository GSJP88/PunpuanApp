import React from 'react'
import ContactAdmin from "../components/contactAdmin/ContactAdmin"
import "../Styles/contactPage.css"
const ContactPage = () => {
  return (
    <div className='contact-page-container box_container container'>
      <div className="contact-left">
        <h2>Follow Us on Social media Platform</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, animi!</p>
        <div className="contact-social-media">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-whatsapp"></i>
          <i class="bi bi-envelope-at"></i>
        </div>
      </div>
      <div className="contact-right">
        <div className="contact-send">
          <ContactAdmin/>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

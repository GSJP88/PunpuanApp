import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contactLandlord.css"

const contactLandlord = () => {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oqtw4ku', 'template_vndvdjp', form.current, {
        publicKey: 'O356Xbp9SBvbpKfGh',
      })
      e.target.reset()
  };

  return (
            <div className="contact_container ">
                <div className="contact__content">
                    <h2 className="contact__title">Send email to Landlord</h2>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Your name"/>
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Yourname@gmail.com"/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Message</label>
                            <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder="Message"></textarea>
                        </div>
                        
                        <button className="contact-button medium-button">
                            Send to email
                        <i class="bi bi-send-fill"></i>
                        </button>
                    </form>
                </div>
            </div>
  )
}

export default contactLandlord;
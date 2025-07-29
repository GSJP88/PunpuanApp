import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../../Styles/comment.css"

const Contact = () => {
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
    <section className="comment" id="comment">
            <div className="comment__container  grid">
                <div className="comment__content">
                    <h2 className="comment__title title">Comment</h2>

                    <form ref={form} onSubmit={sendEmail} className="comment__form">

                        <div className="comment__form-div">
                            <label className="comment__form-tag">Name</label>
                            <input type="text" name="name" className="comment__form-input" placeholder="Your name"/>
                        </div>

                        <div className="comment__form-div">
                            <label className="comment__form-tag">Email</label>
                            <input type="email" name="email" className="comment__form-input" placeholder="Yourname@gmail.com"/>
                        </div>

                        <div className="comment__form-div comment__form-area">
                            <label className="comment__form-tag">Comment</label>
                            <textarea name="message" cols="30" rows="10" className="comment__form-input" placeholder="Message"></textarea>
                        </div>
                        
                        <button className="send-button medium-button">
                            Send Message
                        <i class="bi bi-send-fill .button__icon"></i>
                        </button>
                    </form>
                </div>

            </div>
    </section>
  )
}

export default Contact;
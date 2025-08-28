import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import "../../Styles/contactAdmin.css";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_oqtw4ku',
      'template_vndvdjp',
      form.current,
      { publicKey: 'O356Xbp9SBvbpKfGh' }
    );
    e.target.reset();
  };

  return (
    <section className="comment">
      <div className="comment__container grid">
        <div className="comment__content" id="comment">
          <h2 className="comment__title title">{t('contact_admin.title')}</h2>

          <form ref={form} onSubmit={sendEmail} className="comment__form">
            <div className="comment__form-div">
              <label className="comment__form-tag">{t('contact_admin.name')}</label>
              <input
                type="text"
                name="name"
                className="comment__form-input"
                placeholder={t('contact_admin.name_placeholder')}
              />
            </div>

            <div className="comment__form-div">
              <label className="comment__form-tag">{t('contact_admin.email')}</label>
              <input
                type="email"
                name="email"
                className="comment__form-input"
                placeholder={t('contact_admin.email_placeholder')}
              />
            </div>

            <div className="comment__form-div comment__form-area">
              <label className="comment__form-tag">{t('contact_admin.comment')}</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="comment__form-input"
                placeholder={t('contact_admin.comment_placeholder')}
              ></textarea>
            </div>

            <button className="send-button medium-button">
              {t('contact_admin.send_message')}
              <i className="bi bi-send-fill button__icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
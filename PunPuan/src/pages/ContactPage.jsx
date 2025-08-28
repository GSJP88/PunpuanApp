import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactAdmin from "../components/contactAdmin/ContactAdmin";
import "../Styles/contactPage.css";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className='contact-page-container box_container container'>
      <div className="contact-left">
        <h2>{t('follow_us')}</h2>
        <p>{t('hero_subtitle')}</p>
        <div className="contact-social-media">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-whatsapp"></i>
          <i className="bi bi-envelope-at"></i>
        </div>
      </div>
      <div className="contact-right">
        <div className="contact-send">
          <ContactAdmin />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

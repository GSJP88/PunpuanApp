import React from 'react';
import '../../Styles/footer.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaWhatsappSquare, FaCalculator, FaPhone, FaYoutube, FaPhoneAlt, FaFacebookMessenger, FaMailBulk, FaMailchimp, FaVoicemail, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const tags = ["Condominium", "Townhouse", "Apartment", "House"];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Logo and Text */}
        <div className="footer-section">
          <h2 className="footer-title">PUNPUAN</h2>
          <p className="footer-text">
            {t('footer.description')}
          </p>
          <a href="#" className="footer-read-more">{t('footer.read_more')} →</a>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3 className="footer-subtitle">{t('footer.menu')}</h3>
          <ul className="footer-links">
            <li>
                <Link to="/">{t('footer.home')}</Link>
            </li>
            <li>
                <Link to="/about">{t('footer.about_us')}</Link>
            </li>
            <li>
                <Link to="/explore">{t('footer.explore')}</Link>
            </li>
            <li>
                <Link to="/contact">{t('footer.contact')}</Link>
            </li>
          </ul>
        </div>

        {/* Tag Cloud */}
        <div className="footer-section">
          <h3 className="footer-subtitle">{t('footer.types_of_property')}</h3>
          <div className="footer-tags">
            {tags.map(tag => (
              <span className="footer-tag" key={tag}>{t(`footer.tags.${tag}`)}</span>
            ))}
          </div>
        </div>

        {/* Subscribe & Social */}
        <div className="footer-section">
          <h3 className="footer-subtitle">{t('footer.subscribe')}</h3>
          <div className="footer-subscribe">
            <input type="email" placeholder={t('footer.enter_email')} />
            <button><i className="bi bi-send-fill"></i></button>
          </div>
          <h4 className="footer-subtitle">{t('footer.contact_us')}</h4>
          <div className="footer-social">
            <a href="#"><FaPhoneAlt /></a>
            <a href="#"><FaFacebookMessenger /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          {t('footer.bottom_text')}
          <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer"> PunPuan.com</a>
        </p>
        <div className="footer-bottom-links">
          <a href="#">{t('footer.terms')}</a>
          <a href="#">{t('footer.privacy')}</a>
          <a href="#">{t('footer.compliances')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
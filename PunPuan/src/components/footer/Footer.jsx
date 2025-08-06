import React from 'react';
import '../../Styles/footer.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaWhatsappSquare, FaCalculator, FaPhone, FaYoutube, FaPhoneAlt, FaFacebookMessenger, FaMailBulk, FaMailchimp, FaVoicemail, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const tags = ["Condominiem", "Townhouses", "Apartment", "House"];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Logo and Text */}
        <div className="footer-section">
          <h2 className="footer-title">PUNPUAN</h2>
          <p className="footer-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias modi maiores unde.
          </p>
          <a href="#" className="footer-read-more">read more →</a>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3 className="footer-subtitle">MENU</h3>
          <ul className="footer-links">
            <li>
                <Link to="/">
                  Home
                </Link>
            </li>
            <li>
                <Link to="/">
                  About us
                </Link>
            </li>
            <li>
                <Link to="/">
                  Explore
                </Link>
            </li>
            <li>
                <Link to="/">
                  Contact
                </Link>
            </li>
            
          </ul>
        </div>

        {/* Tag Cloud */}
        <div className="footer-section">
          <h3 className="footer-subtitle">TYPES OF PROPERTY</h3>
          <div className="footer-tags">
            {tags.map(tag => (
              <span className="footer-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Subscribe & Social */}
        <div className="footer-section">
          <h3 className="footer-subtitle">SUBSCRIBE</h3>
          <div className="footer-subscribe">
            <input type="email" placeholder="Enter email address" />
            <button><i class="bi bi-send-fill"></i></button>
          </div>
          <h4 className="footer-subtitle">CONTACT US</h4>
          <div className="footer-social">
            <a href="#"><FaPhoneAlt /></a>
            <a href="#"><FaFacebookMessenger /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eum quas. Obcaecati repellat voluptate repellendus.
          <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer"> PunPuan.com</a>
        </p>
        <div className="footer-bottom-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Compliances</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

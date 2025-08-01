import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <a href="index.html" className="nav__logo">
          PunPuan
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <div className="nav__close">
            <i className="bi bi-x-circle-fill" onClick={() => setToggle(!toggle)}></i>
          </div>

          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link active-link">
                <i className="bi bi-house-door nav__icon"></i>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/aboutPage" className="nav__link active-link">
                <i class="bi bi-info-circle nav__icon"></i>
                About us
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/landlordNotification" className="nav__link active-link">
                <i className="bi bi-search nav__icon"></i>
                Explore
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contactPage" className="nav__link active-link">
                <i className="bi bi-envelope nav__icon"></i>
                Contact
              </Link>
            </li>
            <li className="nav__item sign_in">
              <Link to="/loginPage" className="nav__link active-link">
                <i className="bi bi-people"></i>
                Sign In
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="bi bi-list"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { useTranslation } from 'react-i18next'; // 👈 import hook
import bgImage from '../../assets/citytown2.png';
import bgImage2 from '../../assets/citytown3.png';
import Hero from './Hero';
import Banner from './Banner';
import '../../Styles/Homes.css';
import '../../Service/i18n/i18n';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="home section" id="home">
      <div className="home__container">
        <div className="home__content grid">
          <div className="home__img"></div>
          <Hero />
          <Banner />
          {/* <Social />
          <Data /> */}
        </div>
      </div>

      <div className="bgImage">  
        <img src={bgImage} alt="" />          
        <img src={bgImage2} alt="" />          
      </div>

      <div className="mini__scroll">
        <a href="#filter" className="mini__scroll-button button--flex">
          <span className="mini__scroll-text">{t('see_more')}</span>
          <i className="bi bi-caret-down-fill"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;

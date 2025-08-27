import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../Service/i18n/i18n'; // i18n config

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="hero">
      <h1 className='hero-title'>{t('hero_title')}</h1>
      <p className='hero-subtitle'>{t('hero_subtitle')}</p>
      <p className='hero-description'>{t('hero_description')}</p>
      <div className="hero-buttons">
        <button className="btn-st" onClick={() => navigate('/registerPage/tenant')}>
          {t('tenant')}
          <i className="bi bi-person-raised-hand"></i>
        </button>
        <button className="btn-nth" onClick={() => navigate('/registerPage/landlord')}>
          {t('landlord')}
          <i className="bi bi-houses-fill"></i>
        </button>
      </div>
    </section>
  );
};

export default Hero;

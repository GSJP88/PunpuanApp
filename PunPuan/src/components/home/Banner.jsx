import React from 'react';
import Image from '../../assets/condo.jpg'; // Replace with actual image
import ScrollDown from "./ScrollDown";

import apartmentImg from '../../assets/apm2.jpg';
import condoImg from '../../assets/cd.jpg';
import townhousesImg from '../../assets/townhouses.jpg';
import houseImg from '../../assets/house.jpg';

import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <section className="banner">
      <div className="banner-text">
        <p className="event-tag">{t('banner_event_tag')}</p>
        <h2 className='banner-title'>{t('banner_title')}</h2>
        <p className="banner-subtitle">{t('banner_subtitle')}</p>
      </div>
      <div className="banner-image">
        {/* <img src={Image} alt="Professional Woman" /> */}
        <div className="floating-types">
          <div className="banner-type">
            {/* <div className="type-image"
                  style={{
                  backgroundImage: `url(${apartmentImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}/> */}
              <i class="bi bi-building-fill"></i>
              <p>{t('apartment')}</p>
          </div>
          <div className="banner-type">
            {/* <div className="type-image"
                  style={{
                  backgroundImage: `url(${condoImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
            }}/> */}
              <i class="bi bi-buildings-fill"></i>
              <p>{t('condominium')}</p>
          </div>
          <div className="banner-type">
            {/* <div className="type-image"
                  style={{
                  backgroundImage: `url(${townhousesImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}/> */}
              <i class="bi bi-houses-fill"></i>
              <p>{t('townhouses')}</p>
          </div>
          <div className="banner-type">
              <i class="bi bi-house-fill"></i>
              <p>{t('house')}</p>
          </div>
        </div>
      </div>
      <ScrollDown />
    </section>
  );
};

export default Banner;

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Condo from '../../assets/condo.jpg';
import Town from '../../assets/town.jpg';
import Room from '../../assets/room.jpg';
import '../../Styles/slider.css';

const slidesData = [
  {
    image: Condo,
    titleKey: 'slider.slide1.title',
    subtitleKey: 'slider.slide1.subtitle',
  },
  {
    image: Room,
    titleKey: 'slider.slide2.title',
    subtitleKey: 'slider.slide2.subtitle',
  },
  {
    image: Town,
    titleKey: 'slider.slide3.title',
    subtitleKey: 'slider.slide3.subtitle',
  }
];

const Slider = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slidesData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper container">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="text-content">
            <h2>{t(slide.titleKey)}</h2>
            <p>{t(slide.subtitleKey)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
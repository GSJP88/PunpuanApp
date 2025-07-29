import React, { useEffect, useState } from 'react';
import Condo from '../../assets/condo.jpg';
import Town from '../../assets/town.jpg';
import Room from '../../assets/room.jpg';
import '../../Styles/slider.css';

const slides = [
  {
    image: Condo,
    title: 'Find Your Perfect Home — Fast & Easy',
    subtitle: 'Explore Rental Rooms, Apartments, and Houses Across Laos',
  },
  {
    image: Room,
    title: 'Live in Comfort and Style',
    subtitle: 'Discover Affordable Homes in Prime Locations',
  },
  {
    image: Town,
    title: 'Secure Your Next Home Today',
    subtitle: 'Browse Listings with Just a Few Clicks',
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000); // 2 seconds delay

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="text-content">
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;

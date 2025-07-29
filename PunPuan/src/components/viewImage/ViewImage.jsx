import React, { useState } from 'react';
import '../../Styles/viewImage.css';
import Condo from '../../assets/condo.jpg';
import Town from '../../assets/town.jpg';
import Room from '../../assets/room.jpg';
import Apartment from '../../assets/apartment.jpg';
import TownB from '../../assets/skyscrapers-distance.jpg';

const images = [
  Condo,
  Town,
  Room,
  Apartment,
  TownB,
];

const ViewImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };


  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="view-image-container">
      <div className="main-image-wrapper">
        <button className="arrow-button left" onClick={goToPrevious}>❮</button>
        <img src={images[currentIndex]} alt={`img-${currentIndex}`} className="main-image" />
        <button className="arrow-button right" onClick={goToNext}>❯</button>
      </div>
      <div className="thumbnail-row">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`thumb-${index}`}
            className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewImage;

import React, { useState } from 'react';

const PropertyImgSlide = ({ property }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!property.images || property.images.length === 0) return <p>No images available</p>;

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="view-image-container" key={property.id || property.Room_ID}>
      <div className="main-image-wrapper">
        <button className="arrow-button left" onClick={goToPrevious}>❮</button>
        <img src={property.images[currentIndex]} alt={`img-${currentIndex}`} className="main-image" />
        <button className="arrow-button right" onClick={goToNext}>❯</button>
      </div>
      <div className="thumbnail-row">
        {property.images.map((src, index) => (
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

export default PropertyImgSlide;

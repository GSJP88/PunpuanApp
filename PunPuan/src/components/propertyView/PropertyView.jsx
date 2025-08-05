// PropertyView.jsx
import React, { useState } from 'react';
import '../../Styles/propertyList.css';
import propertiesInfo from '../../data/properties'; // <-- must be .js not .json
import { useParams } from 'react-router-dom';

const PropertyView = () => {
  const { id } = useParams();
  const property = propertiesInfo.find(p => p.id === parseInt(id));
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!property) return <p>Property not found</p>;

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
    <div key={property.id} className="property_view-page">
      <div className="sign-container">
        <div className="sign-wrapper">
          <ul className="sign_list">
            <li className="sign_item name">{property.name}</li>
            <li className="sign_item type">{property.type}</li>
            <li className="sign_item id">ID: {property.id}</li>
          </ul>
        </div>
      </div>

      <div className="view-image-container">
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
    </div>
  );
};

export default PropertyView;

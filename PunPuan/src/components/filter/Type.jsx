import React from 'react';

const Type = ({ activeType, setActiveType }) => {
  const types = ["Apartment", "Condominiem", "Townhouses", "House"];

  return (
    <div className="property-types-wrapper">
      <h2 className='title'>Types</h2>
      <div className="property-buttons">
        {types.map((type) => (
          <button
            key={type}
            className={`property-button ${activeType === type ? "active" : ""}`}
            onClick={() => setActiveType(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Type;
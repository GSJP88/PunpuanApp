import React, { useState } from 'react';
import propertiesInfo from '../../data/properties'; // <-- must be .js not .json
import { useParams } from 'react-router-dom';

const PropertySign = () => {
  const { id } = useParams();
  const property = propertiesInfo.find(p => p.id === parseInt(id));

  return (
    <div className="sign-container" key={property.id}>
      <div className="sign-wrapper">
        <ul className="sign_list">
          <li className="sign_item name">{property.name}</li>
          <li className="sign_item type">{property.type}</li>
          <li className="sign_item id">ID: {property.id}</li>
        </ul>
      </div>
    </div>
  )
}

export default PropertySign

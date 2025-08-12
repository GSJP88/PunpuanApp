import React from 'react';

const PropertySign = ({ property }) => {
  return (
    <div className="sign-container" key={property.Room_ID}>
      <div className="sign-wrapper">
        <ul className="sign_list">
          <li className="sign_item name">{property.Property_Name}</li>
          <li className="sign_item type">{property.Room_Type}</li>
          <li className="sign_item id">ID: {property.Room_ID}</li>
        </ul>
      </div>
    </div>
  );
};

export default PropertySign;

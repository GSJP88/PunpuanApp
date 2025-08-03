import React from 'react';
import '../../Styles/propertyList.css';

const PropertyCard = ({ data }) => {
  return (
    <div className="property-card">
      <img src={data.image} alt={data.name} className="property-image" />
      <div className="balance">Balance: ${data.balance.toLocaleString()}</div>
      <div className="property-info">
        <div className="top-row">
          <span className="type">{data.type}</span>
          <span className="occupancy">Occupancy: {data.occupancy}%</span>
        </div>
        <h3 className="property-name">{data.name}</h3>
        <p className="property-address">{data.address}</p>
        <div className="property-actions">
          <button className="action-btn">Accounting</button>
          <button className="action-btn">Tenants</button>
          <button className="action-btn">MR requests</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

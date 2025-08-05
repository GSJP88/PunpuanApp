import React from 'react';
import '../../Styles/propertyList.css';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ data }) => {
  const percent = Math.floor((data.occupancy * 100) / data.totalProperty);
  const statusText = percent === 100 ? 'Unavailable' : 'Available';
  const isUnavailable = percent === 100;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/propertyViewPage/${data.id}`);
  };

  return (
    <div className="property-card" onClick={handleClick}>
      <img src={data.image} alt={data.name} className="property-image" />

      <div className={`property-status ${isUnavailable ? 'unavailable' : ''}`}>
        <i className="bi bi-circle-fill"></i>
        {statusText}
      </div>

      <div className="property-info">
        <div className="top-row">
          <span className="type">{data.type}</span>
          <span className="occupancy">Occupancy: {percent}%</span>
        </div>
        <h3 className="property-name">{data.name}</h3>
        <p className="property-address">{data.address}</p>
        <div className="property-actions">
          <button className="action-btn small-button">Tenants</button>
          <button className="action-btn small-button">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

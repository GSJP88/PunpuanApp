import React, { useState } from 'react';
import propertiesInfo from '../../data/properties'; // <-- must be .js not .json
import { useParams } from 'react-router-dom';
const PropertyDetail = () => {
  const { id } = useParams();
  const property = propertiesInfo.find(p => p.id === parseInt(id));

  const percent = Math.floor((property.occupancy * 100) / property.totalProperty);
  const statusText = percent === 100 ? 'Unavailable' : 'Available';
  const isUnavailable = percent === 100;

  return (
    <div className="view-detail-wrapper container" key={property.id}>
        {/* Status Section */}
        <div className="view-info">
          <div className="view-title">
            <h2>Status</h2>
          </div>
          <div className="status-info info">
            <p className="available_room amount data">{property.occupancy}</p>
            <p className="total_room">/{property.totalProperty}</p>
            <p className={`text ${isUnavailable ? 'unavailable' : ''}`}>
                {statusText}
            </p>
          </div>
        </div>

        {/* Price Section */}
        <div className="view-info">
          <div className="view-title">
            <h2>Price</h2>
          </div>
          <div className="price-info info">
            <p className="price amount data">{property.balance.toLocaleString()} LAK</p>
            <p className="text">/Month</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="view-info">
          <div className="view-title">
            <h2>Address</h2>
          </div>
          <div className="address-info">
            <ul>
              <li>
                <label>Province: </label>
                <p className="text">{property.province}</p>
              </li>
              <li>
                <label>District: </label>
                <p className="text">{property.district}</p>
              </li>
              <li>
                <label>Village: </label>
                <p className="text">{property.village}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Description Section */}
        <div className="view-info">
          <div className="view-title">
            <h2>Description</h2>
          </div>
          <div className="description text">
            <p>
              {property.description}
            </p>
          </div>
        </div>
    </div>
  )
}

export default PropertyDetail

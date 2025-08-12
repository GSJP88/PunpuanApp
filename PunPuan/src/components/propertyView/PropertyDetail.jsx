import React from 'react';

const PropertyDetail = ({ property }) => {
  // คำนวณ occupancy percent อย่างปลอดภัย (เช็ค null หรือ undefined)
  const occupancy = property.Max_Occupancy || property.Max_Occupancy || 0;
  const totalProperty = property.Room_Amount || property.Room_Amount || 1;
  const percent = Math.floor((occupancy * 100) / totalProperty);
  const statusText = percent === 100 ? 'Unavailable' : 'Available';
  const isUnavailable = percent === 100;

  // ราคา (balance) อาจจะอยู่ใน property.Monthly_Rent หรืออื่นๆ ตาม backend
  const price = property.Monthly_Rent || property.monthly_rent || property.Price || property.price || 0;

  return (
    <div className="view-detail-wrapper container" key={property.Room_ID}>
      {/* Status Section */}
      <div className="view-info">
        <div className="view-title">
          <h2>Status</h2>
        </div>
        <div className="status-info info">
          <p className="available_room amount data">{occupancy}</p>
          <p className="total_room">/{totalProperty}</p>
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
          <p className="price amount data">{price.toLocaleString()} LAK</p>
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
            {/* <li>
              <label>Province: </label>
              <p className="text">{property.Province || property.province}</p>
            </li>
            <li>
              <label>District: </label>
              <p className="text">{property.District || property.district}</p>
            </li>
            <li>
              <label>Village: </label>
              <p className="text">{property.Village || property.village}</p>
            </li> */}
            <li>
              <p className="text">{property.Address || property.address}</p>
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
          <p>{property.Description || property.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;

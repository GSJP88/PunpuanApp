import React from 'react';
import '../../Styles/propertyList.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PropertyCard = ({ data }) => {
  const { t } = useTranslation();

  // คำนวณ percent ให้ป้องกัน division by zero
  const total_room = (data.Room_Amount) - (data.Max_Occupancy);
  const percent = Math.floor((total_room * 100) / (data.Room_Amount));
  
  const statusText = percent >= 100 ? t('full_room') : t('available_room');
  const isUnavailable = percent >= 100;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/propertyViewPage/${data.id}`);
  };

  return (
    <div className="property-card" onClick={handleClick}>
      <img src={data.image} alt={data.name} className="property-image" />

      <div className={`property-status ${isUnavailable ? 'unavailable' : 'available'}`}>
        <i className="bi bi-circle-fill"></i>
        {statusText}
      </div>

      <div className="property-info">
        <div className="top-row">
          <span className="type">{data.type}</span>
          <span className="occupancy">
            {t('remaining_rooms')}: {percent}%
          </span>
        </div>
        <h3 className="property-name">{data.name}</h3>
        <p className="property-address">{data.address}</p>
        <div className="property-actions">
          <button className="action-btn small-button">{t('room_info')}</button>
          <button className="action-btn small-button">{t('edit')}</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
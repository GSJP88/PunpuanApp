import React from 'react';
import { useTranslation } from 'react-i18next'

const Type = ({ activeType, setActiveType }) => {
  const { t } = useTranslation();
  // ใช้ key ของ i18n
  const types = ["apartment", "condominium", "townhouses", "house"];

  return (
    <div className="property-types-wrapper">
      <h2 className='title'>{t('room_type')}</h2>
      <div className="property-buttons">
        {types.map((type) => (
          <button
            key={type}
            className={`property-button ${activeType === type ? "active" : ""}`}
            onClick={() => setActiveType(type)}
          >
            {t(`${type}`)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Type;
// src/components/switchBtn/SwitchBtn.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../Styles/switchBtn.css';
import { useTranslation } from 'react-i18next';

const SwitchBtn = () => {
  const { t } = useTranslation();
  const { role } = useParams();
  const navigate = useNavigate();

  const handleTenantClick = () => {
    if (role !== 'tenant') {
      navigate('/registerPage/tenant');
    }
  };

  const handleLandlordClick = () => {
    if (role !== 'landlord') {
      navigate('/registerPage/landlord');
    }
  };

  return (
    <div className="switch-btn-group">
      <button
        className={`switch-btn ${role === 'tenant' ? 'active' : ''}`}
        onClick={handleTenantClick}
      >
        {t('tenant')}
      </button>
      <button
        className={`switch-btn ${role === 'landlord' ? 'active' : ''}`}
        onClick={handleLandlordClick}
      >
        {t('landlord')}
      </button>
    </div>
  );
};

export default SwitchBtn;

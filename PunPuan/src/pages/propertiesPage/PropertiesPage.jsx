import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/propertiesPage.css';

const PropertiesPage = () => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/addPropertyPage'); // adjust route if needed
  };

  return (
    <div className="properties-container container box_container">
      <h2 className="page-title">Properties</h2>
      <div className="empty-message">You haven't add property yet</div>
      <button className="add-button" onClick={handleAddClick}><i class="bi bi-plus"></i></button>
    </div>
  );
};

export default PropertiesPage;

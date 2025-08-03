// src/pages/TenantListPage.jsx
import React from 'react';
import '../../Styles/propertyList.css';
import PropertyList from '../../components/propertyList/PropertyList';

const PropertyListPage = () => {
  return (
    <div className="tenant-list-page container">
      <PropertyList/>
    </div>
  );
};

export default PropertyListPage;

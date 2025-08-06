// src/pages/TenantListPage.jsx
import React from 'react';
import TenantList from '../components/tenantList/TenantList';
import '../Styles/tenantList.css';

const TenantListPage = () => {
  return (
    <div className="tenant-list-page container">
      <TenantList />
    </div>
  );
};

export default TenantListPage;

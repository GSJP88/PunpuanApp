// src/components/TenantList.jsx
import React, { useState } from 'react';

const tenants = [
  {
    id: 1,
    name: 'Scot Carroll',
    email: 'carroll_scot@example.net',
    property: 'Condo A12, Vientiane',
    startDate: '2025-07-01',
    hasPaid: true,
  },
  {
    id: 2,
    name: 'Barbra Nolan',
    email: 'barbra.nolan@example.org',
    property: 'Townhouse 3B, Luang Prabang',
    startDate: '2025-06-20',
    hasPaid: false,
  },
  {
    id: 3,
    name: 'Wilmer Fadel',
    email: 'wilmer.fadel@example.net',
    property: 'Room 202, Pakse',
    startDate: '2025-08-01',
    hasPaid: true,
  },
  {
    id: 4,
    name: 'Naoma Wyman',
    email: 'wyman.naoma@example.com',
    property: 'Apartment B8, Vientiane',
    startDate: '2025-09-05',
    hasPaid: false,
  },
  {
    id: 5,
    name: 'Bao Max',
    email: 'MaxNoName@example.com',
    property: 'Apartment B8, Vientiane',
    startDate: '2025-07-12',
    hasPaid: false,
  },
  {
    id: 6,
    name: 'Aiy Khn Lr',
    email: 'AiyKhnLr@example.com',
    property: 'Apartment B8, Vientiane',
    startDate: '2025-07-15',
    hasPaid: false,
  },
];

const TenantList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredTenants = tenants.filter((tenant) => {
    const matchName = tenant.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchStatus =
      filterStatus === 'all' ||
      (filterStatus === 'paid' && tenant.hasPaid) ||
      (filterStatus === 'unpaid' && !tenant.hasPaid);

    return matchName && matchStatus;
  });

  return (
    <div className="tenant-list-wrapper">
      <h2 className="tenant-list-title">Tenant List</h2>
      <div className="tenant-filters">
        <div className="tenant-btn-wrapper" 
            value={filterStatus}
            onClick={(e) => setFilterStatus(e.target.value)}>
            <button className={filterStatus === 'all' ? 'active' : ''} value="all">All</button>
            <button className={filterStatus === 'paid' ? 'active' : ''} value="paid">Paid</button>
            <button className={filterStatus === 'unpaid' ? 'active' : ''} value="unpaid">Unpaid</button>
        </div>
        <div className="search-box-wrapper input_app">
          <i className="bi bi-search search-icon"></i>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-box"
          />
        </div>
        {/* <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="filter-dropdown input_app"
        >
          <option value="all">All Tenants</option>
          <option value="paid">Paid This Month</option>
          <option value="unpaid">Unpaid This Month</option>
        </select> */}
      </div>

      <div className="table-container">
        <table className="tenant-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Property</th>
              <th>Rented Since</th>
            </tr>
          </thead>
          <tbody>
            {filteredTenants.map((tenant) => (
              <tr key={tenant.id}>
                <td className="user-cell">
                  <div className="tenant-icon-wrapper">
                    <i className="bi bi-person-fill"></i>
                  </div>
                  <div className="user-info">
                    <span className="user-name">{tenant.name}</span>
                  </div>
                </td>
                <td>{tenant.email}</td>
                <td>{tenant.property}</td>
                <td>{tenant.startDate}</td>
              </tr>
            ))}
            {filteredTenants.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', padding: '20px', color: '#777' }}>
                  No tenants found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TenantList;

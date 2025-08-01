import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/managementPage.css";

const ManagementPage = () => {
  const cards = [
    { label: "Profile", to: "/profile", icon: "bi-person" },
    { label: "Notification", to: "/notificationPage", icon: "bi-bell" },
    { label: "Tenants", to: "/tenant-list", icon: "bi-people" },
    { label: "Properties", to: "/propertiesPage", icon: "bi-house" },
  ];

  return (
    <div className="management-page">
        <div className="management-wrapper">
          <h1 className="management-title">Management</h1>

        <div className="management-grid">
          {cards.map(({ label, to, icon }) => (
            <Link key={label} to={to} className="management-card">
              <div className="icon-wrapper">
                <i className={`bi ${icon} management-icon`}></i>
                {label === "Notification" && <span className="badge">3</span>}
              </div>
              <span className="management-label">{label}</span>
            </Link>
          ))}
        </div>
        {/* Floating Button */}
        <button className="floating-btn">
          <i className="bi bi-headset"></i>
        </button>
      </div>
    </div>

  );
};

export default ManagementPage;

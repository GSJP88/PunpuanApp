import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const TenantDashboard = () => {
  const cards = [
    { label: "Profile", to: "/profilePage", icon: "bi-person" },
    { label: "Notification", to: "/notificationPage", icon: "bi-bell" },
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/chatPage`);
  };
  return (
       <div className="management-container container">
        <div className="management-wrapper">
          <h2 className="management-title">Management</h2>
          <div className="management_grid">
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
          <button className="floating-btn" onClick={handleClick}>
            <i className="bi bi-headset"></i>
          </button>
      </div>
    </div>
  )
}

export default TenantDashboard

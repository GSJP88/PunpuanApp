import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "../../Styles/management.css";
import { useTranslation } from 'react-i18next'

const Management = () => {
  const { t } = useTranslation();
  // สมมุติ userId เก็บไว้ที่นี่ (จริงๆ อาจดึงจาก localStorage หรือ context)
  const userId = localStorage.getItem('userId') || '1'; // ถ้ายังไม่มี default = '1'

  const cards = [
  { label: t('profile'), to: `/profilePage?userId=${userId}`, icon: "bi-person" },
  { label: t('notification'), to: "/notificationPage", icon: "bi-bell" },
  { label: t('tenant'), to: "/tenantListPage", icon: "bi-people" },
  { label: t('properties'), to: "/propertyListPage", icon: "bi-house" },
];

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/chatPage`);
  };

  return (
    <div className="management-container container">
        <div className="management-wrapper">
          <h2 className="management-title">{t('management')}</h2>
          <div className="management_grid">
            {cards.map(({ label, to, icon }) => (
              <Link key={label} to={to} className="management-card">
                <div className="icon-wrapper">
                  <i className={`bi ${icon} management-icon`}></i>
                  {to === "/notificationPage" && <span className="badge">3</span>}
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
  );
};

export default Management;

import React from 'react';
import '../../Styles/landlordNotification.css';

const NotificationItem = ({ notification }) => {
  return (
    <div className={`notification-item ${notification.seen ? '' : 'unseen'}`}>
      <div className="notification-message">
        <strong>{notification.tenantName}</strong> rented your property <strong>{notification.propertyName}</strong>.
      </div>
      <div className="notification-time">{notification.time}</div>
      {!notification.seen && <span className="new-label">New</span>}
    </div>
  );
};

export default NotificationItem;

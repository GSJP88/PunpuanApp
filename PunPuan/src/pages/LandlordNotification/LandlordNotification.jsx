import React, { useState, useEffect } from 'react';
import NotificationItem from '../../components/NotificationItem/NotificationItem';
import '../../Styles/landlordNotification.css';

const LandlordNotification = () => {
  // Mock data - replace with real API call later
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      tenantName: 'Somephong',
      propertyName: 'Luxury Apartment',
      time: '10 minutes ago',
      seen: false,
    },
    {
      id: 2,
      tenantName: 'Aiy khn lr',
      propertyName: 'Townhouse 3A',
      time: '1 hour ago',
      seen: true,
    },
    {
      id: 3,
      tenantName: 'John The Farmer',
      propertyName: 'Smile Condo',
      time: '2 hour ago',
      seen: true,
    },
    {
      id: 4,
      tenantName: 'Saow Phone',
      propertyName: 'Smile Condo',
      time: '2 hour ago',
      seen: true,
    },
    {
      id: 5,
      tenantName: 'Baow Max',
      propertyName: 'Smile Condo',
      time: '2 hour ago',
      seen: true,
    },
    {
      id: 6,
      tenantName: 'Aiy Bounmy',
      propertyName: 'Smile Condo',
      time: '2 hour ago',
      seen: true,
    },
  ]);

  return (
    <div className="box_container container">
      <div className="notification-page">
        <h2>Rental Notifications</h2>
        <div className="notification-list">
          {notifications.length === 0 ? (
            <p>No notifications yet.</p>
          ) : (
            notifications.map((n) => <NotificationItem key={n.id} notification={n} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default LandlordNotification;

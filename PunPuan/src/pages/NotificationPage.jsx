import React, { useState } from 'react';
import '../Styles/notificationPage.css';
import NotificationCard from './NotificationCard';

const dummyNotifications = [
  {
    id: 1,
    sender: 'Tenant Khn Lr',
    message: 'Kin beer.',
    isRead: false,
    time: '5 minutes ago',
    role: 'tenant'
  },
  {
    id: 2,
    sender: 'System',
    message: 'Jaiy khar app nae! Kharng 2 deuan leo',
    isRead: false,
    time: '1 day ago',
    role: 'admin'
  },
  {
    id: 3,
    sender: 'Tenant Ton',
    message: 'Tom2 Trng2',
    isRead: false,
    time: '2 hours ago',
    role: 'tenant'
  },
];

const NotificationPage = () => {
  const [notifications, setNotifications] = useState(dummyNotifications);
  const [filter, setFilter] = useState('all');

  const filtered = notifications.filter(n => {
    if (filter === 'unread') return !n.isRead;
    if (filter === 'read') return n.isRead;
    return true;
  });

  const markAllAsRead = () => {
    const updated = notifications.map(n => ({ ...n, isRead: true }));
    setNotifications(updated);
  };

  const markNotificationAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  return (
    <div className="notification_page box_container container">
      <h2 className="page-title">Notifications</h2>
      <div className="notification-header">
        <div className="notification-nav">
          <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
          <button onClick={() => setFilter('unread')} className={filter === 'unread' ? 'active' : ''}>Unread</button>
          <button onClick={() => setFilter('read')} className={filter === 'read' ? 'active' : ''}>Read</button>
        </div>
        <button className="mark-read-btn small-button" onClick={markAllAsRead}>Mark All as Read</button>
      </div>

      <div className="notification-list">
        {filtered.length === 0 ? (
          <p className="no-notification">No notifications to show.</p>
        ) : (
          filtered.map(notification => (
            <NotificationCard
              key={notification.id}
              data={notification}
              markAsRead={markNotificationAsRead}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationPage;
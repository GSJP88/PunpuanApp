import React from 'react';
import '../../Styles/notification.css';

const notifications = [
  {
    id: 1,
    name: 'Somphone',
    message: 'Hi!. I want to rent your room',
    time: '2m ago',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    id: 2,
    name: 'Kone',
    message: 'Hi!. I want to rent your room',
    time: '2m ago',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    id: 3,
    name: 'Sin',
    message: 'Hi!. I want to rent your room',
    time: '2m ago',
    image: 'https://randomuser.me/api/portraits/men/13.jpg',
  },
  {
    id: 4,
    name: 'Keo',
    message: 'Hi!. I want to rent your room',
    time: '2m ago',
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
  },
  {
    id: 5,
    name: 'Keo',
    message: 'Hi!. I want to rent your room',
    time: '2m ago',
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
  },
  {
    id: 6,
    name: 'Keo',
    message: 'Hi!. I want to rent your room',
    time: '2m ago',
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
  },
  {
    id: 7,
    name: 'Keo',
    message: 'Hi!. I want to rent your room',
    time: '2m ago',
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
  },
  {
    id: 8,
    name: 'Keo',
    message: 'Hi!. I want to rent your room',
    time: '2m ago',
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
  },
];

const Notification = () => {
  return (
    <div className="notification-container">
      <h2>Notification</h2>
      <div className="notification-list">
        {notifications.map((n) => (
          <div key={n.id} className="notification-card">
            <img className="avatar" src={n.image} alt={n.name} />
            <div className="notification-info">
              <h4>{n.name}</h4>
              <p>{n.message}</p>
            </div>
            <div className="notification-meta">
              <span className="dot"></span>
              <span className="time">{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;

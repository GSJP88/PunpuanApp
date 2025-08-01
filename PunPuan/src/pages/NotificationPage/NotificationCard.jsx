import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/notificationPage.css';;

const NotificationCard = ({ data, markAsRead }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    markAsRead(data.id);
    navigate(`/message/${data.id}`);
  };

  const isTenant = data.role === 'tenant';

  return (
    <div
      className={`notification-card ${data.isRead ? 'read' : 'unread'}`}
      onClick={handleClick}
    >
      {!data.isRead && <span className="unread-dot" />}
      <div className="notification-card_profile">
        {isTenant ? (
          <i className="bi bi-person-fill"></i>
        ) : (
          <i className="bi bi-headset"></i>
        )}
      </div>
      <div className="card-content">
        <div className="sender_message">
            <strong className="sender">{data.sender}</strong>
            <p className="message">{data.message}</p>
        </div>
        <div className="time">{data.time}</div>
      </div>
    </div>
  );
};

export default NotificationCard;

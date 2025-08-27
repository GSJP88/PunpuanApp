import React from 'react';
import { useTranslation } from 'react-i18next'

const Detail = ({ room }) => {
  const { t } = useTranslation();
  if (!room) return null;

  const address = room.Address || 'No address available';
  const roomType = room.Room_Type || 'No type';
  const roomId = room.Room_ID || 'No ID';

  return (
    <div className="card-info">
      <div className="info">
        <i className="bi bi-geo-alt-fill"></i> {t(`${address}`)}
      </div>
      <div className="info">
        <div className="f-info">
          <div><i className="bi bi-house-door-fill"></i>{t(`${roomType}`)}</div>
          <div><i className="bi bi-credit-card-2-front-fill"></i> ID: {roomId}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
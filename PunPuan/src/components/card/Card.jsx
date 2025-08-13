import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HouseImage from "../../assets/Th2.jpg";
import Detail from './Detail';
import "../../Styles/card.css";
import axios from 'axios';

const CardRow = ({ title, cards }) => {
  return (
    <div className="card-row container">
      <h2 className="row-title">{title}</h2>
      <div className="card-wrapper">
        {cards.map((room) => (
          <Link to={`/viewPageBefore/${room.Room_ID}`} key={room.Room_ID}>
            <div className="card">
              <div className="card-image-wrapper">
                <img
                  src={room.Profile_Image ? `http://localhost:5000/uploads/${room.Profile_Image}` : HouseImage}
                  alt="house"
                  className="card-image"
                />
                <div className="status">
                  <i className="bi bi-circle-fill"></i>
                  <p>{room.Availability_Status || 'Available'}</p>
                </div>
              </div>

              <div className="card-title">
                <h2>{room.Property_Name || 'PunPuan House'}</h2>
                <div className="card-price">
                  <i className="bi bi-tags-fill"></i>
                  <strong>{room.Monthly_Rent ? `₭${Number(room.Monthly_Rent).toLocaleString()}` : '₭750,000'}</strong>
                </div>
              </div>
              <div className="detail">
                <Detail room={room} />
              </div>
              

              <div className="card-spec-wrapper">
                <ul className="card-spec_list">
                  <li className="card-spec_item">
                    <i className='fas fa-bed'></i>
                    <p className="spec-number data">{room.Bed_Rooms || 0}</p>
                  </li>
                  <li className="card-spec_item">
                    <i className='fas fa-bath'></i>
                    <p className="spec-number data">{room.Bath_Rooms || 0}</p>
                  </li>
                  <li className="card-spec_item">
                    <i className='fas fa-car'></i>
                    <p className="spec-number data">{room.Parking || 0}</p>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Card = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/rooms', { withCredentials: true });
        setRooms(res.data);
      } catch (error) {
        console.error('Failed to fetch rooms:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) return <p>Loading rooms...</p>;
  if (rooms.length === 0) return <p>No rooms found.</p>;

  // จัดกลุ่ม rooms ตาม Room_Type
  const groupedRooms = rooms.reduce((acc, room) => {
    const type = room.Room_Type || 'Unknown';
    if (!acc[type]) acc[type] = [];
    acc[type].push(room);
    return acc;
  }, {});

  return (
    <div className="card-section">
      {Object.entries(groupedRooms).map(([roomType, roomsForType]) => (
        <CardRow key={roomType} title={roomType} cards={roomsForType} />
      ))}
    </div>
  );
};

export default Card;

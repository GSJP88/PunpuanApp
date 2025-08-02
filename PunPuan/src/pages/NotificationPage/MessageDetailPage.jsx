import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../Styles/notificationPage.css';
import idCard from "../../assets/id_card.jpg"

// Dummy tenant data (can replace with backend call)
const tenantData = {
  1: {
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '020-12345678',
    occupation: 'Engineer',
    income: '5,000,000 LAK/month',
    idCardImg: idCard
  },
  3: {
    fullName: 'Lisa Chan',
    email: 'lisa@example.com',
    phone: '020-98765432',
    occupation: 'Teacher',
    income: '3,500,000 LAK/month',
    idCardImg: idCard
  }
};

const MessageDetailPage = () => {
  const { id } = useParams();idCard
  const navigate = useNavigate();
  const tenant = tenantData[id];

  if (!tenant) return <p>No message found</p>;

  return (
    <div className="message-detail-container box_container container">
        {/* <h2>Request</h2> */}
      <div className="tenant-info">
        <div className="info_text">
          <label>Tenant Info:</label>
            <p><strong>Full Name:</strong> {tenant.fullName}</p>
            <p><strong>Email:</strong> {tenant.email}</p>
            <p><strong>Phone:</strong> {tenant.phone}</p>
            <p><strong>Occupation:</strong> {tenant.occupation}</p>
            <p><strong>Income per month:</strong> {tenant.income}</p>
        </div>
        <div className='info_img'>
          <label>ID Card Image:</label>
          <img src={tenant.idCardImg} alt="ID Card" className="id-card-img" />
        </div>
      </div>

      <div className="button-group">
        <button className="refuse-button" onClick={() => navigate('/notificationPage')}>Refuse</button>
        <button className="confirm-button" onClick={() => navigate(`/signContractPage/${id}`)}>Confirm</button>
      </div>
    </div>
  );
};

export default MessageDetailPage;

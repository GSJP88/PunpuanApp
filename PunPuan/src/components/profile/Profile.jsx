import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import '../../Styles/profile.css';

const ProfilePage = () => {
  const [searchParams] = useSearchParams();
  const userID = searchParams.get('userId')
  const { role } = useParams();
  const isTenant = role === 'tenant';
  const navigate = useNavigate();

  // const userID = localStorage.getItem('userId');
  console.log('userID:', userID);
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    occupation: '',
    income: '1',
    bankAccount: '',
  });

  useEffect(() => {
    console.log("userID:::", userID )
  if (userID === '15') {
    // landlord
    setFormData({
      firstName: 'punpuan',
      lastName: 'Landlord',
      email: 'punpuan@gmail.com',
      phone: '020-2222-3333',
      bankAccount: '1234-5678-9012-3456',
      occupation: 'Developer',
      income: '1',
    });
  } else if (userID === '1') {
    // tenant
    setFormData({
      firstName: 'Kedsada',
      lastName: 'Vannaphom',
      email: 'tonvnp2002@gmail.com',
      phone: '020-54720903',
      occupation: 'Student',
      income: '2',
      bankAccount: '1234-1234-1234-1234',
    });
  } else {
    // ค่าอื่นๆ เคลียร์ form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      occupation: '',
      income: '1',
      bankAccount: '',
    });
  }
}, [userID]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log('Submitted data:', formData);
    navigate(-1);
  };

  return (
    <div className="profile_container box_container">
      <div className="profile-headline">
        <h2>{isTenant ? 'Tenant Profile' : 'Landlord Profile'}</h2>
        <button className="edit-btn small-button" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <div className="profile-form">
        <div className="form-row">
          <label>Last Name</label>
          <label>First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            disabled={!isEditing}
            className="input_app"
          />

          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            disabled={!isEditing}
            className="input_app"
          />
        </div>

        <div className="form-row">
          <label>Email</label>
          <label>Phone</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditing}
            className="input_app"
          />

          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            disabled={!isEditing}
            className="input_app"
          />
        </div>

        {isTenant ? (
          <div className="form-row">
            <label>Occupation</label>
            <input
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              disabled={!isEditing}
              className="input_app"
            />

            <label>Income</label>
            <select
              name="income"
              value={formData.income}
              onChange={handleChange}
              disabled={!isEditing}
              className="select_app"
            >
              <option value="1">3,000,000 - 5,000,000</option>
              <option value="2">5,000,000 - 10,000,000</option>
            </select>
          </div>
        ) : (
          <div>
            <label>Bank Account</label>
            <input
              name="bankAccount"
              value={formData.bankAccount}
              onChange={handleChange}
              disabled={!isEditing}
              className="input_app"
            />
          </div>
        )}

        {isEditing && (
          <button className="profile-submit_button medium-button" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
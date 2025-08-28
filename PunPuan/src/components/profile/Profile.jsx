import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../Styles/profile.css';

const ProfilePage = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const userID = searchParams.get('userId');
  const { role } = useParams();
  const isTenant = role === 'tenant';
  const navigate = useNavigate();

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
    if (userID === '15') {
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
        <h2>{isTenant ? t('tenant_profile') : t('landlord_profile')}</h2>
        <button className="edit-btn small-button" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? t('cancel') : t('edit')}
        </button>
      </div>

      <div className="profile-form">
        <div className="form-row">
          <label>{t('first_name')}</label>
          <label>{t('last_name')}</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            disabled={!isEditing}
            className="input_app"
            placeholder={t('first_name')}
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            disabled={!isEditing}
            className="input_app"
            placeholder={t('last_name')}
          />
        </div>

        <div className="form-row">
          <label>{t('email')}</label>
          <label>{t('phone')}</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditing}
            className="input_app"
            placeholder={t('email')}
          />
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            disabled={!isEditing}
            className="input_app"
            placeholder={t('phone')}
          />
        </div>

        {isTenant ? (
          <div className="form-row">
            <label>{t('occupation')}</label>
            <input
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              disabled={!isEditing}
              className="input_app"
              placeholder={t('occupation')}
            />

            <label>{t('income')}</label>
            <select
              name="income"
              value={formData.income}
              onChange={handleChange}
              disabled={!isEditing}
              className="select_app"
            >
              <option value="1">{t('income_1')}</option>
              <option value="2">{t('income_2')}</option>
            </select>
          </div>
        ) : (
          <div>
            <label>{t('bank_account')}</label>
            <input
              name="bankAccount"
              value={formData.bankAccount}
              onChange={handleChange}
              disabled={!isEditing}
              className="input_app"
              placeholder={t('bank_account')}
            />
          </div>
        )}

        {isEditing && (
          <button className="profile-submit_button medium-button" onClick={handleSubmit}>
            {t('submit')}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
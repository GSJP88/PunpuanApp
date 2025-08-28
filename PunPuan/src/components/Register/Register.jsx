import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import { registerUser } from '../../api/apiService';
import Swal from 'sweetalert2';
import '../../Styles/register.css';
import SwitchBtn from '../../components/switchBtn/SwitchBtn';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const { t } = useTranslation();
  const { role } = useParams();
  const isTenant = role === 'tenant';
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    occupation: '',
    income: '',
    bankAccount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      Swal.fire(t('error'), t('passwordMismatch'), 'error');
      return;
    }

    try {
      const dataToSend = {
        User_Name: formData.firstName + ' ' + formData.lastName,
        Email: formData.email,
        Password: formData.password,
        Phone_Number: formData.phone,
        Role: isTenant ? 'tenant' : 'landlord',
        Occupation: isTenant ? formData.occupation : null,
        Income: isTenant ? formData.income : null,
        Bank_Account: isTenant ? null : formData.bankAccount,
      };

      console.log(dataToSend);
      await registerUser(dataToSend);

      Swal.fire(t('registerSuccess'), t('registerComplete'), 'success');

      login(isTenant ? 'tenant' : 'landlord');
      navigate(isTenant ? '/tenantHomePage' : '/landlordDashboard');
    } catch (error) {
      console.error(error);
      Swal.fire(t('error'), error.response?.data?.error || error.message || t('unknownError'), 'error');
    }
  };

  return (
    <div className="register-container box_container container">
      <div className="register-left">
        <div className="overlay">
          <h1>{isTenant ? t('signUpTenant') : t('signUpLandlord')}</h1>
          <p>{t('registerDescription')}</p>
          <SwitchBtn />
        </div>
      </div>

      <div className="register-form">
        <div className="switch_role_group">
          <h2>{t('signUp')}</h2>
          <div className="switch_role_wrapper">
            <button
              className={`switch_role ${isTenant ? 'active' : ''}`}
              onClick={() => { if (!isTenant) navigate('/registerPage/tenant'); }}
            >
              {t('tenant')}
            </button>
            <button
              className={`switch_role ${!isTenant ? 'active' : ''}`}
              onClick={() => { if (isTenant) navigate('/registerPage/landlord'); }}
            >
              {t('landlord')}
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>{t('firstName')}</label>
            <label>{t('lastName')}</label>
            <input
              name="firstName"
              className="input_app"
              type="text"
              placeholder={t('firstName')}
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              name="lastName"
              className="input_app"
              type="text"
              placeholder={t('lastName')}
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <label>{t('email')}</label>
          <input
            name="email"
            className="input_app"
            type="email"
            placeholder={t('email')}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>{t('phone')}</label>
          <input
            name="phone"
            className="input_app"
            type="tel"
            placeholder={t('phone')}
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <div className="password-group">
            <label>{t('password')}</label>
            <label>{t('confirmPassword')}</label>
            <input
              name="password"
              className="input_app"
              type="password"
              placeholder={t('password')}
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              name="confirmPassword"
              className="input_app"
              type="password"
              placeholder={t('confirmPassword')}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {isTenant ? (
            <>
              <div className="income-group">
                <label>{t('occupation')}</label>
                <label>{t('incomePerMonth')}</label>
                <input
                  name="occupation"
                  className="input_app"
                  type="text"
                  placeholder={t('occupation')}
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                />
                <select
                  name="income"
                  className="select_app"
                  value={formData.income}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t('incomePerMonth')}</option>
                  <option value="3,000,000 - 5,000,000">3,000,000 - 5,000,000</option>
                  <option value="5,000,000 - 10,000,000">5,000,000 - 10,000,000</option>
                </select>
              </div>

              <div className="upload-group">
                <label>{t('uploadID')}</label>
                <input className="input_app" type="file" />
              </div>
            </>
          ) : (
            <>
              <label>{t('bankAccount')}</label>
              <input
                name="bankAccount"
                className="input_app"
                type="text"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                value={formData.bankAccount}
                onChange={handleChange}
                required
              />

              <div className="upload-image-group">
                <div className="upload-group">
                  <label>{t('uploadID')}</label>
                  <input className="input_app" type="file" />
                </div>
                <div className="upload-group">
                  <label>{t('uploadBusinessLicense')}</label>
                  <input className="input_app" type="file" />
                </div>
              </div>
            </>
          )}

          <button type="submit" className="submit_button medium-button">{t('signUp')}</button>
        </form>

        <p className="signIn-text">
          {t('alreadyHaveAccount')} <Link to="/loginPage" className="link_to">{t('signIn')}</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

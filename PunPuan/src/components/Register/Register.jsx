import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import { registerUser } from '../../api/apiService';  // ฟังก์ชันเรียก API
import Swal from 'sweetalert2';  // import SweetAlert2
import '../../Styles/register.css';
import SwitchBtn from '../../components/switchBtn/SwitchBtn';

const Register = () => {
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
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        title: "Register!",
        text: "You clicked the button!",
        icon: "success"
      });

      if (formData.password !== formData.confirmPassword) {
        Swal.fire('Error', 'Password and Confirm Password do not match', 'error');
        return;
      }

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

      login(isTenant ? 'tenant' : 'landlord');
      navigate(isTenant ? '/tenantHomePage' : '/landlordDashboard');
    } catch (error) {
      console.error(error);
      Swal.fire('Error', error.response?.data?.error || error.message || 'Unknown error', 'error');
    }
  };

  return (
    <div className="register-container box_container container">
      <div className="register-left">
        <div className="overlay">
          <h1>{isTenant ? 'Sign up for Tenant' : 'Sign up for Landlord'}</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <SwitchBtn />
        </div>
      </div>

      <div className="register-form">
        <div className="switch_role_group">
          <h2>Sign up</h2>
          <div className="switch_role_wrapper">
            <button
              className={`switch_role ${isTenant ? 'active' : ''}`}
              onClick={() => { if (!isTenant) navigate('/registerPage/tenant'); }}
            >
              Tenant
            </button>
            <button
              className={`switch_role ${!isTenant ? 'active' : ''}`}
              onClick={() => { if (isTenant) navigate('/registerPage/landlord'); }}
            >
              Landlord
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>First Name</label>
            <label>Last Name</label>
            <input
              name="firstName"
              className="input_app"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              name="lastName"
              className="input_app"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <label>Email</label>
          <input
            name="email"
            className="input_app"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone</label>
          <input
            name="phone"
            className="input_app"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <div className="password-group">
            <label>Password</label>
            <label>Confirm Password</label>
            <input
              name="password"
              className="input_app"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              name="confirmPassword"
              className="input_app"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {isTenant ? (
            <>
              <div className="income-group">
                <label>Occupation</label>
                <label>Income per month</label>
                <input
                  name="occupation"
                  className="input_app"
                  type="text"
                  placeholder="Occupation"
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
                  <option value="">Income per month</option>
                  <option value="3,000,000 - 5,000,000">3,000,000 - 5,000,000</option>
                  <option value="5,000,000 - 10,000,000">5,000,000 - 10,000,000</option>
                </select>
              </div>

              <div className="upload-group">
                <label>Upload ID card image</label>
                <input className="input_app" type="file" />
              </div>
            </>
          ) : (
            <>
              <label>Bank account number</label>
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
                  <label>Upload ID card image</label>
                  <input className="input_app" type="file" />
                </div>
                <div className="upload-group">
                  <label>Upload business license</label>
                  <input className="input_app" type="file" />
                </div>
              </div>
            </>
          )}

          <button type="submit" className="submit_button medium-button">Sign up</button>
        </form>

        <p className="signIn-text">
          Already have an account? <Link to="/loginPage" className="link_to">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
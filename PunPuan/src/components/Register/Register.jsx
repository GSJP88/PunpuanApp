import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import '../../Styles/register.css';
import SwitchBtn from '../../components/switchBtn/SwitchBtn';

const Register = () => {
  const { role } = useParams();
  const isTenant = role === 'tenant';
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ FIXED

  const handleTenantClick = () => {
    if (!isTenant) navigate('/registerPage/tenant');
  };

  const handleLandlordClick = () => {
    if (isTenant) navigate('/registerPage/landlord');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userRole = isTenant ? "tenant" : "landlord";
    login(userRole); // ✅ FIXED

    navigate(isTenant ? "/tenantHomePage" : "/landlordDashboard");
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
            <button className={`switch_role ${isTenant ? 'active' : ''}`} onClick={handleTenantClick}>Tenant</button>
            <button className={`switch_role ${!isTenant ? 'active' : ''}`} onClick={handleLandlordClick}>Landlord</button>
          </div>
        </div>

        <div className="form-row">
          <label>First Name</label>
          <label>Last Name</label>
          <input className="input_app" type="text" placeholder="First Name" />
          <input className="input_app" type="text" placeholder="Last Name" />
        </div>

        <label>Email</label>
        <input className="input_app" type="email" placeholder="Email" />

        <label>Phone</label>
        <input className="input_app" type="tel" placeholder="Phone Number" />

        <div className="password-group">
          <label>Password</label>
          <label>Confirm Password</label>
          <input className="input_app" type="password" placeholder="Password" />
          <input className="input_app" type="password" placeholder="Confirm Password" />
        </div>

        {isTenant ? (
          <>
            <div className="income-group">
              <label>Occupation</label>
              <label>Income per month</label>
              <input className="input_app" type="text" placeholder="Occupation" />
              <select className="select_app">
                <option value="">Income per month</option>
                <option value="1">3,000,000 - 5,000,000</option>
                <option value="2">5,000,000 - 10,000,000</option>
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
            <input className="input_app" type="text" placeholder="xxxx-xxxx-xxxx-xxxx" />

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

        <button className="submit_button medium-button" onClick={handleSubmit}>Sign up</button>
        <p className="signIn-text">
          Already have an account? <Link to="/loginPage" className="link_to">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

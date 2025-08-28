import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import { loginUser } from "../../api/apiService";
import "../../Styles/login.css";
import { showSuccess, showError } from "../../Service/swal";
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({ email, password });

      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('User_ID', data.user.User_ID);

      const role = data.user.role;
      login(role);

      showSuccess(t('loginSuccess'), `${t('account')}: ${t(role)}`);
      navigate(role === "tenant" ? "/tenantDashboard" : "/landlordDashboard");
    } catch (err) {
      const errMsg = err.response?.data?.error || t('loginFailed');
      showError(t('loginFailed'), errMsg);
      setError(errMsg);
    }
  };

  return (
    <div className="login-container box_container container">
      {/* Left side */}
      <div className="login-left">
        <div className="overlay">
          <h1>{t('signIn')}</h1>
          <p>{t('loginDescription')}</p>
        </div>
      </div>

      {/* Right side */}
      <div className="login-right">
        <div className="login-title"><h2>{t('signIn')}</h2></div>
        <form className="login-form" onSubmit={handleLogin}>
          <label>{t('email')}</label>
          <input
            type="email"
            placeholder={t('emailPlaceholder')}
            className="input_app"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>{t('password')}</label>
          <input
            type="password"
            placeholder={t('passwordPlaceholder')}
            className="input_app"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="forgot-password"><a href="#">{t('forgetPassword')}</a></div>

          <button type="submit" className="medium-button">{t('signIn')}</button>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <p className="signup-text">
            {t('noAccountYet')} <Link to="/registerPage/landlord">{t('signUp')}</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
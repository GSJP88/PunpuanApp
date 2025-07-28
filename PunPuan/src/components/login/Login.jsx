import React from "react";
import { Link } from 'react-router-dom';
import "./login.css";

const Login = () => {
  return (
    <div className="login-container box_container container">
      {/* Left side */}
      <div className="login-left">
        <div className="overlay">
          <h1>Sign in</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's

          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="login-right">
        <div className="login-title">
          <h2>Sign in</h2>
        </div>
        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="Mymail@gmail.com" className="input_app" />

          <label>Password</label>
          <input type="password" placeholder="Password" className="input_app" />

          <div className="forgot-password">
            <a href="#">Forget Password</a>
          </div>

          <button type="submit" className="medium-button">Sign in</button>

          <p className="signup-text">
            Don’t have an account yet? <Link to="/registerPage/landlord">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

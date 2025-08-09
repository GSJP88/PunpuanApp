// import React from "react";
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from "../../context/AuthContext";
// import "../../Styles/login.css";

// const Login = () => {
//   const { login } = useAuth(); // ✅ use login, not setAuth
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Example: Assume user is tenant (you can update based on real inputs)
//     const role = "tenant"; // or "landlord"

//     login(role); // ✅ call login(role) from context

//     navigate(role === "tenant" ? "/tenantDashboard" : "/landlordDashboard");
//   };

//   return (
//     <div className="login-container box_container container">
//       {/* Left side */}
//       <div className="login-left">
//         <div className="overlay">
//           <h1>Sign in</h1>
//           <p>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's
//           </p>
//         </div>
//       </div>

//       {/* Right side */}
//       <div className="login-right">
//         <div className="login-title">
//           <h2>Sign in</h2>
//         </div>
//         <form className="login-form">
//           <label>Email</label>
//           <input type="email" placeholder="Mymail@gmail.com" className="input_app" />

//           <label>Password</label>
//           <input type="password" placeholder="Password" className="input_app" />

//           <div className="forgot-password">
//             <a href="#">Forget Password</a>
//           </div>

//           <button type="submit" className="medium-button" onClick={handleLogin}>Sign in</button>

//           <p className="signup-text">
//             Don’t have an account yet? <Link to="/registerPage/landlord">Sign up</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
/////////////////////////////////////////// old version ////////////////////////////////////

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import "../../Styles/login.css";
import axios from "axios";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  // state สำหรับเก็บค่า email และ password จาก input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // เรียก API backend
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      // สมมติ backend ส่งกลับ { role: 'tenant' } หรือ { role: 'landlord' }
      const { role } = response.data;

      // login จาก context
      login(role);

      // navigate ไปหน้า dashboard ตาม role
      navigate(role === "tenant" ? "/tenantDashboard" : "/landlordDashboard");
    } catch (err) {
      // แสดง error ถ้าเชื่อมต่อ backend ไม่ได้ หรือ login ผิด
      setError("Login failed: " + (err.response?.data?.message || err.message));
    }
  };

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
        <form className="login-form" onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Mymail@gmail.com"
            className="input_app"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            className="input_app"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="forgot-password">
            <a href="#">Forget Password</a>
          </div>

          <button type="submit" className="medium-button">Sign in</button>

          {error && <p style={{color: "red"}}>{error}</p>}

          <p className="signup-text">
            Don’t have an account yet? <Link to="/registerPage/landlord">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
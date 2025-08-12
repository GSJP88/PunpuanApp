import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import { loginUser } from "../../api/apiService";
import "../../Styles/login.css";
import { showSuccess, showError } from "../../Service/swal";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const data = await loginUser({ email, password }); // loginUser จะส่ง withCredentials แล้วใน apiService.js

    // สมมติ backend ส่ง user object มาแบบนี้
    // data.user = { User_ID: 15, email: "...", role: "landlord", ... }

    // เก็บ user ทั้ง object ลง localStorage
    localStorage.setItem('user', JSON.stringify(data.user));
    // เพิ่มเก็บ User_ID แยกต่างหากด้วย (ถ้าต้องการใช้งานง่าย ๆ)
    localStorage.setItem('User_ID', data.user.User_ID);

    const role = data.user.role;  // ดึง role จาก user object

    login(role); // อัพเดต context ว่า logged in พร้อม role

    showSuccess("ເຂົ້າລະບົບສຳເລັດ", `ບັນຊີ: ${role}`);

    navigate(role === "tenant" ? "/tenantDashboard" : "/landlordDashboard");
  } catch (err) {
    showError("Login failed", err.response?.data?.error || "Login failed");
    setError(err.response?.data?.error || "Login failed");
  }
};

  return (
    <div className="login-container box_container container">
      {/* Left side */}
      <div className="login-left">
        <div className="overlay">
          <h1>Sign in</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>

      {/* Right side */}
      <div className="login-right">
        <div className="login-title"><h2>Sign in</h2></div>
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

          <div className="forgot-password"><a href="#">Forget Password</a></div>

          <button type="submit" className="medium-button">Sign in</button>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <p className="signup-text">
            Don’t have an account yet? <Link to="/registerPage/landlord">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
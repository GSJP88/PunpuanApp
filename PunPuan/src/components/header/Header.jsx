import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../Styles/header.css";
import { showSuccess } from "../../Service/swal";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { userRole, logout } = useAuth();
  const navigate = useNavigate();

  const getDashboardLink = () => {
    if (userRole === "tenant") return "/tenantDashboard";
    if (userRole === "landlord") return "/landlordDashboard";
    return "/";
  };

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    showSuccess("ອອກລະບົບສຳເລັດ");
    navigate("/");
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav__logo" style={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.png" alt="logo" width={30} height={30} />
          <span style={{ marginLeft: "8px" }}>PunPuan</span>
        </Link>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <div className="nav__close">
            <i className="bi bi-x-circle-fill" onClick={() => setToggle(!toggle)}></i>
          </div>

          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link active-link">
                <i className="bi bi-house-door nav__icon"></i>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/aboutPage" className="nav__link active-link">
                <i className="bi bi-info-circle nav__icon"></i>
                About us
              </Link>
            </li>
            {/* <li className="nav__item">
              <Link to="/landlordNotification" className="nav__link active-link">
                <i className="bi bi-search nav__icon"></i>
                Explore
              </Link>
            </li> */}
            <li className="nav__item">
              <Link to="/contactPage" className="nav__link active-link">
                <i className="bi bi-envelope nav__icon"></i>
                Contact
              </Link>
            </li>

            {userRole ? (
              <li className="nav__item profile-dropdown">
                <div className="nav__link profile-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <i className="bi bi-person-circle"></i> Profile
                </div>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <Link to={getDashboardLink()} className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                      <i class="bi bi-kanban"></i> Management
                    </Link>
                    <button className="dropdown-item logout-btn" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right"></i> Logout
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li className="nav__item sign_in">
                <Link to="/loginPage" className="nav__link active-link">
                  <i className="bi bi-people"></i> Sign In
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="bi bi-list"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "../../Styles/header.css";

// const Header = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <header className="header">
//       <nav className="nav">
//         <Link to="/" className="nav__logo">
//           PunPuan
//         </Link>

//         <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
//           <div className="nav__close">
//             <i className="bi bi-x-circle-fill" onClick={() => setToggle(!toggle)}></i>
//           </div>

//           <ul className="nav__list">
//             <li className="nav__item">
//               <Link to="/" className="nav__link active-link">
//                 <i className="bi bi-house-door nav__icon"></i>
//                 Home
//               </Link>
//             </li>
//             <li className="nav__item">
//               <Link to="/aboutPage" className="nav__link active-link">
//                 <i class="bi bi-info-circle nav__icon"></i>
//                 About us
//               </Link>
//             </li>
//             <li className="nav__item">
//               <Link to="/landlordNotification" className="nav__link active-link">
//                 <i className="bi bi-search nav__icon"></i>
//                 Explore
//               </Link>
//             </li>
//             <li className="nav__item">
//               <Link to="/contactPage" className="nav__link active-link">
//                 <i className="bi bi-envelope nav__icon"></i>
//                 Contact
//               </Link>
//             </li>
//             <li className="nav__item sign_in">
//               <Link to="/loginPage" className="nav__link active-link">
//                 <i className="bi bi-people"></i>
//                 Sign In
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
//           <i className="bi bi-list"></i>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

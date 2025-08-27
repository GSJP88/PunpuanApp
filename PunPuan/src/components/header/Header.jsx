import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../Styles/header.css";
import { showSuccess } from "../../Service/swal";
import Swal from "sweetalert2"; // 👈 เพิ่มเข้ามา
import { useTranslation } from "react-i18next"; // 👈 ใช้ i18n

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { userRole, logout } = useAuth();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

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

  // 👇 ฟังก์ชันเปลี่ยนภาษา
  const handleChangeLanguage = () => {
    Swal.fire({
      showCancelButton: true,
      confirmButtonText: "English",
      cancelButtonText: "ພາສາລາວ",
    }).then((result) => {
      if (result.isConfirmed) {
        i18n.changeLanguage("en");
        Swal.fire({
          icon: "success",
          title: "Changed to English",
          showConfirmButton: false,
          timer: 1200
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        i18n.changeLanguage("la");
        Swal.fire({
          icon: "success",
          title: "ປ່ຽນເປັນພາສາລາວ",
          showConfirmButton: false,
          timer: 1200
        });
      }

    });
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
                ໜ້າຫຼັກ
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/aboutPage" className="nav__link active-link">
                <i className="bi bi-info-circle nav__icon"></i>
                ກ່ຽວກັບ
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contactPage" className="nav__link active-link">
                <i className="bi bi-envelope nav__icon"></i>
                ຕິດຕໍ່
              </Link>
            </li>

            {userRole ? (
              <li className="nav__item profile-dropdown">
                <div className="nav__link profile-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <i className="bi bi-person-circle"></i> ໂປຣຟາຍ
                </div>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <Link to={getDashboardLink()} className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                      <i className="bi bi-kanban"></i> ເມນູການຈັດການ
                    </Link>
                    <button className="dropdown-item logout-btn" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right"></i> ອອກລະບົບ
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li className="nav__item sign_in">
                <Link to="/loginPage" className="nav__link active-link">
                  <i className="bi bi-people"></i> ເຂົ້າສູ່ລະບົບ
                </Link>
              </li>
            )}
            {/* pien pha sa */}
            <li className="nav__item">
              <button className="nav__link active-link" onClick={handleChangeLanguage} style={{ padding: 0, border: "none", background: "none" }}>
                <img
                  src="/public/languages.png"
                  alt="Change Language"
                  width={30}
                  height={30}
                />
              </button>
            </li>
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
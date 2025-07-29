import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../Styles/register.css';
import SwitchBtn from '../../components/switchBtn/SwitchBtn';

const Register = () => {
  const { role } = useParams();
  const isTenant = role === 'tenant';
  const navigate = useNavigate();

  const handleTenantClick = () => {
    if (!isTenant) navigate('/registerPage/tenant');
  };

  const handleLandlordClick = () => {
    if (isTenant) navigate('/registerPage/landlord');
  };

  const handleSubmit = () => {
    if (isTenant) {
      navigate('/tenantDashboard');
    } else {
      navigate('/landlordDashboard');
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


// import { useParams, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import './register.css';
// import landlordImage from "../../assets/landlord2.jpg";
// import TenantImage from "../../assets/tenant.jpg"; // ✅ fixed
// import SwitchBtn from '../switchBtn/SwitchBtn';

// const Register = () => {
//   const { role } = useParams();
//   const isTenant = role === 'tenant';

//   const navigate = useNavigate(); // ✅ fixed missing import

//   const handleTenantClick = () => {
//     if (role !== 'tenant') {
//       navigate('/registerPage/tenant');
//     }
//   };

//   const handleLandlordClick = () => {
//     if (role !== 'landlord') {
//       navigate('/registerPage/landlord');
//     }
//   };

//   return (
//     <div className="register-container box_container container">
//       {/* LEFT SIDE IMAGE + TITLE */}
//       <div className="register-left">
//         <div className="overlay">
//           <h1>{isTenant ? 'Sign up for Tenant' : 'Sign up for Landlord'}</h1>
//           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//           <SwitchBtn />
//         </div>
//       </div>

//       {/* FORM SECTION */}
//       <div className="register-form">
//         <div className="switch_role_group">
//           <h2>Sign up</h2>
//           <div className="switch_role_wrapper">
//             <button
//               className={`switch_role ${role === 'tenant' ? 'active' : ''}`}
//               onClick={handleTenantClick}
//             >
//               Tenant
//             </button>
//             <button
//               className={`switch_role ${role === 'landlord' ? 'active' : ''}`}
//               onClick={handleLandlordClick}
//             >
//               Landlord
//             </button>
//           </div>
//         </div>

//         <div className="form-row">
//           <label htmlFor="">First Name</label>
//           <label htmlFor="">Last Name</label>
//           <input className='input_app' type="text" placeholder="First Name" />
//           <input className='input_app' type="text" placeholder="Last Name" />
//         </div>

//         <label htmlFor="">Email</label>
//         <input className='input_app' type="email" placeholder="Email" />

//         <label htmlFor="">Phone</label>
//         <input className='input_app' type="tel" placeholder="Phone Number" />

//         <div className="password-group">
//           <label htmlFor="">Password</label>
//           <label htmlFor="">Confirm password</label>
//           <input className='input_app' type="password" placeholder="Password" />
//           <input className='input_app' type="password" placeholder="Confirm Password" />
//         </div>

//         {isTenant ? (
//           <>
//             <div className="income-group">
//               <label>Occupation</label>
//               <label>Income per month</label>
//               <input className='input_app' type="text" placeholder="Occupation" />
//               <select className='select_app'>
//                 <option value="">Income per month</option>
//                 <option value="1">3,000,000 - 5,000,000</option>
//                 <option value="2">5,000,000 - 10,000,000</option>
//               </select>
//             </div>

//             <div className="upload-group">
//               <label>Upload ID card image</label>
//               <input className='input_app' type="file" />
//             </div>
//           </>
//         ) : (
//           <>
//             <label>Bank account number</label>
//             <input className='input_app' type="text" placeholder="xxxx-xxxx-xxxx-xxxx" />

//             <div className="upload-image-group">
//               <div className="upload-group">
//                 <label>Upload ID card image</label>
//                 <input className='input_app' type="file" />
//               </div>

//               <div className="upload-group">
//                 <label>Upload business license</label>
//                 <input className='input_app' type="file" /> {/* ✅ fixed class to className */}
//               </div>
//             </div>
//           </>
//         )}

//         <button className="submit_button medium-button">Sign up</button>
//         <p className="signIn-text">
//           Already have an account? <Link to="/loginPage" className='link_to'>Sign in</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

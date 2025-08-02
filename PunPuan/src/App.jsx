import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutPage/AboutPage';
import ViewPage from './pages/viewPage/ViewPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ContactPage from './pages/contactPage/ContactPage';
import NotificationPage from './pages/NotificationPage/NotificationPage';
import Login from './components/login/Login';
import LandlordDashboard from './pages/landlordDashboard/LandlordDashboard';
import { AuthProvider } from './context/AuthContext';
import AddPropertyPage from './pages/AddPropertyPage/AddPropertyPage';
import PropertiesPage from './pages/propertiesPage/PropertiesPage';
import MessageDetailPage from './pages/NotificationPage/MessageDetailPage';
import SignContractPage from './pages/signContractPage/SignContractPage';
import TenantListPage from './pages/tenantListPage/TenantListPage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/viewPage" element={<ViewPage />} />
          <Route path="/registerPage/:role" element={<RegisterPage />} />
          <Route path="/loginPage" element={<Login />} />
          <Route path="/contactPage" element={<ContactPage />} />
          <Route path="/notificationPage" element={<NotificationPage />} />
          <Route path="/landlordDashboard" element={<LandlordDashboard />} />
          <Route path="/propertiesPage" element={<PropertiesPage/>}/>
          <Route path="/addPropertyPage" element={<AddPropertyPage/>}/>
          <Route path="/message/:id" element={<MessageDetailPage />} />
          <Route path="/signContractPage/:id" element={<SignContractPage />} />
          <Route path="/tenantListPage" element={<TenantListPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Header from './components/header/Header';

// import './App.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import HomePage from './pages/homePage/HomePage';
// import AboutPage from './pages/aboutPage/AboutPage';
// // import TenantRegister from './pages/tenant/TenantRegister';
// // import LandlordRegister from './pages/landlord/LandlordRegister';
// import Footer from './components/footer/Footer';
// import ViewPage from './pages/viewPage/ViewPage'
// import ScrollToTop from './components/scrollToTop/ScrollToTop';
// import RegisterPage from './pages/RegisterPage/RegisterPage';
// import ContactPage from './pages/contactPage/ContactPage';
// import NotificationPage from './pages/NotificationPage/NotificationPage';
// import Login from './components/login/Login';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/aboutPage" element={<AboutPage />} />
//         <Route path="/viewPage" element={<ViewPage />} />
//         {/* Add more routes here */}
//         {/* <Route path="/register/tenant" element={<TenantRegister />} /> */}
//         {/* <Route path="/register/landlord" element={<LandlordRegister />} /> */}

//         <Route path="/registerPage/:role" element={<RegisterPage />} />
//         <Route path="/loginPage" element={<Login />} />
//         <Route path="/contactPage" element={<ContactPage />} />
//         <Route path="/notificationPage" element={<NotificationPage />} />
//       </Routes>
//       <Footer/>
//     </Router>
//   );
// };

// export default App;

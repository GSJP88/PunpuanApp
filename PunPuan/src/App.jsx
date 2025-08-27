import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/swal.css';
import './App.css';
import "./Service/i18n/i18n";

import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ViewPage from './pages/ViewPage';
import ViewPageBefore from './pages/ViewPageBefore';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import NotificationPage from './pages/NotificationPage';
import LandlordDashboard from './pages/LandlordDashboard';
import TenantDashboard from './pages/TenantDashboard';
import TenantHomePage from './pages/TenantHomePage';
import AddPropertyPage from './pages/AddPropertyPage';
import MessageDetailPage from './pages/MessageDetailPage';
import SignContractPage from './pages/SignContractPage';
import TenantListPage from './pages/TenantListPage';
import PropertyListPage from './pages/PropertyListPage';
import PropertyViewPage from './pages/PropertyViewPage';
import ProfilePage from './pages/ProfilePage';
import ChatPage from './pages/ChatPage';

import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/contactPage" element={<ContactPage />} />
          <Route path="/viewPage/:id" element={<ViewPage />} />
          <Route path="/viewPageBefore" element={<ViewPageBefore />} />
          <Route path="/registerPage/:role" element={<RegisterPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/notificationPage" element={<NotificationPage />} />
          <Route path="/tenantHomePage" element={<TenantHomePage />} />
          <Route path="/landlordDashboard" element={<LandlordDashboard />} />
          <Route path="/tenantDashboard" element={<TenantDashboard />} />
          <Route path="/addPropertyPage" element={<AddPropertyPage />} />
          <Route path="/message/:id" element={<MessageDetailPage />} />
          <Route path="/signContractPage/:id" element={<SignContractPage />} />
          <Route path="/tenantListPage" element={<TenantListPage />} />
          <Route path="/propertyListPage" element={<PropertyListPage />} />
          <Route path="/propertyViewPage/:id" element={<PropertyViewPage />} />
          <Route path="/profilePage" element={<ProfilePage />} />
          <Route path="/chatPage" element={<ChatPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;

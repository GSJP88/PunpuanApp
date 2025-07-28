import React from 'react';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <h1 className='hero-title'>PunPuan Agency</h1>
      <p className='hero-subtitle'>Connecting tenants with trusted landlords across the city, making it easier than ever to find safe and affordable.</p>
      <p className='hero-description'>Please choose your role to join us</p>
      <div className="hero-buttons">
        <button className="btn-st" onClick={() => navigate('/registerPage/tenant')}>
          Tenant
          <i className="bi bi-person-raised-hand"></i>
        </button>
        <button className="btn-nth" onClick={() => navigate('/registerPage/landlord')}>
          Landlord
          <i className="bi bi-houses-fill"></i>
        </button>
      </div>
    </section>
  );
};

export default Hero;

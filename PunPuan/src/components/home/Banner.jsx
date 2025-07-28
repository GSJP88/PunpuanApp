import React from 'react';
import Image from '../../assets/condo.jpg'; // Replace with actual image

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <p className="event-tag">EVENT • Building career</p>
        <h2 className='banner-title'>Efficiently transform your candidate experience.</h2>
        <p className="banner-subtitle">Modern UI apps to automate your hiring experience...</p>
      </div>
      <div className="banner-image">
        {/* <img src={Image} alt="Professional Woman" /> */}
        <div className="floating-types">
          <div className="banner-type">
            <div className="banner-type-overlay">
              <p>Apartment</p>
            </div>
          </div>
          <div className="banner-type">
            <div className="banner-type-overlay">
              <p>Condominium</p>
            </div>
          </div>
          <div className="banner-type">
            <div className="banner-type-overlay">
              <p>Townhouses</p>
            </div>
          </div>
          <div className="banner-type">
            <div className="banner-type-overlay">
              <p>house</p>
            </div>
          </div>
          {/* Add others here */}
        </div>
      </div>
    </section>
  );
};

export default Banner;

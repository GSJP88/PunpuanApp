import React from 'react';
import Image from '../../assets/condo.jpg'; // Replace with actual image
import ScrollDown from "./ScrollDown";

import apartmentImg from '../../assets/smallCondo.jpg';
import condoImg from '../../assets/condo.jpg';
import townhousesImg from '../../assets/townhouses.jpg';
import houseImg from '../../assets/threeD.jpg';

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
            <div className="type-image"
                  style={{
                  backgroundImage: `url(${apartmentImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}/>
              <p>Apartment</p>
          </div>
          <div className="banner-type">
            <div className="type-image"
                  style={{
                  backgroundImage: `url(${condoImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
            }}/>
              <p>Condominium</p>
          </div>
          <div className="banner-type">
            <div className="type-image"
                  style={{
                  backgroundImage: `url(${townhousesImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}/>
              <p>Townhouses</p>
          </div>
          <div className="banner-type">
                <div className="type-image"
                  style={{
                  backgroundImage: `url(${houseImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}/>
              <p>house</p>
          </div>
          {/* <div className="banner-type">
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
          </div> */}
          {/* Add others here */}
        </div>
      </div>
      <ScrollDown />
    </section>
  );
};

export default Banner;

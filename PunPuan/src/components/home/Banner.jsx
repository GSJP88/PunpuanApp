import React from 'react';
import Image from '../../assets/condo.jpg'; // Replace with actual image
import ScrollDown from "./ScrollDown";

import apartmentImg from '../../assets/apm2.jpg';
import condoImg from '../../assets/cd.jpg';
import townhousesImg from '../../assets/townhouses.jpg';
import houseImg from '../../assets/house.jpg';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <p className="event-tag">• Rental Assistant</p>
        <h2 className='banner-title'>More than just a place to stay, it's your space to live.</h2>
        <p className="banner-subtitle">Search. Compare. Move in. All in one place.</p>
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
              <p>House</p>
          </div>
        </div>
      </div>
      <ScrollDown />
    </section>
  );
};

export default Banner;

import React from 'react';
// import './home.css';
import bgImage from '../../assets/citytown2.png'
import bgImage2 from '../../assets/citytown3.png'
import Hero from './Hero';
import Banner from './Banner';
import '../../Styles/Homes.css'

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container">
            <div className="home__content grid">
              <div className="home__img"></div>
              <Hero/>
              <Banner/>
                {/* <Social />
                <Data /> */}
            </div>
        </div>
          <div className="bgImage">  
            <img className="" src={bgImage} alt="" />          
            <img className="" src={bgImage2} alt="" />          
          </div>
        <div className="mini__scroll">
          <a href="#filter" className="mini__scroll-button button--flex">
              <span className="mini__scroll-text">See More</span>
              <i class="bi bi-caret-down-fill "></i>
          </a>
        </div>
    </section>
  );
}

export default Home
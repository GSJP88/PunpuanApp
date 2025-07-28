import React from 'react';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Home from '../../components/home/Home';
import Slider from '../../components/slider/slider';
import FAQ from '../../components/faq/FAQ';
import Comment from '../../components/comment/Comment';
import './homePage.css';
// import Styles from '../../Styles/homePage.module.css'

const HomePage = () => {
  return (
    // <div className={Styles.homePage}>
      <main className="main">
        <Home />
        <Filter />
        <Card />
        <Slider />
        <div className="last container">
          <FAQ />
          <Comment />
        </div>
      </main>
    // </div>
  );
};

export default HomePage;

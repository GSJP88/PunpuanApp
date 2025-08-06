import React from 'react';
import Filter from '../components/filter/Filter';
import Slider from '../components/slider/Slider';
import FAQ from '../components/faq/FAQ';
import Comment from '../components/comment/Comment';
import CardRegistered from '../components/card/CardRegistered';

const TenantHomePage = () => {
  return (
      <main className="main">
        <Filter />
        <CardRegistered />
        <Slider />
        <div className="last container">
          <FAQ />
          <Comment />
        </div>
      </main>
  );
};

export default TenantHomePage;

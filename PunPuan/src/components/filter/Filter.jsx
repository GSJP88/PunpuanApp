import PriceRange from './PriceRange'
import Location from './Location'
import '../../Styles/filter.css'
import Type from './Type'
import React, { useRef, useState, useEffect } from 'react'

const Filter = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1440);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    const itemWidth = container.scrollWidth / 3;
    container.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    const scrollAmount = container.scrollLeft;
    const width = container.scrollWidth / 3;
    const newIndex = Math.round(scrollAmount / width);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (isSmallScreen) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isSmallScreen]);

  return (
    <div className="filter-container"  id="filter">
      <div
        className={`filter-wrapper  ${isSmallScreen ? 'scrollable' : ''} `}
        ref={scrollRef}
      >
        <div className="filter"><Location /></div>
        <div className="filter"><PriceRange /></div>
        <div className="filter"><Type /></div>
      </div>

      {isSmallScreen && (
        <div className="bars">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`bar ${i === activeIndex ? 'active' : ''}`}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;

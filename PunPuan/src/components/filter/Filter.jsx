import React, { useRef, useState, useEffect } from 'react';
import PriceRange from './PriceRange';
import Location from './Location';
import Type from './Type';
import '../../Styles/filter.css';
import propertyData from '../../data/properties';
import CardList from '../card/CardList';

const Filter = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1440);

  // LIFTED STATES
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [village, setVillage] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [activeType, setActiveType] = useState('');

  // Filtered results
  const [filteredData, setFilteredData] = useState([]);
  const [searchDone, setSearchDone] = useState(false); // track if search has been clicked

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1440);
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
    const width = container.scrollWidth / 3;
    const newIndex = Math.round(container.scrollLeft / width);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (isSmallScreen) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isSmallScreen]);

  // FILTER FUNCTION
  const handleFilterSearch = () => {
    const results = propertyData.filter((item) => {
      const locationMatch =
        (!province || item.province === province) &&
        (!district || item.district === district) &&
        (!village || item.village === village);

      const priceMatch =
        item.balance >= minPrice && item.balance <= maxPrice;

      const typeMatch =
        !activeType || item.type === activeType;

      return locationMatch && priceMatch && typeMatch;
    });

    setFilteredData(results);
    setSearchDone(true); // mark that a search has been performed
  };

  return (
    <div>
      <div className="filter-container" id="filter">
        <div
          className={`filter-wrapper ${isSmallScreen ? 'scrollable' : ''}`}
          ref={scrollRef}
        >
          <div className="filter">
            <Location
              province={province} setProvince={setProvince}
              district={district} setDistrict={setDistrict}
              village={village} setVillage={setVillage}
            />
          </div>
          <div className="filter">
            <PriceRange
              minPrice={minPrice} setMinPrice={setMinPrice}
              maxPrice={maxPrice} setMaxPrice={setMaxPrice}
            />
          </div>
          <div className="filter">
            <Type activeType={activeType} setActiveType={setActiveType} />
          </div>
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
        <div className="filter-search-btn">
          <button className="small-button" onClick={handleFilterSearch}>Filter Search</button>
        </div>
      </div>

      <div className="container">
        {searchDone && filteredData.length > 0 && (
          <CardList data={filteredData} />
        )}

        {searchDone && filteredData.length === 0 && (
          <p style={{ textAlign: 'center', marginTop: '40px', fontWeight: '500', color: 'var(--text-color)' }}>
            No Result
          </p>
        )}
      </div>
    </div>
  );
};

export default Filter;
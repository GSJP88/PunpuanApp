import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const PriceRange = ({ minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  const { t } = useTranslation();
  const priceGap = 1000000;
  const maxLimit = 10000000;
  const progressRef = useRef();

  const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const handleMinInputChange = (e) => {
    let value = parseInt(e.target.value.replace(/,/g, '')) || 0;
    if (maxPrice - value >= priceGap) setMinPrice(value);
  };

  const handleMaxInputChange = (e) => {
    let value = parseInt(e.target.value.replace(/,/g, '')) || 0;
    if (value - minPrice >= priceGap && value <= maxLimit) setMaxPrice(value);
  };

  const handleRangeChange = (type, value) => {
    value = parseInt(value);
    if (type === 'min' && maxPrice - value >= priceGap) setMinPrice(value);
    if (type === 'max' && value - minPrice >= priceGap) setMaxPrice(value);
  };

  useEffect(() => {
    const minPercent = (minPrice / maxLimit) * 100;
    const maxPercent = (maxPrice / maxLimit) * 100;
    if (progressRef.current) {
      progressRef.current.style.left = `${minPercent}%`;
      progressRef.current.style.right = `${100 - maxPercent}%`;
    }
  }, [minPrice, maxPrice]);

  return (
    <div className="price-wrapper mt-4">
      <h2 className='title'>{t('price_select')}</h2>
      <div className="price-input">
        <div className="field">
          <span>{t('min')}</span>
          <span className="currency-label">LAK</span>
          <input
            type="text"
            value={formatNumber(minPrice)}
            onChange={handleMinInputChange}
          />
        </div>
        <div className="separator">-</div>
        <div className="field">
          <span>{t('max')}</span>
          <span className="currency-label">LAK</span>
          <input
            type="text"
            value={formatNumber(maxPrice)}
            onChange={handleMaxInputChange}
          />
        </div>
      </div>
      <div className="slider">
        <div className="progress" ref={progressRef}></div>
      </div>
      <div className="range-input">
        <input
          type="range"
          min="0"
          max={maxLimit}
          step="1000"
          value={minPrice}
          onChange={(e) => handleRangeChange('min', e.target.value)}
        />
        <input
          type="range"
          min="0"
          max={maxLimit}
          step="1000"
          value={maxPrice}
          onChange={(e) => handleRangeChange('max', e.target.value)}
        />
      </div>
    </div>
  );
};

export default PriceRange;
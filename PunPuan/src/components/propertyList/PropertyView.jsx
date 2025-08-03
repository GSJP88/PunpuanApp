import React from 'react';
import '../../Styles/propertyList.css';

const PropertyView = ({ data }) => {
  const percent = Math.floor(data.occupancy * 100 / data.totalProperty);
  const statusText= percent === 100 ? 'Unavailable' : 'Available';

  return (
    <></>
  );
};

export default PropertyView;

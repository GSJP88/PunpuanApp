import React from 'react';
import PropertyCard from './PropertyCard';
import '../../Styles/propertyList.css';
import img1 from '../../assets/condo.jpg';
import img2 from '../../assets/apm.jpg';
import img3 from '../../assets/cd.jpg';
import img4 from '../../assets/town.jpg';


const properties = [
  {
    id: 1,
    image: img1,
    type: 'Single family',
    name: 'Dream house',
    address: '123 River Ridge Dr, Boardman, OR, 97818, US',
    occupancy: 0,
    balance: 0,
  },
  {
    id: 2,
    image: img2,
    type: '2 Units',
    name: 'House',
    address: '1231 116th Ave NE, Bellevue, WA, 98004, US',
    occupancy: 0,
    balance: 0,
  },
  {
    id: 3,
    image: img3,
    type: 'Single family',
    name: 'Luxury Apartments',
    address: '34287 Diagonal Blvd, Hermiston, OR, 97838, US',
    occupancy: 100,
    balance: 27615.7,
  },
  {
    id: 4,
    image: img4,
    type: 'Single family',
    name: 'Orange county',
    address: 'Utah Ave, Pasco, WA 99301, USA',
    occupancy: 100,
    balance: 3725,
  }
];

const PropertyList = () => {
  return (
    <div className="property-list-wrapper box_container">
        <h2 className="property-list-title">Property List</h2>
        <div className="property-list">
          {properties.map((property) => (
            <PropertyCard key={property.id} data={property} />
          ))}
        </div>
    </div>
  );
};

export default PropertyList;

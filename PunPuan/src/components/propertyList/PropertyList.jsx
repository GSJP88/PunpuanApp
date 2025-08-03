import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import '../../Styles/propertyList.css';
import img1 from '../../assets/condo.jpg';
import img2 from '../../assets/apm.jpg';
import img3 from '../../assets/cd.jpg';
import img4 from '../../assets/town.jpg';



const allProperties = [
  {
    id: 1,
    image: img1,
    type: 'Single family',
    name: 'Apartment B8, Vientiane',
    address: '123 River Ridge Dr, Boardman, OR, 97818, US',
    occupancy: 5,
    totalProperty: 15,
    balance: 0,
  },
  {
    id: 2,
    image: img2,
    type: '2 Units',
    name: 'Townhouse 3B, Luang Prabang',
    address: '1231 116th Ave NE, Bellevue, WA, 98004, US',
    occupancy: 3,
    totalProperty: 5,
    balance: 0,
  },
  {
    id: 3,
    image: img3,
    type: 'Single family',
    name: 'Condo A12, Vientiane',
    address: '34287 Diagonal Blvd, Hermiston, OR, 97838, US',
    occupancy: 2,
    totalProperty: 20,
    balance: 27615.7,
  },
  {
    id: 4,
    image: img4,
    type: 'Single family',
    name: 'Room 202, Pakse',
    address: 'Utah Ave, Pasco, WA 99301, USA',
    occupancy: 1,
    totalProperty: 15,
    balance: 3725,
  }
];

const PropertyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // all | available | unavailable

  const filteredProperties = allProperties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.id.toString().includes(searchTerm);

    const matchesFilter =
      filter === 'all' ||
      (filter === 'available' && property.occupancy < 100) ||
      (filter === 'unavailable' && property.occupancy === 100);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="property-list-wrapper box_container">
      <div className="property-list-headline">
      <h2 className="property-list-title">Property List</h2>
        <div className="property-controls">
          <div className="filter-buttons">
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
            <button onClick={() => setFilter('available')} className={filter === 'available' ? 'active' : ''}>Available</button>
            <button onClick={() => setFilter('unavailable')} className={filter === 'unavailable' ? 'active' : ''}>Unavailable</button>
          </div>
          <div className="search-input-wrapper input_app">
            <i className="bi bi-search search-input-icon"></i>
            <input
              type="text"
              placeholder="Search by name or ID..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="property-list">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <PropertyCard key={property.id} data={property} />
          ))
        ) : (
          <p className="no-results">No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from './PropertyCard';
import allProperties from '../../data/properties'


const PropertyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // all | available | unavailable
  
  const filteredProperties = allProperties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.id.toString().includes(searchTerm);
    
    const percent = Math.floor((property.occupancy * 100) / property.totalProperty);
    const matchesFilter =
    filter === 'all' ||
      (filter === 'available' && percent < 100) ||
      (filter === 'unavailable' && percent === 100);

    return matchesSearch && matchesFilter;
  });

  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate('/addPropertyPage'); // adjust route if needed
  };

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
            // <PropertyCard key={property.id} data={{ ...property, image: imageMap[property.image] }} />
          ))
        ) : (
          <p className="no-results">No properties found.</p>
        )}
      </div>
      <div className="add-btn-wrapper">
        <button className="add-property small-button" onClick={handleAddClick}><i class="bi bi-plus"></i> Add Property</button>
      </div>
    </div>
  );
};

export default PropertyList;
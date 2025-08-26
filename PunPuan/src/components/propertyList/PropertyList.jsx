import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from './PropertyCard';
import axios from 'axios';

const PropertyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // all | available | unavailable
  const [allProperties, setAllProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:5000/api/rooms', {
          withCredentials: true // สำคัญ!
        });
        setAllProperties(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load properties');
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  // filter และ search logic
  const filteredProperties = allProperties.filter(property => {
    const name = property.Property_Name || '';
    const availability = property.Availability_Status || '';

    const matchesSearch =
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.Room_ID?.toString().includes(searchTerm);

    const matchesFilter =
      filter === 'all' ||
      (filter === 'available' && availability.toLowerCase() === 'available') ||
      (filter === 'unavailable' && availability.toLowerCase() !== 'available');

    return matchesSearch && matchesFilter;
  });

  const handleAddClick = () => {
    navigate('/addPropertyPage'); // ปรับเส้นทางถ้าจำเป็น
  };

  return (
    <div className="property-list-wrapper box_container">
      <div className="property-list-headline"> 
        {/* -------------------------------------------------------------------Lan */}
        <h2 className="property-list-title">ລາຍການຫ້ອງ</h2> 
        <div className="property-controls">
          <div className="filter-buttons">
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>
              ທັງໝົດ
            </button>
            <button
              onClick={() => setFilter('available')}
              className={filter === 'available' ? 'active' : ''}
            >
              ຫ້ອງເຕັມ
            </button>
            <button
              onClick={() => setFilter('unavailable')}
              className={filter === 'unavailable' ? 'active' : ''}
            >
              ຍັງວ່າງ
            </button>
          </div>
          <div className="search-input-wrapper input_app">
            <i className="bi bi-search search-input-icon"></i>
            <input
              type="text"
              placeholder="ປ້ອນຊື່ ຫຼື ໄອດີ"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="property-list">
        {loading ? (
          <p>ກຳລັງໂຫລດລາຍການຫ້ອງ...</p>
        ) : error ? (
          <p>{error}</p>
        ) : filteredProperties.length > 0 ? (
          filteredProperties.map((property) => {
            const mappedData = {
              id: property.Room_ID,
              name: property.Property_Name,
              address: property.Address,
              image: property.Profile_Image
                ? `http://localhost:5000/uploads/${property.Profile_Image}`
                : '/default-image.jpg',
              type: property.Room_Type,
              Room_Amount: property.Room_Amount || 0,
              Max_Occupancy: property.Max_Occupancy || 1,
            };
            return <PropertyCard key={property.Room_ID} data={mappedData} />;
          })
        ) : (
          <p className="no-results">ບໍ່ມີລາຍການຫ້ອງ.</p>
        )}
      </div>

      <div className="add-btn-wrapper">
        <button className="add-property small-button" onClick={handleAddClick}>
          <i className="bi bi-plus"></i> ເພີ່ມຫ້ອງເຊົ່າ
        </button>
      </div>
    </div>
  );
};

export default PropertyList;

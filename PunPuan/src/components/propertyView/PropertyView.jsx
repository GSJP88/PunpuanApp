import React, { useState, useEffect } from 'react';
import '../../Styles/propertyList.css';
import { useParams } from 'react-router-dom';

const PropertyView = () => {
  const { id } = useParams();  // ดึง Room_ID จาก URL
  const [property, setProperty] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch ข้อมูลห้องจาก backend ด้วย id
    const fetchRoom = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/api/rooms/${id}`, {
          credentials: 'include', // ถ้าใช้ session/cookie
        });
        if (!res.ok) throw new Error('Failed to fetch property');
        const data = await res.json();

        // ดัดแปลงข้อมูลให้อยู่ในรูปแบบ property.images (array) เพื่อใช้กับ UI เดิม
        // สมมติ property.Profile_Image และ property.Property_Images เป็น string filename คั่นด้วย comma
        const images = [];
        if (data.Profile_Image) images.push(`/uploads/${data.Profile_Image}`);
        if (data.Property_Images) {
          const others = data.Property_Images.split(',').map(img => `/uploads/${img.trim()}`);
          images.push(...others);
        }

        setProperty({ ...data, images });
        setCurrentIndex(0);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  const goToPrevious = () => {
    if (!property) return;
    setCurrentIndex(prev => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    if (!property) return;
    setCurrentIndex(prev => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  if (loading) return <p>Loading property...</p>;
  if (error) return <p>{error}</p>;
  if (!property) return <p>Property not found</p>;

  return (
    <div key={property.Room_ID} className="property_view-page">
      <div className="sign-container">
        <div className="sign-wrapper">
          <ul className="sign_list">
            <li className="sign_item name">{property.Property_Name || 'No name'}</li>
            <li className="sign_item type">{property.Room_Type || 'No type'}</li>
            <li className="sign_item id">ID: {property.Room_ID}</li>
          </ul>
        </div>
      </div>

      <div className="view-image-container">
        <div className="main-image-wrapper">
          <button className="arrow-button left" onClick={goToPrevious}>❮</button>
          {property.images.length > 0 ? (
            <img src={property.images[currentIndex]} alt={`img-${currentIndex}`} className="main-image" />
          ) : (
            <p>No images available</p>
          )}
          <button className="arrow-button right" onClick={goToNext}>❯</button>
        </div>
        <div className="thumbnail-row">
          {property.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`thumb-${index}`}
              className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyView;
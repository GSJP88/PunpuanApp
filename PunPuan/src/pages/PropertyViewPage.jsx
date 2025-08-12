import React, { useEffect, useState } from 'react';
import "../Styles/propertyViewPage.css";
import PropertySign from '../components/propertyView/PropertySign';
import PropertyImgSlide from '../components/propertyView/PropertyImgSlide';
import PropertyDetail from '../components/propertyView/PropertyDetail';
import PropertySpecs from '../components/propertyView/PropertySpecs';
import PropertyLocation from '../components/propertyView/PropertyLocation';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PropertyViewPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  axios.get(`http://localhost:5000/api/rooms/${id}`, { withCredentials: true })
    .then(res => {
      const data = res.data;

      if (data.Property_Images) {
        try {
          const parsedImages = JSON.parse(data.Property_Images);
          if (Array.isArray(parsedImages)) {
            data.images = parsedImages.map(filename => `http://localhost:5000/uploads/${filename}`);
          } else {
            data.images = [];
          }
        } catch {
          data.images = data.Property_Images.split(',').map(filename => `http://localhost:5000/uploads/${filename.trim()}`);
        }
      } else {
        data.images = [];
      }

      if (data.Profile_Image) {
        data.images.unshift(`http://localhost:5000/uploads/${data.Profile_Image}`);
      }

      setProperty(data);
    })
    .catch(err => {
      console.error('Error fetching room:', err);
      setProperty(null);
    })
    .finally(() => setLoading(false));
}, [id]);

  if (loading) return <p>Loading...</p>;
  if (!property) return <p>Property not found</p>;

  return (
    <div className='property-view-page container'>
      <PropertySign property={property} />
      <PropertyImgSlide property={property} />
      <PropertySpecs property={property} />
      <PropertyDetail property={property} />
      <PropertyLocation property={property} />
    </div>
  );
};

export default PropertyViewPage;

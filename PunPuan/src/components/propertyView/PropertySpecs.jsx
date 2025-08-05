import React, { useState } from 'react';
import propertiesInfo from '../../data/properties'; // <-- must be .js not .json
import { useParams } from 'react-router-dom';

const PropertySpecs = () => {
  const { id } = useParams();
  const property = propertiesInfo.find(p => p.id === parseInt(id));

  return (
    <div className="specs" key={property.id}>
        <div className="specs-wrapper container">
            <div className="specs-box">
                <div className="specs-content">
                    <i class='fas fa-bed content data'></i>
                    <p className="room content">Bed Room: </p>
                    <p className="number content data">{property.bedRoom}</p>
                </div>
            </div>
            <div className="specs-box">
                <div className="specs-content">
                    <i class='fas fa-bath content data'></i>
                    <p className="room content">Bath Room: </p>
                    <p className="number content data">{property.bathRoom}</p>
                </div>
            </div>
            <div className="specs-box">
                <div className="specs-content">
                    <i class='fas fa-car content data'></i>
                    <p className="room content ">Parking: </p>
                    <p className="number content data">{property.Parking}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertySpecs

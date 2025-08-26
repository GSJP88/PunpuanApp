import React from 'react';

const PropertySpecs = ({ property }) => {
  return (
    <div className="specs" key={property.Room_ID}>
      <div className="specs-wrapper container">
        <div className="specs-box">
          <div className="specs-content">
            <i className='fas fa-bed content data'></i>
            <p className="room content">ຫ້ອງນອນ: </p>
            <p className="number content data">{property.Bed_Rooms || property.Bed_Room || property.bedRoom}</p>
          </div>
        </div>
        <div className="specs-box">
          <div className="specs-content">
            <i className='fas fa-bath content data'></i>
            <p className="room content">ຫ້ອງນ້ຳ: </p>
            <p className="number content data">{property.Bath_Rooms || property.bathRoom}</p>
          </div>
        </div>
        <div className="specs-box">
          <div className="specs-content">
            <i className='fas fa-car content data'></i>
            <p className="room content ">ບ່ອນຈອດລົດ: </p>
            <p className="number content data">{property.Parking}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySpecs;

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/addProperty.css';

const laosData = {
  "Vientiane Prefecture": {
    "Chanthabuly": ["Ban Phonthan", "Ban Nongbone", "Ban Watnak"],
    "Sikhottabong": ["Ban Dongdok", "Ban Phonpapao"],
    "Sisattanak": ["Ban Simeuang", "Ban Haisok", "Ban Phonsinuan"],
    "Xaysetha": ["Ban Nongbeuk", "Ban Saphanthong Neua"],
    "Hadxayfong": ["Ban Naxay", "Ban Mai", "Ban Dongnaxok"]
  },
  "Luang Prabang": {
    "Mueang Luang Prabang": ["Ban Xiengthong", "Ban Watphabook", "Ban Vangvieng"],
    "Phonxay": ["Ban Phonxay", "Ban Hadsadone"]
  },
  "Champasak": {
    "Pakse": ["Ban Phonxai", "Ban Thongkhankham"],
    "Mueang Champasak": ["Ban Wat Luang", "Ban Nong Sa"]
  }
};

const AddProperty = () => {
  const navigate = useNavigate();

  const [propertyImages, setPropertyImages] = useState([]);
  const [profileImage, setProfileImage] = useState(null);

  const imageInputRef = useRef(null);
  const profileInputRef = useRef(null);

  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [village, setVillage] = useState('');
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  useEffect(() => {
    if (province) {
      setDistricts(Object.keys(laosData[province]));
      setDistrict('');
      setVillages([]);
      setVillage('');
    } else {
      setDistricts([]);
      setDistrict('');
      setVillages([]);
      setVillage('');
    }
  }, [province]);

  useEffect(() => {
    if (province && district) {
      setVillages(laosData[province][district]);
      setVillage('');
    } else {
      setVillages([]);
      setVillage('');
    }
  }, [district, province]);

  const handleMultipleImages = (e) => {
    const files = Array.from(e.target.files);
    setPropertyImages((prev) => [...prev, ...files]);
    if (imageInputRef.current) imageInputRef.current.value = '';
  };

  const handleProfileImage = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const handleClearImages = () => {
    setPropertyImages([]);
    if (imageInputRef.current) imageInputRef.current.value = '';
  };

  const handleRemoveImage = (indexToRemove) => {
    const updated = propertyImages.filter((_, i) => i !== indexToRemove);
    setPropertyImages(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      province,
      district,
      village,
      locationLink: document.querySelector('input[placeholder="Location Link"]').value,
      propertyName: document.getElementById('propertyName').value,
      price: document.getElementById('price').value,
      roomType: document.getElementById('roomType').value,
      description: document.getElementById('description').value,
      roomAmount: document.getElementById('rooms').value,
      available: document.querySelector('.room-amount input:nth-child(2)').value,
      bedRooms: document.querySelector('.room-specs input:nth-child(1)').value,
      bathRooms: document.querySelector('.room-specs input:nth-child(2)').value,
      parking: document.querySelector('.room-specs input:nth-child(3)').value,
      profileImage,
      propertyImages,
    };

    navigate('/propertyListPage', { state: formData });
  };

  return (
    <div className="add-property box_container container">
      <form className="add-property-form" onSubmit={handleSubmit}>
        <h2>Add Property</h2>

        {/* Room Info */}
        <div className="row">
          <div className="form-group">
            <label htmlFor="rooms">Number of rooms</label>
            <div className="room-amount">
              <input type="text" id="rooms" placeholder="Rooms" />
              <input type="text" placeholder="Available" />
            </div>
          </div>

          <div className="form-group">
            <label>Room specs</label>
            <div className="room-specs">
              <input type="text" placeholder="Bed rooms" />
              <input type="text" placeholder="Bath rooms" />
              <input type="text" placeholder="Parking" />
            </div>
          </div>
        </div>

        {/* Location & Description */}
        <div className="row">
          <div className="form-group">
            <label>Location</label>
            <select className="select-location" value={province} onChange={(e) => setProvince(e.target.value)}>
              <option value="">Select Province</option>
              {Object.keys(laosData).map((prov) => (
                <option key={prov} value={prov}>{prov}</option>
              ))}
            </select>

            <select className="select-location" value={district} onChange={(e) => setDistrict(e.target.value)} disabled={!districts.length}>
              <option value="">Select District</option>
              {districts.map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>

            <select className="select-location" value={village} onChange={(e) => setVillage(e.target.value)} disabled={!villages.length}>
              <option value="">Select Village</option>
              {villages.map((vill) => (
                <option key={vill} value={vill}>{vill}</option>
              ))}
            </select>

            <input type="text" placeholder="Location Link" />
          </div>

          <div className="form-group">
            <label htmlFor="roomType">Room type</label>
            <select id="roomType" className='selectType'>
              <option>Condominium</option>
              <option>Townhouse</option>
              <option>Apartment</option>
              <option>Room</option>
            </select>

            <label htmlFor="description">Description</label>
            <textarea className='add-description' id="description" rows="4" placeholder="Description"></textarea>
          </div>
        </div>

        {/* Name & Price */}
        <div className="row">
          <div className="form-group">
            <label htmlFor="propertyName">Property name</label>
            <input type="text" id="propertyName" placeholder="Name" />
          </div>

          <div className="form-group">
            <label htmlFor="price">Rental price</label>
            <input type="text" id="price" placeholder="Price" />
          </div>
        </div>

        {/* Images Upload */}
        <div className="row image-upload-section">
          {/* Profile Image */}
          <div className="form-group">
            <label htmlFor="profileImage">Property Profile</label>
            <div className="image-box">
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                ref={profileInputRef}
                onChange={handleProfileImage}
                style={{ display: 'none' }}
              />
              <label htmlFor="profileImage" className="custom-file-label">+ Select profile image</label>
              <div className="preview-thumbnails">
                <div className="thumbnail-wrapper profile">
                  {profileImage && (
                    <img src={URL.createObjectURL(profileImage)} alt="profile-preview" className="preview-image profile-image" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Property Images */}
          <div className="form-group">
            <label htmlFor="propertyImages">Property Images</label>
            <div className="image-box">
              <input
                type="file"
                id="propertyImages"
                accept="image/*"
                multiple
                ref={imageInputRef}
                onChange={handleMultipleImages}
                style={{ display: 'none' }}
              />
              <label htmlFor="propertyImages" className="custom-file-label">
                + Select images ({propertyImages.length} selected)
              </label>

              <div className="preview-thumbnails">
                {propertyImages.map((img, index) => (
                  <div key={index} className="thumbnail-wrapper">
                    <img src={URL.createObjectURL(img)} alt={`preview-${index}`} className="preview-image" />
                    <button type="button" className="remove-button" onClick={() => handleRemoveImage(index)}>
                      <i className="bi bi-x"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="btn-group">
              <button type="button" className="clear-btn small-button" onClick={handleClearImages}>
                Clear All
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit_btn medium-button">
          <i className="bi bi-plus"></i>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;

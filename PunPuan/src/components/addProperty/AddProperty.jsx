import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

  // Location state
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [village, setVillage] = useState('');
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  // Input fields
  const [locationLink, setLocationLink] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [price, setPrice] = useState('');
  const [roomType, setRoomType] = useState('Condominium');
  const [description, setDescription] = useState('');
  const [roomAmount, setRoomAmount] = useState('');
  const [available, setAvailable] = useState('');
  const [bedRooms, setBedRooms] = useState('');
  const [bathRooms, setBathRooms] = useState('');
  const [parking, setParking] = useState('');

  // Images
  const [propertyImages, setPropertyImages] = useState([]);
  const [profileImage, setProfileImage] = useState(null);

  const imageInputRef = useRef(null);
  const profileInputRef = useRef(null);

  // Update districts and villages when province/district changes
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

  // Handle multiple property images
  const handleMultipleImages = (e) => {
    const files = Array.from(e.target.files);
    setPropertyImages((prev) => [...prev, ...files]);
    if (imageInputRef.current) imageInputRef.current.value = '';
  };

  // Handle profile image
  const handleProfileImage = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  // Clear all property images
  const handleClearImages = () => {
    setPropertyImages([]);
    if (imageInputRef.current) imageInputRef.current.value = '';
  };

  // Remove one image by index
  const handleRemoveImage = (indexToRemove) => {
    setPropertyImages(propertyImages.filter((_, i) => i !== indexToRemove));
  };

  // Submit form with images and data
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();

    // แก้ไขตรงนี้: ดึง user object ที่เก็บทั้ง object ไว้ใน localStorage ชื่อ 'user'
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?.id || user?.User_ID; // กรณีเก็บในฟิลด์ id หรือ User_ID

    if (!userId) {
      alert('User ID not found. Please login again.');
      return;
    }

    formData.append('userId', userId);

    // ข้อมูลอื่น ๆ ตามเดิม
    formData.append('province', province);
    formData.append('district', district);
    formData.append('village', village);
    formData.append('locationLink', locationLink);
    formData.append('propertyName', propertyName);
    formData.append('price', price);
    formData.append('roomType', roomType);
    formData.append('description', description);
    formData.append('roomAmount', roomAmount);
    formData.append('available', available);
    formData.append('bedRooms', bedRooms);
    formData.append('bathRooms', bathRooms);
    formData.append('parking', parking);

    if (profileImage) {
      formData.append('profileImage', profileImage);
    }

    propertyImages.forEach((file) => {
      formData.append('propertyImages', file);
    });

    const response = await axios.post('http://localhost:5000/api/rooms', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    alert('Property added successfully!');
    navigate('/propertyListPage');
  } catch (error) {
    console.error('Error adding property:', error);
    alert('Failed to add property. Please try again.');
  }
};

  return (
    <div className="add_property box_container container">
      <form className="add_property-form" onSubmit={handleSubmit}>
        <h2>Add Property</h2>

        {/* Room Info */}
        <div className="row">
          <div className="form-group">
            <label htmlFor="rooms">Number of rooms</label>
            <div className="room-amount">
              <input
                type="text"
                id="rooms"
                placeholder="Rooms"
                value={roomAmount}
                onChange={(e) => setRoomAmount(e.target.value)}
              />
              <input
                type="text"
                placeholder="Available"
                value={available}
                onChange={(e) => setAvailable(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Room specs</label>
            <div className="room-specs">
              <input
                type="text"
                placeholder="Bed rooms"
                value={bedRooms}
                onChange={(e) => setBedRooms(e.target.value)}
              />
              <input
                type="text"
                placeholder="Bath rooms"
                value={bathRooms}
                onChange={(e) => setBathRooms(e.target.value)}
              />
              <input
                type="text"
                placeholder="Parking"
                value={parking}
                onChange={(e) => setParking(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Location & Description */}
        <div className="row">
          <div className="form-group">
            <label>Location</label>
            <select
              className="select-location"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            >
              <option value="">Select Province</option>
              {Object.keys(laosData).map((prov) => (
                <option key={prov} value={prov}>
                  {prov}
                </option>
              ))}
            </select>

            <select
              className="select-location"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              disabled={!districts.length}
            >
              <option value="">Select District</option>
              {districts.map((dist) => (
                <option key={dist} value={dist}>
                  {dist}
                </option>
              ))}
            </select>

            <select
              className="select-location"
              value={village}
              onChange={(e) => setVillage(e.target.value)}
              disabled={!villages.length}
            >
              <option value="">Select Village</option>
              {villages.map((vill) => (
                <option key={vill} value={vill}>
                  {vill}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Location Link"
              value={locationLink}
              onChange={(e) => setLocationLink(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="roomType">Room type</label>
            <select
              id="roomType"
              className="selectType"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option>Condominium</option>
              <option>Townhouse</option>
              <option>Apartment</option>
              <option>Room</option>
            </select>

            <label htmlFor="description">Description</label>
            <textarea
              className="add-description"
              id="description"
              rows="4"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        {/* Name & Price */}
        <div className="row">
          <div className="form-group">
            <label htmlFor="propertyName">Property name</label>
            <input
              type="text"
              id="propertyName"
              placeholder="Name"
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Rental price</label>
            <input
              type="text"
              id="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
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
              <label htmlFor="profileImage" className="custom-file-label">
                + Select profile image
              </label>
              <div className="preview-thumbnails">
                <div className="thumbnail-wrapper profile">
                  {profileImage && (
                    <img
                      src={URL.createObjectURL(profileImage)}
                      alt="profile-preview"
                      className="preview-image profile-image"
                    />
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
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`preview-${index}`}
                      className="preview-image"
                    />
                    <button
                      type="button"
                      className="remove-button"
                      onClick={() => handleRemoveImage(index)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="btn-group">
              <button
                type="button"
                className="clear-btn small-button"
                onClick={handleClearImages}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit_btn medium-button">
          + Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
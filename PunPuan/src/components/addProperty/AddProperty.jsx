import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../Styles/addProperty.css';
import { showSuccess, showError } from "../../Service/swal";
import { useTranslation } from 'react-i18next';
import laosData from '../filter/laosData'; // ต้องเป็นรูปแบบ { province: { district: [{ en, la }] } }

const AddProperty = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  /*** Location State ***/
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [village, setVillage] = useState('');
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  /*** Property Info ***/
  const [locationLink, setLocationLink] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [price, setPrice] = useState('');
  const [roomType, setRoomType] = useState('Condominium');
  const [description, setDescription] = useState('');
  const [roomAmount, setRoomAmount] = useState('');
  const [maxOccupancy, setMaxOccupancy] = useState('');
  const [bedRooms, setBedRooms] = useState('');
  const [bathRooms, setBathRooms] = useState('');
  const [parking, setParking] = useState('');

  /*** Images ***/
  const [propertyImages, setPropertyImages] = useState([]);
  const [profileImage, setProfileImage] = useState(null);

  const imageInputRef = useRef(null);
  const profileInputRef = useRef(null);

  /*** Update districts and villages based on selected province/district ***/
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

  /*** Handle multiple property images ***/
  const handleMultipleImages = (e) => {
    const files = Array.from(e.target.files);
    setPropertyImages((prev) => [...prev, ...files]);
    if (imageInputRef.current) imageInputRef.current.value = '';
  };

  /*** Handle profile image ***/
  const handleProfileImage = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  /*** Clear all property images ***/
  const handleClearImages = () => {
    setPropertyImages([]);
    if (imageInputRef.current) imageInputRef.current.value = '';
  };

  /*** Remove single image by index ***/
  const handleRemoveImage = (indexToRemove) => {
    setPropertyImages(propertyImages.filter((_, i) => i !== indexToRemove));
  };

  /*** Submit property form ***/
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      const user = JSON.parse(localStorage.getItem('user'));
      const userId = user?.id || user?.User_ID;

      if (!userId) {
        alert('User ID not found. Please login again.');
        return;
      }

      formData.append('userId', userId);
      formData.append('province', province);
      formData.append('district', district);
      formData.append('village', village);
      formData.append('locationLink', locationLink);
      formData.append('propertyName', propertyName);
      formData.append('price', price);
      formData.append('roomType', roomType);
      formData.append('description', description);
      formData.append('roomAmount', roomAmount);
      formData.append('maxOccupancy', maxOccupancy);
      formData.append('bedRooms', bedRooms);
      formData.append('bathRooms', bathRooms);
      formData.append('parking', parking);

      if (profileImage) formData.append('profileImage', profileImage);
      propertyImages.forEach((file) => formData.append('propertyImages', file));

      await axios.post('http://localhost:5000/api/rooms', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      showSuccess(t('submit_success'), '');
      navigate('/propertyListPage');
    } catch (error) {
      console.error('Error adding property:', error);
      alert(t('submit_failed'));
    }
  };

  return (
    <div className="add_property box_container container">
      <form className="add_property-form" onSubmit={handleSubmit}>
        <h2>{t('add_property_title')}</h2>

        {/* Room Info */}
        <div className="row">
          <div className="form-group">
            <label>{t('number_of_rooms')}</label>
            <div className="room-amount">
              <input
                type="text"
                placeholder={t('add_number_of_rooms')}
                value={roomAmount}
                onChange={(e) => setRoomAmount(e.target.value)}
              />
              <input
                type="text"
                placeholder={t('add_available')}
                value={maxOccupancy}
                onChange={(e) => setMaxOccupancy(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>{t('room_specs')}</label>
            <div className="room-specs">
              <input
                type="text"
                placeholder={t('bed_rooms')}
                value={bedRooms}
                onChange={(e) => setBedRooms(e.target.value)}
              />
              <input
                type="text"
                placeholder={t('bath_rooms')}
                value={bathRooms}
                onChange={(e) => setBathRooms(e.target.value)}
              />
              <input
                type="text"
                placeholder={t('parking')}
                value={parking}
                onChange={(e) => setParking(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Location & Description */}
        <div className="row">
          <div className="form-group">
            <label>{t('location_label')}</label>

            <select
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="select-location"
            >
              <option value="">{t('select_province')}</option>
              {Object.keys(laosData).map((prov) => (
                <option key={prov} value={prov}>
                  {i18n.language === 'en' ? prov : t(prov)}
                </option>
              ))}
            </select>

            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              disabled={!districts.length}
              className="select-location"
            >
              <option value="">{t('select_district')}</option>
              {districts.map((dist) => (
                <option key={dist} value={dist}>
                  {i18n.language === 'en' ? dist : t(dist)}
                </option>
              ))}
            </select>

            <select
              value={village}
              onChange={(e) => setVillage(e.target.value)}
              disabled={!villages.length}
              className="select-location"
            >
              <option value="">{t('select_village')}</option>
              {villages.map((vill) => (
                <option key={vill.en} value={vill.en}>
                  {i18n.language === 'en' ? vill.en : vill.la}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder={t('location_link')}
              value={locationLink}
              onChange={(e) => setLocationLink(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>{t('room_type')}</label>
            <select
              id="roomType"
              className="selectType"
              value={roomType}
              placeholder={t('room_type')}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="">{t('add_room_type')}</option>
              <option>{t('Condominium')}</option>
              <option>{t('Townhouse')}</option>
              <option>{t('Apartment')}</option>
              <option>{t('Room')}</option>
            </select>

            <label>{t('description')}</label>
            <textarea
              className="add-description"
              rows="4"
              placeholder={t('description')}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        {/* Name & Price */}
        <div className="row">
          <div className="form-group">
            <label>{t('property_name')}</label>
            <input
              type="text"
              placeholder={t('property_name')}
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>{t('rental_price')}</label>
            <input
              type="text"
              placeholder={t('rental_price')}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Images Upload */}
        <div className="row image-upload-section">
          <div className="form-group">
            <label>{t('select_profile_image')}</label>
            <div className="image-box">
              <input
                type="file"
                accept="image/*"
                ref={profileInputRef}
                onChange={handleProfileImage}
                style={{ display: 'none' }}
              />
              <label className="custom-file-label" htmlFor="profileImage">
                {t('select_profile_image')}
              </label>
              <div className="preview-thumbnails">
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

          <div className="form-group">
            <label>{t('select_images')}</label>
            <div className="image-box">
              <input
                type="file"
                accept="image/*"
                multiple
                ref={imageInputRef}
                onChange={handleMultipleImages}
                style={{ display: 'none' }}
              />
              <label className="custom-file-label" htmlFor="propertyImages">
                {t('select_images')} ({propertyImages.length} selected)
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
              <button type="button" className="clear-btn small-button" onClick={handleClearImages}>
                {t('clear_all')}
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit_btn medium-button">
          {t('submit_add')}
        </button>
      </form>
    </div>
  );
};

export default AddProperty;

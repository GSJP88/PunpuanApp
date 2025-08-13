import React, { useState } from 'react';
import ViewImage from '../components/viewImage/ViewImage';
import Sign from '../components/sign/Sign';
import Specs from '../components/specs/Specs';
import ViewDetail from '../components/viewDetail/ViewDetail';
import LocationMap from '../components/locationMap/LocationMap';
import PropertyOwnerCard from '../components/PropertyOwnerCard/PropertyOwnerCard';
import ContactLandlord from '../components/ContactLandlord/ContactLandlord';
import '../Styles/viewPage.css';
import StepWizard from './StepWizard';

const ViewPageBefore = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [startWizard, setStartWizard] = useState(false);

  const handleRent = () => setShowConfirm(true);
  const handleCancel = () => setShowConfirm(false);
  const handleConfirm = () => {
    setShowConfirm(false);
    setStartWizard(true);
  };

  if (startWizard) return <StepWizard />;

  return (
    <div className='viewPage container'>
      <Sign />
      <ViewImage />
      <Specs />
      <ViewDetail/>
      <LocationMap/>
      <div className="contact_landlord box_container container">
        <PropertyOwnerCard/>
        <ContactLandlord/>
      </div>
      <div className="rent-button-wrapper">
        <button className='rent-btn medium-button' onClick={handleRent}>
            Rent Now
        </button>
      </div>

      {showConfirm && (
        <div className="popup-overlay">
          <div className="popup">
            <i class="bi bi-house-heart-fill"></i>
              <div className="popup-text">
                <h2>Are you sure you want to rent this property?</h2>
                <p>Click “Confirm” to send your rental request to the owner.</p>
              </div>
            <div className="popup-buttons">
              <button className='medium-button' onClick={handleCancel}>Cancel</button>
              <button className='medium-button' onClick={handleConfirm}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPageBefore;
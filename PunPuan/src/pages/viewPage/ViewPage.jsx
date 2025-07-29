import React from 'react';
import ViewImage from '../../components/viewImage/ViewImage';
import Sign from '../../components/sign/Sign';
import Specs from '../../components/specs/Specs';
import ViewDetail from '../../components/viewDetail/ViewDetail';
import LocationMap from '../../components/locationMap/LocationMap';
import PropertyOwnerCard from '../../components/PropertyOwnerCard/PropertyOwnerCard';
import ContactLandlord from '../../components/ContactLandlord/ContactLandlord';
import '../../Styles/viewPage.css'

const ViewPage = () => {
  return (
    <div className='viewPage container'>
      <Sign />
      <ViewImage />
      <Specs />
      <ViewDetail/>
      <LocationMap/>
      <div className="contact_landlord container">
        <PropertyOwnerCard/>
        <ContactLandlord/>
      </div>
      <div className="rent-button-wrapper">
        <button className='rent-btn medium-button'>
            Rent Now
        </button>
      </div>
    </div>
  );
};

export default ViewPage;

import { useNavigate } from 'react-router-dom';
import ViewImage from '../components/viewImage/ViewImage';
import Sign from '../components/sign/Sign';
import Specs from '../components/specs/Specs';
import ViewDetail from '../components/viewDetail/ViewDetail';
import LocationMap from '../components/locationMap/LocationMap';
import PropertyOwnerCard from '../components/PropertyOwnerCard/PropertyOwnerCard';
import ContactLandlord from '../components/ContactLandlord/ContactLandlord';

const ViewPageBefore = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/registerPage/tenant`);
  };
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
        <button className='rent-btn medium-button' onClick={handleClick}>
            Rent Now
        </button>
      </div>
    </div>
  )
}

export default ViewPageBefore

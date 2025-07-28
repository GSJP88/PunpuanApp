import { useNavigate } from 'react-router-dom';

const Data = () => {
  const navigate = useNavigate();

  return (
    <div className="home__data">
      <h1 className="home__title">
        PunPuan Agency <i className="bi bi-rocket-takeoff"></i>
      </h1>
      <h3 className="home__subtitle">Rental Assistant</h3>
      <p className="home__description">
        Please choose your role.
      </p>

      <button
        className="home__button medium-button"
        onClick={() => navigate('/registerPage/tenant')}
      >
        Tenant <i className="bi bi-person-raised-hand"></i>
      </button>

      <button
        className="home__button medium-button"
        onClick={() => navigate('/registerPage/landlord')}
      >
        Landlord <i className="bi bi-houses-fill"></i>
      </button>
    </div>
  );
};

export default Data;
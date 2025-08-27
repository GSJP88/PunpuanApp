import React from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/card.css";
import { useTranslation } from 'react-i18next'

const CardList = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="card-row container">
      <h2 className="row-title">Search Results</h2>
      <div className="card-wrapper">
        {data.map((item) => (
          <Link to={`/viewPage/${item.id}`} key={item.id}>
            <div className="card">
              <div className="card-image-wrapper">
                <img src={item.image} alt="house" className="card-image" />
                <div className="status">
                  <i className="bi bi-circle-fill"></i>
                  <p className='card-status'>
                    {item.occupancy < item.totalProperty ? "Available" : "Unavailable"}
                  </p>
                </div>
              </div>

              <div className="card-title">
                <h2 className='card-name'>{item.name}</h2>
                <div className="card-price">
                  <i className="bi bi-tags-fill"></i> 
                  <strong className='card-price'>₭{item.balance.toLocaleString()}</strong>
                </div>
              </div>
              <div className="detail">
                <div className="card-info">
                  <div className="info card-location">
                    <i className="bi bi-geo-alt-fill"></i>
                    {item.village}. {item.district}. {item.province}
                  </div>
                  <div className="info">
                    <div className="f-info">
                      <div className='card-type'><i className="bi bi-house-door-fill"></i>{t(`${item.type}`)}</div>
                      <div className='card-id'><i className="bi bi-credit-card-2-front-fill"></i> ID: {item.id}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-spec-wrapper">
                <ul className="card-spec_list">
                  <li className="card-spec_item">
                    <i className='fas fa-bed'></i>
                    <p className="bed-room spec-number">{item.bedRoom}</p>
                  </li>
                  <li className="card-spec_item">
                    <i className='fas fa-bath'></i>
                    <p className="bath-room spec-number">{item.bathRoom}</p>
                  </li>
                  <li className="card-spec_item">
                    <i className='fas fa-car'></i>
                    <p className="car-parking spec-number">{item.parking}</p>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardList;
import React from 'react'
import { Link } from 'react-router-dom';
import HouseImage from "../../assets/Th2.jpg"
import Detail from './Detail'
import "../../Styles/card.css";

const CardRow = ({ title, cardCount }) => {
  const cards = Array(cardCount).fill(0)

  return (
    <div className="card-row container">
      <h2 className="row-title">{title}</h2>
      <div className="card-wrapper">
        {cards.map((_, index) => (
        <Link to="/viewPage">
          <div className="card" key={index}>
            <div className="card-image-wrapper">
              <img src={HouseImage} alt="house" className="card-image" />
              <div className="status">
                <i class="bi bi-circle-fill"></i>
                <p>Available</p>
              </div>
            </div>

            <div className="card-title">
              <h2>PunPuan House</h2>
              <div className="card-price">
                <i class="bi bi-tags-fill"></i> 
                <strong>₭750,000</strong>
              </div>
            </div>

            <div className="detail">
              <Detail />
            </div>

            <div className="card-spec-wrapper">
                <ul className="card-spec_list">
                    <li className="card-spec_item">
                      <i class='fas fa-bed'></i>
                      <p className="spec-number data">3</p>
                    </li>
                    <li className="card-spec_item">
                      <i class='fas fa-bath'></i>
                      <p className="spec-number data">3</p>
                    </li>
                    <li className="card-spec_item">
                      <i class='fas fa-car'></i>
                      <p className="spec-number data">1</p>
                    </li>
                </ul>
            </div>
          </div>
        </Link>
        ))}
      </div>
    </div>
  )
}

const CardRegistered = () => {
  return (
    <div className="card-section">
      <CardRow title="In downtown" cardCount={15} />
      <CardRow title="Good price" cardCount={15} />
      <CardRow title="Recommended" cardCount={15} />
    </div>
  )
}

export default CardRegistered

import React from "react";
import "../../Styles/propertyOwnerCard.css";
import John from "../../assets/john.jpg";

const PropertyOwnerCard = ({ name = "John the farmer", role = "Property Owner", image }) => {
  return (
    <div className="owner-card">
      <h3 className="owner-title">{role}</h3>
      <img src={image || John} alt={`${name}'s profile`} className="owner-image" />
      <h2 className="owner-name">{name}</h2>
      <div className="owner-actions">
        <button className="icon-button">
          <i className="bi bi-whatsapp"></i>
        </button>
        <button className="icon-button">
          <i className="bi bi-envelope"></i>
        </button>
        <button className="icon-button">
          <i className="bi bi-chat-dots"></i>
        </button>
      </div>
    </div>
  );
};

export default PropertyOwnerCard;

import React from "react";
import "../../Styles/propertyOwnerCard.css";
import John from "../../assets/john.jpg";

const PropertyOwnerCard = ({ name = "John the farmer", role = "Property Owner", image }) => {
  return (
    <div className="owner-card">
      <img src={image || John} alt={`${name}'s profile`} className="owner-image" />
      <h2 className="owner-name">{name}</h2>
      <div className="owner-actions">
        <div className="contact-info">
          <i className="bi bi-whatsapp"></i>
          <p>+856 20 8888 8888 </p>
        </div>
        <div className="contact-info">
          <i className="bi bi-envelope"></i>
          <p>Johnthefarmer@gmaiil.com</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyOwnerCard;

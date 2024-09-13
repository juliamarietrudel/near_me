import React from "react";

const GymListItem = ({ name, address, description }) => {
  return (
    <div className="gym-item__container">
      <div className="gym-item__content">
        <h6 className="gym-item__name">{name}</h6>
        <p className="gym-item__address">{address}</p>
        {description && <p className="gym-item__description">{description}</p>}
      </div>
    </div>
  );
};

export default GymListItem;

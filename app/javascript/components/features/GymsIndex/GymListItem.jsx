import React from "react";
import { Link } from "react-router-dom";

const GymListItem = ({ name, address, id }) => {
  return (
    <Link to={`/gyms/${id}`} className="gym-item">
      <div className="gym-item__container">
        <div className="gym-item__content">
          <h6 className="gym-item__name">{name}</h6>
          <p className="gym-item__address">{address}</p>
        </div>
      </div>
    </Link>
  );
};

export default GymListItem;

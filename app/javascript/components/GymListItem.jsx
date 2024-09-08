import React from "react";
import { Link } from "react-router-dom";

const GymListItem = ({ name, address, id }) => {
  return (
    <Link to={`/gyms/${id}`}>
      <div className="index-card-margin">
        <div className="index-card">
          <h6 className="card-title-small">{name}</h6>
          <p className="card-text-italic">{address}</p>
          <hr />
        </div>
      </div>
    </Link>
  );
};

export default GymListItem;

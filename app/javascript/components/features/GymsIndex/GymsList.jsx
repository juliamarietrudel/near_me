import React from "react";
import { Link } from "react-router-dom";
import GymListItem from "./GymListItem";

const GymsList = ({ searchTerm, handleSearch, gyms }) => (
  <div className="gyms-list-container">
    <div className="gyms-list-search">
      <input
        type="text"
        placeholder="Search gyms..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 border rounded"
      />
    </div>
    <div className="gyms-list-items-wrapper">
      <div className="gyms-list-items">
        {gyms.map((gym) => (
          <Link key={gym.id} to={`/gyms/${gym.id}`} className="gym-item">
            <GymListItem name={gym.name} address={gym.address} />
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default GymsList;

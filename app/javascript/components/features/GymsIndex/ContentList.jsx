import React from "react";
import { Link } from "react-router-dom";
import GymListItem from "./GymListItem";

const ContentList = ({ searchTerm, handleSearch, gyms }) => (
  <div className="content-list">
    <div className="content-list__search">
      <input
        type="text"
        placeholder="Search gyms..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 border rounded"
      />
    </div>
    <div className="content-list__items-wrapper">
      <div className="content-list__items">
        {gyms.map((gym) => (
          <Link key={gym.id} to={`/gyms/${gym.id}`} className="gym-item">
            <GymListItem name={gym.name} address={gym.address} />
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default ContentList;

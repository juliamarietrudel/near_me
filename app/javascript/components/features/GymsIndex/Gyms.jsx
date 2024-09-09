import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GymListItem from "./GymListItem";
import GymMap from "../GymsMap/GymMap";

const Gyms = () => {
  const navigate = useNavigate();
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    const url = "/api/v1/gyms";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setGyms(res))
      .catch(() => navigate("/"));
  }, []);

  const allGyms = gyms.map((gym) => (
    <GymListItem
      key={gym.id}
      name={gym.name}
      address={gym.address}
      id={gym.id}
    />
  ));

  return (
    <div className="gyms-layout">
      <div className="header">
        <h3>Gyms in your area</h3>
      </div>
      <div className="content">
        <div className="row">
          <div className="gym-list">{allGyms}</div>
          <div className="map-container">
            <GymMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gyms;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GymListItem from "./GymListItem";

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
    <>
      <div className="text-center">
        <div className="container py-5">
          <h3>Gyms in your areas</h3>
        </div>
      </div>
      <div className="container py-5">
        <div className="row d-flex justify-content-between">
          <div className="col-3">{allGyms}</div>
          <div className="col-7 map-container"></div>
        </div>
      </div>
    </>
  );
};

export default Gyms;

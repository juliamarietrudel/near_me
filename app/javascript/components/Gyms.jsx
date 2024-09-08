import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  const allGyms = gyms.map((gym, index) => (
    <div key={index} className="index-card-margin">
      <div className="index-card">
        <Link to={`/gyms/${gym.id}`}>
          <h6 className="card-title-small">{gym.name}</h6>
          <p className="card-text-grey">{gym.address}</p>
        </Link>
        <hr />
      </div>
    </div>
  ));

  return (
    <>
      <div className="text-center">
        <div className="container py-5">
          <h3 className="">Gyms in your area</h3>
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

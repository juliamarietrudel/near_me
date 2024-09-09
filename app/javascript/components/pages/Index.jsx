import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Gyms from "../features/GymsIndex/Gyms";
import GymMap from "../features/GymsMap/GymMap";

const Index = () => {
  return (
    <>
      <div className="gyms-layout">
        <div className="header">
          <h3>Gyms in your area</h3>
        </div>
        <div className="content">
          <div className="row">
            <div className="gym-list">
              <Gyms />
            </div>
            <div className="map-container">
              <GymMap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

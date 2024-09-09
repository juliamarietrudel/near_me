import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Gyms from "../features/GymsIndex/Gyms";
import GymMap from "../features/GymsMap/GymMap";

const GymsIndex = () => {
  return (
    <>
      <Gyms />
    </>
  );
};

export default GymsIndex;

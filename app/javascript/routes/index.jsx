import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Gyms from "../components/Gyms";
import Gym from "../components/Gym";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gyms" element={<Gyms />} />
      <Route path="/gyms/:id" element={<Gym />} />
    </Routes>
  </Router>
);

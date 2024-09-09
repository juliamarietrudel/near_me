import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import GymsIndex from "../components/pages/Index";
import Gym from "../components/pages/Show";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gyms" element={<GymsIndex />} />
      <Route path="/gyms/:id" element={<Gym />} />
    </Routes>
  </Router>
);

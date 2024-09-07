import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Gyms from "../components/Gyms";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gyms" element={<Gyms />} />
    </Routes>
  </Router>
);

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Index from "../components/pages/Index";
import Show from "../components/pages/Show";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/gyms" element={<Index />} />
    <Route path="/gyms/:id" element={<Show />} />
  </Routes>
);

export default AppRoutes;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../routes";
import Navbar from "./layout/Navbar";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <div>
        <div className="content-centered">
          <AppRoutes />
        </div>
      </div>
    </div>
  </Router>
);

export default App;

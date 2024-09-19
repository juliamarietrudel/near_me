import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home">
    <div className="home__content">
      <div className="home__container">
        <h1 className="home__title">Climbing Gyms</h1>
        <p className="home__description">
          A curated list of the best climbing gyms in your area.
        </p>
        <hr className="home__separator" />
        <Link to="/gyms" className="home__cta-button" role="button">
          View Gyms
        </Link>
      </div>
    </div>
  </div>
);

export default Home;

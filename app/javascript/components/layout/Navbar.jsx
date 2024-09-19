import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchForm from "../features/Forms/SearchForm";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "main-nav__link--active" : "";
  };

  return (
    <nav className="main-nav">
      <div className="main-nav__container">
        <div className="main-nav__title-spacing">
          <Link to="/" className={`main-nav__link ${isActive("/")}`}>
            <h3 className="main-nav__title">NearMe</h3>
          </Link>
          <Link to="/gyms" className={`main-nav__link ${isActive("/gyms")}`}>
            <h3 className="main-nav__title">Explore</h3>
          </Link>
        </div>
        <SearchForm />
      </div>
    </nav>
  );
};

export default Navbar;

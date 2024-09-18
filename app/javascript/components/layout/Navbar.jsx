// Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchForm from "../features/Forms/SearchForm";

const Navbar = () => {
  // const [isSearchVisible, setIsSearchVisible] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "main-nav__link--active" : "";
  };
  // useEffect(() => {
  //   console.log("Navbar: Location changed, setting isSearchVisible to false");
  //   setIsSearchVisible(false);
  // }, [location]);

  return (
    <nav className="main-nav">
      <div className="main-nav__container">
        <div className="main-nav__title-spacing">
          <Link to="/" className="main-nav__title">
            <h3 className="main-nav__title">NearMe</h3>
          </Link>
          <Link to="/gyms" className="main-nav__title">
            <h3 className="main-nav__title">Explore</h3>
          </Link>
        </div>
        <SearchForm
        // isVisible={isSearchVisible}
        // setIsVisible={setIsSearchVisible}
        />
      </div>
    </nav>
  );
};

export default Navbar;

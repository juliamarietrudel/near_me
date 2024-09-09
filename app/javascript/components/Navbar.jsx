import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState();
  const inputRef = useRef(null);

  const toggleSearch = (e) => {
    e.preventDefault();
    setIsSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    if (isSearchVisible) {
      inputRef.current.focus();
    }
  });
  return (
    <>
      <div className="navbar navbar-expand-lg d-flex justify-content-between">
        <div className="container">
          <a href="">
            <h3>NearMe</h3>
          </a>
          <form className="search-form">
            {isSearchVisible && (
              <input
                ref={inputRef}
                className="short-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            )}
            <button className="btn-search" type="submit" onClick={toggleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;

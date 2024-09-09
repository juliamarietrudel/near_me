import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const inputRef = useRef(null);
  const searchFormRef = useRef(null);
  const location = useLocation();

  const toggleSearch = (e) => {
    e.preventDefault();
    setIsSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    if (isSearchVisible) {
      inputRef.current.focus();
    }
  }, [isSearchVisible]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchFormRef.current &&
        !searchFormRef.current.contains(event.target)
      ) {
        setIsSearchVisible(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    setIsSearchVisible(false);
  }, [location]);

  return (
    <nav className="main-nav">
      <div className="main-nav__container">
        <Link to="/" className="main-nav__title">
          <h3 className="main-nav__title">NearMe</h3>
        </Link>
        <form className="main-nav__search-form" ref={searchFormRef}>
          {isSearchVisible && (
            <input
              ref={inputRef}
              className="main-nav__search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          )}
          <button
            className="main-nav__search-button"
            type="button"
            onClick={toggleSearch}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

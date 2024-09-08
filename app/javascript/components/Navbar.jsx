import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between bg-dark">
        <a href="">
          <h3>Gymssss</h3>
        </a>
        <form className="form-inline my-2 my-lg-0 d-flex">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;

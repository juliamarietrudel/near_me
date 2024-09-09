import React from "react";
import Routes from "../routes";
import Navbar from "./layout/Navbar";

export default () => (
  <>
    {
      <div>
        <Navbar />
        <div>{Routes}</div>
      </div>
    }
  </>
);

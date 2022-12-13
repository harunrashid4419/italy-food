import React from "react";
import logo from "../../../assets/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="location-section">
      <div className="logo">
        <img src={logo} alt="italy food logo" />
      </div>
      <div className="locations">
        <p>TRUELY THE BEST RESTAURANT IN TOWN - THE NEW YORK TIMES</p>
      </div>
    </div>
  );
};

export default Logo;

import React from "react";
import logo from "../../../assets/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="location-section">
      <div className="logo">
        <img src={logo} alt="italy food logo" />
      </div>
    </div>
  );
};

export default Logo;

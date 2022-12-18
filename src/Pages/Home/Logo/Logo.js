import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="location-section">
      <div className="logo">
        <Link to='/'><img src={logo} alt="italy food logo" /></Link>
      </div>
    </div>
  );
};

export default Logo;

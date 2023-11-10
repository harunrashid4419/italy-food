import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Logo.css";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="location-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 0.3,
            duration: 0.5,
          },
        }}
        className="logo"
      >
        <Link to="/">
          <img src={logo} alt="italy food logo" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Logo;

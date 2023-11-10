import React from "react";
import bannerImg from "../../../assets/banner.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DetailBanner = () => {
  return (
    <div className="banner-image">
      <img className="img" src={bannerImg} alt="Banner Images" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 0.3,
            duration: 0.5,
          },
        }}
        className="content"
      >
        <p>Welcome to</p>
        <h3>Food Details Page</h3>
        <h4>
          <Link to="/">Home</Link> / <Link>Details</Link>
        </h4>
      </motion.div>
    </div>
  );
};

export default DetailBanner;

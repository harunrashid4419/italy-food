import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../../assets/banner.png";
import { motion } from "framer-motion";

const BlogBanner = () => {
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
        <h3>All blog Page</h3>
        <h4>
          <Link to="/">Home</Link> / <Link>blog</Link>
        </h4>
      </motion.div>
    </div>
  );
};

export default BlogBanner;

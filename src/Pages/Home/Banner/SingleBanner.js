import React from "react";
import "./SingleBanner.css";
import { motion } from "framer-motion";

const SingleBanner = ({ singleBanner }) => {
  const { img, content, previous, next, id, paragraph } = singleBanner;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <img id="slider-img" src={img} className="w-full" alt="" />
      <div className="slider-content">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.1,
              duration: 0.5,
            },
          }}
        >
          <h3>{content}</h3>
          <p>{paragraph}</p>
        </motion.div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${previous}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default SingleBanner;

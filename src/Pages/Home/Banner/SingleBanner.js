import React from "react";
import "./SingleBanner.css";

const SingleBanner = ({ singleBanner }) => {
  const { img, content, previous, next, id, paragraph } = singleBanner;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <img id="slider-img" src={img} className="w-full" alt="" />
      <div className="slider-content">
        <h3>{content}</h3>
        <p>{paragraph}</p>
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

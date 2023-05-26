import React from "react";
import bannerImg from "../../../assets/banner.png";
import { Link } from "react-router-dom";

const DetailBanner = () => {
  return (
    <div className="banner-image">
      <img className="img" src={bannerImg} alt="Banner Images" />
      <div className="content">
        <p>Welcome to</p>
        <h3>Food Details Page</h3>
        <h4>
          <Link to="/">Home</Link> / <Link>Details</Link>
        </h4>
      </div>
    </div>
  );
};

export default DetailBanner;

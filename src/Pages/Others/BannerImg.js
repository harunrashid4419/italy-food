import React from "react";
import bannerImg from "../../assets/banner.png";
import "./BannerImg.css";
import { Link } from "react-router-dom";

const BannerImg = () => {
  return (
    <div className="banner-image">
      <img className="img" src={bannerImg} alt="Banner Images" />
      <div className="content">
        <p>Welcome to</p>
        <h3>All Food Page</h3>
        <h4><Link to='/'>Home</Link> / <Link>Food</Link></h4>
      </div>
    </div>
  );
};

export default BannerImg;

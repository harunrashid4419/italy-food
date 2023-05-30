import React from "react";
import { Link } from "react-router-dom";
import bannerImg from '../../../assets/banner.png';

const BlogBanner = () => {
  return (
    <div className="banner-image">
      <img className="img" src={bannerImg} alt="Banner Images" />
      <div className="content">
        <p>Welcome to</p>
        <h3>All blog Page</h3>
        <h4>
          <Link to="/">Home</Link> / <Link>blog</Link>
        </h4>
      </div>
    </div>
  );
};

export default BlogBanner;

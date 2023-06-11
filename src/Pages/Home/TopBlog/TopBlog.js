import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SingleBlog from "../SingleBlog/SingleBlog";
import "./TopBlog.css";

const TopBlog = () => {
  const blogs = useLoaderData();
  return (
    <div className="container">
      <div className="topBlog">
        <h2>OUR BLOG</h2>
        <h1>Read latest news</h1>
        <div className="blogs">
          {blogs?.map((blog) => (
            <SingleBlog key={blog._id} blog={blog}></SingleBlog>
          ))}
        </div>
        <Link className="blog-btn" to="blogs">
          All Blogs
        </Link>
      </div>
    </div>
  );
};

export default TopBlog;

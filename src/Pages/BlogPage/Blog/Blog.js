import React from "react";
import BlogBanner from "./BlogBanner";
import "./Blog.css";
import { useLoaderData } from "react-router-dom";
import SingleBlog from "../../Home/SingleBlog/SingleBlog";

const Blog = () => {
  const blogs = useLoaderData();
  return (
    <>
      <BlogBanner></BlogBanner>
      <div className="container">
        <div className="all-blog-section">
          <p>Showing 1 - {blogs.length} item(s)</p>
          <div className="main-blog">
            {blogs?.map((blog) => (
              <SingleBlog key={blog._id} blog={blog}></SingleBlog>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

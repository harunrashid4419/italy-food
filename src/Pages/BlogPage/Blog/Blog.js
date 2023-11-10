import React from "react";
import BlogBanner from "./BlogBanner";
import "./Blog.css";
import { useLoaderData } from "react-router-dom";
import SingleBlog from "../../Home/SingleBlog/SingleBlog";
import { motion } from "framer-motion";

const Blog = () => {
  const blogs = useLoaderData();
  return (
    <>
      <BlogBanner></BlogBanner>
      <div className="container">
        <div className="all-blog-section">
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
          >
            Showing 1 - {blogs.length} item(s)
          </motion.p>
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

import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SingleBlog from "../SingleBlog/SingleBlog";
import "./TopBlog.css";
import { motion } from "framer-motion";

const TopBlog = () => {
  const blogs = useLoaderData();
  return (
    <div className="container">
      <div className="topBlog">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.5,
            },
          }}
        >
          OUR BLOG
        </motion.h2>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.5,
            },
          }}
        >
          Read latest news
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.5,
            },
          }}
          className="blogs"
        >
          {blogs?.map((blog) => (
            <SingleBlog key={blog._id} blog={blog}></SingleBlog>
          ))}
        </motion.div>
        <Link className="blog-btn" to="blogs">
          All Blogs
        </Link>
      </div>
    </div>
  );
};

export default TopBlog;

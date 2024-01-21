import React, { useState } from "react";
import BlogBanner from "./BlogBanner";
import "./Blog.css";
import SingleBlog from "../../Home/SingleBlog/SingleBlog";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import Loader from "../../../components/Loader/Loader";

const Blog = () => {
  const [loading, setLoading] = useState(false);

  const { data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      setLoading(true);
      const res = await fetch("https://italy-food-server.vercel.app/allBlog");
      const data = await res.json();
      setLoading(false);
      return data;
    },
  });
  return (
    <>
      <BlogBanner></BlogBanner>
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
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
        )}
      </div>
    </>
  );
};

export default Blog;

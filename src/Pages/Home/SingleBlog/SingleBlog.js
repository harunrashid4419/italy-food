import React from "react";
import "./SingleBlog.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SingleBlog = ({ blog }) => {
  const { _id, img, title, creator, comment, description, dateNum, dateMonth } =
    blog;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 0.5,
        },
      }}
      className="singleBlog"
    >
      <img src={img} alt="blog-img" />
      <div className="blog-content">
        <span className="dateNumber">{dateNum}</span>
        <span className="dateMonth">{dateMonth}</span>
        <h3>{title}</h3>
        <span className="by">By</span>
        <span className="creator">{creator}</span>
        <span className="comment">{comment}</span>
        <p className="description">
          {description.length > 60 ? (
            description.slice(0, 60) + "..."
          ) : (
            <p>{description}</p>
          )}
        </p>
        <Link to={`../blogDetails/${_id}`}>
          <button>
            Read More <FaArrowRight />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default SingleBlog;

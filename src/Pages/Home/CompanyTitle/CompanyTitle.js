import React from "react";
import "./CompanyTitle.css";
import { motion } from "framer-motion";

const CompanyTitle = () => {
  return (
    <div className="container">
      <div className="title-section">
        <motion.q
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.5,
            },
          }}
        >
          Your Awesome Company Slogan Goes Here, We Have The Best Food Around
        </motion.q>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.4,
              duration: 0.5,
            },
          }}
        >
          Our open kitchen concept allows you to witness the artistry behind
          your meal, adding an interactive element to your dining experience.
        </motion.p>
      </div>
    </div>
  );
};

export default CompanyTitle;

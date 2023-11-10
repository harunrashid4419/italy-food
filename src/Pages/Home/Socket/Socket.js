import React from "react";
import { Link } from "react-router-dom";
import "./Socket.css";
import { motion } from "framer-motion";

const Socket = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="socket-section">
      <div className="container">
        <div className="socket">
          <div className="left">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              }}
            >
              Copyright {currentYear} - <Link>Free Html5 Templates</Link>{" "}
              Designed by Zerotheme.com{" "}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
            className="right"
          >
            <Link>Privacy Policy</Link>
            <Link>Terms of Use</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Socket;

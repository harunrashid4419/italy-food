import React from "react";
import "./Locations.css";
import { motion } from "framer-motion";

const Locations = () => {
  return (
    <div>
      <div className="locations">
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
          TRUELY THE BEST RESTAURANT IN TOWN - THE NEW YORK TIMES
        </motion.p>
      </div>
    </div>
  );
};

export default Locations;

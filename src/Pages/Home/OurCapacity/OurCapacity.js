import React from "react";
import "./OurCapacity.css";
import { motion } from "framer-motion";

const OurCapacity = () => {
  const capacityData = [
    {
      id: 1,
      img: "https://i.ibb.co/z4bb3p1/bg-best.png",
      name: "Best Prices",
      icon: "https://i.ibb.co/nn9wBPY/Screenshot-1-removebg-preview.png",
      description:
        "We are proud to provide the reasonable price in the city where you cannot find anywhere",
    },
    {
      id: 2,
      img: "https://i.ibb.co/z4bb3p1/bg-best.png",
      name: "Storage",
      icon: "https://i.ibb.co/2F0khrT/Screenshot-2-removebg-preview.png",
      description:
        "Food must be stored properly in order for it to retain its quality, freshness and allow the flavors and aroma to develop",
    },
    {
      id: 3,
      img: "https://i.ibb.co/z4bb3p1/bg-best.png",
      name: "Delivery & Free Pickup",
      icon: "https://i.ibb.co/H4SPw61/Screenshot-3-removebg-preview.png",
      description:
        "Only 1 hour you can get the favorite your Foods. Just totally free and 100% safe.",
    },
    {
      id: 4,
      img: "https://i.ibb.co/z4bb3p1/bg-best.png",
      name: "Hundreds of Retailers",
      icon: "https://i.ibb.co/48mCy4K/Screenshot-4-removebg-preview.png",
      description:
        "There are more than 50+ types of Foods with hundreds of retailers on our site",
    },
  ];
  return (
    <div className="container">
      <div id="capacity" className="capacity-section">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5 },
          }}
        >
          Our Capacity
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5 },
          }}
        >
          We offer food enthusiasts the largest selection of specialty
          refrigeration and accessories to bring the food lifestyle home.
        </motion.p>
        <div className="capacity">
          {capacityData?.map((capacity, i) => (
            <div className="single-capacity" key={capacity.id}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    delay: i === 1 ? 0.3 : i === 0 ? 0.1 : i === 2 ? 0.4 : 0.2,
                  },
                }}
              >
                <img className="img" src={capacity.img} alt="border-img" />
                <img className="icon" src={capacity.icon} alt="icon" />
                <h3>{capacity.name}</h3>
                <p>{capacity.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCapacity;

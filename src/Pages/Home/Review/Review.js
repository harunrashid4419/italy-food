import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import "./Review.css";
import borderImg from "../../../assets/bg-best.png";
import { motion } from "framer-motion";

const Review = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://italy-food-server.vercel.app/userReview")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    <div className="container">
      <div id="review" className="slider">
        <motion.h3
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
          What your client says
        </motion.h3>
        <motion.p
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
          Our valued customers’ feedback is the measure of our success. We’re
          honored to serve what may be the world’s most discerning clientele.
        </motion.p>
        <Carousel breakPoints={breakPoints}>
          {review?.map((r) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.4,
                  duration: 0.5,
                },
              }}
              key={r.id}
              className="single-slider"
            >
              <img className="borderImg" src={borderImg} alt="customer img" />
              <img className="men-img" src={r.img} alt="customer img" />
              <h4>{r.name}</h4>
              <h5>{r.role}</h5>
              <q>{r.message}</q>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Review;

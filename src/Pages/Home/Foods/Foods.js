import React, { useEffect, useState } from "react";
import "./foods.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import { motion } from "framer-motion";

const Foods = () => {
  const [allFood, setAllFood] = useState([]);

  useEffect(() => {
    fetch("https://italy-food-server.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setAllFood(data));
  }, []);

  if (allFood.length === 0) {
    return <Loader></Loader>;
  }

  return (
    <div className="container">
      <div className="main-foods">
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
          Welcome
        </motion.h2>
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
          className="top-paragraph"
        >
          Italy Food Resturent
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.4,
              duration: 0.5,
            },
          }}
          className="foods-section"
        >
          {allFood?.map((food, i) => (
            <Link
              to={`../foodDetails/${food._id}`}
              className="single-food"
              key={i}
            >
              <img src={food.img} alt="Food images" />
              <h3>{food.name}</h3>
              <h4>Price: ${food.price}</h4>
              <Link to={`../FoodDetails/${food._id}`}>
                <button>
                  Details <FaArrowRight className="arrow-icon" />
                </button>
              </Link>
            </Link>
          ))}
        </motion.div>
        <Link to="foods">
          <button>All Foods</button>
        </Link>
      </div>
    </div>
  );
};

export default Foods;

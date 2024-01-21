import React, { useState } from "react";
import "./AllFood.css";
import { useQuery } from "react-query";
import BannerImg from "../../Others/BannerImg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Loader from "../../../components/Loader/Loader";
import { motion } from "framer-motion";

const AllFood = () => {
  const [loading, setLoading] = useState(false);

  const { data: foods = [] } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      setLoading(true);
      const res = await fetch("https://italy-food-server.vercel.app/allFoods");
      const data = res.json();
      setLoading(false);
      return data;
    },
  });

  return (
    <>
      <BannerImg></BannerImg>
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <div className="main-food-section">
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3,
                },
              }}
            >
              Showing 1 - {foods.length} item(s)
            </motion.p>
            <div className="foods-section">
              {foods?.map((food, i) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      delay: 0.3,
                      duration: 0.5,
                    },
                  }}
                  className="single-food"
                >
                  <Link to={`../foodDetails/${food._id}`} key={i}>
                    <img src={food.img} alt="Food images" />
                    <h3>{food.name}</h3>
                    <h4>Price: ${food.price}</h4>
                    <Link to={`../FoodDetails/${food._id}`}>
                      <button>
                        Details <FaArrowRight className="arrow-icon" />
                      </button>
                    </Link>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllFood;

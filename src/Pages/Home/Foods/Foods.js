import React, { useEffect, useState } from "react";
import "./foods.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";

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
        <h2>Welcome</h2>
        <p className="top-paragraph">Italy Food Resturent</p>
        <div className="foods-section">
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
        </div>
        <Link to="foods">
          <button>All Foods</button>
        </Link>
      </div>
    </div>
  );
};

export default Foods;

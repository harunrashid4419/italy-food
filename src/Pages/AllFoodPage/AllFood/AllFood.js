import React from "react";
import "./AllFood.css";
import { useQuery } from "react-query";
import BannerImg from "../../Others/BannerImg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Loader from "../../../components/Loader/Loader";

const AllFood = () => {
  const { data: foods = [] } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await fetch("https://italy-food-server.vercel.app/allFoods");
      const data = res.json();
      return data;
    },
  });

  if (foods.length === 0) {
    return <Loader></Loader>;
  }

  return (
    <>
      <BannerImg></BannerImg>
      <div className="container">
        <div className="main-food-section">
          <p>Showing 1 - {foods.length} item(s)</p>
          <div className="foods-section">
            {foods?.map((food, i) => (
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
        </div>
      </div>
    </>
  );
};

export default AllFood;

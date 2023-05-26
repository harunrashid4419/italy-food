import React from "react";
import { useLoaderData } from "react-router-dom";
import "./FoodDetails.css";
import DetailBanner from "./DetailBanner";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsFillStarFill } from "react-icons/bs";

const FoodDetails = () => {
  const food = useLoaderData();
  const { name, img, img1, category, description, price } = food;
  return (
    <>
      <DetailBanner></DetailBanner>
      <div className="container">
        <div className="food-details">
          <div className="images">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={img} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img1} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="content">
            <h3>{name}</h3>
            <h4>${price}</h4>
            <div className="rating">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <p>(1 customer review)</p>
            </div>
            <hr />
            <p className="description">{description}</p>
            <h5><span>Category:</span> {category}</h5>
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetails;

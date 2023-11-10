import React from "react";
import { useLoaderData } from "react-router-dom";
import "./FoodDetails.css";
import DetailBanner from "./DetailBanner";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsFillStarFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import AddReview from "../AddReview/AddReview";
import OrderModal from "../../Others/Modal/OrderModal";
import { motion } from "framer-motion";

const FoodDetails = () => {
  const food = useLoaderData();
  const { name, img, img1, category, description, price, _id } = food;
  return (
    <>
      <DetailBanner></DetailBanner>
      <div className="container">
        <div className="food-details">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
            className="images"
          >
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
          </motion.div>
          <div className="content">
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
              {name}
            </motion.h3>
            <motion.h4
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
              ${price}
            </motion.h4>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              }}
              className="rating"
            >
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <p>(1 customer review)</p>
            </motion.div>
            <hr />
            <motion.p
              initial={{ y: -30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              }}
              className="description"
            >
              {description}
            </motion.p>
            <motion.h5
              initial={{ y: -20, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              }}
            >
              <span>Category:</span> {category}
            </motion.h5>
            <div className="order">
              <label className="button" htmlFor="order-modal">
                Order Now
              </label>
            </div>
            <OrderModal name={name} price={price} img={img}></OrderModal>
            <hr />
            <div className="share">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
              >
                <FaFacebookF /> Facebook
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
              >
                <FaTwitter /> Twitter
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
              >
                <FaLinkedinIn /> LinkedIn
              </motion.span>
            </div>
          </div>
        </div>
        <AddReview _id={_id} name={name}></AddReview>
      </div>
    </>
  );
};

export default FoodDetails;

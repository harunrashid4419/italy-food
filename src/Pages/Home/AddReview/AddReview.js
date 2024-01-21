import React, { useState } from "react";
import "./AddReview.css";
import { FaEdit } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HiUserCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import Rating from "./Rating";

const AddReview = ({ _id, name }) => {
  const [rating, setRating] = useState(0);
  const date = new Date();
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const { data: reviews, refetch } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await fetch(
        `https://italy-food-server.vercel.app/review/${_id}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const review = e.target.review.value;
    ratingAddToDB(name, email, review, rating, date, _id, form);
  };

  const ratingAddToDB = (name, email, review, rating, date, id, form) => {
    const userReview = { name, email, review, rating, date, id };
    fetch("https://italy-food-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setRating(0);
          toast.success("Review successfully added!");
          form.reset("");
          refetch();
        }
      });
  };
  return (
    <>
      <div className="show-review">
        <motion.h1
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
          {reviews?.length} review for <span>{name}</span>
        </motion.h1>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews &&
            reviews?.map((review) => (
              <SwiperSlide>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      delay: 0.3,
                      duration: 0.5,
                    },
                  }}
                  className="main-review"
                >
                  <div className="review-sections">
                    <div className="review-header">
                      <HiUserCircle />
                      <div className="ml-2">
                        <h5>{review?.name}</h5>
                        <h4>{review.date}</h4>
                      </div>
                    </div>
                    {/* <p>{review.rating}</p> */}
                    <Rating rating={review.rating} />
                  </div>
                  <p>{review.review}</p>
                </motion.div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="review-section">
        <h3>
          <FaEdit /> Add a review
        </h3>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.5,
            },
          }}
          className="paragraph"
        >
          Your email address will not be published. Required fields are marked *
        </motion.p>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.5,
            },
          }}
          onSubmit={handleReview}
        >
          <div className="rating">
            <p>Your Rating: </p>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={32}
              isHalf={true}
              activeColor="#ffd700"
            />
          </div>
          <div className="review">
            <div className="left">
              <input type="text" name="name" placeholder="Name *" required />
              <input type="email" name="email" placeholder="Email *" required />
              <input className="submit" type="submit" value="SUBMIT" required />
            </div>
            <div className="textarea">
              <textarea
                placeholder="Your Review"
                required
                name="review"
              ></textarea>
            </div>
          </div>
        </motion.form>
      </div>
    </>
  );
};

export default AddReview;

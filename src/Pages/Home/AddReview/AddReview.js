import React, { useState } from "react";
import "./AddReview.css";
import { FaEdit, FaUserAlt } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { Keyboard, Navigation, Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Rating from "react-rating";

const AddReview = ({ _id, name }) => {
  const [rating, setRating] = useState(0);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

//   const { data: reviews, refetch } = useQuery({
//     queryKey: ["review"],
//     queryFn: async () => {
//       const res = await fetch(`https://italy-food-server.vercel.app/review/${_id}`);
//       const data = await res.json();
//       return data;
//     },
//   });

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const review = e.target.review.value;
    ratingAddToDB(name, email, review, rating, _id, form,);
  };

  const ratingAddToDB = (name, email, review, rating, id, form) => {
    const userReview = { name, email, review, rating, id };
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
        }
      });
  };
  return (
    <>
      {/* <div className="show-review">
        <h1>
          {reviews?.length} review for {name}
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews?.map((review, i) => (
            <div key={i}>
              <SwiperSlide>1</SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div> */}
      <div className="review-section">
        <h3>
          <FaEdit /> Add a review
        </h3>
        <p className="paragraph">
          Your email address will not be published. Required fields are marked *
        </p>
        <form onSubmit={handleReview}>
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
        </form>
      </div>
    </>
  );
};

export default AddReview;

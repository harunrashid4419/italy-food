import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import "./Review.css";
import borderImg from "../../../assets/bg-best.png";

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
        <h3>What your client says</h3>
        <p>
          Our valued customers’ feedback is the measure of our success. We’re
          honored to serve what may be the world’s most discerning clientele.
        </p>
        <Carousel breakPoints={breakPoints}>
          {review?.map((r) => (
            <div key={r.id} className="single-slider">
              <img className="borderImg" src={borderImg} alt="customer img" />
              <img className="men-img" src={r.img} alt="customer img" />
              <h4>{r.name}</h4>
              <h5>{r.role}</h5>
              <q>{r.message}</q>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Review;

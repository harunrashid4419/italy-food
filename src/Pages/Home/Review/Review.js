import React from "react";
import Carousel from "react-elastic-carousel";
import "./Review.css";

const Review = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const review = [
    {
      id: 1,
      name: "Jhon sink",
      role: "customer",
      img: "https://i.ibb.co/ccktnRC/g1.png",
      borderImg: "https://i.ibb.co/z4bb3p1/bg-best.png",
      message:
        "Well-produced, informative, casual, non-intimidating and so much fun. Just perfect.",
    },
    {
      id: 2,
      name: "Jenifer lopeZ",
      role: "customer",
      img: "https://i.ibb.co/wZHfFkr/g2.png",
      borderImg: "https://i.ibb.co/z4bb3p1/bg-best.png",
      message:
        "Well-produced, informative, casual, non-intimidating and so much fun. Just perfect.",
    },
    {
      id: 3,
      name: "Natasha",
      role: "customer",
      img: "https://i.ibb.co/NYGT0XX/g3.png",
      borderImg: "https://i.ibb.co/z4bb3p1/bg-best.png",
      message:
        "Well-produced, informative, casual, non-intimidating and so much fun. Just perfect.",
    },
    {
      id: 4,
      name: "Adam smith",
      role: "customer",
      img: "https://i.ibb.co/sqkKn0K/istockphoto-1179420343-612x612.jpg",
      borderImg: "https://i.ibb.co/z4bb3p1/bg-best.png",
      message:
        "Well-produced, informative, casual, non-intimidating and so much fun. Just perfect.",
    },
    {
      id: 5,
      name: "Jhon snow",
      role: "customer",
      img: "https://i.ibb.co/mtP8jMk/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg",
      borderImg: "https://i.ibb.co/z4bb3p1/bg-best.png",
      message:
        "Well-produced, informative, casual, non-intimidating and so much fun. Just perfect.",
    },
    {
      id: 6,
      name: "Tom Holland",
      role: "customer",
      img: "https://i.ibb.co/mc9W9nb/istockphoto-1270067126-612x612.jpg",
      borderImg: "https://i.ibb.co/z4bb3p1/bg-best.png",
      message:
        "Well-produced, informative, casual, non-intimidating and so much fun. Just perfect.",
    },
  ];
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
              <img className="borderImg" src={r.borderImg} alt="customer img" />
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

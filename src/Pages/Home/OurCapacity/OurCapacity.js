import React from "react";
import "./OurCapacity.css";

const OurCapacity = () => {
  const capacityData = [
    {
      id: 1,
      img: "https://i.ibb.co/z4bb3p1/bg-best.png",
      name: "Best Prices",
      icon: "https://i.ibb.co/nn9wBPY/Screenshot-1-removebg-preview.png",
      description:
        "We are proud to provide the reasonable price in the city where you cannot find anywhere",
    },
    {
      id: 2,
      img: "https://i.ibb.co/z4bb3p1/bg-best.png",
      name: "Storage",
      icon: "https://i.ibb.co/2F0khrT/Screenshot-2-removebg-preview.png",
      description:
        "Wine must be stored properly in order for it to retain its quality, freshness and allow the flavors and aroma to develop",
    },
    {
      id: 3,
      img: "https://i.ibb.co/z4bb3p1/bg-best.png",
      name: "Delivery & Free Pickup",
      icon: "https://i.ibb.co/H4SPw61/Screenshot-3-removebg-preview.png",
      description:
        "Only 1 hour you can get the favorite wine bottle. Just totally free and 100% safe.",
    },
    {
      id: 4,
      img: "https://i.ibb.co/z4bb3p1/bg-best.png",
      name: "Hundreds of Retailers",
      icon: "https://i.ibb.co/48mCy4K/Screenshot-4-removebg-preview.png",
      description:
        "There are more than 10,000+ types of wine with hundreds of retailers on our site",
    },
  ];
  return (
    <div className="container">
      <div id='capacity' className="capacity-section">
        <h2>Our Capacity</h2>
        <p>
          We offer food enthusiasts the largest selection of specialty
          refrigeration and accessories to bring the food lifestyle home.
        </p>
        <div className="capacity">
          {capacityData.map((capacity) => (
            <div className="single-capacity" key={capacity.id}>
              <img className="img" src={capacity.img} alt="border-img" />
              <img className="icon" src={capacity.icon} alt="icon" />
              <h3>{capacity.name}</h3>
              <p>{capacity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCapacity;

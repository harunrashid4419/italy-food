import React from "react";
import firstImg from "../../../assets/banner1.jpg";
import secondImg from "../../../assets/banner2.jpg";
import thirdImg from "../../../assets/banner3.jpg";
import SingleBanner from "./SingleBanner";

const Banner = () => {
  const banner = [
    {
      img: firstImg,
      content: "we've got the best spareribs in town",
      paragraph: "At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      id: 1,
      previous: 3,
      next: 2,
    },
    {
      img: secondImg,
      content:"if food is an experience, then you'll find it at the restaurant.",
      paragraph: "Nulla eget mauris quis elit mollis ornare vitae ut odio. Cras tincidunt, augue vitae sollicitudin commodo,quam elit varius est, et ornare ante massa quis tellus. Mauris nec lacinia nisl.",
      id: 2,
      previous: 1,
      next: 3,
    },
    {
      img: thirdImg,
      content: "enjoy our take-away menu.",
      paragraph: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      id: 3,
      previous: 2,
      next: 1,
    },
  ];

  return (
    <div className="container">
      <div className="carousel w-full">
        {banner.map((singleBanner) => (
          <SingleBanner
            key={singleBanner.id}
            singleBanner={singleBanner}
          ></SingleBanner>
        ))}
      </div>
    </div>
  );
};

export default Banner;

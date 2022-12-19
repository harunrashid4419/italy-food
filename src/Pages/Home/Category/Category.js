import React from "react";
import "./Category.css";

const Category = ({ singleCategory }) => {
  const { _id, img, category, description } = singleCategory;
  console.log(category);
  return (
    <div className="single-category">
      <img className="category-img" src={img} alt="" />
      <div className="header">
        <h3 className="category">{category}</h3>
      </div>
      <p>{description}</p>
      <button>Detalis</button>
    </div>
  );
};

export default Category;

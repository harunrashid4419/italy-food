import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import "./Categories.css";

const Categories = () => {
  const categories = useLoaderData();
  console.log(categories);

  return (
    <div className="container">
      <div className="categories-section">
        <h2>Welcome</h2>
        <p>Italy Food Resturent</p>
        <div className="main-categories">
          {categories.map((category) => (
            <Category key={category._id} singleCategory={category}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

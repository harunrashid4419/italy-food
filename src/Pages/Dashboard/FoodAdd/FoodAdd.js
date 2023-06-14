import React from "react";
import "./FoodAdd.css";
import { toast } from "react-hot-toast";

const FoodAdd = () => {
  const imgKey = "2ed74405c9982edbe45a4ac8ae219bfb";

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const image = e.target.img.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        addFoodToDatabase(
          name,
          data.data.display_url,
          price,
          description,
          category,
          form
        );
      });
  };
  const addFoodToDatabase = (name, img, price, description, category, form) => {
    const foods = { name, img, price, description, category };
    fetch("https://italy-food-server.vercel.app/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(foods),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Food add success");
          form.reset();
        }
      });
  };

  return (
    <>
      <p className="mb-8 text-2xl">Add Food</p>
      <div className="add-food">
        <form onSubmit={handleAddFood}>
          <input type="text" name="name" placeholder="Food Name" />
          <input type="text" name="price" placeholder="Price" />
          <select name="category" placeholder="Select Categories">
            <option disabled selected>
              Select Categories
            </option>
            <option>PIZZA</option>
            <option>BURGER</option>
            <option>COMBO OFFER</option>
            <option>COMBO OFFER, KIDS MENU</option>
            <option>SODA WATER</option>
            <option>BURGERS, BUTTER MIX</option>
            <option>FASCINATING TASTE, SODA WATER</option>
          </select>
          <textarea name="description" placeholder="Description"></textarea>
          <input type="file" name="img" accept="image/*" />
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default FoodAdd;

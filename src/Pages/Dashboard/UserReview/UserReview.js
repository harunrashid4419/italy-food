import React from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const UserReview = () => {
  const imgKey = "2ed74405c9982edbe45a4ac8ae219bfb";
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const message = e.target.message.value;
    const role = "customer";
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
        addToDatabase(name, message, role, data.data.display_url, form);
      });
  };
  const addToDatabase = (name, message, role, img, form) => {
    const review = { name, message, role, img };
    fetch("https://italy-food-server.vercel.app/userReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review Submit Successfully");
          form.reset();
        }
      });
  };
  return (
    <>
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
        className="mb-8 text-2xl"
      >
        Add User Review
      </motion.p>
      <div className="add-food">
        <form onSubmit={handleAddReview}>
          <motion.input
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.1,
                duration: 0.5,
              },
            }}
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <motion.textarea
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.2,
                duration: 0.5,
              },
            }}
            name="message"
            placeholder="Your Review"
            required
          ></motion.textarea>
          <motion.input
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
            type="file"
            name="img"
            accept="image/*"
            required
          />
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default UserReview;

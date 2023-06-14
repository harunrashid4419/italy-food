import React from "react";
import "./OrderModal.css";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const OrderModal = ({ name, price, img }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = e.target.name.value;
    const email = e.target.email.value;
    const quantity = e.target.quantity.value;
    orderAddToDB(userName, email, quantity, name, price, img, form);
  };

  const orderAddToDB = (userName, email, quantity, name, price, img, form) => {
    const orderDetails = { userName, email, quantity, name, price, img };
    fetch("https://italy-food-server.vercel.app/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Order Submit");
          form.reset();
        }
      });
  };

  return (
    <div className="order-modal">
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="order-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit}>
            <p className="tips">
              N:B: If you want to see your order food, please{" "}
              <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link>
              .
            </p>
            <h6 className="text-lg font-bold">{name}</h6>
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="text"
              name="price"
              value={`Price: $${price}`}
              readOnly
            />
            <input
              type="number"
              name="quantity"
              placeholder="quantity"
              required
            />
            <input
              type="submit"
              className="submit-button"
              value="Submit Order"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;

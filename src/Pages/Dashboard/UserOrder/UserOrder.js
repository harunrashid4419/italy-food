import React from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../UserContext/UserContext";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./UserOrder.css";

const UserOrder = () => {
  const { user } = useContext(AuthContext);
  const { data: orders = [] } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(
        `https://italy-food-server.vercel.app/order?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });
  return (
    <>
      <p className="mb-8 text-2xl">Orders</p>
      <div className="order-section">
        {orders?.map((order, i) => (
          <Link className="single-order" key={i}>
            <img src={order.img} alt="Food images" />
            <h3>{order.name}</h3>
            <h4>Price: ${order.price}</h4>
            <Link>
              <button>
                Payment <FaArrowRight className="arrow-icon" />
              </button>
            </Link>
          </Link>
        ))}
      </div>
    </>
  );
};

export default UserOrder;

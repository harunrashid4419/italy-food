import React, { useState } from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../UserContext/UserContext";
import "./UserOrder.css";
import { motion } from "framer-motion";
import Loader from "../../../components/Loader/Loader";

const UserOrder = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const { data: orders = [] } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      setLoading(true);
      const res = await fetch(
        `https://italy-food-server.vercel.app/order?email=${user?.email}`
      );
      const data = res.json();
      setLoading(false);
      return data;
    },
  });

  return (
    <>
      {orders.length === 0 ? (
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
        >
          No Order Here
        </motion.p>
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <div>
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
                Orders
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
                className="overflow-x-auto text-black"
              >
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>SL.</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {orders?.map((order, i) => (
                    <tbody key={i}>
                      <tr className="bg-base-200">
                        <th>{i + 1}</th>
                        <th>
                          <img
                            className="w-16 h-16"
                            src={order.img}
                            alt="order images"
                          />
                        </th>
                        <td>{order?.name}</td>
                        <td>{order?.price}</td>
                        <td>{order?.quantity}</td>
                        <td>
                          <button className="btn">Pay</button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </motion.div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default UserOrder;

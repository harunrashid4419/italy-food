import React from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../UserContext/UserContext";
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
      {orders.length === 0 ? (
        <p>No Order Here</p>
      ) : (
        <>
          <p className="mb-8 text-2xl">Orders</p>
          <div className="overflow-x-auto text-black">
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
          </div>
        </>
      )}
    </>
  );
};

export default UserOrder;

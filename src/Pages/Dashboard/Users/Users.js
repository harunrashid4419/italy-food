import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import Loader from "../../../components/Loader/Loader";
import { motion } from "framer-motion";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://italy-food-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  if (users.length === 0) {
    return <Loader></Loader>;
  }

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
        Users
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
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          {users?.map((user, i) => (
            <tbody key={i}>
              <tr className="bg-base-200">
                <th>{i + 1}</th>
                <th>
                  {user?.photoURL ? (
                    <img
                      className="w-12 h-12 rounded-full"
                      src={user?.photoURL}
                      alt="User Images"
                    />
                  ) : (
                    <FaUserAlt className="w-12 h-12" />
                  )}
                </th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role ? (
                    <p>Admin</p>
                  ) : (
                    <p className="btn">Make Admin</p>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </motion.div>
    </>
  );
};

export default Users;

import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Socket from "../Pages/Home/Socket/Socket";
import Logo from "../Pages/Home/Logo/Logo";
import Locations from "../Pages/Home/Locations/Locations";
import DashboardBanner from "../Pages/Dashboard/DashboardBanner/DashboardBanner";
import "./DashboardLayou.css";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../UserContext/UserContext";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <>
      <Logo></Logo>
      <Locations></Locations>
      <Navbar></Navbar>
      <DashboardBanner></DashboardBanner>
      <div className="container">
        <div className="main-dash">
          <div className="left">
            <ul className="menu">
              <li className="text-white text-xl mb-3">
                <NavLink
                  style={{ borderRadius: "5px" }}
                  className={({ isActive }) =>
                    isActive ? "bg-[#fff] && text-red-600" : "undefined"
                  }
                  to="/dashboard/orders"
                >
                  Orders
                </NavLink>
              </li>
              <li className="text-white text-xl mb-3">
                <NavLink
                  style={{ borderRadius: "5px" }}
                  className={({ isActive }) =>
                    isActive ? "bg-[#fff] && text-red-600" : "undefined"
                  }
                  to="/dashboard/addReview"
                >
                  Add Review
                </NavLink>
              </li>
              {isAdmin && (
                <>
                  <li className="text-white text-xl mb-3">
                    <NavLink
                      style={{ borderRadius: "5px" }}
                      className={({ isActive }) =>
                        isActive ? "bg-[#fff] && text-red-600" : "undefined"
                      }
                      to="/dashboard/users"
                    >
                      Users
                    </NavLink>
                  </li>
                  <li className="text-white text-xl mb-3">
                    <NavLink
                      style={{ borderRadius: "5px" }}
                      className={({ isActive }) =>
                        isActive ? "bg-[#fff] && text-red-600" : "undefined"
                      }
                      to="/dashboard/addFood"
                    >
                      Add Food
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="right">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Socket></Socket>
    </>
  );
};

export default DashboardLayout;

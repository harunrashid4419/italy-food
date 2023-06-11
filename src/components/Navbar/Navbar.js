import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import "./Navbar.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("LogOut success");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        {open ? (
          <Link>
            <XMarkIcon className="mobile-icon"></XMarkIcon>
          </Link>
        ) : (
          <Link>
            <Bars3Icon className="mobile-icon" />
          </Link>
        )}
      </div>
      <div
        className={`md:static absolute duration-500 ease-in z-10 ${
          open ? "" : "left-[-830px]"
        }`}
      >
        <div className="navbar-section">
          <div className="main-menu">
            <ul className="main">
              <li className="home">
                <Link to="/">home</Link>
              </li>
              <li className="location">
                <Link to="/foods">Food</Link>
              </li>
              <li className="blog">
                <Link to="/blogs">blog</Link>
              </li>
              <li className="news">
                <a href="#review">Review</a>
              </li>
              <li className="gallery">
                <a href="#chef">Cheef</a>
              </li>
              <li className="dashboard">
                <a href="#footer">about</a>
              </li>
              <li className="order">
                {user ? (
                  <Link to="/dashboard">dashboard</Link>
                ) : (
                  <a href="#contact">Contact</a>
                )}
              </li>
              <li className="login">
                {user ? (
                  <Link onClick={handleLogOut}>LogOut</Link>
                ) : (
                  <Link to="/login">LogIn</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

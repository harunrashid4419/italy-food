import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import "./Navbar.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("LogOut success");
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="" onClick={() => setOpen(!open)}>
        {open ? (
          <Link><XMarkIcon className="mobile-icon"></XMarkIcon></Link>
        ) : (
          <Link><Bars3Icon className="mobile-icon" /></Link>
        )}
      </div>
      <div className={`md:static absolute ${open ? '' : 'left-[-790px]'}`}>
        <div className="navbar-section">
          <div className="main-menu">
            <ul className="main">
              <li className="home">
                <Link to="/">home</Link>
              </li>
              <li className="location">
                <Link>location</Link>
              </li>
              <li className="blog">
                <Link>blog</Link>
              </li>
              <li className="news">
                <Link>news</Link>
              </li>
              <li className="gallery">
                <Link>gallery</Link>
              </li>
              <li className="dashboard">
                <Link>Blog</Link>
              </li>
              <li className="order">
                {user ? <Link>Order</Link> : <Link>Menu</Link>}
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

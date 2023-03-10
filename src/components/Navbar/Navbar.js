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
      <div className={`md:static absolute duration-500 ease-in ${open ? "" : "left-[-810px]"}`}>
        <div className="navbar-section">
          <div className="main-menu">
            <ul className="main">
              <li className="home">
                <Link to="/">home</Link>
              </li>
              <li className="location">
                <a href="#footer">location</a>
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
                <Link>About</Link>
              </li>
              <li className="order">
                {user ? <Link>dashboard</Link> : <a href='#menu'>Menu</a>}
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

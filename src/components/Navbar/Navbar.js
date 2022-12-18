import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () =>{
    logOut()
      .then(() =>{
        toast.success('LogOut success');
        navigate('/login');
      })
      .catch(error => console.error(error));
  }
  return (
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
            <Link>Dashboard</Link>
          </li>
          <li className="order">
            <Link>Order</Link>
          </li>
          <li className="login">
            {user ? (
              <Link onClick={handleLogOut} >LogOut</Link>
            ) : (
              <Link to="/login">LogIn</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

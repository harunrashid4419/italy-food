import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-section">
      <div class="main-menu">
        <ul class="main">
          <li class="home">
            <Link>home</Link>
          </li>
          <li class="location">
            <Link>location</Link>
          </li>
          <li class="blog">
            <Link>blog</Link>
          </li>
          <li class="news">
            <Link>news</Link>
          </li>
          <li class="gallery">
            <Link>gallery</Link>
          </li>
          <li class="dashboard">
            <Link>Dashboard</Link>
          </li>
          <li class="order">
            <Link>Order</Link>
          </li>
          <li class="login">
            <Link>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

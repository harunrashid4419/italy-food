import React from "react";
import "./Header.css";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-section">
      <div className="container">
        <div className="main-header">
          <div className="left">
            <p><FiMail className="mail" /> ContacUst@Gmail.com</p>
            <span><FaPhoneAlt className="phone" /> 08 88888 88888</span>
          </div>
          <div className="right">
            <ul>
              <li>
                <Link><FaTwitter /></Link>
                <Link><FaFacebook /></Link>
                <Link><FaGooglePlus /></Link>
                <Link><FaLinkedinIn /></Link>
                <Link><FaInstagram /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

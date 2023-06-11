import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <div id="footer" className="footer-section">
        <div className="about-section">
          <h1>About Restaurant</h1>
          <p>
            Quickly supply alternative strategic theme areas vis-a-vis B2C
            mindshare. Objectively repurpose stand-alone synergy via
            user-centric architectures.
          </p>
          <div className="social-links">
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <FaLinkedinIn />
            </Link>
            <Link>
              <FaTwitter />
            </Link>
            <Link>
              <FaYoutube />
            </Link>
          </div>
        </div>
        <div className="links">
          <h1>Quick Links</h1>
          <a href="#slider">Banner</a>
          <a href="#capacity">Our Capacity</a>
          <a href="#review">Review</a>
          <Link>Blog</Link>
          <a href="#contact">Contact US</a>
          <Link>Fast Food</Link>
        </div>
        <div className="open-routine">
          <h1>Open Daily</h1>
          <p>
            <span>mon.</span> 17:00 - 21:00
          </p>
          <p>
            <span>tue.-wed.</span> 16:30 - 21:00
          </p>
          <p>
            <span>thu.-sat.</span> 16:30 - 21:00
          </p>
          <p>
            <span>sun.</span> 11:00 - 21:00
          </p>
          <h2>Need help getting home.</h2>
          <h3>We will call a cab for you!</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;

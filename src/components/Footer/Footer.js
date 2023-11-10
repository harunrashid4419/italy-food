import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="container">
      <div id="footer" className="footer-section">
        <div className="about-section">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
          >
            About Restaurant
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
          >
            Quickly supply alternative strategic theme areas vis-a-vis B2C
            mindshare. Objectively repurpose stand-alone synergy via
            user-centric architectures.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.5,
              },
            }}
            className="social-links"
          >
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
          </motion.div>
        </div>
        <div className="links">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
          >
            Quick Links
          </motion.h1>
          <motion.a
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.3,
              },
            }}
            href="#slider"
          >
            Banner
          </motion.a>
          <motion.a
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.3,
              },
            }}
            href="#capacity"
          >
            Our Capacity
          </motion.a>
          <motion.a
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.3,
              },
            }}
            href="#review"
          >
            Review
          </motion.a>
          <motion.a
            href=""
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.3,
              },
            }}
          >
            Blog
          </motion.a>
          <motion.a
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.3,
              },
            }}
            href="#contact"
          >
            Contact US
          </motion.a>
          <motion.a
            href=""
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.3,
              },
            }}
          >
            Fast Food
          </motion.a>
        </div>
        <div className="open-routine">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
          >
            Open Daily
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
          >
            <span>mon.</span> 17:00 - 21:00
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
          >
            <span>tue.-wed.</span> 16:30 - 21:00
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
          >
            <span>thu.-sat.</span> 16:30 - 21:00
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
          >
            <span>sun.</span> 11:00 - 21:00
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
          >
            Need help getting home.
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
          >
            We will call a cab for you!
          </motion.h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;

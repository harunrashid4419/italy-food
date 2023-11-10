import React from "react";
import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="container">
      <div id="contact" className="contact-section">
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
          Contact Us & Our Location
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
          If you need to contact us, you can contact us in the contact section
          below. And if you want to visit our restaurant, then visit the below
          location.
        </motion.p>
        <div className="main-contact">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.4,
                duration: 0.5,
              },
            }}
            className="contact"
          >
            <h2>Contact Us</h2>
            <input type="text" placeholder="Your Name*" />
            <input type="email" placeholder="Your Email*" />
            <input type="number" placeholder="Your Phone*" />
            <textarea placeholder="Comments*"></textarea>
            <button>Send Message</button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.6,
                duration: 0.5,
              },
            }}
            className="location"
          >
            <h2>Location</h2>
            <div className="img"></div>
            <div className="icon-text">
              <FaPhoneAlt className="icon" />
              <span>08 88888 88888</span>
            </div>
            <div className="icon-text">
              <CiLocationOn className="icon" />
              <span>Osteria Francescana. Via Stella 22, Modena, Italy</span>
            </div>
            <div className="icon-text">
              <AiOutlineMail className="icon" />
              <a href="mailto:italy@food.com">italy@food.com</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

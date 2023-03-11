import React from "react";
import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="container">
      <div className="main-contact">
        <div className="contact">
          <h2>Contact Us</h2>
          <input type="text" placeholder="Your Name*" />
          <input type="email" placeholder="Your Email*" />
          <input type="number" placeholder="Your Phone*" />
          <textarea placeholder="Comments*"></textarea>
          <button>Send Message</button>
        </div>
        <div className="location">
        <h2>Location</h2>
          <div className="img"></div>
          <div className="icon-text">
            <FaPhoneAlt className="icon" />
            <span>08 88888 88888</span>
          </div>
          <div className="icon-text">
            <CiLocationOn className="icon" />
            <span>257 Charlington Gates Road Morrison, Nr. 568</span>
          </div>
          <div className="icon-text">
            <AiOutlineMail className="icon" />
            <span>info@bakeytemplate.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./BlogDetails.css";
import bannerImg from "../../../assets/banner.png";
import aboutImg from "../../../assets/reservation.jpg";
import {
  FaCalendarAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const details = useLoaderData();
  const {
    date,
    img,
    title,
    description,
    secondPera,
    thirdPera,
    forthPera,
    fifthPera,
    sixthPera,
    seventhPera,
    eightPera,
  } = details;
  console.log(details);
  return (
    <>
      <div className="blog-details">
        <img className="banner-img" src={bannerImg} alt="Banner Images" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.5,
            },
          }}
          className="content"
        >
          <h5>
            <FaCalendarAlt />
            {date}
          </h5>
          <h3>{title}</h3>
          <p>
            <Link to="/">Home /</Link> Blog Details
          </p>
        </motion.div>
      </div>
      <div className="details">
        <div className="container">
          <div className="main-details">
            <div className="details-content">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
                src={img}
                alt="Blog Images"
              />
              <p>{description}</p>
              {secondPera && <p>{secondPera}</p>}
              {thirdPera && <p>{thirdPera}</p>}
              {forthPera && <p>{forthPera}</p>}
              {fifthPera && <p>{fifthPera}</p>}
              {sixthPera && <p>{sixthPera}</p>}
              {seventhPera && <p>{seventhPera}</p>}
              {eightPera && <p>{eightPera}</p>}
              <p>Share:</p>
              <div className="blog-icon">
                <Link>
                  <FaFacebookF />
                </Link>
                <Link>
                  <FaTwitter />
                </Link>
                <Link>
                  <FaLinkedinIn />
                </Link>
                <Link>
                  <FaDiscord />
                </Link>
              </div>
            </div>
            <div className="input-feild">
              <motion.h4
                initial={{ y: -30, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
              >
                About Us
              </motion.h4>
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
                src={aboutImg}
                alt="about img"
              />
              <motion.p
                initial={{ y: -30, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
              >
                Whether you are looking for a quick cup of coffee, a savoury
                snack or sweet tooth craving, Bistro Cafe is your ideal hang
                out.Come join us at Bistro Cafe and enjoy a hearty breakfast.
                Besides, we can also offer a vast selection of lunch options
                ranging from healthy salad options, soups and more!
              </motion.p>
              <motion.h4
                initial={{ y: -30, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
              >
                Subscrible
              </motion.h4>
              <input type="email" placeholder="Your Email" />
              <motion.h4
                initial={{ y: -30, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
              >
                Category
              </motion.h4>
              <Link>Blog</Link>
              <motion.h5
                initial={{ y: -30, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
              >
                Follow Me
              </motion.h5>
              <div className="blog-icon">
                <Link>
                  <FaFacebookF />
                </Link>
                <Link>
                  <FaTwitter />
                </Link>
                <Link>
                  <FaLinkedinIn />
                </Link>
                <Link>
                  <FaDiscord />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;

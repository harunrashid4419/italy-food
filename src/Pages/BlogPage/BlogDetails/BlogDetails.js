import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./BlogDetails.css";
import bannerImg from "../../../assets/blog-banner.jpg";
import aboutImg from "../../../assets/reservation.jpg";
import {
  FaCalendarAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa";

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
        <div className="content">
          <h5>
            <FaCalendarAlt />
            {date}
          </h5>
          <h3>{title}</h3>
          <p>Blog Details</p>
        </div>
      </div>
      <div className="details">
        <div className="container">
          <div className="main-details">
            <div className="details-content">
              <img src={img} alt="Blog Images" />
              <p>{description}</p>
              {secondPera && <p>{secondPera}</p>}
              {thirdPera && <p>{thirdPera}</p>}
              {forthPera && <p>{forthPera}</p>}
              {fifthPera && <p>{fifthPera}</p>}
              {sixthPera && <p>{sixthPera}</p>}
              {seventhPera && <p>{seventhPera}</p>}
              {eightPera && <p>{eightPera}</p>}
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
              <h4>About Us</h4>
              <img src={aboutImg} alt="about img" />
              <p>
                Whether you are looking for a quick cup of coffee, a savoury
                snack or sweet tooth craving, Bistro Cafe is your ideal hang
                out.Come join us at Bistro Cafe and enjoy a hearty breakfast.
                Besides, we can also offer a vast selection of lunch options
                ranging from healthy salad options, soups and more!
              </p>
              <h4>Subscrible</h4>
              <input type="email" placeholder="Your Email" />
              <h4>Category</h4>
              <Link>Blog</Link>
              <h5>Follow Me</h5>
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

import React from "react";
import "./Chef.css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Chef = () => {
  const chefs = [
    {
      _id: "1",
      img: "https://i.ibb.co/gFMFQvB/chef2.png",
      name: "Rose Dawson",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://imstagram.com/",
      linkedin: "https://linkedin.com/",
      role: "Major Cheef",
    },
    {
      _id: "2",
      img: "https://i.ibb.co/tBmgYtQ/chef3.png",
      name: "Dan Crenshaw",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://imstagram.com/",
      linkedin: "https://linkedin.com/",
      role: "Main Cheef",
    },
    {
      _id: "3",
      img: "https://i.ibb.co/3Tpxmkj/chef4.png",
      name: "Rose Dawson",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://imstagram.com/",
      linkedin: "https://linkedin.com/",
      role: "Junior Chef",
    },
    {
      _id: "4",
      img: "https://i.ibb.co/ZW4w3wy/chef5.png",
      name: "Rose Dawson",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://imstagram.com/",
      linkedin: "https://linkedin.com/",
      role: "Major Cheef",
    },
    {
      _id: "5",
      img: "https://i.ibb.co/tJPQks0/chef1.png",
      name: "Rose Dawson",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://imstagram.com/",
      linkedin: "https://linkedin.com/",
      role: "Junior Cheef",
    },
  ];
  return (
    <div className="container">
      <div className="chef-section">
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
          Meet Our Cheef
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </motion.p>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {chefs &&
            chefs?.map((chef) => (
              <SwiperSlide key={chef._id} className="slider">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                      duration: 0.5,
                    },
                  }}
                  id="chef"
                  className="chef-border"
                >
                  <div className="chef">
                    <img src={chef?.img} alt="chef-img" />
                    <div className="social-media">
                      <a href={chef?.facebook} target="_black">
                        <FaFacebookF />
                      </a>
                      <a href={chef?.twitter} target="_black">
                        <FaTwitter />
                      </a>
                      <a href={chef?.instagram} target="_black">
                        <FaInstagram />
                      </a>
                      <a href={chef?.linkedin} target="_black">
                        <FaLinkedinIn />
                      </a>
                    </div>
                    <h1>{chef?.name}</h1>
                    <h2>{chef?.role}</h2>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Chef;

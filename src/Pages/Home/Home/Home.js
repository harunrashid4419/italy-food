import React from "react";
import Footer from "../../../components/Footer/Footer";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import CompanyTitle from "../CompanyTitle/CompanyTitle";
import Contact from "../Contact/Contact";
import OurCapacity from "../OurCapacity/OurCapacity";
import Review from "../Review/Review";
import TopBlog from "../TopBlog/TopBlog";
import Foods from "../Foods/Foods";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <OurCapacity></OurCapacity>
      <CompanyTitle></CompanyTitle>
      <Foods></Foods>
      <Chef></Chef>
      <Review></Review>
      <TopBlog></TopBlog>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;

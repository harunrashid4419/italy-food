import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Banner from '../Banner/Banner';
import CompanyTitle from '../CompanyTitle/CompanyTitle';
import Contact from '../Contact/Contact';
import Menu from '../Menu/Menu';
import OurCapacity from '../OurCapacity/OurCapacity';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurCapacity></OurCapacity>
            <CompanyTitle></CompanyTitle>
            <Menu></Menu>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Locations from '../Pages/Home/Locations/Locations';
import Logo from '../Pages/Home/Logo/Logo';

const Main = () => {
    return (
        <div>
            <Logo></Logo>
            <Locations></Locations>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
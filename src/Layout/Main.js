import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Locations from "../Pages/Home/Locations/Locations";
import Logo from "../Pages/Home/Logo/Logo";
import Socket from "../Pages/Home/Socket/Socket";

const Main = () => {
  return (
    <>
      <Logo></Logo>
      <Locations></Locations>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Socket></Socket>
    </>
  );
};

export default Main;

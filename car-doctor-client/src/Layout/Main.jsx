import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Page/Share/Footer";
import Navbar from "../Page/Share/Navbar";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default Main;

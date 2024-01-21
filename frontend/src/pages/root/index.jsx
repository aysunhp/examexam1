import React from "react";
import Navbar from "../../components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";
const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;

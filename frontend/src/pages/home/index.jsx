import React from "react";
import Hero from "../../components/hero";
import OurChef from "../../components/ourChef";
import Menu from "../../components/Menu";
import Guests from "../../components/guests";
import Blog from "../../components/blog";

const Home = () => {
  return (
    <>
      <Hero />
      <OurChef />
      <Menu />
      <Guests />
      <Blog />
    </>
  );
};

export default Home;

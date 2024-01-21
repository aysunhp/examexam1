import React from "react";
import Hero from "../../components/hero";
import OurChef from "../../components/ourChef";
import Menu from "../../components/Menu";
import Guests from "../../components/guests";

const Home = () => {
  return (
    <>
      <Hero />
      <OurChef />
      <Menu />
      <Guests />
    </>
  );
};

export default Home;

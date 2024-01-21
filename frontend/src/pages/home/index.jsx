import React from "react";
import Hero from "../../components/hero";
import OurChef from "../../components/ourChef";
import Menu from "../../components/Menu";
import Guests from "../../components/guests";
import Blog from "../../components/blog";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Hero />
      <OurChef />
      <Menu />
      <Guests />
      <Blog />
    </>
  );
};

export default Home;

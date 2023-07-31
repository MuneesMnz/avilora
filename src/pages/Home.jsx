import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Navbar from "../components/Navbar";
import StarIcons from "../components/StarIcons";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <HeroSection />
      <About />
      <StarIcons />
    </div>
  );
};

export default Home;

import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
};

export default Home;

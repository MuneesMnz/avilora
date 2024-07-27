import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import HIstory from "../components/HIstory";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div id="home">
      <HeroSection />
      <About />
      {/* <StarIcons /> */}
      <HIstory />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default Home;

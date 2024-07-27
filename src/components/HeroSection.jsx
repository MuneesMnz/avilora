// import React, { useEffect, useState } from "react";
import "../style.css";

const HeroSection = () => {
  //   console.log(navbar);
  return (
    <>
      <div className="w-full h-screen bg-custome-img relative">
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] p-5 text-center w-[500px] max-md:w-[300px]">
          <div className="text-darkBlue text-5xl mb-5 font-Arvo whitespace-normal max-md:text-2xl ">
            HEADING TWO OR <br />
            THREE WORDS
          </div>
          <div className="text-darkBlue text-xl font-Ysabeau max-md:text-[16px]">
            Sub heading with four or five words ABC ABC
          </div>
        </div>
        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <img
            src="assets/images/symbols/down.png"
            className="w-[70px] h-16 img-down-animation"
            alt="down"
          />
        </a>
      </div>
    </>
  );
};

export default HeroSection;


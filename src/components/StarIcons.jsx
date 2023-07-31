import React from "react";
import Slider from "./Slider";
import "../style.css";

const StarIcons = () => {
  return (
    <div className="w-full max-md:h-screen h-[calc(100vh-60px)]  gradient-blue py-5 ">
      <div className="text-center ">
        <h1 className="text-4xl font-semibold text-[white] mb-1">Star Icons</h1>
        <p className=" text-[white]">Leading Educational Pioneers</p>
      </div>

      <div className="relative">
        <Slider />
      </div>
      <div className="flex justify-center">
        <button className="text-[white]  border-[white] border-[3px] rounded px-3 py-1.5">View More</button>
      </div>
    </div> 
  );
};

export default StarIcons;

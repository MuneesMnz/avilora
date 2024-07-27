import React from "react";
import SliderCard from "./SliderCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { homeSlider } from "../data";

const Slider = () => {
  const handleScroll = (direction) => {
    if (direction === "left") {
      document.getElementById("contents").scrollLeft += 600;
    } else {
      document.getElementById("contents").scrollLeft -= 600;
    }
  };

  return (
    <>
      <button
        className="w-[50px] h-[50px] rounded-full bg-[#00000080] flex justify-center items-center absolute top-1/2 left-2 z-10"
        onClick={() => handleScroll("right")}
      >
        <BsChevronLeft className="text-2xl font-semibold text-[white]" />
      </button>
      <button
        className="w-[50px] h-[50px] rounded-full bg-[#00000080] flex justify-center items-center absolute top-1/2 right-2 z-10"
        onClick={() => handleScroll("left")}
      >
        <BsChevronRight className="text-2xl font-semibold text-[white]" />
      </button>

      <div
        className="px-[60px] max-md:p-4 py-4 flex justify-start  relative  overflow-x-scroll scroll-smooth scrollbar-hide"
        id="contents"
      >
        {
          homeSlider.map((item,index)=>{
            return(
              <div key={index}>
                <SliderCard item={item} />
              </div>
            )
          })
        }
        
      </div>
    </>
  );
};

export default Slider;

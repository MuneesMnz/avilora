// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import "../style.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import OldSchool from "../assets/images/webCovers/oldSchoolAvilora.jpg";
import newSchool from "../assets/images/webCovers/newSchoolAvilora.jpg";
import newSchoolTwo from "../assets/images/webCovers/newSchoolAvilora2.jpg";
import river from "../assets/images/webCovers/river.jpg";

const HeroSection = () => {
  //   console.log(navbar);
  const list = [
    { img: OldSchool },
    {
      img: newSchool,
    },
    {
      img: newSchoolTwo,
    },
    {
      img: river,
    },
  ];

  const [currentState, setCurrentState] = useState(0);
  const prevImg = () => {
    const isFirstIndex = currentState === 0;
    const newIndex = isFirstIndex ? list.length - 1 : currentState - 1;

    setCurrentState(newIndex);
  };
  const nextImg = () => {
   const isLastIndex = currentState === list.length - 1;
    const newIndex = isLastIndex ? 0 : currentState + 1;

    setCurrentState(newIndex);
  };
  useEffect(()=>{
    const autoSlide=setInterval(nextImg,5000)
    return()=>{
      clearInterval(autoSlide)
    }
  },[])
  return (
    <>
      <div className="w-full h-screen group relative">
        <div
          style={{ backgroundImage: `url(${list[currentState].img})` }}
          className="w-full h-full bg-center bg-cover  duration-500 "
        ></div>
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] p-5 text-center w-[500px] max-md:w-[300px]">
          <div className="text-darkBlue text-5xl mb-5 font-Arvo whitespace-normal max-md:text-2xl ">
            HEADING TWO OR <br />
            THREE WORDS
          </div>
          <div className="text-darkBlue text-xl font-Ysabeau max-md:text-[16px]">
            Sub heading with four or five words ABC ABC
          </div>
        </div>
        <div
          className="hidden group-hover:flex absolute top-[50%] left-14 cursor-pointer -translate-x-0 translate-y-[-50%] w-10 h-10 rounded-full bg-[black]/20
        text-[white]  justify-center items-center"
          onClick={prevImg}
        >
          <BsChevronCompactLeft size={30} />
        </div>
        <div
          className="hidden group-hover:flex absolute top-[50%] right-14 cursor-pointer -translate-x-0 translate-y-[-50%] w-10 h-10 rounded-full bg-[black]/20
        text-[white]  justify-center items-center"
          onClick={nextImg}
        >
          <BsChevronCompactRight size={30} />
        </div>
        <div className="hidden group-hover:flex absolute bottom-5 left-[50%] gap-2 items-center ">
          {list.map((_, ind) => {
            return (
              <div
                className={`w-2 h-2 bg-[white] rounded-full duration-300 cursor-pointer ${
                  currentState === ind ? "bg-opacity-100 p-2 " : "bg-opacity-50"
                }`}
                key={ind}
                onClick={() => setCurrentState(ind)}
              ></div>
            );
          })}
        </div>
        {/* <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <img
            src="assets/images/symbols/down.png"
            className="w-[70px] h-16 img-down-animation"
            alt="down"
          />
        </a> */}
      </div>
    </>
  );
};

export default HeroSection;

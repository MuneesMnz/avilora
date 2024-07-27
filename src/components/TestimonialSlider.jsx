import React, { useEffect, useState } from "react";

const TestimonialSlider = ({ children, autoSlide ,timeIntervel=10000}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const SlideIntervel=setInterval(next,timeIntervel);
    return ()=> clearInterval(SlideIntervel)
  }, []);
    const next = () => {
      setCurrent((prev) => (prev === children.length - 1 ? 0 : prev + 1));
    };
  //   const previous = () => {
  //     setCurrent((prev) => (prev === 0 ? children.length - 1 : prev - 1));
  //   };
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform duration-500 "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children}
      </div>
      {/* <div onClick={previous}>next</div> */}
      <div className="absolute bottom-5 right-0 left-0  flex justify-center items-center ">
        {children.map((value, ind) => (
          <div
            key={ind}
            onClick={() => setCurrent(ind)}
            className={`transition-all duration-300 w-3 h-3 bg-darkBlue rounded-full cursor-pointer mr-1.5 ${
              current === ind ? " p-2" : " bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;

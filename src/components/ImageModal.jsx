import React from "react";
import { AiOutlineRight, AiOutlineLeft, AiOutlineClose } from "react-icons/ai";

const ImageModal = ({
  currentImage,
  setCurrentImage,
  handleClickLeft,
  handleClickRight,
}) => {



  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] w-full h-screen">
      <div className="fixed top-0 left-0 right-0 bottom-0  w-full h-screen backdrop-blur-sm" onClick={()=>setCurrentImage(null)}></div>
      <img

        src={currentImage}
        className="max-w-[60%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  min-h-[70%] max-md:max-w-[90%] max-md:max-h-[50%] mt-14 max-md:mt-0"
        alt=""
      />
      <span
        className="absolute top-[10%] right-20 max-md:right-5  z-50 cursor-pointer"
        onClick={() => setCurrentImage(null)}
      >
        <AiOutlineClose size={30} />
      </span>

      <span
        className="flex bg-[#d8d8d8b2] rounded-full justify-center items-center absolute top-1/2 w-12 h-12 max-md:w-8 max-md:h-8 left-10 max-md:left-2 z-50  cursor-pointer"
        onClick={handleClickLeft}
      >
        <AiOutlineLeft className="text-2xl max-md:text-xl"  />
      </span>
      <span
        className="flex bg-[#d8d8d8b2] rounded-full justify-center items-center  absolute top-1/2 w-12 h-12 max-md:w-8 max-md:h-8 right-10 max-md:right-2 z-50 cursor-pointer"
        onClick={handleClickRight}
      >
        <AiOutlineRight className="text-2xl max-md:text-xl" />
      </span>
    </div>
    // </div>
  );
};

export default ImageModal;

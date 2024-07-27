import React from "react";
import { Link } from "react-router-dom";
import {
  BiChevronRight,
  BiLogoFacebook,
  BiLogoGoogle,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#061529] min-h-[300px] px-[100px] py-[50px]  max-md:p-4 text-[white]">
        <div className="flex gap-10 max-sm:flex-col ">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-3 ">About</h2>
            <p className="text-sm text-[#adadad]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              repudiandae et odit alias illum ducimus modi quis magnam
              similique. Accusantium aliquam nam rerum. Ipsum, sed! Enim at
              delectus nisi dolorum.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              <div className="cursor-pointer w-8 h-8 rounded-full duration-150 transition-all  bg-[#011B2D] hover:bg-[white] flex justify-center items-center">
                <a href="#facebook">
                  <BiLogoFacebook size={25} className="hover:text-darkBlue" />
                </a>
              </div>
              <div className="cursor-pointer w-8 h-8 rounded-full duration-150 transition-all bg-[#011B2D] hover:bg-[white] flex justify-center items-center">
                <a href="#google">
                  <BiLogoGoogle size={25} className="hover:text-darkBlue" />
                </a>
              </div>
              <div className="cursor-pointer w-8 h-8 rounded-full duration-150 transition-all bg-[#011B2D] hover:bg-[white] flex justify-center items-center">
                <a href="#instagram">
                  <BiLogoInstagram size={25} className="hover:text-darkBlue" />
                </a>
              </div>
              <div className="cursor-pointer w-8 h-8 rounded-full duration-150 transition-all bg-[#011B2D] hover:bg-[white] flex justify-center items-center">
                <a href="#instagram">
                  <BiLogoTwitter size={25} className="hover:text-darkBlue" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-3 ">Useful Links</h2>
            <Link
              to="/"
              className="flex  text-[#adadad] items-center mb-2 hover:text-[white]"
            >
              <BiChevronRight size={25} />
              <div>Home</div>
            </Link>
            <Link
              to="/about"
              className="flex  text-[#adadad] items-center mb-2 hover:text-[white]"
            >
              <BiChevronRight size={25} />
              <div>About</div>
            </Link>
            <Link
              to="/history"
              className="flex  text-[#adadad] items-center mb-2 hover:text-[white]"
            >
              <BiChevronRight size={25} />
              <div>History</div>
            </Link>
            <Link
              to="/staricons"
              className="flex  text-[#adadad] items-center mb-2 hover:text-[white]"
            >
              <BiChevronRight size={25} />
              <div>Star Icons</div>
            </Link>
            <Link
              to="/gallery"
              className="flex  text-[#adadad] items-center mb-2 hover:text-[white]"
            >
              <BiChevronRight size={25} />
              <div>Gallery</div>
            </Link>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-3 ">Heading</h2>
            <div></div>
          </div>
        </div>
      </div>
      <div className="w-full  p-5 bg-[#011B2D] flex justify-center items-center ">
        <span className="text-[gray] text-lg">
          <span className="text-xl">&#169;</span> 2023 Avilora. All rights reserved.Design by <span className="text-[white] hover:underline cursor-pointer">Collabiz</span>
        </span>
      </div>
    </>
  );
};

export default Footer;

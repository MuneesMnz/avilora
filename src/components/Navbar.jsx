import React, { useEffect, useState } from "react";
import { navList } from "../data";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed top-0 z-[999] w-full h-[60px] transition-background hidden ${
          navbar ? "bg-darkGreen shadow-md " : "bg-transparent"
        } `}
      >
        <ul
          className={`flex justify-end p-4 transition-background text-lg ${
            navbar ? "text-[white]" : "text-darkGreen"
          } gap-10  font-semibold mr-14`}
        >
          {navList.map((list) => {
            return (
              <li className="cursor-pointer" key={list.name}>
                <a href={`#${list.link}`}>{list.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="fixed z-10 top-5 right-5  rounded ">
        <div
          className={`w-10 h-10 flex flex-col p-2 justify-between cursor-pointer transition-background rounded ${
            navbar ? "bg-darkGreen shadow-lg " : "bg-transparent"
          }`}
        >
          <span
            className={`w-full h-[2px] bg-darkGreen  transition-background
            ${navbar ? "bg-[white] " : "bg-darkGreen "}
             `}
          ></span>
          <span
            className={`w-full h-[2px] bg-darkGreen transition-background
            ${navbar ? "bg-[white]" : "bg-darkGreen "}
              `}
          ></span>
          <span
            className={`w-full h-[2px] bg-darkGreen transition-background
            ${navbar ? "bg-[white]" : "bg-darkGreen "}
             `}
          ></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;

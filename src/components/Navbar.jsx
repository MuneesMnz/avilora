import React, { useEffect, useState } from "react";
import { navList } from "../data";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);

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
        className={`fixed top-0 z-[999] w-full h-[60px] transition-background max-md:hidden ${
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
      <div
        className={`fixed z-10 top-5 right-5 p-2 md:hidden  transition-background rounded ${
          navbar ? "bg-darkGreen  " : "bg-transparent shadow-lg "
        } `}
      >
        <div
          onClick={() => setOpen(!open)}
          className={`w-8 h-6 flex flex-col items-center justify-between cursor-pointer  `}
        >
          <span
            className={`w-full h-[2px]   transition-background  origin-left
            ${navbar || open ? "bg-[white] " : "bg-darkGreen "}
            ${open ? " rotate-45" : ""}  `}
          ></span>
          <span
            className={`w-full h-[2px]  transition-background origin-left
            ${navbar || open ? "bg-[white]" : "bg-darkGreen "}
            ${open ? "opacity-0"  : ""}  `}
          ></span>
          <span
            className={`w-full h-[2px]  transition-background origin-left
            ${navbar || open ? "bg-[white]" : "bg-darkGreen "}
            ${open ?" -rotate-45 " : ""}  `}
          ></span>
        </div>
      </div>

      <div
        className={`w-[300px] h-screen bg-darkGreen fixed top-0  duration-[0.5s] ease-in z-[5] ${
          open ? "right-0" : "right-[-300px]"
        }`}
      >
        <div className="w-full mt-20 text-[white] text-lg">
          {navList.map((item) => {
            return (
              <div
                key={item.name}
                className="p-2 mt-2 text-center capitalize cursor-pointer duration-300 hover:bg-lightGreen "
              >
                <a href={`#${item.link}`} onClick={() => setOpen(false)}>
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;

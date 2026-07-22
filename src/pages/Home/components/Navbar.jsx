import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="hidden md:flex w-full py-[1rem] px-[0.5rem] justify-end">
      <div
        className="
          flex
          items-center
          gap-[2.5rem]
          px-[1.5rem]
          text-[1.25rem]
          text-white
          font-[font1]
        "
      >
        <a href="#home">
          <NavLink text="HOME" />
        </a>

        <a href="#about">
          <NavLink text="ABOUT" />
        </a>

        <a href="#work">
          <NavLink text="WORK" />
        </a>

        <a href="#contact">
          <NavLink text="CONTACT" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
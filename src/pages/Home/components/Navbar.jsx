import React from 'react'
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="w-full py-4  p-2 flex items-center justify-end">
  <div className="flex items-center gap-10 py-3 px-6 text-xl text-white font-[font1] font-extralight">
    <a href="#home">
        <NavLink text="HOME" />
      </a>

      <a href="#about">
        <NavLink text="ABOUT" />
      </a>

      <a href="#work">
        <NavLink text="WORK" />
      </a>

      <a href="#about">
        <NavLink text="ABOUT" />
      </a>
  </div>
</div>
  )
}

export default Navbar
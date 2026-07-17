import React from 'react'
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="w-full py-4  p-2 flex items-center justify-end">
  <div className="flex items-center gap-10 py-3 px-6 text-xl text-white font-[font1] font-extralight">
    <Link to="/">
      <NavLink text="HOME" />
    </Link>

    <Link to="/about">
      <NavLink text="ABOUT" />
    </Link>

    <Link to="/work">
      <NavLink text="WORK" />
    </Link>

    <Link to="/contact">
      <NavLink text="CONTACT" />
    </Link>
  </div>
</div>
  )
}

export default Navbar
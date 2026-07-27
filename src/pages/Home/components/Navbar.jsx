import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  // Smooth scroll handler for top sections
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to bottom handler for fixed Contact footer
  const scrollToContact = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

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
        <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
          <NavLink text="ABOUT" />
        </a>

        <a href="#skills" onClick={(e) => scrollToSection(e, "skills")}>
          <NavLink text="SKILL" />
        </a>

        <a href="#work" onClick={(e) => scrollToSection(e, "work")}>
          <NavLink text="WORK" />
        </a>

        <a href="#contact" onClick={scrollToContact}>
          <NavLink text="CONTACT" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
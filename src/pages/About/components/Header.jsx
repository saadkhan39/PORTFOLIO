import React from "react";
import { motion } from "motion/react";

const Header = () => {
  const About = "ABOUT";
  const Me = " ME";

  return (
    <div className="w-full max-w-[40rem] text-white">
      <h1
        className="
          leading-none
          whitespace-nowrap

          text-[3rem]
          sm:text-[4rem]
          md:text-[5rem]
          lg:text-[5rem]
        "
      >
        {About.split("").map((char, index) => (
          <span key={index} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block font-[font1]"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.06,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}

        {Me.split("").map((char, index) => (
          <span key={index} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block font-[font2]"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: About.length * 0.06 + index * 0.06,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Header;
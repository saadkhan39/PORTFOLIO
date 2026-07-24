import React from "react";
import { motion } from "motion/react";

const Header = ({ first = "ABOUT", second = " ME" }) => {
  return (
    <div className="w-full max-w-[40rem] text-white">
      <h1
        className="
          pl-4 sm:pl-6 lg:pl-10
          leading-none
          whitespace-nowrap

          text-5xl
          sm:text-6xl
          md:text-7xl
          lg:text-8xl
        "
      >
        {first.split("").map((char, index) => (
          <span key={index} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block font-[font1]"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.05,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}

        {second.split("").map((char, index) => (
          <span key={index} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block font-[font2]"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: first.length * 0.05 + index * 0.05,
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
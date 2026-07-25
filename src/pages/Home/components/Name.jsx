import React from "react";
import { motion } from "motion/react";

const nameText = "SAAD KHAN";
const subText = "PORTFOLIO";

const Name = () => {
  return (
    <div className="w-fit px-[1rem] py-[1rem] sm:px-[1.25rem] lg:px-[0.75rem]">
      {/* Name Title */}
      <h1
        aria-label={nameText}
        className="
          text-white
          font-[font1]
          text-[1.5rem]
          sm:text-[1.875rem]
          lg:text-[2.25rem]
          leading-[0.8]
          whitespace-nowrap
        "
      >
        <span aria-hidden="true" className="inline-block">
          {nameText.split("").map((char, index) => (
            <span key={index} className="overflow-hidden inline-block">
              <motion.span
                className="inline-block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.035,
                  duration: 0.6,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
        </span>
      </h1>

      {/* Portfolio Subtitle */}
      <h4
        aria-label={subText}
        className="
          text-[#e2e0e0]
          font-[font2]
          text-[0.875rem]
          sm:text-[1.125rem]
          lg:text-[1.25rem]
          leading-[0.8]
          mt-[0.20rem]
        "
      >
        <span aria-hidden="true" className="inline-block">
          {subText.split("").map((char, index) => (
            <span key={index} className="overflow-hidden inline-block">
              <motion.span
                className="inline-block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.35 + index * 0.035,
                  duration: 0.6,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
        </span>
      </h4>
    </div>
  );
};

export default Name;
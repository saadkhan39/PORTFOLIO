import React from "react";
import { motion } from "motion/react";

const line1 = "MERN STACK";
const line2 = "DEVELOPER";

export default function Title() {
  return (
    <div className="pl-[2rem] pt-[3rem] sm:pl-[2rem] sm:pt-[5rem] lg:pl-[5vw] lg:pt-[5vh]">
      <h1
        aria-label={`${line1} ${line2}`}
        className="
          font-[staatliches] text-white whitespace-nowrap leading-[0.85]
          text-[3.25rem] sm:text-[4.5rem] md:text-[5.625rem] lg:text-[7.5rem]
        "
      >
        <span aria-hidden="true" className="block">
          {line1.split("").map((char, index) => (
            <span key={index} className="overflow-hidden inline-block">
              <motion.span
                className="inline-block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.035,
                  duration: 0.7,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
        </span>

        <span aria-hidden="true" className="block">
          {line2.split("").map((char, index) => (
            <span key={index} className="overflow-hidden inline-block">
              <motion.span
                className="inline-block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.4 + index * 0.035,
                  duration: 0.7,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
        </span>
      </h1>
    </div>
  );
}
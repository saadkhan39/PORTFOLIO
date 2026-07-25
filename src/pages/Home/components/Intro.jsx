import React from "react";
import { motion } from "motion/react";
import HoverButton from "./HoverButton";

const first = "Code With ";
const second = "PURPOSE.";

const Intro = () => {
  return (
    // Changed mt-[2.5rem] to mt-2 on mobile (sm:mt-8 restored for tablet/desktop)
    <div className="w-full max-w-[25rem] px-[1.25rem] mt-2 sm:mt-8 lg:mt-[32vh] lg:mr-[5vw] text-white">
      <p className="font-[satoshi-regular] text-[#e2e0e0] text-[1rem] leading-[1.2]">
        I build full-stack web applications where thoughtful design meets
        reliable engineering. Every feature has a purpose, every line of code
        has a reason. I create fast, scalable, and user-focused digital
        experiences with clean code, modern technologies, and intuitive design.
      </p>

      <h3 className="mt-[1rem] flex flex-wrap leading-[0.9] text-[1.75rem] sm:text-[2rem]">
        {first.split("").map((char, index) => (
          <span key={index} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block font-[staatliches]"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.03, duration: 0.5 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}

        {second.split("").map((char, index) => (
          <span key={index} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block font-[font2]"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.03, duration: 0.5 }}
            >
              {char}
            </motion.span>
          </span>
        ))}
      </h3>

      <div className="flex flex-wrap gap-4 mt-6">
        <a
          href="https://www.linkedin.com/in/saadkh3930/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HoverButton>LET'S COLLABORATE</HoverButton>
        </a>

        <a href="mailto:khansaad3930@gmail.com?subject=Hiring%20Opportunity">
          <HoverButton>HIRE ME</HoverButton>
        </a>
      </div>
    </div>
  );
};

export default Intro;
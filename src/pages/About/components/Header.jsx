import React from "react";
import { motion } from "motion/react";

// Parent animation container
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

// Letter animation variants
const letterVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Header = ({ first = "ABOUT", second = " ME" }) => {
  const combinedText = `${first}${second}`;

  return (
    <div className="w-full max-w-[50rem] text-white">
      <motion.h1
        aria-label={combinedText}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="
          pl-2 sm:pl-4 lg:pl-6
          leading-[0.7]
          whitespace-nowrap
          text-5xl sm:text-6xl md:text-7xl lg:text-8xl
        "
      >
        <span aria-hidden="true" className="inline-block">
          {/* First word */}
          {first.split("").map((char, index) => (
            <span key={`first-${index}`} className="inline-block overflow-hidden">
              <motion.span
                variants={letterVariants}
                className="inline-block font-[font1]"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}

          {/* Second word */}
          {second.split("").map((char, index) => (
            <span key={`second-${index}`} className="inline-block overflow-hidden">
              <motion.span
                variants={letterVariants}
                className="inline-block font-[font2]"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
        </span>
      </motion.h1>
    </div>
  );
};

export default Header;
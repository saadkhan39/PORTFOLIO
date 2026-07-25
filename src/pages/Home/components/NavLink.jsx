import React from "react";
import { motion } from "motion/react";

const NavLink = ({ text }) => {
  const letters = text.split("");

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative overflow-hidden cursor-pointer select-none py-1"
    >
      {/* Accessible Text for Screen Readers */}
      <span className="sr-only">{text}</span>

      {/* Visible Animated Text - Layer 1 */}
      <motion.div
        aria-hidden="true"
        className="flex text-[1.125rem] md:text-[1.25rem] leading-none"
        variants={{
          hover: { transition: { staggerChildren: 0.025 } },
        }}
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" },
            }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      {/* Visible Animated Text - Layer 2 (Hover) */}
      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-1 flex text-[1.125rem] md:text-[1.25rem] leading-none pointer-events-none"
        variants={{
          hover: { transition: { staggerChildren: 0.025 } },
        }}
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              initial: { y: "100%" },
              hover: { y: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default NavLink;
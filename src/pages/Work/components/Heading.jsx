import React from "react";
import { motion } from "motion/react";

const headingContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const titlePart1 = "SELECTED ";
const titlePart2 = "PROJECTS";

const Heading = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-[2rem]">
        <motion.h1
          variants={headingContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="
            text-white
            font-[font1]
            leading-[0.9]
            flex
            flex-wrap
            overflow-hidden
            py-1
            text-[2.8rem]
            sm:text-[3.5rem]
            md:text-[4.5rem]
            lg:text-[4.4rem]
          "
        >
          {/* "SELECTED " Letters */}
          <span className="inline-flex mr-3 sm:mr-4">
            {titlePart1.split("").map((char, index) => (
              <motion.span
                key={`part1-${index}`}
                variants={letterVariants}
                className="inline-block origin-bottom"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>

          {/* "PROJECTS" Letters */}
          <span className="inline-flex font-[font2]">
            {titlePart2.split("").map((char, index) => (
              <motion.span
                key={`part2-${index}`}
                variants={letterVariants}
                className="inline-block origin-bottom"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="
            font-[satoshi-regular]
            text-[#e2e0e0]
            leading-[1.2]
            w-full
            max-w-[25rem]
            text-[1rem]
            sm:text-[1.05rem]
            lg:text-[1rem]
          "
        >
          This collection is a reflection of my journey as a developer where
          every project starts with an idea, grows through experimentation and
          continuous learning, and comes to life through thoughtful design,
          clean code, and meaningful user experiences.
        </motion.p>
      </div>
    </div>
  );
};

export default Heading;
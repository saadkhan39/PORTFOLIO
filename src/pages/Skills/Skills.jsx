import React from "react";
import { motion } from "motion/react";
import bgImg from "../../assets/bg-img.png";

import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";
import Ai from "./Ai";

// Variants for the heading container to stagger each letter
const headingContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

// Variants for each individual character reveal
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

// Container stagger for the skill cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Animation variant for individual skill cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const titlePart1 = "MY";
const titlePart2 = "SKILLS";

const Skills = () => {
  return (
    <main
      className="
        min-h-screen
        w-full
        bg-cover
        bg-center
        bg-no-repeat
        px-6
        py-12
        sm:px-8
        md:px-10
        lg:px-12
        xl:px-16
        overflow-hidden
      "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Animated Heading Container */}
      <div className="mb-10">
        <motion.h1
          variants={headingContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="
            font-[font1]
            text-white
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            flex
            flex-wrap
            overflow-hidden
            py-1
          "
        >
          {/* "MY " Letters */}
          <span className="inline-flex mr-4">
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

          {/* "SKILLS" Letters (Styled with font2) */}
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

        {/* Subtitle Fade In */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="
            mt-2
            max-w-2xl
            text-gray-400
            font-[satoshi-regular]
            text-sm
            sm:text-base
          "
        >
          Technologies I excel at building with.
        </motion.p>
      </div>

      {/* Staggered Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-8
          xl:gap-10
          place-items-center
        "
      >
        <motion.div variants={cardVariants} className="w-full max-w-[21.25rem]">
          <Frontend />
        </motion.div>

        <motion.div variants={cardVariants} className="w-full max-w-[21.25rem]">
          <Backend />
        </motion.div>

        <motion.div variants={cardVariants} className="w-full max-w-[21.25rem]">
          <Tools />
        </motion.div>

        <motion.div variants={cardVariants} className="w-full max-w-[21.25rem]">
          <Ai />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Skills;
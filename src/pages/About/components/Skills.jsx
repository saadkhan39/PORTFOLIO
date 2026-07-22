import React from "react";
import { motion } from "motion/react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiSocketdotio,
  SiJsonwebtokens,
  SiGreensock,
  SiFramer,
  SiLangchain,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-500",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-400",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "text-white",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-sky-400",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "text-purple-500",
  },
  {
    name: "Socket.IO",
    icon: <SiSocketdotio />,
    color: "text-white",
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens />,
    color: "text-pink-400",
  },
  {
    name: "GSAP",
    icon: <SiGreensock />,
    color: "text-lime-400",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
    color: "text-white",
  },
  {
    name: "LangChain",
    icon: <SiLangchain />,
    color: "text-emerald-400",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    color: "text-orange-500",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "text-orange-600",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
  },
];

const Skills = () => {
  return (
  <section className="w-full py-10 overflow-hidden">

  <div className="mb-8">
    <h2 className="text-white font-[font2] text-4xl sm:text-5xl leading-none">
      MY STACK
    </h2>

    <p className="mt-3 text-[#cdcfd4] font-[satoshi-regular] text-sm sm:text-base">
      Technologies which i am good at
    </p>
  </div>

  <div className="relative overflow-hidden">

    {/* Left Fade */}
    <div className="absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-[#050B16] to-transparent" />

    {/* Right Fade */}
    <div className="absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-[#050B16] to-transparent" />

    <motion.div
      className="flex gap-6 w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        duration: 35,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {[...skills, ...skills].map((skill, index) => (
       <div
  key={index}
  className="
    group
    relative
    overflow-hidden

    w-[90px]
    h-[90px]

    rounded-xl

    border
    border-white/10

    bg-white/[0.03]
    backdrop-blur-xl

    flex
    flex-col
    items-center
    justify-center

    transition-all
    duration-500

    hover:border-cyan-400
  "
>
  {/* Hover Background */}
  <span
    className="
      absolute
      inset-0

      translate-y-full
      rounded-3xl

      bg-cyan-400

      transition-all
      duration-500

      group-hover:translate-y-0
      group-hover:rounded-none
    "
  />

  {/* Icon */}
  <span
    className={`
      relative
      z-10

      ${skill.color}

      text-[2.4rem]

      transition-all
      duration-500

      group-hover:text-black
      group-hover:scale-125
    `}
  >
    {skill.icon}
  </span>

 
</div>
      ))}
    </motion.div>
  </div>
</section>
  );
};

export default Skills;
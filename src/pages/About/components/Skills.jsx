import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
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

import { motion } from "motion/react";

export const skills = [
  {
    name: "React",
    icon: <FaReact className="text-4xl text-cyan-400" />,
    className: "top-4 left-6 rotate-[-12deg]",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-4xl text-white" />,
    className: "top-4 right-6 rotate-[8deg]",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-4xl text-green-500" />,
    className: "top-16 left-40 rotate-[10deg]",
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="text-4xl text-orange-500" />,
    className: "top-20 right-20 rotate-[-15deg]",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-4xl text-yellow-400" />,
    className: "top-40 left-6 rotate-[14deg]",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-4xl text-blue-500" />,
    className: "top-36 right-8 rotate-[-10deg]",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-4xl text-sky-400" />,
    className: "top-46 left-28 rotate-[16deg]",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-4xl text-purple-500" />,
    className: "top-52 right-24 rotate-[-14deg]",
  },
  {
    name: "Express",
    icon: <SiExpress className="text-4xl text-white" />,
    className: "top-[22rem] left-2 rotate-[10deg]",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-4xl text-green-500" />,
    className: "top-[18rem] right-6 rotate-[-8deg]",
  },
  {
    name: "Socket.IO",
    icon: <SiSocketdotio className="text-4xl text-white" />,
    className: "top-[22rem] left-40 rotate-[15deg]",
  },
  {
    name: "GSAP",
    icon: <SiGreensock className="text-4xl text-lime-400" />,
    className: "top-30 right-38 rotate-[-12deg]",
  },
  {
    name: "Framer",
    icon: <SiFramer className="text-4xl text-white" />,
    className: "bottom-32 left-28 rotate-[-8deg]",
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens className="text-4xl text-pink-400" />,
    className: "bottom-20 left-10 rotate-[-16deg]",
  },
  {
    name: "LangChain",
    icon: <SiLangchain className="text-4xl text-emerald-400" />,
    className: "bottom-16 right-18 rotate-[10deg]",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-4xl text-orange-500" />,
    className: "bottom-15 left-35 rotate-[-8deg]",
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-4xl text-orange-500" />,
    className: "top-25 right-58 rotate-[-10deg]",
  },
];

export default function Skills() {

   const My = "MY";
const Stack = " STACK";
  return (
       <div className="text-white" >
              {My.split("").map((char, index) => (
                <span key={index} className="overflow-hidden inline-block">
                  <motion.span
                    className="inline-block font-[staatliches] text-6xl"
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
                {Stack.split("").map((char, index) => (
                      <span key={index} className="overflow-hidden  text-6xl inline-block">
                        <motion.span
                          className="inline-block font-[font2]"
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                             delay: My.length * 0.06 + index * 0.06, // starts after ABOUT
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      </span>
                    ))}
  <motion.div animate={{
    y: [0, -10, 0],
    rotate: [0, 2, -2, 0],
  }}
  transition={{
    duration: 4 + Math.random() * 2,
    repeat: Infinity,
    ease: "easeInOut",
  }} className="relative w-[380px] h-[420px]  ">
  {skills.map((skill) => (
    <div
      key={skill.name}
      className={`absolute ${skill.className}
      flex items-center gap-3
      rounded-2xl
      bg-white/5
      backdrop-blur-lg
      border border-white/10
      px-4 py-3
      text-white
      shadow-xl
      transition-all duration-500
      hover:scale-110
      hover:rotate-0
      hover:border-cyan-400
      hover:shadow-cyan-400/40`}
    >
      {skill.icon}
      {/* <span className="font-medium">{skill.name}</span> */}
    </div>
  ))}
</motion.div>
       </div>
  );
}
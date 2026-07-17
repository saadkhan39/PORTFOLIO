import { motion } from "motion/react";

const line1 = "MERN STACK";
const line2 = "DEVELOPER";
const line3 = "Hello, I'm SAAD KHAN"

export default function Title() {
  return (
    <div className=" pl-23 pt-38">
        {/* <h4 className="text-white text-3xl font-[font2] leading-[1]"> {line3.split("").map((char, index) => (
          <span key={index} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.05,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}</h4> */}
         <h1 className="text-[120px] text-white    font-[staatliches] leading-[0.8]">
        {line1.split("").map((char, index) => (
          <span key={index} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.05,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
       <br />

        {line2.split("").map((char, index) => (
          <span key={index} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.6 + index * 0.05,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char}
            </motion.span>
          </span>
        ))}
      </h1>
    </div>
  );
}
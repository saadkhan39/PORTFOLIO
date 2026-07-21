import React from 'react'
import { motion } from "motion/react";

const first = "Code With ";
const second = "PURPOSE.";

const Intro = () => {
  return (
    <div className=' h-30 w-100 mr-20 mt-75 text-white '>
        <p className='font-[satoshi-regular] text-[#e2e0e0] '>I build full-stack web applications where thoughtful design meets reliable engineering. Every feature has a purpose, every line of code has a reason. I create fast, scalable, and user-focused digital experiences with clean code, modern technologies, and intuitive design.</p>
  <h3 className="text-3xl flex flex-wrap leading-0.8">
      {first.split("").map((char, index) => (
        <span key={index} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block font-[staatliches]"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: index * 0.04,
              duration: 0.6,
            }}
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
            transition={{
              delay: 0.4 + index * 0.04,
              duration: 0.6,
            }}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </h3>    </div>
  )
}

export default Intro
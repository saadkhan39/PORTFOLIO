import React from 'react'
import { motion } from "motion/react";


const Para = () => {
    const lines = [
  "Hello, I'm Saad Khan, a Full-Stack MERN Developer who enjoys building modern web applications with clean code, intuitive design, and scalable architecture. I love transforming ideas into seamless digital experiences that prioritize performance, usability, and long-term growth.",

  "With experience across the MERN stack and a growing interest in AI-powered applications, I'm constantly learning, experimenting, and refining my craft. I believe every project is an opportunity to solve real problems, create meaningful user experiences, and build something that lasts.",
  "Let's work together to create something that truly stands out on the web.",
  
];
  return (
    <div className=' h-100  text-white w-150 '>
     <div className="w-[600px] font-[satoshi-regular] text-[#e2e0e0] text-lg leading-0.1">
  {lines.map((line, index) => (
    <div key={index} className="overflow-hidden mb-4">
      <motion.p
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: index * 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {line}
      </motion.p>
    </div>
  ))}

  <div className="overflow-hidden mt-5">
    <motion.h3
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-3xl font-[font2] text-white leading-[0.8]"
    >
      FUN FACT
    </motion.h3>
  </div>

  <div className="overflow-hidden mt-2">
    <motion.p
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      When I'm away from my laptop, I enjoy spending time with friends,
      discovering new cafés, and trying new experiences.
    </motion.p>
  </div>
</div>
    </div>
  )
}

export default Para
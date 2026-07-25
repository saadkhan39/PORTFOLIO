import React from "react";
import { motion } from "motion/react";
import aboutImg from "../../../assets/about-secton-img.png";

const Para = () => {
  const lines = [
    "Hello, I'm Saad Khan, a Full-Stack MERN Developer who enjoys building modern web applications with clean code, intuitive design, and scalable architecture. I love transforming ideas into seamless digital experiences that prioritize performance, usability, and long-term growth.",

    "With experience across the MERN stack and a growing interest in AI-powered applications, I'm constantly learning, experimenting, and refining my craft. I believe every project is an opportunity to solve real problems, create meaningful user experiences, and build something that lasts.",

    "Let's work together to create something that truly stands out on the web.",
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center w-full"
      >
        <img
          src={aboutImg}
          alt="Saad Khan - About"
          className="w-full max-w-[650px] h-auto object-cover rounded-lg shadow-2xl"
        />
      </motion.div>

      {/* Paragraph Content */}
      <div className="w-full lg:max-w-[36vw] text-[#d4d4d4] font-[satoshi-regular] text-base sm:text-[1.05rem] leading-[1.6]">
        {lines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="mb-4"
          >
            {line}
          </motion.p>
        ))}

        {/* Fun Fact Section */}
        <motion.h3
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="font-[font2] text-white text-3xl sm:text-4xl mt-6"
        >
          FUN FACT
        </motion.h3>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-2 text-[#d4d4d4]"
        >
          When I'm away from my laptop, I enjoy spending time with friends,
          discovering new cafés, and trying new experiences.
        </motion.p>
      </div>
    </div>
  );
};

export default Para;
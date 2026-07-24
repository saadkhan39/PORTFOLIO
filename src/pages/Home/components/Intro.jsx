import React from "react";
import { motion } from "motion/react";

const first = "Code With ";
const second = "PURPOSE.";

const Intro = () => {
  return (
    <div
      className="
        w-full
        max-w-[25rem]
        px-[1.25rem]
        mt-[2.5rem]
        lg:mt-[32vh]
        lg:mr-[5vw]
        text-white
      "
    >
      <p
        className="
          font-[satoshi-regular]
          text-[#e2e0e0]
          text-[1rem]
          sm:text-[1rem]
        leading-[1.1]
       
        "
      >
        I build full-stack web applications where thoughtful design meets
        reliable engineering. Every feature has a purpose, every line of code
        has a reason. I create fast, scalable, and user-focused digital
        experiences with clean code, modern technologies, and intuitive design.
      </p>

      <h3
        className="
          mt-[1rem]
          flex
          flex-wrap
          leading-[0.8]
          text-[1.75rem]
          sm:text-[2rem]
        "
      >
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
      </h3>
      <div className="flex gap-[1.2rem]">
             <a
  href="https://www.linkedin.com/in/saadkh3930/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="
      group
      relative
      inline-flex
      items-center
      justify-center
      overflow-hidden

      mt-5

      px-6
      py-1.5

      border
      border-white

      font-[font2]
      text-lg
      cursor-pointer
    "
  >
    <span
      className="
        absolute
        inset-0
        bg-white
        translate-y-full
        transition-all
        duration-500
        group-hover:translate-y-0
      "
    />

    <span
      className="
        relative
        z-10
        transition-colors
        duration-500
        group-hover:text-black
      "
    >
      LET'S COLLABORATE
    </span>
  </button>
</a>

     <a
  href="mailto:khansaad3930@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Saad,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20job%20opportunity%20with%20you.%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you."
>
  <button
    className="
      group
      relative
      inline-flex
      items-center
      justify-center
      overflow-hidden

      mt-5

      px-6
      py-1.5

      border
      border-white

      font-[font2]
      text-lg
      cursor-pointer
    "
  >
    {/* Hover Background */}
    <span
      className="
        absolute
        inset-0
        bg-white
        translate-y-full
        transition-all
        duration-500
        group-hover:translate-y-0
      "
    />

    {/* Text */}
    <span
      className="
        relative
        z-10
        transition-colors
        duration-500
        group-hover:text-black
      "
    >
      HIRE ME
    </span>
  </button>
</a>
      </div>
    </div>
  );
};

export default Intro;
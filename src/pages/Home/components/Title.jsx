import { motion } from "motion/react";

const line1 = "MERN STACK";
const line2 = "DEVELOPER";

export default function Title() {
  return (
    <div
      className="
        pl-[1.25rem]
        pt-[3rem]
        sm:pl-[2rem]
        sm:pt-[5rem]
        lg:pl-[5vw]
        lg:pt-[5vh]
      "
    >
      <h1
        className="
          font-[staatliches]
          text-white
          whitespace-nowrap
          leading-[0.85]

          text-[3.25rem]
          sm:text-[4.5rem]
          md:text-[5.625rem]
          lg:text-[7.5rem]
        "
      >
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
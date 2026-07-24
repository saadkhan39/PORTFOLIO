import { motion } from "motion/react";

const SocialLinks = ({ text, href }) => {
     return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <motion.div
        initial="initial"
        whileHover="hover"
        className="
          relative
          overflow-hidden
          cursor-pointer
          h-[1.6rem]
        "
      >
        {/* Original Text */}
        <motion.div
          className="flex uppercase"
          variants={{
            initial: {},
            hover: {
              transition: {
                staggerChildren: 0.03,
              },
            },
          }}
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block font-[font1] text-lg"
              variants={{
                initial: { y: 0 },
                hover: { y: "-100%" },
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        {/* Hover Text */}
        <motion.div
          className="absolute left-0 top-0 flex uppercase text-cyan-600"
          variants={{
            initial: {},
            hover: {
              transition: {
                staggerChildren: 0.03,
              },
            },
          }}
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block font-[font1] text-lg"
              variants={{
                initial: { y: "100%" },
                hover: { y: 0 },
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </a>
  );
  
}

export default SocialLinks
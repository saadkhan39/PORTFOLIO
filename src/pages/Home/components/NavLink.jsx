import { motion } from "motion/react";

const NavLink = ({ text }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative overflow-hidden h-7 cursor-pointer"
    >
      {/* Original Text */}
      <motion.div
        className="flex"
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
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" },
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      {/* Hover Text */}
      <motion.div
        className="absolute left-0 top-0 flex"
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
            className="inline-block"
            variants={{
              initial: { y: "100%" },
              hover: { y: 0 },
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default NavLink;
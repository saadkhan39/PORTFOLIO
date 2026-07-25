import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const BigImage = ({ activeProject }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => navigate(`/work/${activeProject.slug}`)}
      className="
        relative
        w-full
        max-w-[38rem]
        h-[40vh]
        sm:h-[45vh]
        lg:w-[38rem]
        lg:h-[18.75rem]
        overflow-hidden
        cursor-pointer
        group
        rounded-xl
      "
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={activeProject.slug}
          src={activeProject.image}
          alt={activeProject.title}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="
            w-full
            h-full
            object-contain
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </AnimatePresence>
    </motion.div>
  );
};

export default BigImage;
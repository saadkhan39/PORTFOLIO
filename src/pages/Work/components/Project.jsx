import React from "react";
import { motion } from "motion/react";

const Project = ({ projects, activeProject, setActiveProject }) => {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-4
        pt-8
        md:pt-12
        lg:flex
        lg:gap-4
        lg:pt-24
      "
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onMouseEnter={() => setActiveProject(project)}
          onClick={() => setActiveProject(project)}
          className="cursor-pointer flex justify-center"
        >
          <img
            src={project.image}
            alt={project.title}
            className={`
              w-[42vw]
              h-[24vw]
              max-w-[9rem]
              max-h-[6rem]
              object-contain
              transition-all
              duration-300
              rounded-lg
              sm:mx-auto
              lg:w-36
              lg:h-24
              ${
                activeProject.title === project.title
                  ? "scale-110 border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)] opacity-100"
                  : "opacity-50 hover:opacity-100 hover:scale-105"
              }
            `}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Project;
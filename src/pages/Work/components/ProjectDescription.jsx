import React from "react";
import { motion } from "motion/react";

const ProjectDescription = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-white w-full"
    >
      <div className="w-full max-w-[40rem]">
        <h1
          className="
            font-[font2]
            text-[2rem]
            sm:text-[2.25rem]
            mb-[0.75rem]
          "
        >
          DESCRIPTION
        </h1>

        <p
          className="
            font-[satoshi-regular]
            text-[#e2e0e0]
            text-[1rem]
            sm:text-[1.1rem]
            leading-[1.4]
            mb-[2.5rem]
          "
        >
          {project.description}
        </p>

        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-[2.5rem]
          "
        >
          {/* Tech Stack */}
          <div className="flex-1">
            <h1
              className="
                font-[font2]
                text-[1.75rem]
                mb-[0.75rem]
              "
            >
              TECH STACK
            </h1>

            <ul className="space-y-[0.35rem]">
              {project.techStack.map((tech) => (
                <li
                  key={tech}
                  className="
                    text-[#e2e0e0]
                    text-[0.95rem]
                    font-[satoshi-regular]
                  "
                >
                  • {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights */}
          <div className="flex-1">
            <h1
              className="
                font-[font2]
                text-[1.75rem]
                mb-[0.75rem]
              "
            >
              HIGHLIGHTS
            </h1>

            <ul className="space-y-[0.5rem]">
              {project.highlight.map((item) => (
                <li
                  key={item}
                  className="
                    text-[#e2e0e0]
                    text-[0.95rem]
                    leading-[1.3]
                    font-[satoshi-regular]
                  "
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDescription;
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { projects } from "../components/Work";
import bgImg from "../../../assets/bg-img.png";
import ProjectDescription from "./ProjectDescription";

const titleContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main
        className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h1 className="font-[font1] text-4xl mb-4">PROJECT NOT FOUND</h1>
        <button
          onClick={() => navigate("/work")}
          className="border border-white px-6 py-2 font-[font2] hover:bg-white hover:text-black transition-colors"
        >
          RETURN TO HOME
        </button>
      </main>
    );
  }

  return (
    <main
      className="
        min-h-screen
        w-full
        bg-cover
        bg-center
        px-[5vw]
        py-[3vh]
        flex
        flex-col
        lg:flex-row
        gap-[4rem]
        lg:gap-[5rem]
        overflow-x-hidden
      "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Left Section */}
      <div className="flex flex-col">
        <div
          className="
            w-full
            max-w-[28rem]
            flex
            flex-col
            gap-[1.25rem]
          "
        >
          <button
            onClick={() => navigate(-1)}
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              overflow-hidden
              w-fit
              px-6
              py-1.5
              border
              border-white
              font-[font2]
              text-white
              text-[1rem]
              lg:text-[1.2rem]
              transition-all
              duration-500
            "
          >
            {/* Hover Background */}
            <span
              className="
                absolute
                inset-0
                translate-y-full
                bg-white
                transition-all
                duration-500
                group-hover:translate-y-0
                group-hover:rounded-none
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
              RETURN TO HOME
            </span>
          </button>

          {/* Split Text Animated Title */}
          <motion.h1
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
            className="
              text-white
              font-[font1]
              leading-[0.9]
              flex
              flex-wrap
              overflow-hidden
              py-1
              text-[3rem]
              sm:text-[4rem]
              lg:text-[4.5rem]
            "
          >
            {project.title.split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={letterVariants}
                className="inline-block origin-bottom"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-[satoshi-regular] text-[#e2e0e0] leading-[1.2]"
          >
            {project.tagline}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              overflow-hidden
              w-fit
              px-6
              py-1.5
              border
              border-white
              font-[font2]
              text-white
              text-lg
              transition-all
              duration-500
            "
          >
            {/* Hover Background */}
            <span
              className="
                absolute
                inset-0
                translate-y-full
                bg-white
                transition-all
                duration-500
                group-hover:translate-y-0
                group-hover:rounded-none
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
              LIVE LINK
            </span>
          </motion.a>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          src={project.image}
          alt={project.title}
          className="
            w-full
            max-w-[32rem]
            mt-[2.5rem]
            object-contain
          "
        />
      </div>

      {/* Right Section */}
      <div className="flex lg:items-end flex-1">
        <ProjectDescription project={project} />
      </div>
    </main>
  );
};

export default ProjectDetails;
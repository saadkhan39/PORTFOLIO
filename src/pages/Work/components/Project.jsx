import React from "react";

const Project = ({
  projects,
  activeProject,
  setActiveProject,
}) => {
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
  {projects.map((project) => (
    <div
      key={project.title}
      onMouseEnter={() => setActiveProject(project)}
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
          sm:mx-auto

          lg:w-36
          lg:h-24

          ${
            activeProject.title === project.title
              ? "scale-110 border-2 border-cyan-800"
              : "opacity-60 hover:opacity-100"
          }
        `}
      />
    </div>
  ))}
</div>
  );
};

export default Project;
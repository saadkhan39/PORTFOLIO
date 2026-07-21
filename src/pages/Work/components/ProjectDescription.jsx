import React from "react";

const ProjectDescription = ({ project }) => {
  return (
    <div className="description  text-white  ">
      <div className="w-[650px] ">

        <h1 className="font-[font2] text-4xl mb-3">
          DESCRIPTION
        </h1>

        <p className="font-[satoshi-regular] text-lg text-[#e2e0e0] leading-[1.2] mb-10">
          {project.description}
        </p>

        <div className="flex  gap-10  ">

          <div className=" ">
            <h1 className="text-3xl font-[font2] mb-3">
              TECH STACK
            </h1>

          <ul className="  ">
  {project.techStack.map((tech) => (
    <li
      key={tech}
      className="  text-[#e2e0e0] text-sm"
    >
      • {tech}
    </li>
  ))}
</ul>
          </div>

          <div>
            <h1 className="text-3xl font-[font2] mb-3">
              HIGHLIGHTS
            </h1>

            <ul className="space-y-2">
              {project.highlight.map((item) => (
                <li
                  key={item}
                  className="text-[#e2e0e0] text-sm leading-[0.8] font-[satoshi-regular]"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
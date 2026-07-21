import React from "react";

const Project = ({
    projects,
    activeProject,
    setActiveProject
}) => {

    return (

        <div className="flex gap-4 pt-24">

            {projects.map((project) => (

                <div
                    key={project.title}
                    onMouseEnter={() => setActiveProject(project)}
                    className="cursor-pointer"
                >

                    <img
                        src={project.image}
                        alt=""
                        className={`w-36 h-24  object-contain transition-all duration-300

                        ${
                            activeProject.title === project.title
                            ? "scale-110 border-2  border-cyan-800"
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
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../components/Work";
import bgImg from "../../../assets/bg-img.png";
import ProjectDescription from "./ProjectDescription";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  const navigate = useNavigate();

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

          <h1
            className="
              text-white
              font-[font1]
              leading-[0.9]

              text-[3rem]
              sm:text-[4rem]
              lg:text-[4.5rem]
            "
          >
            {project.title}
          </h1>

          <p className="font-[satoshi-regular] text-[#e2e0e0] leading-[1.2]">
            {project.tagline}
          </p>

        <a
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
</a>
        </div>

        <img
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
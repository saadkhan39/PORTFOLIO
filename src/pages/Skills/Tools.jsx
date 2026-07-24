import { FaGitAlt, FaGithub, FaTools } from "react-icons/fa";
import {
  SiPostman,
  SiGreensock,
  SiFramer,
} from "react-icons/si";

const toolSkills = [
  { icon: <FaGitAlt />, color: "text-orange-500" },
  { icon: <FaGithub />, color: "text-white" },
  { icon: <SiPostman />, color: "text-orange-400" },
  { icon: <SiGreensock />, color: "text-lime-400" },
  { icon: <SiFramer />, color: "text-pink-400" },
];

export default function Tools() {
  return (
    <div
      className="
        w-full
        max-w-[21.25rem]

        h-[45vh]
        sm:h-[50vh]
        md:h-[55vh]
        lg:h-[60vh]
      "
    >
      <div className="group w-full h-full [perspective:1200px]">
        <div
          className="
            relative
            w-full
            h-full
            transition-transform
            duration-700
            [transform-style:preserve-3d]
            group-hover:[transform:rotateY(180deg)]
          "
        >
          {/* ================= FRONT ================= */}

          <div
            className="
              absolute
              inset-0

              rounded-[1.5rem]

              border
              border-orange-400/20

              bg-gradient-to-br
              from-[#07111f]
              via-[#0b1a30]
              to-[#122846]

              overflow-hidden
              backdrop-blur-xl

              shadow-[0_0_2.5rem_rgba(251,146,60,.08)]

              flex
              flex-col
              justify-center
              items-center

              [backface-visibility:hidden]
            "
          >
            {/* Glow */}

            <div className="absolute w-[14rem] h-[14rem] lg:w-[16vw] lg:h-[16vw] rounded-full bg-orange-500/10 blur-3xl" />

            {/* Icon */}

            <div
              className="
                relative
                z-10

                w-[5rem]
                h-[5rem]

                sm:w-[6rem]
                sm:h-[6rem]

                lg:w-[7rem]
                lg:h-[7rem]

                rounded-full


                bg-orange-500/10

                border
                border-orange-400/20

                flex
                items-center
                justify-center
              "
            >
              <FaTools className="text-[2.8rem] lg:text-[3.5vw] text-orange-400" />
            </div>

            <h2
              className="
                mt-[1.5rem]

                text-[2rem]
                sm:text-[2.4rem]

                font-[font2]
                tracking-[0.2em]
                text-white
              "
            >
              TOOLS
            </h2>

                       <p className="mt-[0.75rem] text-[0.75rem] sm:text-[0.875rem] text-gray-400 uppercase tracking-[0.25em]">

              Developer Toolkit
            </p>

            <span className="absolute bottom-[1.75rem] text-[0.65rem] sm:text-[0.75rem] tracking-[0.35em] uppercase text-gray-500">
              Hover Me
            </span>
          </div>

          {/* ================= BACK ================= */}

          <div
            className="
              absolute
              inset-0

              rounded-[1.5rem]

              border
              border-orange-400/20

              bg-gradient-to-br
              from-[#07111f]
              via-[#081525]
              to-[#0d233d]

              p-[1.5rem]
              lg:p-[2vw]

              flex
              flex-col
              justify-center

              [backface-visibility:hidden]
              [transform:rotateY(180deg)]
            "
          >
            <h3
              className="
                text-[1.8rem]
                lg:text-[1.7vw]

                text-center
                text-white

                font-[font2]
                tracking-wider

                mb-[2rem]
              "
            >
              TOOLKIT
            </h3>

            <div className="grid grid-cols-3 gap-[0.9rem] lg:gap-[1vw]">
              {toolSkills.map((skill, index) => (
                <div
                  key={index}
                  className="
                   h-[3.5rem]
                    sm:h-[4rem]

                    rounded-[1rem]
                    sm:rounded-[1.25rem]

                    bg-white/5

                    border
                    border-white/10

                    backdrop-blur-md

                    flex
                    items-center
                    justify-center

                    transition-all
                    duration-300

                    hover:scale-110
                    hover:border-orange-400
                    hover:bg-orange-500/10
                  "
                >
                 <span
                    className={`
                      text-[2rem]
                      sm:text-[2.4rem]
                      ${skill.color}
                    `}
                  >
                    {skill.icon}
                  </span>
                </div>
              ))}
            </div>

                        <p className="mt-[1.75rem] sm:mt-[2rem] lg:mt-[2.5rem] text-center text-[0.75rem] sm:text-[0.875rem] text-gray-400 leading-relaxed">

              Modern tools for version control, animation and 
              collaboration 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
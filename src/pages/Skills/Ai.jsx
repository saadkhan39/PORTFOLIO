import { FaBrain } from "react-icons/fa";
import { GrGenai } from "react-icons/gr";
import {
  SiLangchain,
  SiGooglegemini,
  SiMistralai,
} from "react-icons/si";

const aiSkills = [
  { icon: <SiLangchain />, color: "text-emerald-400" },
  { icon: <SiGooglegemini />, color: "text-blue-400" },
  { icon: <SiMistralai />, color: "text-orange-400" },
  { icon: <GrGenai />, color: "text-violet-300" },
];

export default function Ai() {
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
          {/* FRONT */}

          <div
            className="
              absolute
              inset-0

              rounded-3xl

              border
              border-violet-400/20

              bg-gradient-to-br
              from-[#07111f]
              via-[#0b1a30]
              to-[#122846]

              backdrop-blur-xl
              overflow-hidden

              shadow-[0_0_40px_rgba(168,85,247,.08)]

              flex
              flex-col
              justify-center
              items-center

              [backface-visibility:hidden]
            "
          >
            {/* Glow */}

            <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-violet-500/10 blur-3xl" />

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

                border
                border-violet-400/20

                bg-violet-500/10

                flex
                items-center
                justify-center
              "
            >
              <FaBrain
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  text-violet-400
                "
              />
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
              AI
            </h2>

                                  <p className="mt-[0.75rem] text-[0.75rem] sm:text-[0.875rem] text-gray-400 uppercase tracking-[0.25em]">

              Gen AI & LLMs
            </p>

            <span
              className="
                absolute
                bottom-8

                text-[10px]
                sm:text-xs

                tracking-[0.4em]
                uppercase
                text-gray-500
              "
            >
              Hover Me
            </span>
          </div>

          {/* BACK */}

          <div
            className="
              absolute
              inset-0

              rounded-3xl

              border
              border-violet-400/20

              bg-gradient-to-br
              from-[#07111f]
              via-[#081525]
              to-[#0d233d]

              [backface-visibility:hidden]
              [transform:rotateY(180deg)]

              p-5
              sm:p-6
              lg:p-8

              flex
              flex-col
              justify-center
            "
          >
            <h3
              className="
                text-2xl
                sm:text-3xl

                text-center
                text-white

                font-[font2]

                tracking-wider
                mb-6
                sm:mb-8
              "
            >
              AI STACK
            </h3>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
              {aiSkills.map((skill, index) => (
                <div
                  key={index}
                  className="
                    h-14
                    sm:h-16

                    rounded-xl
                    sm:rounded-2xl

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
                    hover:border-violet-400
                    hover:bg-violet-500/10
                  "
                >
                  <span
                    className={`
                      text-3xl
                      sm:text-4xl
                      ${skill.color}
                    `}
                  >
                    {skill.icon}
                  </span>
                </div>
              ))}
            </div>

                                    <p className="mt-[1.75rem] sm:mt-[2rem] lg:mt-[2.5rem] text-center text-[0.75rem] sm:text-[0.875rem] text-gray-400 leading-relaxed">

               AI-powered tools 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
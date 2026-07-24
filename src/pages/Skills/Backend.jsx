import { FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiJsonwebtokens,
} from "react-icons/si";

const backendSkills = [
  { icon: <FaNodeJs />, color: "text-green-500" },
  { icon: <SiExpress />, color: "text-white" },
  { icon: <SiMongodb />, color: "text-green-400" },
  { icon: <SiSocketdotio />, color: "text-white" },
  { icon: <SiJsonwebtokens />, color: "text-pink-400" },
];

export default function Backend() {
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
      <div className="group w-full h-full [perspective:75rem]">
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

              rounded-[2rem]

              border
              border-green-400/20

              bg-gradient-to-br
              from-[#07111f]
              via-[#0b1a30]
              to-[#122846]

              backdrop-blur-xl
              overflow-hidden

              shadow-[0_0_2.5rem_rgba(34,197,94,.08)]

              flex
              flex-col
              justify-center
              items-center

              [backface-visibility:hidden]
            "
          >
            {/* Glow */}

            <div className="absolute w-[14rem] h-[14rem] sm:w-[16rem] sm:h-[16rem] rounded-full bg-green-500/10 blur-[3rem]" />

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

                bg-green-500/10

                border
                border-green-400/20

                flex
                items-center
                justify-center
              "
            >
              <FaNodeJs className="text-[3rem] sm:text-[3.5rem] lg:text-[4rem] text-green-500" />
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
              BACKEND
            </h2>

            <p className="mt-[0.75rem] text-[0.75rem] sm:text-[0.875rem] text-gray-400 uppercase tracking-[0.25em]">
              Server & Database
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

              rounded-[2rem]

              border
              border-green-400/20

              bg-gradient-to-br
              from-[#07111f]
              via-[#081525]
              to-[#0d233d]

              [backface-visibility:hidden]
              [transform:rotateY(180deg)]

              p-[1.25rem]
              sm:p-[1.5rem]
              lg:p-[2rem]

              flex
              flex-col
              justify-center
            "
          >
            <h3
              className="
                text-[1.75rem]
                sm:text-[2rem]

                text-center
                text-white

                font-[font2]

                tracking-wider
                mb-[1.75rem]
                sm:mb-[2rem]
              "
            >
              SKILLS
            </h3>

            <div className="grid grid-cols-3 gap-[0.8rem] sm:gap-[1rem] lg:gap-[1.25rem]">
              {backendSkills.map((skill, index) => (
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
                    hover:border-green-400
                    hover:bg-green-500/10
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
              Building secure, scalable APIs and real-time applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
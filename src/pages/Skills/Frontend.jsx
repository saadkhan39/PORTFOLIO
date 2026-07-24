import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

const frontendSkills = [
  { icon: <FaReact />, color: "text-cyan-400" },
  { icon: <SiJavascript />, color: "text-yellow-400" },
  { icon: <FaHtml5 />, color: "text-orange-500" },
  { icon: <FaCss3Alt />, color: "text-blue-500" },
  { icon: <SiTailwindcss />, color: "text-sky-400" },
  { icon: <SiRedux />, color: "text-purple-500" },
];

export default function Frontend() {
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
      {/* FRONT */}

      <div
        className="
          absolute
          inset-0

          rounded-[2rem]

          border
          border-cyan-400/20

          bg-gradient-to-br
          from-[#07111f]
          via-[#0b1a30]
          to-[#122846]

          backdrop-blur-xl
          overflow-hidden

          shadow-[0_0_2.5rem_rgba(0,255,255,.08)]

          flex
          flex-col
          justify-center
          items-center

          [backface-visibility:hidden]
        "
      >
        {/* Glow */}

        <div className="absolute w-[14rem] h-[14rem] sm:w-[16rem] sm:h-[16rem] rounded-full bg-cyan-400/10 blur-[3rem]" />

        {/* Icon */}

        <div
          className="
            relative
            z-10

            w-[5rem]
            h-[5rem]

            sm:w-[6rem]
            sm:h-[6rem]

            md:w-[7rem]
            md:h-[7rem]

            rounded-full

            bg-cyan-500/10

            border
            border-cyan-400/20

            flex
            items-center
            justify-center
          "
        >
          <FaReact className="text-[3rem] md:text-[3.8rem] text-cyan-400 animate-spin [animation-duration:10s]" />
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
          FRONTEND
        </h2>

        <p className="mt-[0.75rem] text-[0.75rem] sm:text-[0.875rem] text-gray-400 uppercase tracking-[0.25em]">
          React Ecosystem
        </p>

        <span className="absolute bottom-[1.75rem] text-[0.65rem] sm:text-[0.75rem] tracking-[0.35em] uppercase text-gray-500">
          Hover Me
        </span>
      </div>

      {/* BACK */}

      <div
        className="
          absolute
          inset-0

          rounded-[2rem]

          border
          border-cyan-400/20

          bg-gradient-to-br
          from-[#07111f]
          via-[#081525]
          to-[#0d233d]

          [backface-visibility:hidden]
          [transform:rotateY(180deg)]

          p-[1.25rem]
          sm:p-[1.5rem]
          md:p-[2rem]

          flex
          flex-col
          justify-center
        "
      >
        <h3 className="text-[1.75rem] sm:text-[2rem] text-center text-white font-[font2] tracking-wider mb-[1.75rem] sm:mb-[2rem]">
          SKILLS
        </h3>

        <div className="grid grid-cols-3 gap-[0.8rem] sm:gap-[1rem] md:gap-[1.25rem]">
          {frontendSkills.map((skill, index) => (
            <div
              key={index}
              className="
                h-[3rem]
                sm:h-[3.5rem]
                md:h-[4rem]

                rounded-[1rem]
                md:rounded-[1.25rem]

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
                hover:border-cyan-400
                hover:bg-cyan-400/10
              "
            >
              <span
                className={`
                  text-[1.6rem]
                  sm:text-[2rem]
                  md:text-[2.4rem]
                  ${skill.color}
                `}
              >
                {skill.icon}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-[1.75rem] sm:mt-[2rem] md:mt-[2.5rem] text-center text-[0.75rem] sm:text-[0.875rem] text-gray-400 leading-relaxed">
          Building modern, responsive & interactive web experiences.
        </p>
      </div>
    </div>
  </div>
</div>
  );
}
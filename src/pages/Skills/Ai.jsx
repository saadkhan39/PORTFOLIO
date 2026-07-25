import React, { useState } from "react";
import { FaBrain } from "react-icons/fa";
import { GrGenai } from "react-icons/gr";
import {
  SiLangchain,
  SiGooglegemini,
  SiMistralai,
} from "react-icons/si";
import bgImg from "../../assets/bg-img.png"; 

const aiSkills = [
  { icon: <SiLangchain />, color: "group-hover:text-emerald-400" },
  { icon: <SiGooglegemini />, color: "group-hover:text-blue-400" },
  { icon: <SiMistralai />, color: "group-hover:text-orange-400" },
  { icon: <GrGenai />, color: "group-hover:text-violet-300" },
];

export default function Ai() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className="w-full h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] cursor-pointer"
    >
      <div className="group w-full h-full [perspective:75rem]">
        <div
          className={`
            relative
            w-full
            h-full
            transition-transform
            duration-700
            [transform-style:preserve-3d]
            group-hover:[transform:rotateY(180deg)]
            ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
          `}
        >
          {/* ================= FRONT ================= */}
          <div
            style={{ backgroundImage: `url(${bgImg})` }}
            className="
              absolute
              inset-0
              border
              border-white/20
              bg-cover
              bg-center
              overflow-hidden
              flex
              flex-col
              justify-between
              p-6
              sm:p-8
              [backface-visibility:hidden]
              transition-colors
              duration-500
              hover:border-white/40
            "
          >
            {/* Top Badge */}
            <div className="flex justify-between items-center w-full">
              <span className="font-[font2] text-xs text-gray-400 tracking-widest uppercase">
                04 // STACK
              </span>
            </div>

            {/* Center Content */}
            <div className="flex flex-col items-center justify-center text-center">
              <div
                className="
                  relative
                  z-10
                  w-16
                  h-16
                  sm:w-20
                  sm:h-20
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  mb-6
                  bg-black/30
                  backdrop-blur-sm
                "
              >
                <FaBrain className="text-2xl sm:text-3xl text-white" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[font1] tracking-wide text-white leading-none">
                AI & LLMS
              </h2>

              <p className="mt-3 text-xs sm:text-sm font-[satoshi-regular] text-[#e2e0e0] uppercase tracking-widest">
                GEN AI &amp; INTELLIGENT SYSTEMS
              </p>
            </div>

            {/* Bottom Hint */}
            <div className="w-full text-center">
              <span className="text-[0.7rem] sm:text-xs font-[font2] tracking-[0.3em] uppercase text-gray-500">
                [ HOVER / TAP TO REVEAL ]
              </span>
            </div>
          </div>

          {/* ================= BACK ================= */}
          <div
            style={{ backgroundImage: `url(${bgImg})` }}
            className="
              absolute
              inset-0
              border
              border-white/20
              bg-cover
              bg-center
              [backface-visibility:hidden]
              [transform:rotateY(180deg)]
              p-6
              sm:p-8
              flex
              flex-col
              justify-between
            "
          >
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="text-xl sm:text-2xl text-white font-[font2] tracking-wider">
                AI STACK
              </h3>
              <span className="font-[font2] text-xs text-gray-400">04</span>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 my-auto">
              {aiSkills.map((skill, index) => (
                <div
                  key={index}
                  className="
                    group
                    h-14
                    sm:h-16
                    border
                    border-white/15
                    bg-black/40
                    backdrop-blur-sm
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:border-white
                    hover:bg-white/10
                  "
                >
                  <span
                    className={`text-2xl sm:text-3xl text-gray-300 transition-colors duration-300 ${skill.color}`}
                  >
                    {skill.icon}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm font-[satoshi-regular] text-[#e2e0e0] leading-relaxed border-t border-white/10 pt-3">
              Building intelligent applications with modern AI tools &amp; frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
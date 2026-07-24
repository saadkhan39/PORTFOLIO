import React from "react";
import bgImg from "../../assets/bg-img.png";

import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";
import Ai from "./Ai";

const Skills = () => {
  return (
    <main
      className="
        min-h-screen
        w-full

        bg-cover
        bg-center
        bg-no-repeat

        px-6
        py-12

        sm:px-8
        md:px-10
        lg:px-12
        xl:px-16
      "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Heading */}

      <div className=" mb-10">
        <h1
          className="
            font-[font1]
            text-white

            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-7xl
          "
        >
          MY{" "}
          <span className="font-[font2]">
            SKILLS
          </span>
        </h1>

        <p
          className="
            mt-2
            max-w-2xl

            text-gray-400
            font-[satoshi-regular]

            text-sm
            sm:text-base
          "
        >
          Technologies, which i am goood at.
        </p>
      </div>

      {/* Cards */}

      <div
        className="
          grid

          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4

          gap-8
          xl:gap-10

          place-items-center
        "
      >
        <Frontend />

        <Backend />

        <Tools />

        <Ai />
      </div>
    </main>
  );
};

export default Skills;
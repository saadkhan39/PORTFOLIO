import React from "react";

const Heading = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-[2rem]">
        <h1
          className="
            text-white
            font-[font1]
            leading-[0.9]
            whitespace-nowrap

            text-[2.8rem]
            sm:text-[3.5rem]
            md:text-[4.5rem]
            lg:text-[4.4rem]
          "
        >
          SELECTED{" "}
          <span className="font-[font2]">
            PROJECTS
          </span>
        </h1>

        <p
          className="
            font-[satoshi-regular]
            text-[#e2e0e0]
            leading-[1.2]

            w-full
            max-w-[25rem]

            text-[1rem]
            sm:text-[1.05rem]
            lg:text-[1rem]
          "
        >
          This collection is a reflection of my journey as a developer where
          every project starts with an idea, grows through experimentation and
          continuous learning, and comes to life through thoughtful design,
          clean code, and meaningful user experiences.
        </p>
      </div>
    </div>
  );
};

export default Heading;
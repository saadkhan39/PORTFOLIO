import React from "react";
import Header from "./Header";
import bgImg from "../../../assets/bg-img.png";
import Para from "./Para";
import Skills from "./Skills";

const About = () => {
  return (
    <main
      className="
        min-h-screen
        w-full
        bg-cover
        bg-center

        px-5
        py-10

        sm:px-8
        md:px-10
        lg:px-[4vw]
        lg:py-[4vh]
      "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div
        className="
          w-full
          max-w-[1600px]
          mx-auto

          flex
          flex-col
          gap-1
        "
      >
        <div className="w-full">
          <Header />
          <Para />
        </div>

        <div className="w-full">
          <Skills />
        </div>
      </div>
    </main>
  );
};

export default About;
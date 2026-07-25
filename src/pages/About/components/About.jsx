import React from "react";
import Header from "./Header";
import bgImg from "../../../assets/bg-img.png";
import Para from "./Para";

const About = () => {
  return (
    <main
      className="
        min-h-screen w-full bg-neutral-950 bg-cover bg-center bg-no-repeat
        px-5 py-10 sm:px-8 md:px-10 lg:px-[4vw] lg:py-[6vh]
        flex flex-col justify-center
      "
      style={{
        backgroundImage: ` url(${bgImg})`,
      }}
    >
      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-6">
        <Header />
        <Para />
      </div>
    </main>
  );
};

export default About;
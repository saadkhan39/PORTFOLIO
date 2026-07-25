import React from "react";
import Navbar from "./Navbar";
import myImg from "../../../assets/my-img.png";
import Title from "./Title";
import Intro from "./Intro";
import Resume from "./Resume";
import Name from "./Name";

const Home = () => {
  return (
    <main
      className="
        relative min-h-screen w-full 
        bg-neutral-950 bg-cover bg-center bg-no-repeat 
        flex flex-col justify-between 
        overflow-x-hidden
      "
      style={{
        backgroundImage: ` url(${myImg})`,
      }}
    >
      {/* Top Header Row */}
      <header className="relative z-10 flex items-center justify-between px-[2vw] lg:px-[3vw] pt-[2vh] w-full">
        <Name />
        <Navbar />
        <Resume />
      </header>

      {/* Hero Content Area */}
      <section className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-end px-[2vw] lg:px-[3vw] pb-[4vh] w-full gap-8 lg:gap-0 mt-auto">
        {/* Left Side: Main Title */}
        <div className="w-full lg:w-auto">
          <Title />
        </div>

        {/* Right Side: Intro & Action Buttons */}
        <div className="w-full lg:w-auto flex justify-start lg:justify-end">
          <Intro />
        </div>
      </section>
    </main>
  );
};

export default Home;
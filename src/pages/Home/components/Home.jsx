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
      className="min-h-screen w-full bg-cover bg-center overflow-hidden flex flex-col justify-between"
      style={{ backgroundImage: `url(${myImg})` }}
    >
      {/* Top */}
      <div className="flex items-center justify-between px-[2vw] lg:px-[3vw] pt-[2vh]">
        <Name />
        <Navbar />
        <Resume />
      </div>

      {/* Bottom */}
      <div className="flex flex-col lg:flex-row justify-between px-[2vw] lg:px-[3vw] pb-[4vh]">
        <div className="flex flex-1 items-start">
          <Title />
        </div>

        <div className="flex justify-end">
          <Intro />
        </div>
      </div>
    </main>
  );
};

export default Home;
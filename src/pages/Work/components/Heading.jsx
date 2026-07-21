import React from "react";

const Heading = () => {
  return (
    <div >
      <div className="flex flex-col gap-8 ">
        
        <h1 className="text-7xl font-[font1] text-white">SELECTED <span className=" font-[font2]" >PROJECTS</span></h1>
         <p className="font-[satoshi-regular] leading-[1.2] w-[400px]  text-[#e2e0e0]">This collection is a reflection of my journey as a developer where every project starts with an idea, grows through experimentation and continuous learning, and comes to life through thoughtful design, clean code, and meaningful user experiences.</p>
      </div>
    </div>
  );
};

export default Heading;
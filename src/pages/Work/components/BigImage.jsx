import React from "react";
import { useNavigate } from "react-router-dom";

const BigImage = ({ activeProject }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/work/${activeProject.slug}`)}
      className="
  
        w-full
        max-w-[38rem]
        h-[40vh]
        sm:h-[45vh]
        lg:w-[38rem]
        lg:h-[18.75rem]
        overflow-hidden
        cursor-pointer
       
      
      "
    >
      <img
        src={activeProject.image}
        alt={activeProject.title}
        className="
          w-full
          h-full
          object-contain
          transition-all
          duration-500
          hover:scale-105
          
        "
      />
    </div>
  );
};

export default BigImage;
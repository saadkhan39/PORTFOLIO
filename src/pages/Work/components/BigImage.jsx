import React from "react";
import { useNavigate } from "react-router-dom";

const BigImage = ({ activeProject }) => {
  const navigate = useNavigate(); // ✅ Correct spelling

  return (
    <div
      onClick={() => navigate(`/work/${activeProject.slug}`)}
      className="h-[300px] w-[620px] overflow-hidden rounded-xl cursor-pointer ml-40"
    >
      <img
        src={activeProject.image}
        alt={activeProject.title}
        className="w-full h-full object-contain rounded-xl transition-all duration-500"
      />
    </div>
  );
};

export default BigImage;
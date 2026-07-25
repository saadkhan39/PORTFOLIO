import React from "react";

const HoverButton = ({ children, className = "" }) => {
  return (
    <div
      className={`
        group relative inline-flex items-center justify-center 
        overflow-hidden border border-white px-6 py-2 
        font-[font2] text-lg text-white cursor-pointer transition-all duration-300
        ${className}
      `}
    >
      {/* Sliding White Background */}
      <span
        className="
          absolute inset-0 bg-white translate-y-full 
          transition-transform duration-300 ease-out 
          group-hover:translate-y-0
        "
      />
      {/* Label Text */}
      <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
        {children}
      </span>
    </div>
  );
};

export default HoverButton;
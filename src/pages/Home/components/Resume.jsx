import React from "react";
import myResume from "../../../assets/my-resume.pdf"

const Resume = () => {
  return (
    <div className="px-3 py-4 sm:px-4 sm:py-5 lg:px-5 lg:py-6">
      <a
        href={myResume}
        download
        className="
          group
          relative
          inline-flex
          items-center
          justify-center
          overflow-hidden

          px-6
          py-1.5

        
          border
          border-white

          text-white
          font-[font2]
          text-lg
          leading-0.9

          transition-all
          duration-500
        "
      >
        {/* Hover Background */}
        <span
          className="
            absolute
            inset-0

            translate-y-full
            
            bg-white

            transition-all
            duration-500

            group-hover:translate-y-0
            group-hover:rounded-none
          "
        />

        {/* Text */}
        <span
          className="
            relative
            z-10
            transition-colors
            duration-500
            group-hover:text-black
          "
        >
          RESUME
        </span>
      </a>
    </div>
  );
};

export default Resume;
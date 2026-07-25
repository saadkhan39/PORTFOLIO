import React, { useState } from "react";
import bgImg from "../../../assets/bg-img.png";
import SundownStudioImg from "../../../assets/sundown-img.png";
import K72Img from "../../../assets/K72-img.png";
import LazarevImg from "../../../assets/Lazarev-img.png";
import PerplexityImg from "../../../assets/Perplexity-img.png";

import Heading from "./Heading";
import Project from "./Project";
import BigImage from "./BigImage";

export const projects = [
  {
    title: "Perplexity AI",
    image: PerplexityImg,
    slug: "perplexity-ai",
    tagline: "Search smarter with AI.",
    live: "https://perplexity-qfgq.onrender.com/",
    description:
      "An AI-powered search assistant built with the MERN stack that delivers intelligent, real-time responses through a conversational interface. It integrates Gemini AI and LangChain to understand user queries, supports image and text-based searches, and streams AI-generated responses. The application focuses on speed, accuracy, and a seamless user experience while demonstrating full-stack architecture and modern AI integration.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Gemini AI",
      "LangChain",
    ],
    highlight: [
      "AI-powered conversational search",
      "Image and text query support",
      "Real-time response streaming",
      "Secure JWT authentication",
      "Responsive and modern UI",
    ],
  },
  {
    title: "Sundown Studio",
    image: SundownStudioImg,
    slug: "sundown-studio",
    tagline: "Award-winning design, recreated with precision.",
    live: "https://sundown-studio-clone-seven-topaz.vercel.app/",
    description:
      "A pixel-perfect recreation of the award-winning Sundown Studio website, built to showcase advanced frontend development skills. The project features smooth GSAP animations, interactive scrolling effects, responsive layouts, and carefully crafted transitions.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "GSAP",
      "Locomotive Scroll",
    ],
    highlight: [
      "Pixel-perfect UI recreation",
      "Smooth GSAP animations",
      "Custom cursor interactions",
      "Fully responsive layout",
      "Interactive scrolling effects",
    ],
  },
  {
    title: "Lazarev",
    image: LazarevImg,
    slug: "lazarev",
    tagline: "A seamless creative experience.",
    live: "https://lazarev-website-clone-s4ti.vercel.app/",
    description:
      "A modern clone of the Lazarev digital agency website focused on premium UI, smooth scrolling, interactive animations, and responsive layouts.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "GSAP",
      "Lenis",
    ],
    highlight: [
      "Smooth Lenis scrolling",
      "Premium landing page",
      "Creative animations",
      "Interactive experience",
      "Responsive design",
    ],
  },
  {
    title: "K72",
    image: K72Img,
    slug: "k72",
    tagline: "Crafted with React and motion.",
    live: "https://k72-website-5sr1.onrender.com",
    description:
      "A React.js recreation of the K72 website featuring responsive layouts, smooth page transitions, and modern animations powered by Framer Motion.",
    techStack: ["React.js", "Framer Motion"],
    highlight: [
      "Component-based architecture",
      "Framer Motion animations",
      "Responsive layout",
      "Reusable components",
      "Modern UI",
    ],
  },
];

const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <main
      className="min-h-screen w-full bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div
        className="
          w-full
          flex
          flex-col
          gap-[3rem]
          px-[5vw]
          py-[4vh]
        "
      >
        {/* Hero Image */}
        <div
          className="
            flex
            justify-center
            lg:justify-end
            w-full
            pt-[2rem]
            lg:pt-[4rem]
          "
        >
          <BigImage activeProject={activeProject} />
        </div>

        {/* Bottom Section */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            justify-between
            items-start
            lg:items-end
            gap-[3rem]
            min-h-[25vh]
          "
        >
          <Heading />

          <Project
            projects={projects}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />
        </div>
      </div>
    </main>
  );
};

export default Work;
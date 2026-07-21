import React, { useState } from 'react'
import bgImg from "../../../assets/bg-img.png";
import  SundownStudioImg from  "../../../assets/sundown-img.png"
import K72Img from "../../../assets/K72-img.png"
import  WorkStudioImg from  "../../../assets/Work-studio-img.png"
import  LazarevImg from  "../../../assets/Lazarev-img.png"
import MirandaImg from "../../../assets/miranda-img.png"
import PerplexityImg from "../../../assets/Perplexity-img.png"
import Heading from './Heading';
import Project from './Project';
import BigImage from './BigImage';



export const projects = [
  {
    title: "Perplexity AI",
    image: PerplexityImg,
      slug: "perplexity-ai",
      tagline:"Search smarter with AI.",
      live:"https://perplexity-qfgq.onrender.com/",
description:
  "An AI-powered search assistant built with the MERN stack that delivers intelligent, real-time responses through a conversational interface. It integrates Gemini AI and LangChain to understand user queries, supports image and text-based searches, and streams AI-generated responses. The application focuses on speed, accuracy, and a seamless user experience while demonstrating full-stack architecture and modern AI integration.",      techStack:[ "React.js",
  "Tailwind CSS",
  "Redux Toolkit",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Socket.IO",
  "JWT",
  "Gemini AI",
  "LangChain",],
      highlight:[ "AI-powered conversational search",
  "Image and text query support",
  "Real-time response streaming",
  "Secure JWT authentication",
  "Responsive and modern UI",]
  },
  {
    title: "Sundown Studio",
    image: SundownStudioImg,
      slug: "sundown-studio",
    tagline:
    "Award-winning design, recreated with precision.",
  live: "https://sundown-studio-clone-seven-topaz.vercel.app/",
description:
  "A pixel-perfect recreation of the award-winning Sundown Studio website, built to showcase advanced frontend development skills. The project features smooth GSAP animations, interactive scrolling effects, responsive layouts, and carefully crafted transitions. Every section is designed to replicate the premium feel and immersive storytelling of the original website.",
    techStack:[  "HTML5",
  "CSS3",
  "JavaScript",
  "GSAP",
  "Locomotive Scroll",],
  highlight:[ "Pixel-perfect UI recreation",
  "Smooth GSAP animations",
  "Custom cursor interactions",
  "Fully responsive layout",
  "Interactive scrolling effects",]    
  },
  {
    title: "Lazarev",
    image: LazarevImg,
      slug: "lazarev",
      tagline:"A seamless creative experience.",
    live: "https://lazarev-website-clone-s4ti.vercel.app/",
    description:"A modern clone of the Lazarev digital agency website, focused on creating an engaging and visually rich user experience. Built with HTML, CSS, JavaScript, and Lenis smooth scrolling, it includes fluid animations, interactive hover effects, and responsive layouts. The project demonstrates attention to detail and advanced UI implementation.",
    techStack:[  "HTML5",
  "CSS3",
  "JavaScript",
  "GSAP",
  "Lenis",],
  highlight:[  "Smooth Lenis scrolling",
  "Premium landing page design",
  "Creative hover animations",
  "Interactive user experience",
  "Responsive across devices",]
    },
  {
    title: "K72",
    image: K72Img,
    tagline:"Crafted with React and motion.",
      slug:"k72",
      highlight: [
  "Component-based architecture",
  "Smooth Framer Motion animations",
  "Responsive user interface",
  "Modern landing page design",
  "Clean and reusable code",
],
    live: "https://k72-website-5sr1.onrender.com",
    description:"A responsive React.js clone of the K72 website that emphasizes clean layouts, smooth navigation, and interactive animations. Framer Motion is used to create elegant page transitions and engaging micro-interactions. The project highlights component-based architecture, responsive design principles, and a polished user interface.",
    techStack:[ "React.js",
  "Framer Motion"]
  },
];

const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
   <main className="h-screen w-full bg-cover bg-center  "
        style={{ backgroundImage: `url(${bgImg})` }}>

    <div>
      <div className='w-full flex flex-col pl-10 pr-10  gap-10  '>
        <div className='h-92  pl-132 pt-15' >
          <BigImage activeProject={activeProject} />
        </div>
        <div className=' h-54 flex justify-between  ' >
          <Heading/>
         <Project
    projects={projects}
    activeProject={activeProject}
    setActiveProject={setActiveProject}
/>
        </div>
      </div>
    </div>
   </main>
  )
}

export default Work
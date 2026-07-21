import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../components/Work";
import bgImg from "../../../assets/bg-img.png";
import ProjectDescription from "./ProjectDescription";



const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full bg-cover bg-center px-10 py-6 flex  gap-15 "
            style={{ backgroundImage: `url(${bgImg})` }}>
   <div>
      <div className="w-[450px] flex flex-col gap-5 ">
      <button onClick={() => navigate(-1)} className="border border-white bg-transparent w-36  px-5 py-2 text-xl hover:bg-white hover:text-black transition-colors text-white font-[font2]">RETURN TO HOME</button>
       <h1 className="text-7xl text-white font-[font1]  ">{project.title}</h1>
      <p className="font-[satoshi-regular] text-[#e2e0e0] leading-0.9 ">{project.tagline}</p>
<a
  href={project.live}
  target="_blank"
  rel="noopener noreferrer"
  className="border border-white bg-transparent w-30 px-4 py-2 text-xl hover:bg-white hover:text-black transition-colors text-white font-[font2] text-center"
>
  LIVE LINK
</a>     </div>
      <img
        src={project.image}
        className="w-[520px]  mt-10"
      />
   </div>

   <div className="mt-auto">
    <ProjectDescription project={project} />
   </div>
    </div>
  );
};

export default ProjectDetails;
import React from 'react'
import Header from './Header'
import bgImg from "../../../assets/bg-img.png";
import Para from './Para';
import Skills from './Skills';


const About = () => {
  return (
    <main className="h-screen w-full bg-cover bg-center px-25 py-18  flex gap-20 "
      style={{ backgroundImage: `url(${bgImg})` }}>

        <div>
            <Header/>
        <Para/>
        </div>
        <div>
            <Skills/>
        </div>
    </main>
  )
}

export default About
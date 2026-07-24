import React from 'react'
import ContactContent from "../components/ContactContent"
import bgImg from "../../../assets/bg-img.png";


const Contact = () => {
  return (
   <main
        className="min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
       <ContactContent/>
   </main>
  )
}

export default Contact
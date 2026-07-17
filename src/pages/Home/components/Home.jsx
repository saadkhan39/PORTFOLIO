import React from 'react'
import Navbar from './Navbar'
import myImg from "../../../assets/my-img.png";
import Title from './Title';
import Intro from './Intro';
import Resume from './Resume';
import Name from "./Name"

const Home = () => {
  return (
   <main
  className="h-screen w-full bg-cover bg-center"
  style={{ backgroundImage: `url(${myImg})` }}
>
        
        <div className='flex '> 
          <Name/>
          <Navbar/>
         <Resume/>
         </div>
        <div className='flex  justify-between'>
           <Title/>
         <Intro/>
        </div>
    </main>
  )
}

export default Home
"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Project from './Projects/Project'
import Contact from './Contact/Contact'
import 'aos/dist/aos.css'; 
import AOS from 'aos';

// You can also use <link> for styles
const HomePage = () => {
  useEffect( ()=>{
const initAos= async () =>{await import("aos");
AOS.init ({
  duration:1000,
  easing:'ease',
  once:true,
  anchorPlacement:'top-bottom'
})} ;
initAos()
  } 
 ,[] )
  return (
    <div className="overflow-hidden">

      <Hero />
      <About />
      <Services />
      <Project />
        <Contact/>
    </div>
  )
}

export default HomePage

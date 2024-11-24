import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Slider from './Slider'

const Project = () => {
  return (
    <div id="project"   className='pt-16 pb-16 bg-[#0f0715]'>
        <SectionHeading>My Projects</SectionHeading>
        <div  data-aos="fade-up" data-aos-delay="100" className='w-[93] sm:w-[83%] mx-auto mt-20 '>
           <Slider/>
        </div>

    </div>
  )
}

export default Project
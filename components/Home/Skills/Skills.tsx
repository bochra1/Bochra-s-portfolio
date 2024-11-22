import SectionHeading from '@/components/Helper/SectionHeading'
import { skillsData } from '@/data/data'
import React from 'react'
import SkillCard from './SkillCard'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id="skills"  className='pt-16 pb-16 bg-[#0f0715]'>
       <SectionHeading>My Skills</SectionHeading>
        <div data-aos="fade-up" data-aos-delay="100" className='mt-20 w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 items-center'>
{skillsData.map((skill,i)=>{
    return ( <div 
      data-aos="flip-left"
      data-aos-anchor-placement="top-center" 
      data-aos-delay={`${i*5}`}
    key={skill.id}>
        <SkillCard skill={skill}/>
    </div>)
})}

        </div>
    </div>
  )
}

export default Skills
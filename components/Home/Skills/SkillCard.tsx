import Image from 'next/image';
import React from 'react'
type Props ={
    skill: {
        id: number;
        title: string;
        image: string;
    }
}
const SkillCard = ({skill}:Props) => {
    const {image,title}= skill
  return (
    <div className='pb-6'>
        
        <Image
        src={image} alt={title}
        width={50} height={50}
        className='object-cover mx-auto'
        />      
        <h1 className='text-[12px] mt-4 text-white font-[600]'>{title}</h1>
         </div>
  )
}

export default SkillCard
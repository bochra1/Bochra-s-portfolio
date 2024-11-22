'use client'
import { navLinks } from '@/constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
type Props={
    openNav:()=> void
}
const Nav = ({openNav}:Props) => {
const[navBg,setNavBg] = useState(false)
useEffect(()=>{
const Handler= () =>{
    if(window.scrollY>= 90){
        setNavBg(true)
    }else if (window.scrollY<90) setNavBg(false)
    } 
    window.addEventListener("scroll",Handler)
    return()=>{
        window.removeEventListener("scroll",Handler)
    }
},[])
  return (
    <div className={`{ fixed
         ${navBg?'bg-[#240b39]' : 'fixed'}
     h-[12vh] w-full z-[10] transition-all duration-200}`}>
        <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%]
         xl:w-[80%] mx-auto'>
        <p className='relative text-base font-medium w-fit block :block text-white :w-full'>Welcome</p>

<div className='flex items-center space-x-10'>
    <div className='hidden lg:flex items-center space-x-8'>
 {navLinks.map((navlink)=>{
    return <Link key={navlink.id} href={navlink.url} >
        <p className='nav_link'>{navlink.label}</p>
    </Link>
 })}
 </div>
 <div className='flex items-center space-x-4'>
 <Link key="#contact" href="#contact" >
    <button className='md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>
        Hire me
    </button></Link>
    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'>

    </HiBars3BottomRight>
</div>
        </div>
        
        </div>
        </div>
  )
}

export default Nav
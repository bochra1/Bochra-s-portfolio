import { contactData } from '@/data/data'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <div>
        <div className='flex items-center space-x-8'>
            <div className='w-8 h-10 p-3 md:w-16 rounded-full bg-gradient-to-r  from-teal-300 to-teal-900 flex items-center justify-center flex-col'>
                <FaPhone className='w-4 h-4 md:w-7 md:h-7 text-white'/>
           </div>
           <div>
            <h1 className='text-large sm:text-xl text-white font-bold'>Phone</h1>
            <h1 className='text-base sm:text-lg text-white opacity-70'>{contactData.phone}</h1>
           </div>
        </div>
        <div className='flex items-center space-x-8 mt-8'>
            <div className='w-10 h-10 p-3 md:w-16 rounded-full bg-gradient-to-r  from-teal-300 to-teal-900 flex items-center justify-center flex-col'>
                <FaEnvelope className='w-4 h-4 md:w-7 md:h-7 text-white'/>
           </div>
           <div>
            <h1 className='text-large sm:text-xl text-white font-bold'>Email</h1>
            <h1 className='text-base sm:text-lg text-white opacity-70'>{contactData.email}</h1>
           </div>
        </div>
        <div className='flex items-center space-x-8 mt-8'>
            <div className='w-10 h-10 p-3  md:w-16 rounded-full bg-gradient-to-r from-teal-300 to-teal-900 flex items-center justify-center flex-col'>
                <FaLinkedin className='w-4 h-4 md:w-7 md:h-7 text-white'/>
           </div>
           <div>
            <h1 className='text-large sm:text-xl text-white font-bold'>Linkedin</h1>
            <Link key="" href={contactData.linkedin} >

            <h1 className='text-base sm:text-lg text-white opacity-70'>{contactData.linkedin}</h1></Link>
           </div>
        </div>
    </div>
  )
}

export default ContactInfo
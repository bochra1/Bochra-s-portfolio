import React from 'react';

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <div className='flex items-center justify-center flex-wrap gap-7 text-white font-bold'>
        {/* Use consistent styling for all items */}
        <div className='text-center'>Home</div>
        <div className='text-center'>Services</div>
        <div className='text-center'>Projects</div>
        <div className='text-center'>Contact</div>
      </div>
      <p className='text-white text-opacity-60 mt-6 text-center'>© 2024 All Rights Reserved</p>
    </div>
  );
};

export default Footer;

'use client'
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

export const ResponsiveNavbar = () => {
    const [showNav, setShowNav]= useState(false);
    const showNavHandler = () =>setShowNav(true)
    const closeavHandler = () =>setShowNav(false)

  return (
    <div>
        <Nav openNav={showNavHandler}/>
        <MobileNav showNav={showNav} closeNav={closeavHandler} />
    </div>
  )
}

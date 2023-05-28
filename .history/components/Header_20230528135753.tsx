import Image from 'next/image'
import React from 'react'



function Header() {
  return (
    <header>
        <Image 
        src="./"
        alt="MindFlow Logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        priority={true}
        />
    </header>
  )
}

export default Header
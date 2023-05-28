import Image from 'next/image'
import React from 'react'

const imageUrl = 'https://imgur.com/zrSztsp'

function Header() {
  return (
    <header>
        <Image 
        src="https://imgur.com/zrSztsp"
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
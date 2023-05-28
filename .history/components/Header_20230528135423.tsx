import Image from 'next/image'
import React from 'react'



function Header() {
  return (
    <header>
        <Image 
        src="https://imgur.com/edit/process?imageid=4980b8d82302fccb0d60479412c84de2&5491233489927732&random=1711335713526732"
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
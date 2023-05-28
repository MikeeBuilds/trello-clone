import Image from 'next/image'
import React from 'react'

const imageUrl = 'https://drive.google.com/file/d/1ao3h9BaayP9uMR-sO00wT6g7I5ZMaC7j/view?usp=drive_link'

function Header() {
  return (
    <header>
        <Image 
        src="https://drive.google.com/file/d/1ao3h9BaayP9uMR-sO00wT6g7I5ZMaC7j/view?usp=drive_link"
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
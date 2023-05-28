import Image from 'next/image'
import React from 'react'



function Header() {
  return (
    <header>
        <Image 
        src="/images/logo1.png"
        alt="MindFlow Logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        priority={true}
        />

        <div>
            {/* Search Box */}

            <form action="">
                <input type="text" placeholder="Search"  />
                <button hidden> Search </button>
            </form>

            {/* User Avatar */}
        </div>
    </header>
  )
}

export default Header
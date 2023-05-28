import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import Avatar from 'react-avatar'



function Header() {
  return (
    <header>
        <div className='flex flex-col md:flex-row items-center p-5 bg-blue-500/10 rounded-b-2xl'>
        <Image 
        src="/images/logo1.png"
        alt="MindFlow Logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        priority={true}
        />

        <div className=''>
            {/* Search Box */}

            <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1
            md:flex-initial'>
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                <input type="text" placeholder='Search' className='flex-1 outline-none p-2'/>
                <button type='submit' hidden>Search</button>
            </form>

            {/* User Avatar */}
            <Avatar  />
        </div>
        </div>
    </header>
  )
}

export default Header
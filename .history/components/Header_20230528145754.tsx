'use client'

import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import Avatar from 'react-avatar'



function Header() {
  return (
    <header>
        <div className='flex flex-col md:flex-row items-center p-5 bg-blue-500/10 rounded-b-2xl'>


        <div 
            className='
                absolute
                top-0
                left-0
                w-full
                h-96
                bg-gradient-to-b
                from-[#0096FF]
                to-[#BF]'
        />

        <Image 
        src="/images/mindflow.png"
        alt="logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        priority={true}
        />

        <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
            {/* Search Box */}

            <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1
            md:flex-initial'>
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                <input type="text" placeholder='Search' className='flex-1 outline-none p-2'/>
                <button type='submit' hidden>Search</button>
            </form>

            {/* User Avatar */}
            <Avatar name='Mike Woods' round size='50' color='#0096FF' />
        </div>
        </div>

        <div className='flex items-center justify-center px-5 py-2 md:py-5'>
            <p className=' p-5 flex items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white
            italic max-w-3xl text-[#0096FF]'>
                <UserCircleIcon className='inline-block h-10 w-10 text-[#0096FF] mr-1'/>
                GPT is summarizing your tasks for your day....
            </p>
        </div>
    </header>
  )
}

export default Header
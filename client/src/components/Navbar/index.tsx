import React from 'react'
import { Search, Settings } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 py-3 bg-white dark:bg-black
    '>
      {/* SEARCH BAR */}
      <div className='flex items-center gap-8'>
        <div className='relative w-[200px] h-min'>
          <Search className='absolute top-1/2 left-[4px] mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white'/>
          <input type="search" className='w-full rounded border-none placeholder-gray-500 bg-gray-100 p-2 pl-6 focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white focus:border-transparent' placeholder='search...' />
        </div>
      </div>

      {/* ICONS */}
      <div className='flex items-center'>
        <Link
          href={'/settings'}
          className='w-min h-min p-2 rounded hover:bg-gray-100'
        >
          <Settings className='w-6 h-6 cursor-pointer dark:text-white'/>
        </Link>
        <div className='mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-300 md:inline-block'/>        
      </div>
    </div>
  )
}

export default Navbar

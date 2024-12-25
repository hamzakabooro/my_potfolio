import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='contenier pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium pl-5'>Hamza</div>
        <div className='gap-10 lg:gap-16 hidden md:flex px-5'>
          <Link href="/" >Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/skills">Skills</Link>
         
        </div>

      </div>

    </div>
  )
}

export default Navbar

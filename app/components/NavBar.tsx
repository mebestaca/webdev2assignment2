import React from 'react';
import Link from "next/link";

const NavBar = () => {
  return (
<<<<<<< HEAD
    <nav>
      <header className='bg-white border-b border-gray-200 px-6 py-4'>
        <div className='max-w-5xl mx-auto flex items-center justify-between'>
          <div className='text-lg font-bold text-gray-900'>
              <h1 className='text-lg font-bold text-gray-900'>List of Students</h1>
              <p className='text-xs text-gray-400'>CPRG 306 Web Development 2</p>
          </div>
=======
    <header className='flex items-center bg-white px-6 py-4'>
      <div className='max-w-5xl mx-auto flex items-center justify-between'>
        <div className='text-lg font-bold text-gray-800'>
            <h1 className='text-4xl font-bold text-gray-800'>List of Students</h1>
            <p className='text-xs text-gray-400'>CPRG 306 Web Development 2</p>
>>>>>>> e7e0a45eeb0477b80018efc409d4a0f83bb5b919
        </div>
      </header>
      <div>
        <Link href="/">
          Students List
        </Link>
        <Link href="/register">
          Add a Student
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
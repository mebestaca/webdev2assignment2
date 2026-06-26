import React from 'react'

const NavBar = () => {
  return (
    <header className='flex items-center bg-white px-6 py-4'>
      <div className='max-w-5xl mx-auto flex items-center justify-between'>
        <div className='text-lg font-bold text-gray-800'>
            <h1 className='text-4xl font-bold text-gray-800'>List of Students</h1>
            <p className='text-xs text-gray-400'>CPRG 306 Web Development 2</p>
        </div>
      </div>
    </header>
  )
}

export default NavBar
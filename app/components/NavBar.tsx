import React from 'react'

const NavBar = () => {
  return (
    <header className='bg-white border-b border-gray-200 px-6 py-4'>
      <div className='max-w-5xl mx-auto flex items-center justify-between'>
        <div className='text-lg font-bold text-gray-900'>
            <h1 className='text-lg font-bold text-gray-900'>List of Students</h1>
            <p className='text-xs text-gray-400'>CPRG 306 Web Development 2</p>
        </div>
      </div>
    </header>
  )
}

export default NavBar

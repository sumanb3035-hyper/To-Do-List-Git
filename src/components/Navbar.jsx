import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-purple-400 text-white py-4">
        <div className="logo">
            <span className='font-bold text-xl mx-8 my-2 flex justify-center'>Todo List</span>
        </div>
        <ul className="flex gap-4 mx-8 my-2">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>About</li>
        </ul>
    </nav>
  )
}

export default Navbar
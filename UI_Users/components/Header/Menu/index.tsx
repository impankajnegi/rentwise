'use client';

import React, { useState } from 'react';

const Menu = () => { 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-transparent">
      <div className="container mx-auto flex justify-between">
        {/* Menu (Desktop) */}
        <div className="hidden md:flex space-x-4 pr-4">
          <a href="#" className="text-black-300 hover:text-red-950">Pant</a>
          <a href="#" className="text-black-300 hover:text-red-950">Jacket</a>
          <a href="#" className="text-black-300 hover:text-red-950">Shoes</a>
          <a href="#" className="text-black-300 hover:text-red-950">Mounts</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black-300 hover:text-red-950 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible when 'isOpen' is true) */}
      <div className={`${isOpen ? 'fixed' : 'hidden'} md:hidden top-0 left-0 bg-yellow-300 w-full h-full p-10  text-center `}>
<div className="flex flex-col justify-between h-full  items-center">
<div className="flex  flex-col w-full h-full space-y-3">
        <a href="#" className="text-black-300 hover:text-white block">Pant</a>
        <a href="#" className="text-black-300 hover:text-white block">Jacket</a>
        <a href="#" className="text-black-300 hover:text-white block">Shoes</a>
        <a href="#" className="text-black-300 hover:text-white block">Mounts</a>
        </div>

        <div className="flex flex-row-reverse justify-center">
 <button onClick={toggleMenu} className="text-black hover:text-grey focus:outline-none">
          Close 
        </button>  
 </div>
</div>
     

      </div>
    </nav>
  );
}

export default Menu;
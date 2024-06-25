import React from 'react'
import  { useState } from 'react';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <div className="relative ">
        <div className="flex items-center justify-center w-12 h-12 cursor-pointer" onClick={toggleMenu}>
          <div className="grid grid-cols-2 gap-1">
            <div className="w-4 h-4 bg-violet-900 rounded-full"></div>
            <div className="w-4 h-4 bg-violet-900 rounded-full"></div>
            <div className="w-4 h-4 bg-violet-900 rounded-full"></div>
            <div className="w-4 h-4 bg-violet-900 rounded-full"></div>
          </div>
        </div>
        {menuOpen && (
          <div className="absolute top-0 right-14 bg-violet-900 shadow-md rounded-md p-4 w-48">
            <nav className="flex flex-col space-y-2 bg-violet-900">
              <Link to="/plans" className="bg-violet-900">Plans</Link>
              <Link to="/blogs" className="bg-violet-900">Blogs</Link>
              <Link to="/" className="bg-violet-900">Challenges</Link>
              <Link to="/" className="bg-violet-900">Login</Link>
              
              
            </nav>
          </div>
        )}
      </div>
    );
  };
  
  export default BurgerMenu;
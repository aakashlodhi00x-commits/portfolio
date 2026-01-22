"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Resume', link: '#resume' },
    { name: 'Contact', link: '#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#home" className="text-cyan-400 font-bold text-xl uppercase tracking-tighter">AK.</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          {navItems.map((item) => (
            <a key={item.name} href={item.link} className="hover:text-cyan-400 transition-colors uppercase tracking-widest text-[11px]">
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-gray-800 px-6 py-8 flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <a key={item.name} href={item.link} onClick={() => setIsOpen(false)} className="text-gray-400 text-sm uppercase tracking-widest hover:text-cyan-400">
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
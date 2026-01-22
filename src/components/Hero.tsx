"use client"
import React from 'react';

const Hero = () => {
  return (
    <section id='home' className="min-h-screen flex flex-col items-center justify-center px-4 md:px-10 text-center text-white bg-[#0a0a0a] pt-20">
      
      {/* Circle Container: Mobile/Tablet par w-32 (128px) aur Laptop par w-48 (192px) */}
      <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8">
        <div className="absolute inset-0 bg-cyan-500 blur-[60px] md:blur-[80px] opacity-20 rounded-full"></div>
       
<div className="w-full h-full rounded-full border-2 border-gray-800 overflow-hidden relative z-10 bg-[#111] flex items-center justify-center">
    <img 
      src="/aakash-photo.jpg" 
      alt="Aakash Kumar" 
      className="w-full h-full object-cover object-top"
      style={{ objectPosition: 'center 20%' }} 
    />
</div>

      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center uppercase tracking-tighter">
        Hi, I'm <span className="text-cyan-400">Aakash Kumar</span> 
      </h1>
      
      <p className="text-gray-400 text-sm md:text-lg max-w-2xl leading-relaxed px-2">
        Passionate developer skilled in building modern web technologies. 
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-12 mt-6">
        {['React Developer', 'Frontend Expert', 'UI/UX Enthusiast'].map((tag) => (
          <span key={tag} className="px-4 py-1 bg-[#161616] border border-gray-800 rounded-full text-xs md:text-sm text-gray-300">
            {tag}
          </span>
        ))}
      </div>

      {/* Info Grid - Responsive behavior maintained */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl text-center">
        <div className="bg-[#111] p-4 rounded-xl border border-gray-800">
          <p className="text-[10px] text-gray-500 uppercase mb-1">Location</p>
          <p className="text-sm">Greater Noida, UP </p>
        </div>
        <div className="bg-[#111] p-4 rounded-xl border border-gray-800">
          <p className="text-[10px] text-gray-500 uppercase mb-1">Education</p>
          <p className="text-sm">B.Sc Computer Science </p>
        </div>
        <div className="bg-[#111] p-4 rounded-xl border border-gray-800">
          <p className="text-[10px] text-gray-500 uppercase mb-1">Contact</p>
          <p className="text-sm truncate px-2">aakashlodhiilnabsr1438@gmail.com </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
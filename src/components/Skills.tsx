"use client"
import React from 'react';

const Skills = () => {
  const skills = ["React", "Node.js", "MongoDB", "JavaScript", "HTML", "CSS", "Next.js", "Tailwind"];

  return (
    // 'overflow-hidden' lagana sabse zaroori hai horizontal scroll rokne ke liye
    <section id="skills" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Background Floating Text - Optimized for Mobile */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] md:opacity-[0.05] select-none">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="absolute text-white font-black uppercase tracking-tighter"
            style={{
              // Mobile par text thoda andar rakha hai (10% and 70%)
              top: `${(index * 12) + 5}%`,
              left: index % 2 === 0 ? '10%' : 'auto',
              right: index % 2 !== 0 ? '10%' : 'auto',
              // Clamp use kiya hai taaki mobile par font chota ho jaye
              fontSize: 'clamp(3rem, 15vw, 10rem)', 
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Heading with Padding to avoid screen touch */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center uppercase tracking-[0.2em] px-4">
          Technical Skills
        </h2>

        {/* Visible Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {skills.map((skill) => (
            <div key={skill} className="group bg-[#111] p-6 rounded-2xl border border-gray-800 text-center hover:border-cyan-500/50 transition-all duration-300">
              <p className="text-gray-400 group-hover:text-cyan-400 font-medium transition-colors">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
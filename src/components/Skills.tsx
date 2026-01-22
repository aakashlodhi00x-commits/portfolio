"use client"
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', x: -80, y: -150, color: 'text-orange-500' },
  { name: 'CSS3', x: 80, y: -120, color: 'text-blue-500' },
  { name: 'JavaScript', x: -90, y: 100, color: 'text-yellow-400' },
  { name: 'React.js', x: 100, y: 140, color: 'text-cyan-400' },
  { name: 'Node.js', x: 0, y: -40, color: 'text-green-500' },
  { name: 'MongoDB', x: -110, y: -10, color: 'text-green-600' },
  { name: 'Git', x: 110, y: 20, color: 'text-red-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative min-h-[750px] flex flex-col items-center justify-start overflow-hidden">
      
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-28 z-20 uppercase tracking-[0.3em] text-center px-4">
        Technical Skills
      </h2>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg md:max-w-4xl flex items-center justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            animate={{ 
              y: [0, -25, 0], 
              x: [0, 10, 0] 
            }}
            transition={{ 
              duration: 4 + (index % 3), 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: index * 0.2 
            }}
            className="absolute px-6 py-4 md:px-10 md:py-6 bg-[#111] border border-gray-800 rounded-2xl shadow-2xl z-10 flex items-center justify-center"
            style={{ 
              // Laptop aur Mobile ke liye scaling
              left: `calc(50% + (var(--scale) * ${skill.x}px))`, 
              top: `calc(50% + (var(--scale) * ${skill.y}px))`, 
              transform: 'translate(-50%, -50%)' 
            }}
          >
            <span className={`text-sm md:text-xl font-black tracking-widest ${skill.color} whitespace-nowrap`}>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        div {
          --scale: 0.9; /* Mobile par spread thoda kam */
        }
        @media (min-width: 768px) {
          div {
            --scale: 2.2; /* Laptop par door-door faili rahengi */
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
"use client"
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', x: -70, y: -100, color: 'text-orange-500' },
  { name: 'CSS3', x: 70, y: -80, color: 'text-blue-500' },
  { name: 'JavaScript', x: -80, y: 120, color: 'text-yellow-400' },
  { name: 'React.js', x: 80, y: 150, color: 'text-cyan-400' },
  { name: 'Node.js', x: 0, y: 20, color: 'text-green-500' },
  { name: 'MongoDB', x: -100, y: 50, color: 'text-green-600' },
  { name: 'Git', x: 100, y: 70, color: 'text-red-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative min-h-[750px] flex flex-col items-center justify-start overflow-hidden max-w-full">
      
      {/* Heading - Increased Margin Bottom to avoid overlap */}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-32 z-20 uppercase tracking-[0.3em] text-center px-4">
        Technical Skills
      </h2>
      
      {/* Skills Container */}
      <div className="relative w-full h-[400px] flex items-center justify-center">
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
            className="absolute px-5 py-3 md:px-10 md:py-6 bg-[#111]/90 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl z-10 flex items-center justify-center"
            style={{ 
              left: `calc(50% + (var(--spread-x) * ${skill.x}px))`, 
              top: `calc(50% + (var(--spread-y) * ${skill.y}px))`, 
              transform: 'translate(-50%, -50%)' 
            }}
          >
            <span className={`text-xs md:text-xl font-black tracking-widest ${skill.color} whitespace-nowrap`}>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        div {
          --spread-x: 0.8; /* Mobile par width control */
          --spread-y: 0.8; /* Mobile par height control */
        }
        @media (min-width: 768px) {
          div {
            --spread-x: 2.5; /* Laptop par wide spread */
            --spread-y: 1.8; /* Laptop par height control taaki heading se na takraye */
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
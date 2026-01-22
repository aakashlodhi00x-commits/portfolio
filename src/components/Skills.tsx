"use client"
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', x: -100, y: -60, color: 'text-orange-500' },
  { name: 'CSS3', x: 100, y: -40, color: 'text-blue-500' },
  { name: 'JavaScript', x: -80, y: 70, color: 'text-yellow-400' },
  { name: 'React.js', x: 90, y: 80, color: 'text-cyan-400' },
  { name: 'Node.js', x: 0, y: -110, color: 'text-green-500' },
  { name: 'MongoDB', x: -120, y: 0, color: 'text-green-600' },
  { name: 'Git', x: 120, y: 10, color: 'text-red-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative min-h-[650px] flex flex-col items-center justify-center overflow-hidden">
      {/* Title - Adding Padding for Mobile Touch Fix */}
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-20 z-20 uppercase tracking-[0.3em] px-4 text-center">
        Technical Skills
      </h2>
      
      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      {/* Skills Container */}
      <div className="relative w-full max-w-sm md:max-w-5xl h-[400px] flex items-center justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            animate={{ 
              y: [0, -15, 0], 
              x: [0, 8, 0] 
            }}
            transition={{ 
              duration: 4 + index % 2, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: index * 0.1 
            }}
            className="absolute px-4 py-2 md:px-6 md:py-3 bg-[#111] border border-gray-800 rounded-full shadow-2xl z-10 whitespace-nowrap"
            style={{ 
              // Mobile fix: Humne responsive multiplier lagaya hai
              left: `calc(50% + (var(--x-pos) * ${skill.x}px))`, 
              top: `calc(50% + (var(--y-pos) * ${skill.y}px))`, 
              transform: 'translate(-50%, -50%)' 
            }}
          >
            <span className={`text-[10px] md:text-sm font-bold tracking-widest ${skill.color}`}>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        div {
          --x-pos: 0.6; /* Mobile par skills thodi paas rahengi */
          --y-pos: 0.6;
        }
        @media (min-width: 768px) {
          div {
            --x-pos: 1; /* Laptop par poori jagah lengi */
            --y-pos: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
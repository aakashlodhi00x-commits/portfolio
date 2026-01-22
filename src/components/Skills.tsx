"use client"
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', x: -120, y: -80, color: 'text-orange-500' },
  { name: 'CSS3', x: 120, y: -60, color: 'text-blue-500' },
  { name: 'JavaScript', x: -100, y: 90, color: 'text-yellow-400' },
  { name: 'React.js', x: 110, y: 100, color: 'text-cyan-400' },
  { name: 'Node.js', x: 0, y: -130, color: 'text-green-500' },
  { name: 'MongoDB', x: -140, y: 10, color: 'text-green-600' },
  { name: 'Git', x: 140, y: 20, color: 'text-red-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-20 z-20 uppercase tracking-[0.3em]">Technical Skills</h2>
      <div className="absolute w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="relative w-full max-w-5xl h-[450px] flex items-center justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            className="absolute px-6 py-3 bg-[#111] border border-gray-800 rounded-full shadow-2xl z-10"
            style={{ left: `calc(50% + ${skill.x}px)`, top: `calc(50% + ${skill.y}px)`, transform: 'translate(-50%, -50%)' }}
          >
            <span className={`text-xs md:text-sm font-bold tracking-widest ${skill.color}`}>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

 
export default Skills;
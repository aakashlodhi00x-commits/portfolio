"use client"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', color: 'text-orange-500', size: 'w-24 h-24 md:w-32 md:h-32' },
  { name: 'CSS3', color: 'text-blue-500', size: 'w-24 h-24 md:w-32 md:h-32' },
  { name: 'JavaScript', color: 'text-yellow-400', size: 'w-28 h-28 md:w-36 md:h-36' },
  { name: 'React.js', color: 'text-cyan-400', size: 'w-32 h-32 md:w-40 md:h-40' },
  { name: 'Node.js', color: 'text-green-500', size: 'w-28 h-28 md:w-36 md:h-36' },
  { name: 'MongoDB', color: 'text-green-600', size: 'w-28 h-28 md:w-36 md:h-36' },
  { name: 'Git', color: 'text-red-500', size: 'w-20 h-20 md:w-28 md:h-28' },
];

const Skills = () => {
  const constraintsRef = useRef(null);

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative min-h-[800px] flex flex-col items-center overflow-hidden">
      
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 z-20 uppercase tracking-[0.3em] text-center px-4">
        Technical Skills
      </h2>
      
      {/* Constraints Area: Iske bahar bubbles nahi jayenge */}
      <motion.div 
        ref={constraintsRef}
        className="relative w-full max-w-5xl h-[500px] md:h-[600px] flex flex-wrap justify-center items-center gap-4 md:gap-10 p-4"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={constraintsRef} // Screen se bahar nahi jayega
            whileDrag={{ scale: 1.2, zIndex: 50 }}
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 3 + (index % 2), 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className={`${skill.size} bg-[#111] border border-gray-800 rounded-full shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing backdrop-blur-md hover:border-cyan-500/50 transition-colors z-10`}
          >
            <span className={`text-[10px] md:text-sm font-black text-center px-2 uppercase tracking-tighter ${skill.color}`}>
              {skill.name}
            </span>
          </motion.div>
        ))}

        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full -z-10"></div>
      </motion.div>
    </section>
  );
};

export default Skills;
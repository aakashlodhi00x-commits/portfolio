"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = ["React", "Node.js", "MongoDB", "JavaScript", "HTML", "CSS", "Next.js", "Tailwind"];

  return (
    <section id="skills" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Background Floating Text with Animation */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            // Floating Animation Logic
            animate={{
              y: [0, -20, 0], // Upar niche move karega
            }}
            transition={{
              duration: 5 + index, // Har word ki speed alag hogi
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute text-white font-black uppercase tracking-tighter 
                       opacity-[0.02] md:opacity-[0.04]"
            style={{
              top: `${(index * 12) + 5}%`,
              left: index % 2 === 0 ? 'var(--floating-left)' : 'auto',
              right: index % 2 !== 0 ? 'var(--floating-right)' : 'auto',
              fontSize: 'var(--floating-size)',
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      <style jsx>{`
        span {
          --floating-left: 10%;
          --floating-right: 10%;
          --floating-size: 3rem; /* Mobile par chota size */
        }
        @media (min-width: 768px) {
          span {
            --floating-left: 5%;
            --floating-right: 5%;
            --floating-size: 7rem; /* Laptop par professional bada size */
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center uppercase tracking-[0.2em] px-4">
          Technical Skills
        </h2>

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
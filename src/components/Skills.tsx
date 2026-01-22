"use client"
import React from 'react';

const Skills = () => {
  const skills = ["React", "Node.js", "MongoDB", "JavaScript", "HTML", "CSS", "Next.js", "Tailwind"];

  return (
    <section id="skills" className="py-20 bg-[#0a0a0a] relative overflow-hidden min-h-[600px]">
      
      {/* Balloon Floating Background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="absolute text-white font-black uppercase opacity-[0.03] md:opacity-[0.05] animate-balloon"
            style={{
              // Initial positions
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 70 + 10}%`,
              fontSize: 'clamp(2rem, 10vw, 8rem)',
              animationDelay: `${index * 2}s`,
              animationDuration: `${15 + index * 2}s`
            }}
          >
            {skill}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes balloon {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -50px) rotate(5deg); }
          66% { transform: translate(-20px, -80px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        .animate-balloon {
          animation: balloon infinite ease-in-out;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center uppercase tracking-[0.2em]">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {skills.map((skill) => (
            <div key={skill} className="bg-[#111] p-6 rounded-2xl border border-gray-800 text-center hover:border-cyan-500/50 transition-all">
              <p className="text-gray-400 font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
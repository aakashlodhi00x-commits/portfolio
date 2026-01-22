"use client"
import React from 'react';

const Resume = () => {
  const softSkills = ["Leadership", "Problem Solving", "Communication", "Collaboration"];

  return (
    <section id="resume" className="py-24 bg-[#0a0a0a] px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 uppercase tracking-[0.2em] text-center">
          My Resume
        </h2>
        
        {/* Education & Internship Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-16">
          
          {/* Education Column */}
          <div className="space-y-8">
            <h3 className="text-cyan-400 font-bold text-xl border-b border-gray-800 pb-3">Education</h3>
            <div className="bg-[#111] p-6 rounded-3xl border border-gray-800">
              <span className="text-cyan-500 text-xs font-mono uppercase">Sep 2023 - May 2026</span>
              <h4 className="text-white text-xl font-bold mt-2">B.Sc in Computer Science</h4>
              <p className="text-gray-400 mt-1">IIMT Group of Colleges </p>
              <p className="text-gray-500 text-sm mt-1">Greater Noida, Uttar Pradesh </p>
            </div>
          </div>

          {/* Internship Column */}
          <div className="space-y-8">
            <h3 className="text-cyan-400 font-bold text-xl border-b border-gray-800 pb-3">Internship</h3>
            <div className="bg-[#111] p-6 rounded-3xl border border-gray-800">
              <span className="text-cyan-500 text-xs font-mono uppercase">Oct 2025 - Nov 2025</span>
              <h4 className="text-white text-xl font-bold mt-2">Web Development Intern</h4>
              <p className="text-gray-400 mt-1">IBM-online internship program </p>
              <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                Built responsive web pages using React and learned UI/UX best practices under IBM PBEL program. 
              </p>
            </div>
          </div>
        </div>

        {/* Soft Skills Section (Newly Added) */}
        <div className="mb-16">
          <h3 className="text-cyan-400 font-bold text-xl border-b border-gray-800 pb-3 mb-8 text-center md:text-left">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill) => (
              <div key={skill} className="bg-[#111] border border-gray-800 p-4 rounded-2xl text-center group hover:border-cyan-500/50 transition-all">
                <p className="text-gray-300 text-sm font-medium tracking-wide group-hover:text-cyan-400">
                  {skill} 
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Expertise Summary */}
        <div className="p-8 bg-[#0d0d0d] border border-gray-800 rounded-3xl">
          <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-center">Technical Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["React.js", "Node.js", "MongoDB", "JavaScript", "HTML5", "CSS3", "Git", "GitHub"].map((skill) => (
              <span key={skill} className="px-4 py-1.5 bg-[#1a1a1a] text-gray-400 text-[10px] md:text-xs rounded-full border border-gray-800">
                {skill} 
              </span>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-16 text-center">
          <a href="/aakash_resume.pdf" target="_blank" className="inline-block bg-white text-black px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all shadow-xl">
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
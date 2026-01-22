"use client"
import React from 'react';

// Projects data from your resume 
const projects = [
  {
    title: "Ryze.ai Website Redesign", // 
    desc: "Redesigned a modern landing page for an AI-based startup with 100% mobile responsiveness.", // [cite: 24, 25]
    tech: ["HTML5", "CSS3", "JavaScript", "Netlify"] 
  },
  {
    title: "Laundry Wallah", // 
    desc: "Built a responsive laundry service website with service listings and online booking.", // 
    tech: ["React.js", "HTML", "CSS", "JavaScript"] 
  },
  {
    title: "Bella Vista Website", // 
    desc: "Developed a responsive restaurant website to showcase menus and reviews.", // [cite: 28]
    tech: ["HTML", "CSS", "JavaScript"] 
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center uppercase tracking-widest">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all group"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[10px] uppercase tracking-wider bg-gray-900 text-gray-400 border border-gray-800 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
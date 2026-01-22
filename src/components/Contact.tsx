"use client"
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0a0a0a] text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-[0.2em]">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                <p className="text-gray-300">aakashlodhiilnabsr1438@gmail.com</p> 
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Phone</p>
                <p className="text-gray-300">+91 9368952106</p> 
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Location</p>
                <p className="text-gray-300">Greater Noida, Uttar Pradesh</p> 
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-[#111] p-8 rounded-3xl border border-gray-800 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6 text-center">Let's Connect</h3>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/aakashlodhi00x-commits" target="_blank" className="p-4 bg-gray-800 rounded-full hover:bg-white hover:text-black transition-all"> 
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/aakash-lodhi-67609732a" target="_blank" className="p-4 bg-gray-800 rounded-full hover:bg-cyan-500 transition-all"> 
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-center text-gray-500 text-sm mt-8 leading-relaxed">
              Open for opportunities and collaborations. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
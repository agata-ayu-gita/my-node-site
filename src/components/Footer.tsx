import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { personalInfo } from '../data/content';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#050505] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
          <p className="text-gray-400 text-sm max-w-xs">
            Open to new opportunities and collaborations. Feel free to reach out.
          </p>
        </div>

        <div className="flex gap-6">
          <a 
            href={personalInfo.social.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href={personalInfo.social.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
          >
            <Github size={24} />
          </a>
          <a 
            href={personalInfo.social.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
          >
            <Twitter size={24} />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

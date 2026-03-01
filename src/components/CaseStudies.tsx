import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { caseStudies } from '../data/content';
import { Section } from './ui/Section';
import { Card } from './ui/Card';

export const CaseStudies = () => {
  return (
    <Section id="projects">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
        <div className="h-1 w-20 bg-blue-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {caseStudies.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden group p-0 border-0 bg-[#171717]">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col border border-white/10 border-t-0 rounded-b-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500">{project.subtitle}</p>
                  </div>
                  <a href={project.link} className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                    <ArrowUpRight size={18} className="text-gray-300" />
                  </a>
                </div>

                <p className="text-gray-400 text-sm mb-6 flex-1">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-white/5">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                      <p className="text-lg font-mono font-medium text-blue-400">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 bg-white/5 border border-white/5 rounded text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

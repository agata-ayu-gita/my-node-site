import React from 'react';
import { motion } from 'motion/react';
import { experience } from '../data/content';
import { Section } from './ui/Section';

export const Experience = () => {
  return (
    <Section id="experience" className="relative">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
        <div className="h-1 w-20 bg-blue-500 rounded-full" />
      </div>

      <div className="space-y-12 relative border-l border-white/10 ml-3 md:ml-6 pl-8 md:pl-12">
        {experience.map((job, index) => (
          <motion.div 
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-blue-500" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">{job.role}</h3>
                <p className="text-blue-400 font-medium">{job.company}</p>
              </div>
              <span className="text-sm text-gray-500 mt-1 md:mt-0 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5 w-fit">
                {job.period}
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-3xl leading-relaxed">
              {job.description}
            </p>
            
            <ul className="space-y-3">
              {job.achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

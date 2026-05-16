import React from 'react';
import { motion } from 'motion/react';
import { Section } from './ui/Section';
import { experience as defaultExperience } from '../data/content';

interface ExperienceProps {
  title?: string;
  data?: typeof defaultExperience;
}

export const Experience = ({ title = "Experience", data = defaultExperience }: ExperienceProps) => {
  return (
    <Section id={title.toLowerCase().replace(/\s+/g, '-')} className="relative">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{title}</h2>
        <div className="h-1 w-20 bg-amber-500 rounded-full" />
      </div>

      <div className="space-y-16">
        {data.map((job) => (
          <motion.div 
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-2">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{job.company}</h3>
                <span className="text-amber-600 font-mono mt-2 md:mt-0">{job.period}</span>
              </div>
              <p className="text-slate-600 italic">{job.description}</p>
            </div>

            <div className="space-y-10 relative border-l border-slate-200 ml-3 md:ml-4 pl-8 md:pl-10">
              {job.roles.map((role, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-8 md:-left-10 -translate-x-[45%] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-amber-500" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-slate-800">{role.title}</h4>
                    <span className="text-sm text-slate-500 mt-1 md:mt-0 font-mono bg-slate-100 px-3 py-1 rounded-full border border-slate-200 w-fit">
                      {role.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {role.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 text-sm md:text-base leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

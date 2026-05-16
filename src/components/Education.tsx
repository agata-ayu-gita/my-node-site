import React from 'react';
import { motion } from 'motion/react';
import { Section } from './ui/Section';
import { education, additionalInfo } from '../data/content';
import { GraduationCap, Award, Globe, Heart, CheckCircle2 } from 'lucide-react';

export const Education = () => {
  return (
    <Section id="education" className="relative bg-slate-50">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Education & Additional Information</h2>
        <div className="h-1 w-20 bg-amber-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Education Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-amber-500" size={28} />
            <h3 className="text-2xl font-bold text-slate-900">Education</h3>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-amber-500/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h4 className="text-xl font-bold text-slate-800">{edu.institution}</h4>
                </div>
                <div className="flex flex-col mb-4">
                  <span className="text-amber-600 font-semibold">{edu.degree}</span>
                  <span className="text-sm text-slate-500 font-mono mt-1">{edu.period}</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-amber-500" size={28} />
            <h3 className="text-2xl font-bold text-slate-900">Additional Information</h3>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-6">
            {/* Nationality & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2 text-slate-800 font-semibold">
                  <Globe size={18} className="text-amber-600" />
                  Nationality
                </div>
                <p className="text-slate-600">{additionalInfo.nationality}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 text-slate-800 font-semibold">
                  <Globe size={18} className="text-yellow-600" />
                  Languages
                </div>
                <p className="text-slate-600">{additionalInfo.languages.join(', ')}</p>
              </div>
            </div>

            <div className="w-full h-px bg-slate-200 my-4" />

            {/* Achievements */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-slate-800 font-semibold">
                <Award size={18} className="text-amber-600" />
                Key Achievements
              </div>
              <ul className="space-y-3">
                {additionalInfo.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm md:text-base leading-relaxed">
                    <CheckCircle2 size={16} className="mt-1 text-amber-500/70 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full h-px bg-slate-200 my-4" />

            {/* Interests */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-slate-800 font-semibold">
                <Heart size={18} className="text-amber-600" />
                Interests
              </div>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {additionalInfo.interests}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

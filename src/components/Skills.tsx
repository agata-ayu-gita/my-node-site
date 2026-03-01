import React from 'react';
import { motion } from 'motion/react';
import { skills } from '../data/content';
import { Section } from './ui/Section';
import { Card } from './ui/Card';

export const Skills = () => {
  return (
    <Section id="skills">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
        <div className="h-1 w-20 bg-blue-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup, index) => {
          const Icon = skillGroup.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg border border-white/10">
                  <Icon className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2 mt-auto">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-gray-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

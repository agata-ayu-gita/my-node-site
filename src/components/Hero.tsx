import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/content';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-slate-900">
            Leader in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
              Technology &amp; Digital Advantage
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Cambridge MBA Candidate and former Product Manager with 6+ years of experience driving AI integration, scaling products, and leading digital transformation.
          </p>
          

        </motion.div>
      </div>
    </section>
  );
};

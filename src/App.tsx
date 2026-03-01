/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { CaseStudies } from './components/CaseStudies';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
}

export default App;

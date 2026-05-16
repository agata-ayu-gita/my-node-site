/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { experience, consultingExperience } from './data/content';

function App() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-amber-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Experience title="Product Management Experience" data={experience} />
        <Experience title="Consulting & Research" data={consultingExperience} />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;

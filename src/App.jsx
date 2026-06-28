import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    // Default to dark mode if no saved preference
    const saved = localStorage.getItem('portfolio-theme');
    return saved ? saved : 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen bg-canvas-light dark:bg-canvas-dark text-neutral-900 dark:text-gray-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-white transition-colors duration-300">
      {/* Background Mesh Grid */}
      <div className="fixed inset-0 bg-mesh-static pointer-events-none z-0" />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

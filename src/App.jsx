import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
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

// Generate random stars
const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 1,
  duration: `${Math.random() * 4 + 2}s`,
  delay: `${Math.random() * 5}s`,
  maxOpacity: Math.random() * 0.5 + 0.1,
}));

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved ? saved : 'dark';
  });

  const cursorRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Cursor glow follow mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen bg-canvas-light dark:bg-canvas-dark text-neutral-900 dark:text-gray-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-white transition-colors duration-300">

      {/* ── Scroll Progress Bar ── */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX, width: '100%' }}
      />

      {/* ── Custom Round Cursor ── */}
      <CustomCursor />

      {/* ── Floating Gradient Orbs ── */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* ── Twinkling Stars (dark only) ── */}
      <div className="dark:block hidden">
        {STARS.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              '--duration': star.duration,
              '--delay': star.delay,
              '--max-opacity': star.maxOpacity,
            }}
          />
        ))}
      </div>

      {/* ── Noise Texture ── */}
      <div className="noise-overlay" />

      {/* ── Background Mesh Grid ── */}
      <div className="fixed inset-0 bg-mesh-static pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar toggleTheme={toggleTheme} theme={theme} />

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

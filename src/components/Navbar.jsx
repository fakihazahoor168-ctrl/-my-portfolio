import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certificates', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 150;
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/10 dark:bg-black/40 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/30 text-white font-bold text-lg select-none"
        >
          F
          <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
        </motion.a>

        {/* Desktop Links */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 group"
            >
              <span className={`relative z-10 ${
                activeSection === link.href.slice(1)
                  ? 'text-cyan-400'
                  : 'text-neutral-500 dark:text-gray-400 group-hover:text-neutral-900 dark:group-hover:text-white'
              }`}>
                {link.label}
              </span>
              {activeSection === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-500/20"
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                />
              )}
            </a>
          ))}
        </motion.div>

        {/* Resume Button */}
        <motion.a
          href={portfolioData.personalInfo.resumeUrl}
          download
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl relative overflow-hidden group text-white font-semibold text-sm tracking-wide shadow-lg shadow-cyan-500/20"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300" />
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10">Resume</span>
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-white/10 skew-x-12 transition-transform duration-700" />
        </motion.a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 dark:bg-white/10 border border-white/10 text-neutral-600 dark:text-gray-300 hover:text-cyan-400 transition-colors"
          aria-label="Toggle navigation"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/90 dark:bg-black/90 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      : 'text-neutral-600 dark:text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={portfolioData.personalInfo.resumeUrl}
                download
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm tracking-wide text-center shadow-lg shadow-cyan-500/20"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

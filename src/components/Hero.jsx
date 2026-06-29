import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './icons';

export default function Hero() {
  const { fullName, title, shortTitle, location } = portfolioData.personalInfo;
  const { github, linkedin, email } = portfolioData.socials;

  // Staggered Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // "Fakiha" — slides in from the LEFT with blur + skew (slow & smooth)
  const slideFromLeft = {
    hidden: { 
      x: -200, 
      opacity: 0, 
      filter: "blur(20px)",
      skewX: -6
    },
    visible: { 
      x: 0, 
      opacity: 1, 
      filter: "blur(0px)",
      skewX: 0,
      transition: { 
        duration: 1.8,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // "Zahoor" — slides in from the RIGHT with blur + skew (slow & smooth)
  const slideFromRight = {
    hidden: { 
      x: 200, 
      opacity: 0, 
      filter: "blur(20px)",
      skewX: 6
    },
    visible: { 
      x: 0, 
      opacity: 1, 
      filter: "blur(0px)",
      skewX: 0,
      transition: { 
        duration: 1.8,
        delay: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // General Fade & Slide Up Variants
  const elementVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const titleLine1 = ["Fakiha"];
  const titleLine2 = ["Zahoor"];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-10 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center z-10"
      >
        {/* Available for Hire Badge */}
        <motion.div 
          variants={elementVariants}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-neutral-200/50 dark:border-white/5 mb-8 shadow-sm backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[10px] font-black tracking-[0.15em] uppercase text-neutral-600 dark:text-gray-300">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Hero Title — Cinematic Side-Slide Animation */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight mb-6 leading-[1.0]">
          {/* "Fakiha" — flies in from the LEFT */}
          <motion.div
            variants={slideFromLeft}
            className="block text-neutral-900 dark:text-white"
          >
            Fakiha
          </motion.div>

          {/* "Zahoor" — flies in from the RIGHT with animated gradient */}
          <motion.div
            variants={slideFromRight}
            className="block gradient-text-animated"
          >
            Zahoor
          </motion.div>
        </h1>

        {/* Hero Subtitle */}
        <motion.p 
          variants={elementVariants}
          className="text-base sm:text-lg md:text-xl font-medium text-neutral-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          Hi, I'm <span className="text-neutral-900 dark:text-white font-extrabold">{fullName}</span> — a{' '}
          <span className="gradient-text-animated font-extrabold">{shortTitle}</span>.
          Building scalable web apps, RESTful APIs &amp; AI-powered solutions.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          variants={elementVariants}
          className="flex flex-col sm:flex-row gap-4 mb-14"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glow flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase text-xs tracking-widest shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 cursor-pointer"
          >
            View Projects
            <ArrowRight size={14} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-card glass-card-hover border border-neutral-200/60 dark:border-white/5 text-neutral-900 dark:text-white font-black uppercase text-xs tracking-widest transition-all duration-200 cursor-pointer"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          variants={elementVariants}
          className="flex items-center gap-4"
        >
          <motion.a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ y: -3, scale: 1.05 }}
            className="p-3.5 rounded-2xl glass-card glass-card-hover border border-neutral-200/60 dark:border-white/5 text-neutral-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-200"
          >
            <GithubIcon size={18} />
          </motion.a>
          <motion.a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ y: -3, scale: 1.05 }}
            className="p-3.5 rounded-2xl glass-card glass-card-hover border border-neutral-200/60 dark:border-white/5 text-neutral-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-200"
          >
            <LinkedinIcon size={18} />
          </motion.a>
          <motion.a 
            href={`mailto:${email}`} 
            whileHover={{ y: -3, scale: 1.05 }}
            className="p-3.5 rounded-2xl glass-card glass-card-hover border border-neutral-200/60 dark:border-white/5 text-neutral-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-200"
          >
            <Mail size={18} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}


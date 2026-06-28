import { ArrowUp, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './icons';

export default function Footer() {
  const { fullName } = portfolioData.personalInfo;
  const { github, linkedin, twitter, email } = portfolioData.socials;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-neutral-200/50 dark:border-white/5 bg-canvas-light dark:bg-canvas-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Left Side: Brand Logo */}
        <div className="text-center md:text-left">
          <p className="text-xs md:text-sm text-neutral-500 dark:text-gray-400 font-semibold">
            &copy; {new Date().getFullYear()} <span className="text-neutral-900 dark:text-white font-black">{fullName}</span>. All rights reserved.
          </p>
        </div>

        {/* Middle: Socials */}
        <div className="flex items-center gap-3">
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-2xl glass-card border border-neutral-200/60 dark:border-white/5 text-neutral-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/30 dark:hover:border-cyan-500/20 transition-all duration-200 shadow-sm"
          >
            <GithubIcon size={16} />
          </a>
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-2xl glass-card border border-neutral-200/60 dark:border-white/5 text-neutral-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/30 dark:hover:border-cyan-500/20 transition-all duration-200 shadow-sm"
          >
            <LinkedinIcon size={16} />
          </a>
          <a 
            href={`mailto:${email}`} 
            className="p-3 rounded-2xl glass-card border border-neutral-200/60 dark:border-white/5 text-neutral-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/30 dark:hover:border-cyan-500/20 transition-all duration-200 shadow-sm"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Right Side: Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-2xl glass-card border border-neutral-200/60 dark:border-white/5 text-neutral-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-200 shadow-sm cursor-pointer"
          aria-label="Back to Top"
        >
          <ArrowUp size={16} />
        </button>

      </div>
    </footer>
  );
}



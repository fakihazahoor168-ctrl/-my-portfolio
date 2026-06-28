import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './icons';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const projects = portfolioData.projects;

  const categories = ['All', 'Fullstack', 'AI', 'Mobile', 'Systems'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-28 border-t border-b border-neutral-200/50 dark:border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-xs font-black uppercase tracking-[0.25em] text-cyan-500 mb-3">Work</h2>
          <h3 className="text-3xl md:text-5xl font-display font-black text-neutral-900 dark:text-white leading-tight">
            Featured Projects
          </h3>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 text-xs font-black uppercase tracking-wider rounded-2xl transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                  : 'bg-neutral-100 dark:bg-white/5 border border-neutral-200/50 dark:border-white/5 text-neutral-600 dark:text-gray-400 hover:text-cyan-500 hover:border-cyan-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="glass-card rounded-3xl overflow-hidden flex flex-col h-full group border border-neutral-200/60 dark:border-white/5 shadow-sm"
              >
                {/* Image Mockup Wrapper with Premium Gradient Backdrop */}
                <div className="relative h-56 overflow-hidden border-b border-neutral-200/50 dark:border-white/5">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 dark:from-cyan-950/20 dark:via-purple-950/20 dark:to-pink-950/20 flex items-center justify-center p-8 group-hover:scale-[1.03] transition-transform duration-500">
                      
                      {/* Mockup browser window */}
                      <div className="w-full h-full rounded-2xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200/30 dark:border-white/5 p-4 flex flex-col justify-between shadow-lg">
                        <div className="flex items-center gap-1.5 border-b border-neutral-200/30 dark:border-white/5 pb-2">
                          <div className="w-2 h-2 rounded-full bg-pink-500" />
                          <div className="w-2 h-2 rounded-full bg-amber-400" />
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        </div>
                        <div className="flex justify-center items-center py-4 text-cyan-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                          <Code size={40} />
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-neutral-400 dark:text-gray-500 font-mono">
                          <span>{project.category} Portal</span>
                          <span>v1.0.0</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions Overlay */}
                  <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300 backdrop-blur-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-2xl bg-white text-black hover:bg-cyan-500 hover:text-black transition-all duration-200 transform translate-y-4 group-hover:translate-y-0 shadow-lg shadow-cyan-500/20"
                    >
                      <GithubIcon size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-2xl bg-cyan-500 text-black hover:bg-cyan-400 transition-all duration-200 transform translate-y-4 group-hover:translate-y-0 shadow-lg shadow-cyan-500/25"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content Card Body */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-neutral-900 dark:text-white mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-250 flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 text-cyan-500 transition-opacity duration-200" />
                  </h3>
                  
                  <p className="text-xs md:text-sm text-neutral-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="w-full h-px bg-neutral-200/50 dark:bg-white/5 mb-5" />

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-xl text-[10px] md:text-xs font-semibold bg-neutral-50 dark:bg-white/5 border border-neutral-200/50 dark:border-white/5 text-neutral-500 dark:text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}



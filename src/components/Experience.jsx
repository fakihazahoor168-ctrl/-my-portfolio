import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="relative py-28">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-6 md:px-12 relative z-10"
      >
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-xs font-black uppercase tracking-[0.25em] text-cyan-500 mb-3">Journey</h2>
          <h3 className="text-3xl md:text-5xl font-display font-black text-neutral-900 dark:text-white leading-tight">
            Work Experience
          </h3>
        </div>

        {/* Timeline Core */}
        <div className="relative border-l border-neutral-200 dark:border-white/10 pl-8 md:pl-12 ml-4 flex flex-col gap-14">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
              className="relative"
            >
              {/* Glowing Icon Point */}
              <div className="absolute w-8 h-8 rounded-full flex items-center justify-center -left-[49px] md:-left-[65px] top-1.5 border-2 border-cyan-500 bg-canvas-light dark:bg-canvas-dark text-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.3)] z-10">
                <Briefcase size={14} />
              </div>

              {/* Card Container */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="glass-card p-6 md:p-8 rounded-3xl border border-neutral-200/60 dark:border-white/5 shadow-sm"
              >
                
                {/* Meta details */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-5 pb-5 border-b border-neutral-200/50 dark:border-white/5">
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex max-w-max px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider border border-neutral-200/60 dark:border-white/5 bg-neutral-50 dark:bg-white/5 text-neutral-500 dark:text-gray-300">
                      {exp.type === 'work' ? 'Professional' : 'Internship'}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-neutral-900 dark:text-white leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-black text-cyan-500 dark:text-cyan-400">
                      {exp.company}
                    </p>
                  </div>

                  {/* Dates / Location */}
                  <div className="flex flex-col items-start md:items-end text-xs text-neutral-500 dark:text-gray-400 gap-2 font-semibold">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-neutral-400 dark:text-gray-500" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-neutral-400 dark:text-gray-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="list-none flex flex-col gap-3">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-neutral-600 dark:text-gray-300 leading-relaxed font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0 shadow-[0_0_4px_rgba(6,182,212,0.8)]" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}



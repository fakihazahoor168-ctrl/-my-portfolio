import { motion } from 'framer-motion';
import { User, MapPin, GraduationCap, Code2, Cpu, Database, Terminal, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { aboutMe, location, resumeUrl } = portfolioData.personalInfo;
  const educationList = portfolioData.education;
  const skillsCategories = portfolioData.skills.categories;

  // Map category name to icon
  const getCategoryIcon = (name) => {
    const lowercaseName = name.toLowerCase();
    if (lowercaseName.includes('language') || lowercaseName.includes('core')) {
      return <Code2 className="text-cyan-500" size={22} />;
    } else if (lowercaseName.includes('frontend') || lowercaseName.includes('libraries')) {
      return <Cpu className="text-purple-500" size={22} />;
    } else if (lowercaseName.includes('backend') || lowercaseName.includes('database')) {
      return <Database className="text-pink-500" size={22} />;
    } else {
      return <Terminal className="text-emerald-500" size={22} />;
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="relative py-28 border-t border-b border-neutral-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-black uppercase tracking-[0.25em] text-cyan-500 mb-3"
          >
            About Me
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-black text-neutral-900 dark:text-white leading-tight"
          >
            My Journey & Expertise
          </motion.h3>
        </div>

        {/* Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography & Education (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Biography Card */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="glass-card p-8 rounded-3xl border border-neutral-200/60 dark:border-white/5 shadow-sm"
            >
              <h4 className="text-lg font-black text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <User size={18} className="text-cyan-500" /> Biography
              </h4>
              <p className="text-neutral-600 dark:text-gray-300 leading-relaxed text-sm md:text-base font-medium">
                {aboutMe}
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6 text-xs font-semibold text-neutral-500 dark:text-gray-400 border-t border-neutral-200/50 dark:border-white/5 pt-5">
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-neutral-400 dark:text-gray-500" />
                  <span>Based in {location}</span>
                </div>
              </div>
            </motion.div>

            {/* Education History Card */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-8 rounded-3xl border border-neutral-200/60 dark:border-white/5 shadow-sm"
            >
              <h4 className="text-lg font-black text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                <GraduationCap size={18} className="text-cyan-500" /> Education
              </h4>
              <div className="flex flex-col gap-6">
                {educationList.map((edu) => (
                  <motion.div 
                    key={edu.id} 
                    whileHover={{ x: 4 }}
                    className="relative pl-6 border-l border-neutral-200 dark:border-white/10 flex flex-col gap-1.5"
                  >
                    <div className="absolute w-2.5 h-2.5 bg-cyan-500 rounded-full -left-[5.5px] top-1.5 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                    <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">{edu.duration}</span>
                    <h5 className="text-base font-black text-neutral-900 dark:text-white leading-tight">{edu.degree}</h5>
                    <p className="text-xs font-bold text-neutral-500 dark:text-gray-400">{edu.institution}</p>
                    <p className="text-xs text-neutral-500 dark:text-gray-400 mt-1 leading-relaxed font-medium">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Download CV Action */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex"
            >
              <motion.a
                href={resumeUrl}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase text-xs tracking-widest shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200"
              >
                Download CV
                <FileText size={14} />
              </motion.a>
            </motion.div>

          </div>

          {/* Right Column: 2x2 Grid of Competence Categories (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            {skillsCategories.map((category, idx) => (
              <motion.div 
                key={category.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-neutral-200/60 dark:border-white/5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/5 flex items-center justify-center mb-5 border border-neutral-200/50 dark:border-white/5">
                    {getCategoryIcon(category.name)}
                  </div>
                  <h4 className="text-sm font-black text-neutral-900 dark:text-white tracking-wide mb-3 leading-tight">
                    {category.name}
                  </h4>
                </div>
                
                <ul className="flex flex-col gap-1.5 text-xs text-neutral-500 dark:text-gray-400 font-semibold border-t border-neutral-200/40 dark:border-white/5 pt-3">
                  {category.items.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-cyan-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                  {category.items.length > 4 && (
                    <li className="text-[10px] text-cyan-500 font-black uppercase tracking-wider pl-2.5 mt-1">
                      + {category.items.length - 4} more
                    </li>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}


import { motion } from 'framer-motion';
import { Cpu, Code2, Database, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { categories } = portfolioData.skills;

  const getCategoryTheme = (name) => {
    const lowercaseName = name.toLowerCase();
    if (lowercaseName.includes('language') || lowercaseName.includes('core')) {
      return {
        icon: <Code2 className="text-cyan-500" size={20} />,
        bg: 'bg-cyan-500/10 dark:bg-cyan-500/5',
        border: 'group-hover:border-cyan-500/30'
      };
    } else if (lowercaseName.includes('frontend') || lowercaseName.includes('libraries')) {
      return {
        icon: <Cpu className="text-purple-500" size={20} />,
        bg: 'bg-purple-500/10 dark:bg-purple-500/5',
        border: 'group-hover:border-purple-500/30'
      };
    } else if (lowercaseName.includes('backend') || lowercaseName.includes('database')) {
      return {
        icon: <Database className="text-pink-500" size={20} />,
        bg: 'bg-pink-500/10 dark:bg-pink-500/5',
        border: 'group-hover:border-pink-500/30'
      };
    } else {
      return {
        icon: <Terminal className="text-emerald-500" size={20} />,
        bg: 'bg-emerald-500/10 dark:bg-emerald-500/5',
        border: 'group-hover:border-emerald-500/30'
      };
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="skills" className="relative py-28">
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
            Skills
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-black text-neutral-900 dark:text-white leading-tight"
          >
            Technical Stack
          </motion.h3>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {categories.map((category) => {
            const { icon, bg } = getCategoryTheme(category.name);
            return (
              <motion.div 
                key={category.name}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group glass-card p-8 rounded-3xl border border-neutral-200/60 dark:border-white/5 shadow-sm flex flex-col h-full hover:border-cyan-500/30 dark:hover:border-cyan-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4.5 mb-8">
                  <div className={`p-3 rounded-2xl ${bg} border border-neutral-200/50 dark:border-white/5`}>
                    {icon}
                  </div>
                  <h3 className="text-base md:text-lg font-black text-neutral-900 dark:text-white tracking-wide">{category.name}</h3>
                </div>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {category.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 rounded-xl text-xs md:text-sm font-semibold text-neutral-500 dark:text-gray-400 border border-neutral-200/60 dark:border-white/5 hover:border-cyan-500/40 dark:hover:border-cyan-500/30 hover:text-cyan-500 dark:hover:text-cyan-400 bg-neutral-50/50 dark:bg-neutral-900/10 transition-colors duration-200 select-none cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}



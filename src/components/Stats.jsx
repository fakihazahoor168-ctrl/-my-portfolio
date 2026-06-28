import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Rocket, Code2, Brain, Smartphone, Globe, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  graduation: GraduationCap,
  briefcase: Briefcase,
  rocket: Rocket,
  code: Code2,
  brain: Brain,
  mobile: Smartphone,
  globe: Globe,
};

const palette = [
  { text: 'text-cyan-400', dot: 'bg-cyan-400', glow: '#22d3ee' },
  { text: 'text-purple-400', dot: 'bg-purple-400', glow: '#c084fc' },
  { text: 'text-pink-400', dot: 'bg-pink-400', glow: '#f472b6' },
  { text: 'text-emerald-400', dot: 'bg-emerald-400', glow: '#34d399' },
  { text: 'text-amber-400', dot: 'bg-amber-400', glow: '#fbbf24' },
  { text: 'text-blue-400', dot: 'bg-blue-400', glow: '#60a5fa' },
  { text: 'text-rose-400', dot: 'bg-rose-400', glow: '#fb7185' },
];

// Duplicate stats for infinite loop effect
function StatItem({ stat, idx }) {
  const Icon = iconMap[stat.icon] || Star;
  const color = palette[idx % palette.length];

  return (
    <div className="flex items-center gap-5 px-8 flex-shrink-0 select-none">
      {/* Icon */}
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center bg-neutral-200/60 dark:bg-white/5 border border-neutral-300/60 dark:border-white/10 ${color.text}`}
        style={{ boxShadow: `0 0 16px ${color.glow}33` }}
      >
        <Icon size={18} />
      </div>

      {/* Value + Label */}
      <div className="flex flex-col leading-tight">
        <span
          className={`text-2xl font-black tabular-nums leading-none ${color.text}`}
          style={{ textShadow: `0 0 20px ${color.glow}55` }}
        >
          {stat.value}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-gray-500 mt-0.5">
          {stat.label}
        </span>
      </div>

      {/* Divider dot */}
      <div className={`w-1.5 h-1.5 rounded-full ${color.dot} opacity-40 ml-3`} />
    </div>
  );
}

export default function Stats() {
  const stats = portfolioData.stats;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  // Triple the items for a seamless loop
  const loopItems = [...stats, ...stats, ...stats];

  return (
    <section ref={ref} className="relative py-12 overflow-hidden border-t border-neutral-200/30 dark:border-white/5">

      {/* Background glow strip */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Portfolio Stats
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white">
            By The{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Ticker wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        {/* Left fade — matches canvas-light (#f9fafb) and canvas-dark (#050505) */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#f9fafb] dark:from-[#050505] to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#f9fafb] dark:from-[#050505] to-transparent pointer-events-none" />

        {/* Top row — scrolls left */}
        <div className="overflow-hidden py-5 border-y border-neutral-200/60 dark:border-white/5 bg-neutral-100/60 dark:bg-white/[0.02] backdrop-blur-sm">
          <div className="flex animate-marquee-left w-max">
            {loopItems.map((stat, idx) => (
              <StatItem key={`top-${idx}`} stat={stat} idx={idx} />
            ))}
          </div>
        </div>

        {/* Bottom row — scrolls right (reverse) */}
        <div className="overflow-hidden py-5 border-b border-neutral-200/60 dark:border-white/5 bg-neutral-50/40 dark:bg-white/[0.015] backdrop-blur-sm mt-2">
          <div className="flex animate-marquee-right w-max">
            {[...loopItems].reverse().map((stat, idx) => (
              <StatItem key={`bot-${idx}`} stat={stat} idx={idx} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-14">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent origin-center"
        />
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Bookmark, ExternalLink, X, ZoomIn, ImageOff } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// ── Lightbox Modal ──────────────────────────────────────────
function CertModal({ cert, onClose }) {
  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-950"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-white/10">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-1">{cert.issuer} · {cert.date}</p>
                <h3 className="text-lg font-black text-white leading-tight">{cert.title}</h3>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Certificate Image */}
            <div className="relative bg-neutral-900 min-h-[300px] flex items-center justify-center">
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full object-contain max-h-[70vh]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              {/* Fallback if image not found */}
              <div
                className="absolute inset-0 flex-col items-center justify-center gap-3 text-neutral-600"
                style={{ display: 'none' }}
              >
                <ImageOff size={40} />
                <p className="text-sm font-medium">Certificate image not uploaded yet</p>
                <p className="text-xs text-neutral-700">Add your image to <code className="bg-neutral-800 px-2 py-0.5 rounded text-cyan-400">/public/certificates/</code></p>
              </div>

              {/* If no image prop at all */}
              {!cert.image && (
                <div className="flex flex-col items-center justify-center gap-3 text-neutral-600 py-16">
                  <ImageOff size={40} />
                  <p className="text-sm font-medium">No image added yet</p>
                  <p className="text-xs text-neutral-700">Add your image to <code className="bg-neutral-800 px-2 py-0.5 rounded text-cyan-400">/public/certificates/</code></p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Main Component ──────────────────────────────────────────
export default function Certifications() {
  const certifications = portfolioData.certifications;
  const achievements = portfolioData.achievements;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      {/* Lightbox */}
      <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />

      <section id="certifications" className="relative py-12 border-t border-b border-neutral-200/50 dark:border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
        >

          {/* Section Heading */}
          <div className="text-center mb-8">
            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-cyan-500 mb-3">Honors</h2>
            <h3 className="text-3xl md:text-5xl font-display font-black text-neutral-900 dark:text-white leading-tight">
              Certificates &amp; Achievements
            </h3>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Certifications Column */}
            <div>
              <h3 className="text-lg font-black text-neutral-900 dark:text-white mb-6 flex items-center gap-2.5">
                <Award className="text-cyan-500" size={20} /> Certifications
              </h3>
              <div className="flex flex-col gap-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="group glass-card p-5 rounded-2xl border border-neutral-200/60 dark:border-white/5 shadow-sm flex justify-between items-center gap-4 cursor-pointer"
                    onClick={() => setSelectedCert(cert)}
                    title="Click to view certificate"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-xl border border-neutral-200/50 dark:border-white/5 text-cyan-500 flex-shrink-0">
                        <Bookmark size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-neutral-900 dark:text-white mb-0.5 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-150 leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-xs font-bold text-neutral-500 dark:text-gray-400 leading-tight mb-0.5">
                          {cert.issuer}
                        </p>
                        <span className="text-[9px] text-neutral-400 dark:text-gray-500 font-bold uppercase tracking-wider">
                          Issued {cert.date}
                        </span>
                      </div>
                    </div>

                    {/* View Image hint */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="hidden sm:flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-neutral-400 dark:text-gray-600 group-hover:text-cyan-500 transition-colors duration-200">
                        <ZoomIn size={11} /> View
                      </span>
                      <div className="p-2 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200/60 dark:border-white/5 text-neutral-400 dark:text-gray-500 group-hover:text-cyan-500 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all duration-200">
                        <ZoomIn size={14} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements Column */}
            <div>
              <h3 className="text-lg font-black text-neutral-900 dark:text-white mb-6 flex items-center gap-2.5">
                <Trophy className="text-purple-500" size={20} /> Key Achievements
              </h3>
              <div className="flex flex-col gap-4">
                {achievements.map((ach, idx) => (
                  <motion.div
                    key={ach.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="group glass-card p-5 rounded-2xl border border-neutral-200/60 dark:border-white/5 shadow-sm flex items-start gap-4 cursor-default"
                  >
                    <div className="p-3 bg-purple-500/10 dark:bg-purple-500/5 rounded-xl border border-neutral-200/50 dark:border-white/5 text-purple-500 flex-shrink-0">
                      <Trophy size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-neutral-900 dark:text-white mb-1.5 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-150 leading-tight">
                        {ach.title}
                      </h4>
                      <p className="text-xs md:text-sm text-neutral-600 dark:text-gray-400 leading-relaxed font-medium">
                        {ach.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </section>
    </>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { email } = portfolioData.socials;
  const { location, phone } = portfolioData.personalInfo;

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('sending');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "0e57777a-7993-4afb-8ca4-387cbb76e50b",
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Message from Portfolio",
          message: formData.message,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Web3Forms Error:", result);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-xs font-black uppercase tracking-[0.25em] text-cyan-500 mb-3">Contact</h2>
          <h3 className="text-3xl md:text-5xl font-display font-black text-neutral-900 dark:text-white leading-tight">
            Get In Touch
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info cards (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between gap-8"
          >
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl md:text-4xl font-display font-black text-neutral-900 dark:text-white leading-tight">
                Let's construct <br />
                something <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-black">exceptional</span>.
              </h3>
              <p className="text-neutral-600 dark:text-gray-300 leading-relaxed text-sm md:text-base font-medium">
                I am currently open to engineering roles, client projects, and creative collaborations. Get in touch!
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-6">
              {/* Email Card */}
              <motion.a 
                href={`mailto:${email}`}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group glass-card p-6 flex items-center gap-4 border border-neutral-200/60 dark:border-white/5 shadow-sm"
              >
                <div className="p-3.5 bg-neutral-100 dark:bg-white/5 border border-neutral-200/50 dark:border-white/5 text-neutral-900 dark:text-white rounded-2xl group-hover:scale-105 transition-transform duration-200">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-black text-neutral-400 dark:text-gray-500 uppercase tracking-widest mb-0.5">Email Me</span>
                  <span className="block text-sm md:text-base font-black text-neutral-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-150">{email}</span>
                </div>
              </motion.a>

              {/* Phone Card */}
              <motion.a
                href={`tel:${phone}`}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group glass-card p-6 flex items-center gap-4 border border-neutral-200/60 dark:border-white/5 shadow-sm"
              >
                <div className="p-3.5 bg-neutral-100 dark:bg-white/5 border border-neutral-200/50 dark:border-white/5 text-neutral-900 dark:text-white rounded-2xl group-hover:scale-105 transition-transform duration-200">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-black text-neutral-400 dark:text-gray-500 uppercase tracking-widest mb-0.5">Call Me</span>
                  <span className="block text-sm md:text-base font-black text-neutral-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-150">{phone}</span>
                </div>
              </motion.a>

              {/* Location Card */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-card p-6 flex items-center gap-4 border border-neutral-200/60 dark:border-white/5 shadow-sm cursor-default"
              >
                <div className="p-3.5 bg-neutral-100 dark:bg-white/5 border border-neutral-200/50 dark:border-white/5 text-neutral-900 dark:text-white rounded-2xl">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-black text-neutral-400 dark:text-gray-500 uppercase tracking-widest mb-0.5">Location</span>
                  <span className="block text-sm md:text-base font-black text-neutral-900 dark:text-white">{location}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 flex flex-col gap-6 rounded-3xl border border-neutral-200/60 dark:border-white/5 shadow-lg">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-black text-neutral-400 dark:text-gray-500 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/20 border border-neutral-200/60 dark:border-white/5 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-gray-600 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 dark:focus:ring-cyan-400/25 transition-all duration-200 text-sm font-semibold"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-black text-neutral-400 dark:text-gray-500 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/20 border border-neutral-200/60 dark:border-white/5 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-gray-600 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 dark:focus:ring-cyan-400/25 transition-all duration-200 text-sm font-semibold"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-[10px] font-black text-neutral-400 dark:text-gray-500 uppercase tracking-widest">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/20 border border-neutral-200/60 dark:border-white/5 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-gray-600 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 dark:focus:ring-cyan-400/25 transition-all duration-200 text-sm font-semibold"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] font-black text-neutral-400 dark:text-gray-500 uppercase tracking-widest">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/20 border border-neutral-200/60 dark:border-white/5 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-gray-600 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 dark:focus:ring-cyan-400/25 transition-all duration-200 resize-none text-sm font-semibold"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending' || status === 'success'}
                className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase text-xs tracking-widest shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 mt-2 cursor-pointer"
              >
                {status === 'idle' && (
                  <>
                    Send Message <Send size={14} />
                  </>
                )}
                {status === 'sending' && (
                  <div className="w-5 h-5 rounded-full border-2 border-t-transparent border-black animate-spin" />
                )}
                {status === 'success' && (
                  <>
                    Message Sent! <CheckCircle2 size={14} className="text-emerald-500" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}



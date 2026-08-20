import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, center = true }) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="inline-block text-xs uppercase tracking-widest text-primary-600 dark:text-primary-400 font-bold bg-primary-500/10 dark:bg-primary-400/10 px-3 py-1 rounded-full border border-primary-500/20"
      >
        {subtitle}
      </motion.span>
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-extrabold font-display mt-3.5 text-slate-900 dark:text-white"
      >
        {title}
      </motion.h2>
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`h-1 w-14 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full mt-4 origin-left ${
          center ? 'mx-auto origin-center' : ''
        }`}
      />
    </div>
  );
}

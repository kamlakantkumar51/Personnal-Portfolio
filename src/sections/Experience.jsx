import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { experiences } from '../data/portfolioData';
import { FaBriefcase } from 'react-icons/fa';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader title="Work & Experience" subtitle="My Journey" />

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline nodes */}
              <span className="absolute -left-[45px] md:-left-[53px] top-1.5 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary-500 text-white shadow-lg shadow-primary-500/25 border-4 border-white dark:border-dark-bg">
                <FaBriefcase className="w-3.5 h-3.5 md:w-4.5 md:h-4.5" />
              </span>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary-500/20 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white font-display">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-primary-500 dark:text-primary-400 mt-0.5">
                      {exp.company}
                    </h4>
                  </div>
                  <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50 self-start md:self-center">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements bullets */}
                <ul className="list-disc pl-5 space-y-2 mb-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {exp.achievements.map((ach, aIndex) => (
                    <li key={aIndex}>{ach}</li>
                  ))}
                </ul>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/50 dark:border-slate-800/40">
                  {exp.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xxs font-bold uppercase tracking-wider bg-primary-500/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400 border border-primary-500/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

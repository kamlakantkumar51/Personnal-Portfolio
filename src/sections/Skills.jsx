import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = skillsData.skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Technical Skills" subtitle="My Expertise" />

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/20'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={skill.name}
                  className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-primary-500/20 group hover:-translate-y-0.5"
                >
                  <div
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 group-hover:scale-105 transition-transform duration-300"
                    style={{ color: skill.color }}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-slate-800 dark:text-white truncate text-sm md:text-base">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-primary-500 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800/80 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-purple rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

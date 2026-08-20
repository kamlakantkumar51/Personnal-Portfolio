import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { codingProfiles } from '../data/portfolioData';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function CodingProfiles() {
  return (
    <section id="profiles" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Coding Profiles" subtitle="Practice Platforms" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codingProfiles.map((prof, index) => {
            const Icon = prof.icon;
            return (
              <motion.a
                key={index}
                href={prof.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`glass-card rounded-2xl p-6 border flex gap-4 items-center group relative cursor-pointer overflow-hidden ${prof.bgClass} hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
              >
                {/* Glowing blob on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 dark:bg-white/[0.02] rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none select-none" />

                {/* Logo Frame */}
                <div
                  className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-3xl shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300"
                  style={{ color: prof.color }}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Details */}
                <div className="flex-grow min-w-0">
                  <h3 className="font-bold text-slate-800 dark:text-white font-display text-base">
                    {prof.platform}
                  </h3>
                  <p className="text-xxs text-slate-400 dark:text-slate-500 truncate mb-1 mt-0.5 font-medium">
                    @{prof.username}
                  </p>
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 truncate">
                    {prof.stats}
                  </p>
                </div>

                {/* Arrow */}
                <div className="text-slate-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <FaExternalLinkAlt className="w-3 h-3" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

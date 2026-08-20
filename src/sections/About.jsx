import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { statistics } from '../data/portfolioData';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="About Me" subtitle="My Background" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative & Objectives col */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
              Who I Am & What I Do
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              I am a Bachelor of Technology student in Computer Science and Engineering with a deep focus on full-stack web engineering. 
              My engineering methodologies center around building high-performance, accessible, and responsive systems using the 
              MERN (MongoDB, Express, React, Node.js) stack, combined with a strong background in competitive algorithm solving.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              I enjoy solving complex architectural tasks on competitive coding platforms, maintaining active streaks, and converting logical 
              concepts into seamless, premium interfaces. My career objective is to build scalable SaaS frameworks, contribute to active 
              open-source developer ecosystems, and help design products that solve real problems.
            </p>

            {/* Timeline */}
            <div className="glass-card rounded-2xl p-6 mt-8">
              <h4 className="font-bold text-lg text-slate-800 dark:text-white font-display mb-4">
                Educational Background
              </h4>
              <div className="relative pl-6 border-l-2 border-primary-500/20 space-y-6">
                <div className="relative">
                  <div className="absolute w-3.5 h-3.5 bg-primary-500 rounded-full -left-[32px] top-1.5 border-2 border-white dark:border-dark-bg" />
                  <span className="text-xs font-bold text-primary-500 uppercase tracking-widest">2022 - 2026</span>
                  <h5 className="font-bold text-base text-slate-800 dark:text-slate-200 mt-1">
                    B.Tech in Computer Science & Engineering
                  </h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                    Focusing on Data Structures & Algorithms, Database Management Systems, Software Engineering principles, and computer network architectures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cards col */}
          <div className="lg:col-span-5">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {statistics.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-1 hover:border-primary-500/30 hover:shadow-primary-500/5 group"
                  >
                    <div className="p-3.5 rounded-xl bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 dark:text-primary-400 group-hover:scale-105 transition-transform duration-300 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold font-display bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-purple mb-1">
                      {stat.value}
                    </span>
                    <span className="text-xxs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-relaxed">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

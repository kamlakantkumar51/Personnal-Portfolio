import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { achievements } from '../data/portfolioData';

function CountUp({ to, duration = 1.5, decimals = 0 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => {
    const factor = Math.pow(10, decimals);
    return (Math.round(latest * factor) / factor).toFixed(decimals);
  });
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, to, { duration, ease: 'easeOut' });
      return controls.stop;
    }
  }, [inView, motionValue, to, duration]);

  useEffect(() => {
    return rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = latest;
      }
    });
  }, [rounded]);

  return <span ref={ref}>0</span>;
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-50/20 dark:bg-dark-bg/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="My Achievements" subtitle="Coding Highlights" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach, index) => {
            const hasDecimals = ach.value % 1 !== 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card rounded-2xl p-6 md:p-8 text-center hover:border-primary-500/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">
                    {ach.title}
                  </h3>
                  <div className="text-4xl md:text-5xl font-extrabold font-display bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-indigo-500 to-accent-purple mb-4">
                    {ach.prefix}
                    <CountUp to={ach.value} decimals={hasDecimals ? 1 : 0} />
                    {ach.suffix}
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {ach.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

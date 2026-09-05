import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { SiGithub } from 'react-icons/si';
import { FaExternalLinkAlt, FaRobot, FaHotel, FaUniversity, FaGamepad, FaClock, FaHeart, FaPalette, FaShoppingBag, FaShieldAlt } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/portfolioData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const majorProjects = projects.slice(0, 3);
  const minorProjects = projects.slice(3);
  const visibleMinorProjects = showAll ? minorProjects : minorProjects.slice(0, 3);

  // Renders a custom premium vector background matching the project topic
  const renderProjectBackground = (title) => {
    let colors;
    let Icon;

    if (title.includes("Kavach")) {
      colors = "from-indigo-600 via-blue-600 to-emerald-500";
      Icon = FaShieldAlt;
    } else if (title.includes("Konoq")) {
      colors = "from-cyan-500 via-blue-600 to-indigo-600";
      Icon = FaRobot;
    } else if (title.includes("Chatbot")) {
      colors = "from-teal-400 via-emerald-500 to-cyan-500";
      Icon = FaRobot;
    } else if (title.includes("Hotel")) {
      colors = "from-amber-400 via-orange-500 to-red-500";
      Icon = FaHotel;
    } else if (title.includes("University")) {
      colors = "from-indigo-500 to-purple-600";
      Icon = FaUniversity;
    } else if (title.includes("Tic Tac")) {
      colors = "from-rose-500 to-pink-600";
      Icon = FaGamepad;
    } else if (title.includes("Widget")) {
      colors = "from-sky-400 to-blue-500";
      Icon = FaClock;
    } else if (title.includes("Love")) {
      colors = "from-red-400 to-pink-500";
      Icon = FaHeart;
    } else if (title.includes("RGB")) {
      colors = "from-emerald-400 via-teal-500 to-blue-500";
      Icon = FaPalette;
    } else {
      colors = "from-violet-500 to-fuchsia-600";
      Icon = FaShoppingBag;
    }

    return (
      <div className={`w-full h-44 bg-gradient-to-tr ${colors} flex items-center justify-center relative overflow-hidden select-none`}>
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:16px_16px]" />
        
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
          className="z-10 flex flex-col items-center gap-1.5"
        >
          <Icon className="w-12 h-12 text-white/80" />
          <span className="text-xxs font-bold tracking-widest text-white/40 uppercase bg-black/20 px-2 py-0.5 rounded-full">
            Project Deck
          </span>
        </motion.div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-dark-bg/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Featured Projects" subtitle="My Portfolio" />

        {/* Carousel for major project cards */}
        <div className="mb-20">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-16 pt-4 px-2"
          >
            {majorProjects.map((proj, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="glass-card rounded-3xl overflow-hidden h-full flex flex-col hover:border-primary-500/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                  {renderProjectBackground(proj.title)}

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white truncate">
                        {proj.title}
                      </h3>
                      <span className="shrink-0 text-xxs font-bold bg-primary-500/10 text-primary-600 dark:bg-primary-400/10 dark:text-primary-400 px-2 py-0.5 rounded border border-primary-500/10 uppercase">
                        {proj.tag}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed flex-grow">
                      {proj.description}
                    </p>

                    {/* Highlights bullet list */}
                    <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1.5 mb-5">
                      {proj.features?.slice(0, 2).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5 truncate">
                          <span className="text-primary-500 shrink-0">•</span>
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/40 mb-5 text-center text-xxs">
                      <div>
                        <p className="text-slate-400 dark:text-slate-500 uppercase tracking-widest scale-90 mb-0.5">Quality</p>
                        <p className="font-bold text-slate-800 dark:text-slate-200">{proj.metrics?.score || '100%'}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 dark:text-slate-500 uppercase tracking-widest scale-90 mb-0.5">Speed</p>
                        <p className="font-bold text-slate-800 dark:text-slate-200">{proj.metrics?.speed || '< 1s'}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 dark:text-slate-500 uppercase tracking-widest scale-90 mb-0.5">Users</p>
                        <p className="font-bold text-slate-800 dark:text-slate-200">{proj.metrics?.users || 'Web'}</p>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {proj.tech.slice(0, 4).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-xxs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Lower Nav links */}
                    <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-200/40 dark:border-slate-800/40 mt-auto">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                      >
                        <SiGithub className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-semibold text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                      >
                        Live Link
                        <FaExternalLinkAlt className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Collapsible More Projects Grid */}
        <div>
          <h3 className="text-xl font-bold font-display text-center text-slate-800 dark:text-white mb-10">
            More Projects & Tools
          </h3>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {visibleMinorProjects.map((proj) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={proj.title}
                  className="glass-card rounded-2xl p-6 flex flex-col hover:border-primary-500/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <h4 className="font-bold font-display text-slate-800 dark:text-white text-sm md:text-base truncate">
                      {proj.title}
                    </h4>
                    <span className="shrink-0 text-xxs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded border border-slate-200/50 dark:border-slate-700/50 uppercase">
                      {proj.tag}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed flex-grow line-clamp-3">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-xxs font-medium bg-primary-500/5 text-primary-600 dark:bg-primary-400/5 dark:text-primary-400 border border-primary-500/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-200/40 dark:border-slate-800/40 mt-auto">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                    >
                      <SiGithub />
                      GitHub
                    </a>
                    {proj.live && proj.live !== "#" && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-semibold text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                      >
                        Live Link
                        <FaExternalLinkAlt className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Toggle buttons */}
          {minorProjects.length > 3 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2.5 rounded-xl border border-primary-500/30 text-primary-500 dark:text-primary-400 bg-transparent hover:bg-primary-500 hover:text-white transition-all duration-300 font-semibold text-xs md:text-sm cursor-pointer shadow-sm hover:shadow-md hover:shadow-primary-500/15"
              >
                {showAll ? 'Show Less' : 'Show All Projects'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

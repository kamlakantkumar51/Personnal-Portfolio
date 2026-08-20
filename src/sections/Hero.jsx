import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaEnvelope, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.png';

export default function Hero() {
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const navOffset = 80;
      window.scrollTo({
        top: contactSection.offsetTop - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[92svh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background neon light blurs */}
      <div className="absolute top-1/6 left-1/12 w-[35vw] h-[35vw] max-w-[480px] rounded-full bg-primary-500/10 dark:bg-primary-500/5 glow-blur pointer-events-none select-none" />
      <div className="absolute bottom-1/6 right-1/12 w-[38vw] h-[38vw] max-w-[500px] rounded-full bg-accent-purple/10 dark:bg-accent-purple/5 glow-blur pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Intro text col */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left mx-auto lg:mx-0 order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-sm md:text-base font-bold text-primary-500 dark:text-primary-400 tracking-wider mb-2"
          >
            Hello, It's me
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold font-display leading-tight tracking-tight text-slate-900 dark:text-white mb-4"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-6 min-h-[40px]"
          >
            And I'm a{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-accent-purple to-accent-pink font-heading font-extrabold">
              <TypeAnimation
                sequence={[
                  'MERN Stack Developer',
                  2000,
                  'B.Tech CSE Student',
                  2000,
                  'DSA Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                  'Competitive Coder',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0 font-normal"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <a
              href={personalInfo.resumeUrl}
              download
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-indigo-600 hover:from-primary-600 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 flex items-center gap-2.5 cursor-pointer border border-primary-400/20"
            >
              <FaFileDownload />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-primary-500 dark:hover:text-primary-400 bg-white/50 hover:bg-slate-50 dark:bg-slate-900/30 dark:hover:bg-slate-900/60 transition-all duration-300 font-semibold flex items-center gap-2.5 cursor-pointer backdrop-blur-sm"
            >
              <FaEnvelope />
              Contact Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start space-x-4"
          >
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/50 hover:scale-105 transition-all duration-300"
              aria-label="GitHub Page"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/20 dark:hover:border-blue-500/20 bg-white dark:bg-slate-900/50 hover:scale-105 transition-all duration-300"
              aria-label="LinkedIn Page"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/20 dark:hover:border-sky-500/20 bg-white dark:bg-slate-900/50 hover:scale-105 transition-all duration-300"
              aria-label="Twitter Page"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Image col */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] flex items-center justify-center animate-float"
          >
            {/* Glowing blur effects */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 via-accent-purple to-accent-pink opacity-35 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
            
            {/* Rotating gradient boundary ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 via-accent-purple to-accent-pink animate-[spin_8s_linear_infinite]" />
            
            {/* Stationary inner container with perfectly circular crop */}
            <div className="absolute inset-[4px] rounded-full overflow-hidden bg-slate-900 dark:bg-dark-bg shadow-2xl z-10">
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500 ease-out rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

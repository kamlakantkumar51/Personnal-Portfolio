import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full py-12 border-t border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-dark-bg/25 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <a
            href="#home"
            onClick={handleLogoClick}
            className="text-xl font-bold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-purple select-none cursor-pointer"
          >
            {personalInfo.name}
            <span className="text-primary-500">.</span>
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm">
            Building software solutions with a focus on UI/UX, optimized performance, and algorithmic problem-solving.
          </p>
        </div>

        {/* Social Icons Links */}
        <div className="flex items-center space-x-4">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-500/20 dark:hover:border-primary-500/20 bg-slate-50 dark:bg-slate-900/50 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-500/20 dark:hover:border-primary-500/20 bg-slate-50 dark:bg-slate-900/50 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-500/20 dark:hover:border-primary-500/20 bg-slate-50 dark:bg-slate-900/50 transition-all duration-300"
            aria-label="Twitter Profile"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-slate-200/40 dark:border-slate-800/40 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p>Crafted using React, Vite, Tailwind CSS & Framer Motion</p>
      </div>
    </footer>
  );
}

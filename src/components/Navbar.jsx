import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine current section in viewport
      const scrollPosition = window.scrollY + 160; // Offset for navbar height
      
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.substring(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const targetPosition = target.offsetTop - navOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled ? 'glass-nav py-3.5 shadow-md shadow-slate-200/10 dark:shadow-none' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Name Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-2xl font-bold tracking-tight font-display bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-accent-purple to-accent-pink hover:opacity-90 select-none cursor-pointer"
        >
          {personalInfo.name.split(' ')[0]}
          <span className="text-primary-500">.</span>
        </a>

        {/* Desktop Navigation Link Tabs */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative py-1 text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary-500 dark:text-primary-400 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-500 to-accent-purple rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="pl-4 border-l border-slate-200 dark:border-slate-800">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center space-x-3.5">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-200 bg-slate-100/50 dark:bg-slate-800/30 hover:bg-slate-200/50 dark:hover:bg-slate-800/60 focus:outline-none transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden w-full overflow-hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md shadow-xl"
          >
            <ul className="px-6 py-5 flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block py-2 text-base font-medium transition-colors cursor-pointer rounded-lg px-3 hover:bg-slate-50 dark:hover:bg-slate-800/40 ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary-500 dark:text-primary-400 font-semibold bg-primary-50/50 dark:bg-primary-950/20'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

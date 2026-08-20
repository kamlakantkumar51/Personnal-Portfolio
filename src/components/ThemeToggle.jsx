import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500/50 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/50 shadow-slate-200/60 dark:shadow-none"
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 360 : 0,
          scale: [1, 0.8, 1]
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === 'dark' ? (
          <FiSun className="w-5 h-5 text-amber-400" />
        ) : (
          <FiMoon className="w-5 h-5 text-indigo-600" />
        )}
      </motion.div>
    </button>
  );
}

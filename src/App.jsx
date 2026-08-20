import React from 'react';
import { Toaster } from 'react-hot-toast';
import useTheme from './hooks/useTheme';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

// Portfolio Section Components
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import CodingProfiles from './sections/CodingProfiles';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-dark-bg text-dark-text dark' : 'bg-light-bg text-light-text'
    }`}>
      {/* Toast Alert Config */}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: theme === 'dark' ? '#121826' : '#ffffff',
            color: theme === 'dark' ? '#f3f4f6' : '#0f172a',
            border: theme === 'dark' ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.05)',
            borderRadius: '16px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            backdropFilter: 'blur(8px)',
          },
          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
          },
        }}
      />

      {/* Floating scroll indicator action */}
      <ScrollToTop />

      {/* Sticky header navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* Scrollable sections container */}
      <main className="w-full overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <CodingProfiles />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer bar */}
      <Footer />
    </div>
  );
}

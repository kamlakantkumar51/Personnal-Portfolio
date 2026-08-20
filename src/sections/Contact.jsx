import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { personalInfo } from '../data/portfolioData';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqpznqyw';

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Front-end validations
    if (!formData.name.trim()) return toast.error('Please enter your name.');
    if (!formData.email.trim()) return toast.error('Please enter your email.');
    if (!validateEmail(formData.email)) return toast.error('Please enter a valid email address.');
    if (!formData.subject.trim()) return toast.error('Please enter a subject.');
    if (!formData.message.trim()) return toast.error('Please enter your message.');

    setLoading(true);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Message sent successfully! I will get back to you shortly. 🚀');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(data?.errors?.[0]?.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      toast.error('Network error. Please check your connection and try again.');
      console.error('Formspree Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/20 dark:bg-dark-bg/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Contact Me" subtitle="Get In Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info cards left */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-white">
              Let's Connect
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
              I am currently looking for placements, software development internship opportunities, or interesting freelance project collaborations.
              If you would like to connect or have any inquiries, feel free to fill out the form or reach out directly!
            </p>

            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-primary-500/25 transition-all duration-300">
                <div className="p-3.5 rounded-xl bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 dark:text-primary-400">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-wider">Email Address</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors mt-0.5 block truncate">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-primary-500/25 transition-all duration-300">
                <div className="p-3.5 rounded-xl bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 dark:text-primary-400">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-wider">Location</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form card right */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-6 md:p-8 shadow-xl"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration / Placement Opportunity"
                    className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${loading
                      ? 'bg-slate-600 cursor-not-allowed shadow-none'
                      : 'bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 shadow-md shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5'
                    }`}
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-3.5 h-3.5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

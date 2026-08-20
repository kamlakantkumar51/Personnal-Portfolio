import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import SectionHeader from '../components/SectionHeader';
import { testimonials } from '../data/portfolioData';
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-dark-bg/20">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <SectionHeader title="Testimonials" subtitle="What People Say" />

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-16 px-2"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="glass-card rounded-3xl p-8 md:p-10 relative">
                {/* Large visual quote icon */}
                <FaQuoteLeft className="absolute top-6 right-8 text-primary-500/10 dark:text-primary-400/5 w-14 h-14 pointer-events-none select-none" />

                <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 italic mb-8 relative z-10 leading-relaxed">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4 border-t border-slate-200/50 dark:border-slate-800/40 pt-6">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-2xl bg-primary-500/10 border border-primary-500/20 shadow-inner shrink-0 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold font-display text-slate-900 dark:text-white text-base">
                      {t.name}
                    </h4>
                    <p className="text-xxs font-semibold text-slate-500 dark:text-slate-400 mt-0.5 tracking-wide uppercase">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

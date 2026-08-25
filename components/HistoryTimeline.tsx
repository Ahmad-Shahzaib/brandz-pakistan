'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import type { TimelineMilestone } from '../types';
import { ChevronLeft, ChevronRight, History, Calendar } from 'lucide-react';

export const HistoryTimeline: React.FC<{ timeline: TimelineMilestone[] }> = ({ timeline }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeYear, setActiveYear] = useState<string>(timeline[timeline.length - 2]?.year || timeline[0]?.year || '');

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section id="history" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#F05535] font-bold text-xs uppercase tracking-widest bg-[#FFF0EC] px-3.5 py-1.5 rounded-full mb-3 border border-[#F05535]/20">
              <History className="w-3.5 h-3.5" />
              <span>Growth Story & Milestones</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#343538] tracking-tight">
              Our <span className="text-[#F05535]">History</span>
            </h2>
            <p className="text-[#717275] text-base mt-2 max-w-xl">
              From a single kitchen concept to a rapidly expanding fast-food network. Scroll through our journey.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleScrollLeft}
              className="w-12 h-12 rounded-2xl border-2 border-gray-200 hover:border-[#F05535] bg-white text-[#343538] hover:text-[#F05535] flex items-center justify-center transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-95"
              aria-label="Scroll History Left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleScrollRight}
              className="w-12 h-12 rounded-2xl border-2 border-gray-200 hover:border-[#F05535] bg-[#F05535] hover:bg-[#D34518] text-white flex items-center justify-center transition-all shadow-md shadow-red-900/20 cursor-pointer active:scale-95"
              aria-label="Scroll History Right"
            >
              <ChevronRight className="w-6 h-6 text-[#F6A18F]" />
            </button>
          </div>
        </div>

        {/* Timeline Horizontal Container */}
        <div className="relative">
          {/* Central Horizontal Line */}
          <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-[#F6A18F] to-[#F05535] z-0 rounded-full hidden sm:block" />

          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            className="flex items-start gap-6 sm:gap-8 overflow-x-auto hide-scrollbar pt-4 pb-8 px-2 snap-x snap-mandatory relative z-10"
          >
            {timeline.map((item, index) => {
              const isActive = activeYear === item.year;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveYear(item.year)}
                  className="snap-start shrink-0 w-[280px] sm:w-[320px] flex flex-col group cursor-pointer"
                >
                  {/* Year Tag Node */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
                        isActive
                          ? 'bg-[#F05535] text-white border-white ring-4 ring-[#FFF0EC] scale-110 shadow-lg'
                          : 'bg-white text-[#343538] border-[#F6A18F] group-hover:bg-[#FFF5F2]'
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span
                      className={`font-heading text-2xl font-extrabold tracking-tight transition-colors ${
                        isActive ? 'text-[#F05535]' : 'text-[#343538] group-hover:text-[#F05535]'
                      }`}
                    >
                      {item.year}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-[#717275] bg-gray-100 px-2 py-0.5 rounded-md ml-auto">
                      {item.category}
                    </span>
                  </div>

                  {/* Card Container */}
                  <div
                    className={`bg-[#F7F7F7] rounded-2xl p-5 border-2 transition-all duration-300 shadow-sm ${
                      isActive
                        ? 'border-[#F05535] shadow-xl bg-white -translate-y-2'
                        : 'border-gray-200/80 hover:border-gray-300 group-hover:-translate-y-1'
                    }`}
                  >
                    {/* Image */}
                    <div className="relative rounded-xl overflow-hidden h-40 mb-4 bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 left-2 bg-[#F6A18F] text-[#343538] font-extrabold text-[11px] px-2.5 py-0.5 rounded-md shadow-xs">
                        {item.highlightKeyword}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-heading font-extrabold text-lg text-[#343538] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#717275] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

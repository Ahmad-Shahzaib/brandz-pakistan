'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Sparkles } from 'lucide-react';
import type { ContentCard } from '@/lib/api';

export const MissionVision: React.FC<{ items: ContentCard[] }> = ({ items }) => {
  const mission = items[0];
  const vision = items[1];
  return (
    <section className="py-20 bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#F05535] font-extrabold text-xs uppercase tracking-widest bg-[#FFF0EC] px-3.5 py-1.5 rounded-full border border-[#F05535]/20">
            Strategic Direction
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#343538] mt-3">
            Our Purpose & Ambition
          </h2>
          <p className="text-[#717275] text-base mt-2">
            Editable strategic direction from the Brandz Pakistan CMS.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="bg-[#F05535] text-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-red-900/15 relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Background Decorative Circles */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-white/10 pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-full bg-white text-[#F05535] flex items-center justify-center shadow-lg font-bold">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs uppercase font-extrabold tracking-widest bg-white/20 px-3 py-1 rounded-full backdrop-blur-xs text-white">
                  {mission?.label}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-white">
                {mission?.title}
              </h3>

              <p className="text-white/95 text-base sm:text-lg leading-relaxed font-normal">
                {mission?.text}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-2 text-xs font-semibold text-white/90">
              <Sparkles className="w-4 h-4 text-[#F6A18F]" />
              <span>{mission?.description}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="bg-[#343538] text-white border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Background Decorative Circles */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-[#F05535]/20 pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-full bg-[#F6A18F] text-[#343538] flex items-center justify-center shadow-lg font-bold">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-xs uppercase font-extrabold tracking-widest bg-[#F6A18F]/20 text-[#F6A18F] px-3 py-1 rounded-full border border-[#F6A18F]/30">
                  {vision?.label}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-white">
                {vision?.title}
              </h3>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
                {vision?.text}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-2 text-xs font-semibold text-gray-300">
              <Sparkles className="w-4 h-4 text-[#F6A18F]" />
              <span>{vision?.description}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

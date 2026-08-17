'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AWARDS_DATA, AWARD_IMAGE } from '../data/corporateData';
import { Trophy, Award, Sparkles, ChevronDown } from 'lucide-react';

export const AwardsSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(3);

  const featuredAward = AWARDS_DATA.find((a) => a.isFeatured) || AWARDS_DATA[0];
  const awardsList = AWARDS_DATA;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, awardsList.length));
  };

  const hasMore = visibleCount < awardsList.length;

  return (
    <section id="awards" className="py-20 bg-[#FAF8F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#E51821] font-bold text-xs uppercase tracking-widest bg-[#FFF0F1] px-3.5 py-1.5 rounded-full mb-3 border border-[#E51821]/20">
            <Trophy className="w-3.5 h-3.5 text-[#FFC700] fill-[#FFC700]" />
            <span>Industry Recognition</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1818] tracking-tight">
            Celebrating Our <span className="text-[#E51821]">Franchise Excellence</span>
          </h2>

          <p className="text-[#6B655C] text-base sm:text-lg mt-3">
            Honored by food safety guilds, franchise associations, and consumer choice awards.
          </p>
        </div>

        {/* Featured Award Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-white bg-[#1A1818] mb-16 group"
        >
          <div className="relative h-[320px] sm:h-[400px] w-full">
            <img
              src={AWARD_IMAGE}
              alt="Fri-Chiks Award Ceremony Gala"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Top Badge */}
            <div className="absolute top-6 left-6 bg-[#FFC700] text-[#1A1818] font-extrabold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 fill-[#1A1818]" />
              <span>Featured Honor 2025</span>
            </div>

            {/* Bottom-Left Overlay Caption Card */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xl bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-2xl">
              <div className="flex items-center gap-2 text-[#E51821] text-xs font-extrabold uppercase tracking-widest mb-1">
                <Award className="w-4 h-4" />
                <span>{featuredAward.organizer}</span>
              </div>

              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1A1818] leading-snug">
                {featuredAward.awardName}
              </h3>

              <p className="text-xs sm:text-sm text-[#6B655C] mt-2">
                {featuredAward.description}
              </p>

              <div className="mt-3 pt-3 border-t border-gray-200/80 flex items-center justify-between text-xs text-[#1A1818]">
                <span className="font-bold">Recipient: Executive Leadership & Franchisees</span>
                <span className="bg-[#FFF0F1] text-[#E51821] font-extrabold px-2.5 py-0.5 rounded-full">
                  Year {featuredAward.year}
                </span>
              </div>
            </div>

            {/* Bottom-Right Trophy Badge */}
            <div className="hidden sm:flex absolute bottom-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-xl bg-[#FFC700] text-[#1A1818] flex items-center justify-center font-bold">
                <Trophy className="w-6 h-6 fill-[#1A1818]" />
              </div>
              <div>
                <p className="text-xs uppercase font-extrabold text-[#FFC700]">Franchise Award Winner</p>
                <p className="text-sm font-bold">Franchise Excellence</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Chronological Awards List */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-md">
          <div className="flex items-center justify-between pb-6 border-b border-gray-200 mb-6">
            <h3 className="font-heading font-extrabold text-xl text-[#1A1818] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FFC700]" />
              <span>Full Honors & Industry Citations</span>
            </h3>
            <span className="text-xs text-[#6B655C] font-semibold">
              Showing {Math.min(visibleCount, awardsList.length)} of {awardsList.length}
            </span>
          </div>

          <div className="space-y-4">
            <AnimatePresence>
              {awardsList.slice(0, visibleCount).map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F7] hover:bg-[#FFF9E6]/80 border border-gray-100 hover:border-[#FFC700]/50 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  {/* Left Column: Year + Name */}
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="font-heading font-extrabold text-lg sm:text-xl text-[#E51821] bg-[#FFF0F1] px-3 py-1 rounded-xl shrink-0 border border-[#E51821]/20">
                      {item.year}
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-base sm:text-lg text-[#1A1818] leading-snug">
                        {item.awardName}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6B655C] mt-0.5">
                        Organized by: <strong className="text-[#1A1818]">{item.organizer}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Category Badge */}
                  <div className="sm:text-right shrink-0">
                    <span className="text-xs font-bold text-[#E51821] bg-[#FFF0F1] px-3 py-1 rounded-full border border-[#E51821]/20">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-8 text-center pt-4 border-t border-gray-100">
              <button
                onClick={handleLoadMore}
                className="bg-transparent hover:bg-[#FFF0F1] text-[#E51821] border-2 border-[#E51821] px-6 py-3 rounded-xl font-bold text-sm transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Load More Recognition ({awardsList.length - visibleCount} remaining)</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
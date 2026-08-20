'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { HERO_IMAGE } from '../data/corporateData';
import { Sparkles, Building2, ShieldCheck, ChevronRight } from 'lucide-react';
import { FriChiksLogo } from './FriChiksLogo';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-[#343538]">
      {/* Background Image with Warm Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={HERO_IMAGE}
          alt="Fri-Chiks Golden Crispy Chicken Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 contrast-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#343538] via-[#343538]/90 to-[#F05535]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#343538] via-transparent to-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 bg-[#F6A18F] text-[#343538] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 fill-[#343538]" />
                <span>Official Fri-Chiks ® Brand & Franchise Headquarters</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                About <span className="text-[#F6A18F] relative inline-block">
                  Fri-Chiks ®
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F05535]" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="mt-5 text-lg sm:text-xl text-gray-200 font-medium max-w-2xl leading-relaxed">
                Building trust through uncompromising taste, 100% Halal integrity, and rapid franchise growth across Lahore & Pakistan.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/apply"
                  className="bg-[#F05535] hover:bg-[#D34518] text-white px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-red-900/40 hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Building2 className="w-5 h-5 text-[#F6A18F]" />
                  <span>Franchise Opportunities</span>
                  <ChevronRight className="w-4 h-4 text-[#F6A18F]" />
                </Link>

                <Link
                  href="/our-story"
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base border border-white/20 transition-all flex items-center gap-2"
                >
                  <span>Explore Brand Story</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Badge Graphic */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-72 sm:w-80"
            >
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F05535] to-[#F6A18F] opacity-30 blur-2xl rounded-full" />

              {/* Fri-Chiks Emblem Card */}
              <div className="relative bg-[#343538]/90 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl text-white">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#F6A18F]">
                    EST. 2002
                  </span>
                  <div className="bg-[#F05535] text-white px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#F6A18F]" />
                    <span>45+ Outlets</span>
                  </div>
                </div>

                <div className="my-5 flex flex-col items-center text-center">
                  <FriChiksLogo variant="compact" size="lg" className="mb-2" />

                  <h3 className="font-heading font-extrabold text-xl text-white mt-1">
                    Fri-Chiks ® Corporate
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">
                    100% Fresh Farm Poultry • Secret 12-Spice Golden Batter
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                  <span>Lahore • Faisalabad • Islamabad</span>
                  <span className="text-[#F6A18F] font-bold">Expansion Mode</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
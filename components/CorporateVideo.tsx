'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Play, Youtube, Film, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/corporateData';
import { useModals } from './SiteChrome';

export const CorporateVideo: React.FC = () => {
  const { openVideoModal } = useModals();
  const onPlayVideo = openVideoModal;
  return (
    <section className="relative py-16 bg-[#1A1818] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Video Block Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer" onClick={onPlayVideo}>
          {/* Background Poster Image */}
          <div className="relative h-[400px] sm:h-[480px] md:h-[540px] w-full overflow-hidden">
            <img
              src={HERO_IMAGE}
              alt="Fri-Chiks Corporate Video Trailer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 filter brightness-75 contrast-110"
              referrerPolicy="no-referrer"
            />
            
            {/* Dark & Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

            {/* Huge Condensed Backdrop Type */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-20 group-hover:opacity-30 transition-opacity">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-heading font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter uppercase text-center text-white leading-none whitespace-nowrap"
              >
                STANDARDS & GROWTH
              </motion.span>
            </div>

            {/* Corporate Video Label Top-Left */}
            <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-xs font-bold uppercase tracking-wider text-[#FFC700]">
              <Film className="w-4 h-4 text-[#FFC700]" />
              <span>Fri-Chiks ® Corporate Showreel</span>
            </div>

            {/* Center Play Button Overlay with Pulse Effect */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* Outer Pulsing Rings */}
                <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#E51821]/40 animate-ping" />
                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FFC700]/50 animate-pulse" />

                {/* Main Play Circle */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlayVideo();
                  }}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-[#E51821] to-[#FFC700] hover:from-[#B80F16] hover:to-[#E0A800] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 cursor-pointer border-2 border-white/40"
                  aria-label="Play Corporate Video"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1" />
                </button>
              </div>

              <span className="mt-4 text-sm sm:text-base font-extrabold uppercase tracking-widest text-white drop-shadow-md bg-black/50 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-xs">
                Watch Official Documentary (2:45)
              </span>
            </div>

            {/* "Watch on YouTube" Tag Bottom-Right */}
            <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 bg-[#E51821] hover:bg-[#B80F16] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-colors border border-white/20">
              <Youtube className="w-4 h-4 fill-white" />
              <span>Watch on YouTube</span>
            </div>

            {/* Highlights Tag Bottom-Left */}
            <div className="absolute bottom-6 left-6 z-10 hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-xs font-medium text-gray-200">
              <Sparkles className="w-4 h-4 text-[#FFC700]" />
              <span>Inside Fri-Chiks ® Kitchen SOPs & Franchise Excellence</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
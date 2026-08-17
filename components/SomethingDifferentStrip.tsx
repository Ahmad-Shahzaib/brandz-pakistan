'use client';

import React from 'react';
import { motion } from 'motion/react';
import { TEAM_IMAGE, INTERIOR_IMAGE } from '../data/corporateData';
import { Heart, Sparkles } from 'lucide-react';

export const SomethingDifferentStrip: React.FC = () => {
  return (
    <section className="py-16 bg-[#FFF9E6] border-y border-[#FFC700]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Three-part Horizontal Strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left Photo: Customers / Staff */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-4/3 sm:aspect-16/10">
              <img
                src={TEAM_IMAGE}
                alt="Fri-Chiks Happy Staff and Customers"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-lg text-xs font-bold text-[#1A1818]">
                Warm Local Hospitality
              </div>
            </div>
          </motion.div>

          {/* Middle Handwritten Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 text-center py-4 md:py-0 px-2"
          >
            <div className="inline-flex items-center gap-1 text-[#E51821] font-bold text-xs uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5 fill-[#E51821]" />
              <span>The Fri-Chiks ® Signature</span>
              <Sparkles className="w-3.5 h-3.5 fill-[#E51821]" />
            </div>

            {/* Signature Expressive Font Callout */}
            <h2 className="font-script text-5xl sm:text-6xl lg:text-7xl font-bold text-[#E51821] leading-tight -rotate-2 drop-shadow-xs">
              "Something Different!"
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#6B655C] font-medium max-w-sm mx-auto leading-relaxed">
              We don't do cookie-cutter fast food. Every batch is freshly marinated in our proprietary 12-spice blend for an unforgettable local flavor profile.
            </p>
          </motion.div>

          {/* Right Photo: Product / Staff Detail */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-4/3 sm:aspect-16/10">
              <img
                src={INTERIOR_IMAGE}
                alt="Fri-Chiks Store Environment and Quality"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 right-3 bg-[#E51821] text-white px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-white text-[#FFC700]" />
                <span>Made With Passion</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
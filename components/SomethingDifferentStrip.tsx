'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import type { ContentCard } from '@/lib/api';

export const SomethingDifferentStrip: React.FC<{ teamImage: string; interiorImage: string; content?: ContentCard }> = ({
  teamImage,
  interiorImage,
  content,
}) => {
  return (
    <section className="py-16 bg-[#FFF5F2] border-y border-[#F6A18F]/40 overflow-hidden">
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
                src={teamImage}
                alt={content?.description || 'Brandz Pakistan hospitality team'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-lg text-xs font-bold text-[#343538]">
                {content?.description}
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
            <div className="inline-flex items-center gap-1 text-[#F05535] font-bold text-xs uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5 fill-[#F05535]" />
              <span>{content?.label}</span>
              <Sparkles className="w-3.5 h-3.5 fill-[#F05535]" />
            </div>

            {/* Signature Expressive Font Callout */}
            <h2 className="font-script text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F05535] leading-tight -rotate-2 drop-shadow-xs">
              "{content?.title}"
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#717275] font-medium max-w-sm mx-auto leading-relaxed">
              {content?.text}
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
                src={interiorImage}
                alt={content?.value || 'Brandz Pakistan store environment'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 right-3 bg-[#F05535] text-white px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-white text-[#F6A18F]" />
                <span>{content?.value}</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

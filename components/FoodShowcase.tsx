'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Flame } from 'lucide-react';
import type { FoodCategory } from '@/lib/types';

export const FoodShowcase: React.FC<{ categories: FoodCategory[] }> = ({ categories }) => {
  const featured = categories.find((c) => c.featured) || categories[0];
  const [active, setActive] = useState(featured);

  if (!active) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Big featured image */}
      <motion.div
        key={active.id}
        initial={{ opacity: 0.4, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl border-4 border-white min-h-[360px]"
      >
        <img src={active.image} alt={active.name} className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <div className="inline-flex items-center gap-1.5 bg-[#F6A18F] text-[#343538] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit mb-3">
            <Flame className="w-3.5 h-3.5 fill-[#343538]" />
            {active.tagline}
          </div>
          <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">{active.name}</h3>
          <p className="text-gray-200 mt-2 max-w-lg">{active.description}</p>
        </div>
      </motion.div>

      {/* Category tiles */}
      <div className="lg:col-span-5 grid grid-cols-2 gap-3 content-start">
        {categories.map((cat) => {
          const isActive = cat.id === active.id;
          return (
            <button
              key={cat.id}
              onMouseEnter={() => setActive(cat)}
              onFocus={() => setActive(cat)}
              onClick={() => setActive(cat)}
              className={`text-left rounded-2xl overflow-hidden border-2 transition-all group ${
                isActive ? 'border-[#F05535] shadow-lg' : 'border-transparent hover:border-[#F6A18F]'
              }`}
            >
              <div className="relative h-24 sm:h-28">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-2 left-2.5 right-2.5 text-white font-bold text-xs sm:text-sm leading-tight">
                  {cat.name}
                </span>
              </div>
            </button>
          );
        })}
        <Link
          href="/food"
          className="col-span-2 flex items-center justify-center gap-2 bg-[#343538] hover:bg-black text-white py-3 rounded-2xl font-bold text-sm transition-colors"
        >
          Explore Full Menu
          <ArrowRight className="w-4 h-4 text-[#F6A18F]" />
        </Link>
      </div>
    </div>
  );
};

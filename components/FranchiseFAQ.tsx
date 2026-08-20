'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FRANCHISE_FAQS } from '../data/siteData';

export const FranchiseFAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {FRANCHISE_FAQS.map((faq, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={faq.q}
            className={`rounded-2xl border transition-colors ${
              isOpen ? 'border-[#F05535] bg-white shadow-md' : 'border-gray-200 bg-white'
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-bold text-base sm:text-lg text-[#343538]">{faq.q}</span>
              <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isOpen ? 'bg-[#F05535] text-[#292A2D]' : 'bg-[#FFF0EC] text-[#D34518]'}`}>
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm sm:text-base text-[#717275] leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

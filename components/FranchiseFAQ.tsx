'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { FranchiseFAQ as FranchiseFAQItem } from '@/lib/types';

export const FranchiseFAQ: React.FC<{ faqs: FranchiseFAQItem[] }> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-answer-${idx}`;
        const buttonId = `faq-question-${idx}`;

        return (
          <div
            key={faq.q}
            className={`rounded-2xl border transition-all duration-200 ${
              isOpen ? 'border-[#F05535] bg-white shadow-md' : 'border-[#E3E3E4] bg-white hover:border-gray-300'
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer min-h-[56px] focus-visible:ring-2 focus-visible:ring-[#F05535] rounded-2xl"
              >
                <span className="font-heading font-bold text-base sm:text-lg text-[#343538] leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#F05535] text-white' : 'bg-[#FFF0EC] text-[#D34518]'
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
            </h3>

            {/* Answer panel always present in DOM for crawlers & screen readers */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`transition-all duration-300 ease-in-out px-5 sm:px-6 overflow-hidden ${
                isOpen ? 'max-h-96 pb-5 sm:pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
              }`}
            >
              <p className="body-regular text-[#717275]">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

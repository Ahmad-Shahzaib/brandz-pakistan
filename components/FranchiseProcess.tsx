'use client';

import React from 'react';
import { motion } from 'motion/react';
import type { ProcessStep } from '@/lib/types';

export const FranchiseProcess: React.FC<{ steps: ProcessStep[] }> = ({ steps }) => {
  return (
    <div className="relative">
      {/* vertical line */}
      <div className="absolute left-[27px] sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F6A18F] via-[#F05535] to-[#454649] sm:-translate-x-1/2" />

      <div className="space-y-6">
        {steps.map((s, idx) => {
          const leftSide = idx % 2 === 0;
          return (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className={`relative flex items-start gap-5 sm:w-1/2 ${
                leftSide ? 'sm:pr-10' : 'sm:ml-auto sm:pl-10 sm:flex-row-reverse sm:text-right'
              }`}
            >
              {/* node */}
              <div
                className={`relative z-10 w-14 h-14 rounded-2xl bg-[#F05535] text-[#292A2D] font-heading font-extrabold text-lg flex items-center justify-center shrink-0 shadow-lg shadow-[#292A2D]/15 border-4 border-white ${
                  leftSide ? 'sm:order-2 sm:-mr-[35px]' : 'sm:-ml-[35px]'
                }`}
              >
                {s.step}
              </div>
              <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-5 flex-1">
                <h3 className="font-heading font-extrabold text-lg text-[#343538]">{s.title}</h3>
                <p className="text-sm text-[#717275] mt-1 leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

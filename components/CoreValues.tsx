'use client';

import React from 'react';
import { motion } from 'motion/react';
import type { CoreValue } from '../types';
import { ShieldCheck, TrendingUp, Award, HeartHandshake } from 'lucide-react';

export const CoreValues: React.FC<{ values: CoreValue[] }> = ({ values }) => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      case 'Award':
        return <Award className="w-6 h-6" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-6 h-6" />;
    }
  };

  return (
    <section id="values" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#F05535] font-extrabold text-xs uppercase tracking-widest bg-[#FFF0EC] px-3.5 py-1.5 rounded-full border border-[#F05535]/20">
            Brand Pillars
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#343538] mt-3">
            Our <span className="relative inline-block px-1">
              <span className="relative z-10">Core Values</span>
              <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#F6A18F] z-0 rounded-xs opacity-80" />
            </span> Driving Excellence
          </h2>

          <p className="text-[#717275] text-base sm:text-lg mt-3">
            The fundamental beliefs that steer our kitchen operations, team culture, and partner relationships.
          </p>
        </div>

        {/* 4-across Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => {
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-[#F7F7F7] p-6 rounded-2xl border border-gray-200/80 shadow-sm transition-all duration-300 hover:border-[#F05535]/50 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold mb-5 bg-[#FFF0EC] text-[#F05535]">
                    {renderIcon(value.iconName)}
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-[#343538] mb-2 leading-snug">
                    {value.title}
                  </h3>

                  <p className="text-sm text-[#717275] leading-relaxed">
                    {value.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold text-[#717275]">
                  <span>Pillar #{idx + 1}</span>
                  <span className="text-[#F05535]">Brandz Pakistan Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

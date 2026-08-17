'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { LEADERSHIP } from '../data/siteData';

export const Leadership: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF8F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Leadership"
          title="The People Behind the Brand"
          description="Experienced operators guiding Fri-Chiks ® from the kitchen to national expansion."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP.map((m, idx) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <a href="#" aria-label={`${m.name} on LinkedIn`} className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 text-[#0A66C2] flex items-center justify-center hover:bg-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-extrabold text-lg text-[#1A1818]">{m.name}</h3>
                <p className="text-[#E51821] font-bold text-xs uppercase tracking-wide mt-0.5">{m.role}</p>
                <p className="text-sm text-[#6B655C] mt-2 leading-relaxed">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

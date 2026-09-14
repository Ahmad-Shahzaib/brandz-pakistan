'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import type { LeadershipMember } from '@/lib/types';

const executivePortraits = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
];

export const Leadership: React.FC<{ members: LeadershipMember[] }> = ({ members }) => {
  return (
    <section id="leadership" className="section-padding bg-[#F7F7F7] overflow-hidden scroll-mt-20">
      <div className="section-container">
        <SectionHeader
          eyebrow="Leadership"
          title="The People Behind the Brand"
          description="Experienced operators guiding Brandz Pakistan from concept development to national expansion."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, idx) => {
            const isStorefrontOrGeneric = !m.image || m.image.includes('storefront') || m.image.includes('fried_chicken');
            const portrait = isStorefrontOrGeneric
              ? executivePortraits[idx % executivePortraits.length]
              : m.image;
            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={portrait}
                    alt={m.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 text-[#0A66C2] flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              <div className="p-5">
                <h3 className="font-heading font-extrabold text-lg text-[#343538]">{m.name}</h3>
                <p className="text-[#F05535] font-bold text-xs uppercase tracking-wide mt-0.5">{m.role}</p>
                <p className="text-sm text-[#717275] mt-2 leading-relaxed">{m.bio}</p>
              </div>
            </motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

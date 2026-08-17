'use client';

import React from 'react';
import { motion } from 'motion/react';
import { TEAM_IMAGE, STOREFRONT_IMAGE, INTERIOR_IMAGE, AWARD_IMAGE } from '../data/corporateData';
import { Building2, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { useModals } from './SiteChrome';

export const ClosingCTA: React.FC = () => {
  const { openFranchiseModal } = useModals();
  const onOpenFranchiseModal = openFranchiseModal;
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading + Paragraph + Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 text-[#E51821] font-bold text-xs uppercase tracking-widest bg-[#FFF0F1] px-3.5 py-1.5 rounded-full mb-3 border border-[#E51821]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Shape the Future of QSR</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1818] tracking-tight leading-tight">
              Be Part of <span className="text-[#E51821]">Fri-Chiks ®</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#6B655C] leading-relaxed">
              Whether you are an experienced restaurant operator or an ambitious entrepreneur seeking a high-growth quick service restaurant franchise, our corporate team is ready to welcome you.
            </p>

            <p className="mt-3 text-sm text-[#6B655C]">
              Join our rapidly growing network of 45+ outlets as we expand into prime commercial hubs across Lahore, Faisalabad, Gujranwala, Islamabad, and nationwide.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenFranchiseModal}
                className="bg-[#E51821] hover:bg-[#B80F16] text-white px-7 py-4 rounded-xl font-bold text-base shadow-lg shadow-red-900/20 hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <Building2 className="w-5 h-5 text-[#FFC700]" />
                <span>Franchise Opportunities</span>
                <ArrowRight className="w-4 h-4 text-[#FFC700]" />
              </button>

              <button
                onClick={onOpenFranchiseModal}
                className="bg-[#FAF8F7] hover:bg-gray-100 text-[#1A1818] border border-gray-300 px-6 py-4 rounded-xl font-bold text-base transition-all flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#E51821]" />
                <span>Speak With Franchising Team</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Grid of Staggered Photos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Image 1 - Top Left */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-4/3 transform -rotate-1 hover:rotate-0 transition-transform">
                <img
                  src={TEAM_IMAGE}
                  alt="Fri-Chiks Team"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20" />
                <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs text-[10px] font-bold px-2 py-0.5 rounded text-[#1A1818]">
                  Team Spirit
                </span>
              </div>

              {/* Image 2 - Top Right (Staggered Down) */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-4/3 transform translate-y-4 rotate-2 hover:rotate-0 transition-transform">
                <img
                  src={STOREFRONT_IMAGE}
                  alt="Store Opening"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20" />
                <span className="absolute bottom-2 left-2 bg-[#E51821] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  New Outlet Launch
                </span>
              </div>

              {/* Image 3 - Bottom Left */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-4/3 transform -translate-y-2 rotate-1 hover:rotate-0 transition-transform">
                <img
                  src={INTERIOR_IMAGE}
                  alt="Kitchen Operations"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20" />
                <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs text-[10px] font-bold px-2 py-0.5 rounded text-[#1A1818]">
                  Kitchen Excellence
                </span>
              </div>

              {/* Image 4 - Bottom Right */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-4/3 transform translate-y-2 -rotate-2 hover:rotate-0 transition-transform">
                <img
                  src={AWARD_IMAGE}
                  alt="Awards Ceremony"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20" />
                <span className="absolute bottom-2 left-2 bg-[#FFC700] text-[#1A1818] text-[10px] font-bold px-2 py-0.5 rounded">
                  Gala Recognition
                </span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
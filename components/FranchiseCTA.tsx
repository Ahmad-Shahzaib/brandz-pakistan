'use client';

import React from 'react';
import { motion } from 'motion/react';
import { INTERIOR_IMAGE } from '../data/corporateData';
import { Building2, ArrowRight, CheckCircle2, DollarSign, Award, ShieldCheck } from 'lucide-react';
import { useModals } from './SiteChrome';

export const FranchiseCTA: React.FC = () => {
  const { openFranchiseModal } = useModals();
  const onOpenFranchiseModal = openFranchiseModal;
  return (
    <section id="franchise-cta" className="py-20 bg-[#FAF8F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Framed Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-200/80 shadow-xl relative overflow-hidden">
          
          {/* Subtle Background Accent Glow */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#FFF0F1] rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Column: Store Interior Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 group">
                <img
                  src={INTERIOR_IMAGE}
                  alt="Modern Fri-Chiks Store Interior"
                  className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#E51821] text-white flex items-center justify-center font-bold text-xs">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-xs text-[#1A1818]">Turnkey Store Setup</p>
                      <p className="text-[10px] text-[#6B655C]">Store Outlets Fully Operational</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#E51821] bg-[#FFF0F1] px-2 py-0.5 rounded-md">
                    Proven ROI
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Heading + Pitch + Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 text-[#E51821] font-bold text-xs uppercase tracking-widest bg-[#FFF0F1] px-3.5 py-1.5 rounded-full mb-3 border border-[#E51821]/20">
                <Award className="w-3.5 h-3.5" />
                <span>Franchise Opportunity</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1818] tracking-tight leading-tight">
                Join <span className="text-[#E51821]">Fri-Chiks ®</span> <br />
                & Grow Your Food Business
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#6B655C] leading-relaxed">
                Become a franchise partner with one of the fastest-growing fried chicken brands. Benefit from our established supply chain, automated POS suite, site assessment, and comprehensive staff training programs.
              </p>

              {/* Franchise Perks Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#1A1818] bg-[#FAF8F7] p-2.5 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-[#E51821] shrink-0" />
                  <span>Comprehensive SOP Training</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#1A1818] bg-[#FAF8F7] p-2.5 rounded-xl border border-gray-100">
                  <DollarSign className="w-4 h-4 text-[#E51821] shrink-0" />
                  <span>Competitive Royalty Structure</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#1A1818] bg-[#FAF8F7] p-2.5 rounded-xl border border-gray-100">
                  <ShieldCheck className="w-4 h-4 text-[#E51821] shrink-0" />
                  <span>100% Halal Supply Chain</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#1A1818] bg-[#FAF8F7] p-2.5 rounded-xl border border-gray-100">
                  <Building2 className="w-4 h-4 text-[#E51821] shrink-0" />
                  <span>Site Selection Guidance</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <button
                  onClick={onOpenFranchiseModal}
                  className="bg-[#E51821] hover:bg-[#B80F16] text-white px-7 py-4 rounded-xl font-bold text-base shadow-lg shadow-red-900/20 hover:shadow-xl transition-all flex items-center gap-3 cursor-pointer"
                >
                  <span>Franchise Opportunities</span>
                  <ArrowRight className="w-5 h-5 text-[#FFC700]" />
                </button>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
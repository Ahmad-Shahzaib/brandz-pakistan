'use client';

import React from 'react';
import { motion } from 'motion/react';
import { STOREFRONT_IMAGE, STATS_DATA } from '../data/corporateData';
import { CheckCircle2, Award, Store, Users, ArrowRight } from 'lucide-react';
import { useModals } from './SiteChrome';

export const BrandIntro: React.FC = () => {
  const { openFranchiseModal } = useModals();
  return (
    <section id="brand-intro" className="py-20 bg-[#FAF8F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Real Storefront Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Accent Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#E51821]/20 via-[#FFC700]/20 to-[#E51821]/10 rounded-3xl transform -rotate-2 blur-sm" />

              {/* Main Storefront Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={STOREFRONT_IMAGE}
                  alt="Fri-Chiks Storefront Signage"
                  className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Overlaid Store Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E51821] text-white flex items-center justify-center font-bold">
                      <Store className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-[#1A1818]">
                        Flagship Outlet - MM Alam Road, Lahore
                      </h4>
                      <p className="text-xs text-[#6B655C]">
                        Modern Dine-In & Express Concept
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#E51821] bg-[#FFF0F1] px-2.5 py-1 rounded-full border border-[#E51821]/30">
                    Open Daily
                  </span>
                </div>
              </div>

              {/* Floating Stat Pill Top Right */}
              <div className="absolute -top-6 -right-4 sm:right-2 bg-[#FFC700] text-[#1A1818] px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm shadow-xl flex items-center gap-2 border-2 border-white transform rotate-3">
                <Award className="w-4 h-4 text-[#E51821]" />
                <span>45+ Active Outlets</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Corporate Story & Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-[#E51821] font-bold text-xs sm:text-sm uppercase tracking-widest bg-[#FFF0F1] px-3.5 py-1.5 rounded-full w-fit mb-3 border border-[#E51821]/20">
              <span className="w-2 h-2 rounded-full bg-[#E51821] animate-ping" />
              <span>Fri-Chiks ® Brand Overview</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1818] tracking-tight leading-tight">
              Lahore's Premier <span className="text-[#E51821] relative">
                Crispy Fried Chicken
              </span> Chain
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-[#6B655C] leading-relaxed">
              <p>
                Founded in 2002 in Lahore, <strong className="text-[#1A1818]">Fri-Chiks ®</strong> started with a passionate mission: delivering supreme golden crunch, proprietary spice marinades, and affordable family meals under our famous tagline <strong className="text-[#E51821]">"Something Different!"</strong>.
              </p>
              <p>
                What began as a pioneer fast-food kitchen in Lahore has rapidly expanded into a robust 45+ outlet network across Gulberg, Johar Town, DHA, Model Town, Gujranwala, Faisalabad, and Islamabad. By combining standardized kitchen SOPs with central processing intelligence, we empower franchise partners to achieve predictable, sustainable growth.
              </p>
            </div>

            {/* Value Checkmarks */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-[#1A1818]">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-gray-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#E51821] shrink-0" />
                <span>100% Halal & PFA A+ Certified</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-gray-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#E51821] shrink-0" />
                <span>Proprietary 12-Spice Coating</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-gray-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#E51821] shrink-0" />
                <span>Zero Franchisee Store Closures</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-gray-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#E51821] shrink-0" />
                <span>Turnkey Central Supply Logistics</span>
              </div>
            </div>

            {/* Action Call */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={openFranchiseModal}
                className="bg-[#E51821] hover:bg-[#B80F16] text-white px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-md shadow-red-900/20 hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 text-[#FFC700]" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Key Stats Counter Strip Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center"
        >
          {STATS_DATA.map((stat, idx) => (
            <div key={stat.id} className={`p-4 ${idx !== STATS_DATA.length - 1 ? 'lg:border-r lg:border-gray-100' : ''}`}>
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#E51821]">
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <div className="font-bold text-sm sm:text-base text-[#1A1818] mt-1">
                {stat.label}
              </div>
              <p className="text-xs text-[#6B655C] mt-0.5">
                {stat.subtext}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
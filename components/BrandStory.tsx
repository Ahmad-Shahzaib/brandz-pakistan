'use client';

import React from 'react';
import { motion } from 'motion/react';
import { HERO_IMAGE } from '../data/corporateData';
import { Flame, Sparkles, CheckCircle } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Menu Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 text-[#F05535] font-bold text-xs uppercase tracking-widest bg-[#FFF0EC] px-3.5 py-1.5 rounded-full mb-3 border border-[#F05535]/20">
              <Flame className="w-4 h-4 fill-[#F05535]" />
              <span>Good Food Evolution</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#343538] tracking-tight leading-tight">
              Crafted With Passion, <br />
              <span className="text-[#F05535] relative inline-block">
                Perfected for Golden Crunch
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#717275] leading-relaxed">
              At <strong className="text-[#343538]">Fri-Chiks ®</strong>, we believe exceptional fried chicken isn't made by accident — it's engineered through culinary precision, secret marinades, and genuine love for comfort food.
            </p>

            <p className="mt-4 text-base text-[#717275] leading-relaxed">
              Every chicken piece undergoes a meticulous 24-hour marination cycle in our secret 12-spice marinade, ensuring deep flavor down to the bone. Our proprietary double-dredge coating technique creates an ultra-crispy golden crust that locks in juices.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 bg-[#F7F7F7] p-3.5 rounded-xl border border-gray-100">
                <CheckCircle className="w-5 h-5 text-[#F05535] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#343538]">100% Fresh Farm Poultry</h4>
                  <p className="text-xs text-[#717275]">Chilled daily directly from certified ethical local farms, never frozen.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#F7F7F7] p-3.5 rounded-xl border border-gray-100">
                <CheckCircle className="w-5 h-5 text-[#F05535] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#343538]">Signature Side Pairings</h4>
                  <p className="text-xs text-[#717275]">House-made garlic butter rice, creamy coleslaw, and fiery sambal dipping sauces.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Product Photo Overlapping Blob Background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Soft Rounded Organic Blob Background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#FFF0EC] via-[#FFF5F2] to-[#FFF0EC] rounded-3xl transform rotate-2 shadow-inner" />

              {/* Product Photo Breaking Out */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white"
              >
                <img
                  src={HERO_IMAGE}
                  alt="Fri-Chiks Crispy Fried Chicken Bucket & Sides"
                  className="w-full h-[360px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Floating Quality Tag */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F6A18F] fill-[#F6A18F]" />
                  <span className="text-xs font-extrabold text-[#343538]">24-Hour Marinade</span>
                </div>

                <div className="absolute bottom-4 left-4 bg-[#343538]/90 backdrop-blur-md text-white px-4 py-2.5 rounded-2xl border border-white/20 text-xs font-medium">
                  <span className="font-bold text-[#F6A18F]">Golden Crunch Guarantee</span> • Always Served Hot
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
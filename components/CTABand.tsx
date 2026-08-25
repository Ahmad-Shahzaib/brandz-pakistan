'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { useModals } from './SiteChrome';

interface CTABandProps {
  heading?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  image?: string;
}

export const CTABand: React.FC<CTABandProps> = ({
  heading = 'Your Next Business Could Be a Brandz Pakistan Brand',
  text = 'Join a growing food brand backed by proven restaurant systems, operational experience and dedicated franchise support.',
  primaryLabel = 'Apply for Franchise',
  primaryHref = '/apply',
  image = '/assets/images/store_interior_1785741297229.jpg',
}) => {
  const { openFranchiseModal } = useModals();
  return (
    <section className="py-16 sm:py-20 bg-[#F7F7F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="absolute inset-0">
            <img src={image} alt="" aria-hidden className="h-full w-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#292A2D] via-[#292A2D]/85 to-[#B93A23]/55" />
          </div>
          <div className="relative z-10 max-w-2xl p-8 sm:p-12 lg:p-16">
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-200 sm:text-lg">{text}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={primaryHref}
                className="flex items-center gap-2 rounded-xl bg-[#F05535] px-7 py-4 text-base font-bold text-[#292A2D] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#D34518]"
              >
                <span>{primaryLabel}</span>
                <ArrowRight className="h-5 w-5 text-[#292A2D]" />
              </Link>
              <button
                onClick={openFranchiseModal}
                className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <PhoneCall className="h-4 w-4 text-[#F6A18F]" />
                <span>Talk to Our Franchise Team</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

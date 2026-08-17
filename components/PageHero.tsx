'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronRight, Home } from 'lucide-react';

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image?: string;
  crumbs?: Crumb[];
  align?: 'left' | 'center';
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  description,
  image = '/assets/images/hero_fried_chicken_1785741263782.jpg',
  crumbs = [],
  align = 'left',
  children,
}) => {
  return (
    <section className="relative bg-[#1A1818] pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-35">
        <img
          src={image}
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center scale-105 brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1818] via-[#1A1818]/90 to-[#E51821]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1818] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={align === 'center' ? 'max-w-3xl mx-auto text-center' : 'max-w-3xl'}
        >
          {/* Breadcrumbs */}
          <nav
            className={`flex items-center gap-1.5 text-xs text-gray-300 mb-4 ${
              align === 'center' ? 'justify-center' : ''
            }`}
          >
            <Link href="/" className="flex items-center gap-1 hover:text-[#FFC700] transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-gray-500" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-[#FFC700] transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-[#FFC700] font-semibold">{c.label}</span>
                )}
              </span>
            ))}
          </nav>

          <span className="inline-flex items-center gap-2 bg-[#FFC700] text-[#1A1818] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            {eyebrow}
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>

          {description && (
            <p className={`mt-5 text-lg text-gray-200 font-medium leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
              {description}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
};

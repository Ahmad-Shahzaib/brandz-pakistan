'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { Brand } from '@/lib/types';

interface Props {
  brands: Brand[];
  categories: string[];
}

export const HomeBrandsSection: React.FC<Props> = ({ brands, categories }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categoryList = useMemo(() => {
    return ['All', ...categories.slice(0, 6)];
  }, [categories]);

  const filteredBrands = useMemo(() => {
    if (activeCategory === 'All') return brands.slice(0, 18);
    return brands
      .filter((b) => b.category?.toLowerCase() === activeCategory.toLowerCase())
      .slice(0, 18);
  }, [activeCategory, brands]);

  return (
    <div id="brands" className="scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-6">
        <div>
          <span className="eyebrow">Our Brands</span>
          <h2 className="section-title mt-1">A portfolio for every craving.</h2>
        </div>
        <Link
          href="/brands"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F05535] hover:text-[#D34518] transition-colors"
        >
          View all {brands.length} brands <ArrowRight size={15} />
        </Link>
      </div>

      {/* Semantic Category Buttons with Mobile Horizontal Scroll */}
      <div className="overflow-x-auto no-scrollbar pb-3 mb-6 flex items-center gap-2">
        {categoryList.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#F05535] text-white shadow-sm'
                  : 'bg-white text-[#343538] border border-gray-200 hover:border-gray-300'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Logos Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredBrands.map((brand) => (
            <motion.div
              layout
              key={brand.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/brands/${brand.slug}`}
                className="group flex h-28 items-center justify-center rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#F05535]/50 hover:shadow-md"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} official logo`}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredBrands.length === 0 && (
        <div className="text-center py-10 bg-white rounded-2xl border border-gray-200 p-6 text-sm text-[#717275]">
          No brands found in this category.
        </div>
      )}

      {/* Explore All CTA */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/brands"
          className="btn-secondary text-xs"
        >
          Explore All Brands &amp; Menus <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

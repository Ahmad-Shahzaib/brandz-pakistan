'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search, Sparkles, X } from 'lucide-react';
import type { Brand } from '@/lib/types';

interface BrandsExplorerProps {
  initialBrands: Brand[];
  categories: string[];
}

export function BrandsExplorer({ initialBrands, categories }: BrandsExplorerProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBrands = useMemo(() => {
    return initialBrands.filter((brand) => {
      const matchesCategory =
        selectedCategory === 'All' || brand.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        !search.trim() ||
        brand.name.toLowerCase().includes(search.toLowerCase()) ||
        brand.category.toLowerCase().includes(search.toLowerCase()) ||
        brand.tagline.toLowerCase().includes(search.toLowerCase()) ||
        brand.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [initialBrands, selectedCategory, search]);

  const categoryList = useMemo(() => ['All', ...categories], [categories]);

  return (
    <div>
      {/* Controls Bar: Search & Category Filter */}
      <div className="sticky top-20 z-30 mb-10 -mx-4 rounded-2xl border border-[#E3E3E4] bg-white/95 p-4 shadow-md backdrop-blur-md sm:mx-0 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Live Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A8B8E]" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by brand name, cuisine, or keyword…"
              className="w-full rounded-xl border border-[#E3E3E4] bg-[#F7F7F7] py-2.5 pl-10 pr-9 text-sm text-[#343538] placeholder:text-[#8A8B8E] focus:border-[#F05535] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F05535]/20"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Results count & status */}
          <div className="text-xs font-bold text-[#717275]">
            Showing <span className="text-[#F05535]">{filteredBrands.length}</span> of {initialBrands.length} brands
          </div>
        </div>

        {/* Scrollable Category Filter Chips */}
        <div className="mt-4 flex gap-2 overflow-x-auto hide-scrollbar pb-1 pt-1">
          {categoryList.map((cat) => {
            const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  isSelected
                    ? 'bg-[#F05535] text-white shadow-sm shadow-[#F05535]/20'
                    : 'border border-[#E3E3E4] bg-[#F7F7F7] text-[#717275] hover:border-[#F05535] hover:text-[#343538]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Brands Display Grid */}
      {filteredBrands.length === 0 ? (
        <div className="rounded-3xl border border-[#E3E3E4] bg-white p-12 text-center">
          <Sparkles className="mx-auto h-12 w-12 text-[#F6A18F]" />
          <h3 className="card-title mt-4">No brands match your criteria</h3>
          <p className="body-regular mt-2">Try adjusting your keyword or clearing the active category filter.</p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedCategory('All');
            }}
            className="btn-primary mt-6"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {selectedCategory === 'All' && !search.trim() ? (
            // Grouped by Category when no search filter is active
            categories.map((category) => {
              const categoryBrands = initialBrands.filter((b) => b.category === category);
              if (categoryBrands.length === 0) return null;
              return (
                <section key={category} id={category.toLowerCase().replaceAll(' ', '-')} className="scroll-mt-36">
                  <div className="mb-5 flex items-center justify-between border-b border-[#E3E3E4] pb-3">
                    <h2 className="font-heading text-2xl font-bold text-[#343538]">{category}</h2>
                    <span className="rounded-full bg-[#FFF0EC] px-3 py-1 text-xs font-extrabold text-[#D34518]">
                      {categoryBrands.length === 1 ? '1 brand' : `${categoryBrands.length} brands`}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {categoryBrands.map((brand) => (
                      <BrandCard key={brand.slug} brand={brand} />
                    ))}
                  </div>
                </section>
              );
            })
          ) : (
            // Flat grid when search or specific category is selected
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-heading text-2xl font-bold text-[#343538]">
                  {selectedCategory !== 'All' ? selectedCategory : 'Search Results'}
                </h2>
                <span className="rounded-full bg-[#FFF0EC] px-3 py-1 text-xs font-extrabold text-[#D34518]">
                  {filteredBrands.length === 1 ? '1 brand' : `${filteredBrands.length} brands`}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredBrands.map((brand) => (
                  <BrandCard key={brand.slug} brand={brand} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-[#E3E3E4] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#F05535] hover:shadow-xl hover:shadow-[#343538]/5"
    >
      <div>
        {/* Logo Container with fixed media ratio */}
        <div className="flex h-28 items-center justify-center rounded-xl bg-[#F7F7F7] p-4 transition group-hover:bg-white">
          <Image
            src={brand.logo}
            alt={`${brand.name} official logo`}
            width={180}
            height={90}
            className="max-h-full w-full object-contain transition group-hover:scale-105"
          />
        </div>

        {/* Tag & Category badge */}
        <div className="mt-4 flex items-center justify-between">
          <span className="rounded-md border border-[#E3E3E4] bg-[#F7F7F7] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-[#717275]">
            {brand.category}
          </span>
          <span className="text-[10px] font-semibold text-[#8A8B8E]">
            Since {brand.since}
          </span>
        </div>

        {/* Brand Name & Tagline */}
        <h3 className="card-title mt-2 group-hover:text-[#F05535] transition-colors">
          {brand.name}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-[#717275] line-clamp-2">
          {brand.tagline || brand.description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-3 text-xs font-bold text-[#D34518]">
        <span>Explore Brand</span>
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Newspaper } from 'lucide-react';
import type { CompanyNews } from '@/types';

export const NewsExplorer: React.FC<{ news: CompanyNews[] }> = ({ news }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(news.map((item) => item.category).filter(Boolean)));
    return ['All', ...unique];
  }, [news]);

  const filtered = useMemo(() => {
    if (selectedCategory === 'All') return news;
    return news.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, news]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div>
      {/* Interactive Category Filter Pills with horizontal scroll on mobile */}
      <div className="mb-10 overflow-x-auto no-scrollbar pb-2 flex items-center gap-2">
        {categories.map((c) => {
          const isActive = selectedCategory === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedCategory(c)}
              className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#F05535] text-white shadow-sm'
                  : 'bg-white text-[#343538] border border-gray-200 hover:border-gray-300'
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Featured Story */}
      {featured && (
        <article className="mb-12 grid gap-8 overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-sm hover:shadow-md transition-shadow lg:grid-cols-2">
          <div className="relative h-64 min-h-[300px] lg:h-auto overflow-hidden bg-gray-100">
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <span className="absolute left-4 top-4 rounded-full bg-[#F05535] px-3.5 py-1 text-xs font-bold text-white shadow-xs">
              Featured Story
            </span>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#F05535]">
              {featured.category}
            </span>

            <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold leading-tight text-[#343538]">
              <Link
                href={`/media/${featured.slug || featured.id}`}
                className="hover:text-[#F05535] transition-colors"
              >
                {featured.title}
              </Link>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#717275] leading-relaxed">
              {featured.summary}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-[#717275]">
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="h-3.5 w-3.5 text-[#F05535]" />
                {featured.date}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="h-3.5 w-3.5 text-[#F05535]" />
                {featured.readTime}
              </span>
            </div>

            <div className="mt-6">
              <Link
                href={`/media/${featured.slug || featured.id}`}
                className="inline-flex items-center gap-2 font-bold text-sm text-[#F05535] hover:text-[#D34518] group transition-all"
              >
                <span>Read Full Story</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </article>
      )}

      {/* More Stories Grid */}
      {rest.length > 0 && (
        <div>
          <h3 className="font-heading font-extrabold text-xl text-[#343538] mb-6">
            More News &amp; Updates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((n, idx) => (
              <motion.article
                key={n.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={n.image}
                      alt={n.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[10px] font-bold text-[#343538] shadow-xs">
                      {n.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-3 text-[11px] text-[#717275]">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-[#F05535]" />
                        {n.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-[#717275]" />
                        {n.readTime}
                      </span>
                    </div>

                    <h4 className="font-heading text-base font-extrabold leading-snug text-[#343538] group-hover:text-[#F05535] transition-colors">
                      <Link href={`/media/${n.slug || n.id}`}>{n.title}</Link>
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-[#717275] line-clamp-3">
                      {n.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <Link
                    href={`/media/${n.slug || n.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F05535] hover:text-[#D34518] group-hover:gap-2 transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-gray-200/80 p-8 shadow-xs">
          <Newspaper className="w-12 h-12 mx-auto text-gray-300 mb-3" />
          <h3 className="font-heading font-bold text-lg text-[#343538]">No articles found</h3>
          <p className="text-xs text-[#717275] mt-1 max-w-sm mx-auto">
            There are currently no published articles in this category.
          </p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="mt-4 btn-primary py-2 px-5 text-xs inline-block"
          >
            Show All Stories
          </button>
        </div>
      )}
    </div>
  );
};

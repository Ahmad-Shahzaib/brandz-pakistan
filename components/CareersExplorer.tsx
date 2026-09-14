'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MapPin, Briefcase, ChevronRight, Clock, Search, Sparkles, Building2 } from 'lucide-react';
import type { Job } from '@/lib/types';

export const CareersExplorer: React.FC<{ jobs: Job[] }> = ({ jobs }) => {
  const [dept, setDept] = useState('All');
  const [query, setQuery] = useState('');

  const departments = useMemo(
    () => ['All', ...Array.from(new Set(jobs.map((j) => j.department)))],
    [jobs]
  );

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      if (dept !== 'All' && j.department !== dept) return false;
      if (
        query &&
        !`${j.title} ${j.department} ${j.location} ${j.summary}`
          .toLowerCase()
          .includes(query.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [dept, query, jobs]);

  return (
    <div>
      {/* 3-step Journey Callout */}
      <div className="mb-10 bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="eyebrow">Our Hiring Process</span>
            <h3 className="font-heading font-extrabold text-xl text-[#343538] mt-1">
              How You Join Brandz Pakistan
            </h3>
          </div>
          <span className="text-xs font-semibold text-[#717275] bg-[#F7F7F7] px-3.5 py-1.5 rounded-full border border-gray-200/70">
            Fast-track review within 48h
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#F7F7F7] rounded-2xl p-4 border border-gray-100 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#FFF0EC] text-[#F05535] font-extrabold flex items-center justify-center text-xs shrink-0">
              01
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#343538]">Explore & Apply</h4>
              <p className="text-xs text-[#717275] mt-1">
                Select your preferred opening and submit your profile or resume.
              </p>
            </div>
          </div>

          <div className="bg-[#F7F7F7] rounded-2xl p-4 border border-gray-100 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#FFF0EC] text-[#F05535] font-extrabold flex items-center justify-center text-xs shrink-0">
              02
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#343538]">Screening & Interview</h4>
              <p className="text-xs text-[#717275] mt-1">
                Conversations with operations leaders or corporate hiring teams.
              </p>
            </div>
          </div>

          <div className="bg-[#F7F7F7] rounded-2xl p-4 border border-gray-100 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#FFF0EC] text-[#F05535] font-extrabold flex items-center justify-center text-xs shrink-0">
              03
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#343538]">Offer & Orientation</h4>
              <p className="text-xs text-[#717275] mt-1">
                Welcome to the family with structured on-the-job training.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        {/* Horizontal Scrolling Filter Tabs */}
        <div className="overflow-x-auto no-scrollbar pb-2 sm:pb-0 flex items-center gap-2">
          {departments.map((d) => (
            <button
              key={d}
              onClick={() => setDept(d)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                dept === d
                  ? 'bg-[#F05535] text-white shadow-sm'
                  : 'bg-white text-[#343538] border border-gray-200 hover:border-gray-300'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Quick Search */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search roles or cities…"
            className="w-full bg-white text-xs pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]"
          />
        </div>
      </div>

      {/* Counter */}
      <p className="text-xs text-[#717275] mb-4">
        Showing <strong className="text-[#343538] font-bold">{filtered.length}</strong> available{' '}
        {filtered.length === 1 ? 'position' : 'positions'}
      </p>

      {/* Job Cards */}
      <div className="space-y-4">
        {filtered.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl border border-gray-200/80 shadow-xs p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 hover:border-[#F05535]/40 hover:shadow-md transition-all group"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-heading font-extrabold text-xl text-[#343538] group-hover:text-[#F05535] transition-colors">
                  {job.title}
                </h3>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F05535] bg-[#FFF0EC] px-2.5 py-0.5 rounded-full border border-[#F6A18F]/30">
                  {job.department}
                </span>
              </div>

              <p className="text-sm text-[#717275] leading-relaxed max-w-2xl">
                {job.summary}
              </p>

              {/* Visually Separated Location & Type Chips */}
              <div className="pt-1 flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F7F7F7] border border-gray-200/80 text-[#343538] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#F05535]" />
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F7F7F7] border border-gray-200/80 text-[#343538] font-medium">
                  <Briefcase className="w-3.5 h-3.5 text-[#717275]" />
                  {job.type}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F7F7F7] border border-gray-200/80 text-[#343538] font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#717275]" />
                  Hiring Now
                </span>
              </div>
            </div>

            {/* Direct Link to Job Detail Page */}
            <div className="shrink-0 pt-2 sm:pt-0">
              <Link
                href={`/careers/${job.slug || job.id}`}
                className="inline-flex items-center gap-2 bg-[#343538] hover:bg-black text-white px-5 py-3 rounded-xl font-bold text-xs transition-colors shadow-xs"
              >
                <span>View &amp; Apply</span>
                <ChevronRight className="w-4 h-4 text-[#F6A18F]" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-gray-200/80 p-8 shadow-xs">
          <Briefcase className="w-12 h-12 mx-auto text-gray-300 mb-3" />
          <h3 className="font-heading font-bold text-lg text-[#343538]">No open positions found</h3>
          <p className="text-xs text-[#717275] mt-1 max-w-sm mx-auto">
            We couldn&apos;t find any roles matching your search or department filter. Try resetting filters or exploring other departments.
          </p>
          <button
            onClick={() => {
              setDept('All');
              setQuery('');
            }}
            className="mt-4 btn-primary py-2 px-5 text-xs inline-block"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

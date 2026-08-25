'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Search, Navigation, Star } from 'lucide-react';
import type { Restaurant } from '@/lib/types';

const formats = ['All Formats', 'Standard', 'Express', 'Drive-Thru', 'Takeaway'];

export const RestaurantExplorer: React.FC<{ restaurants: Restaurant[] }> = ({ restaurants }) => {
  const [city, setCity] = useState('All Cities');
  const [format, setFormat] = useState('All Formats');
  const [query, setQuery] = useState('');
  const cities = useMemo(() => ['All Cities', ...Array.from(new Set(restaurants.map((r) => r.city)))], [restaurants]);

  const filtered = useMemo(() => {
    return restaurants.filter((r) => {
      if (city !== 'All Cities' && r.city !== city) return false;
      if (format !== 'All Formats' && r.format !== format) return false;
      if (query && !`${r.name} ${r.area} ${r.city}`.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [city, format, query, restaurants]);

  return (
    <div>
      {/* Filter bar */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <div className="relative sm:col-span-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search restaurants…"
            className="w-full bg-[#F7F7F7] text-sm pl-9 pr-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]"
          />
        </div>
        <select value={city} onChange={(e) => setCity(e.target.value)} className="bg-[#F7F7F7] text-sm px-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]">
          {cities.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select value={format} onChange={(e) => setFormat(e.target.value)} className="bg-[#F7F7F7] text-sm px-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]">
          {formats.map((f) => <option key={f}>{f}</option>)}
        </select>
      </div>

      <p className="text-sm text-[#717275] mb-6">
        Showing <strong className="text-[#343538]">{filtered.length}</strong> of {restaurants.length} restaurants
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((r, idx) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-lg transition-shadow group"
          >
            <div className="relative h-44 overflow-hidden">
              <img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute top-3 left-3 bg-white/95 text-[#343538] text-[10px] font-bold px-2.5 py-1 rounded-full">{r.format}</span>
              {r.flagship && (
                <span className="absolute top-3 right-3 bg-[#F05535] text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#F6A18F] text-[#F6A18F]" /> Flagship
                </span>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-heading font-extrabold text-lg text-[#343538] leading-snug">{r.name}</h3>
              <div className="mt-3 space-y-1.5 text-xs text-[#717275]">
                <p className="flex items-start gap-2"><MapPin className="w-3.5 h-3.5 text-[#F05535] shrink-0 mt-0.5" />{r.address}</p>
                <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#F05535] shrink-0" />{r.phone}</p>
                <p className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[#F05535] shrink-0" />{r.hours}</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {r.services.map((s) => (
                  <span key={s} className="text-[10px] font-semibold text-[#F05535] bg-[#FFF0EC] px-2 py-0.5 rounded-full">{s}</span>
                ))}
              </div>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(r.name + ' ' + r.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 bg-[#343538] hover:bg-black text-white py-2.5 rounded-xl font-bold text-xs transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#F6A18F]" /> Get Directions
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-[#717275]">
          <MapPin className="w-10 h-10 mx-auto text-gray-300 mb-3" />
          <p className="font-semibold">No restaurants match your filters.</p>
          <button onClick={() => { setCity('All Cities'); setFormat('All Formats'); setQuery(''); }} className="mt-3 text-[#F05535] font-bold text-sm">Reset filters</button>
        </div>
      )}
    </div>
  );
};

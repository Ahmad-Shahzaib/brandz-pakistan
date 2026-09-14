'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Search, Navigation, Star, Store, Filter } from 'lucide-react';
import type { Restaurant } from '@/lib/types';

const formats = ['All Formats', 'Standard', 'Express', 'Drive-Thru', 'Takeaway'];

export const RestaurantExplorer: React.FC<{ restaurants: Restaurant[] }> = ({ restaurants }) => {
  const [brand, setBrand] = useState('All Brands');
  const [city, setCity] = useState('All Cities');
  const [format, setFormat] = useState('All Formats');
  const [query, setQuery] = useState('');

  const brands = useMemo(() => {
    const list = Array.from(new Set(restaurants.map((r) => r.brand || 'Fri-Chiks')));
    return ['All Brands', ...list];
  }, [restaurants]);

  const cities = useMemo(() => {
    const list = Array.from(new Set(restaurants.map((r) => r.city)));
    return ['All Cities', ...list];
  }, [restaurants]);

  const filtered = useMemo(() => {
    return restaurants.filter((r) => {
      const restaurantBrand = r.brand || 'Fri-Chiks';
      if (brand !== 'All Brands' && restaurantBrand !== brand) return false;
      if (city !== 'All Cities' && r.city !== city) return false;
      if (format !== 'All Formats' && r.format !== format) return false;
      if (
        query &&
        !`${r.name} ${r.area} ${r.city} ${restaurantBrand}`.toLowerCase().includes(query.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [brand, city, format, query, restaurants]);

  const resetFilters = () => {
    setBrand('All Brands');
    setCity('All Cities');
    setFormat('All Formats');
    setQuery('');
  };

  const isFiltered = brand !== 'All Brands' || city !== 'All Cities' || format !== 'All Formats' || Boolean(query);

  return (
    <div>
      {/* Filter bar with visible labels and brand filter */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-5 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Keyword Search */}
          <div>
            <label htmlFor="search-input" className="block text-xs font-bold text-[#343538] mb-1.5">
              Search Location / Outlet
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
              <input
                id="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Outlet name, area, city…"
                className="w-full form-input-standard bg-[#F7F7F7] text-sm pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]"
              />
            </div>
          </div>

          {/* Brand Filter */}
          <div>
            <label htmlFor="brand-select" className="block text-xs font-bold text-[#343538] mb-1.5">
              Filter by Brand
            </label>
            <select
              id="brand-select"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full form-input-standard bg-[#F7F7F7] text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]"
            >
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* City Filter */}
          <div>
            <label htmlFor="city-select" className="block text-xs font-bold text-[#343538] mb-1.5">
              Filter by City
            </label>
            <select
              id="city-select"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full form-input-standard bg-[#F7F7F7] text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]"
            >
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Format Filter */}
          <div>
            <label htmlFor="format-select" className="block text-xs font-bold text-[#343538] mb-1.5">
              Outlet Format
            </label>
            <select
              id="format-select"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-full form-input-standard bg-[#F7F7F7] text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]"
            >
              {formats.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
        </div>

        {isFiltered && (
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
            <span className="text-[#717275] flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#F05535]" /> Filters applied
            </span>
            <button
              onClick={resetFilters}
              className="text-[#F05535] hover:underline font-bold cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>

      {/* Counter */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-[#717275]">
          Showing <strong className="text-[#343538] font-bold">{filtered.length}</strong>{' '}
          {filtered.length === 1 ? 'outlet' : 'outlets'} across Pakistan
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((r, idx) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.4) }}
            className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col group"
          >
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <img
                src={r.image}
                alt={r.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <span className="bg-[#343538]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs">
                  {r.brand || 'Fri-Chiks'}
                </span>
                <span className="bg-white/95 text-[#343538] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  {r.format}
                </span>
              </div>

              {r.flagship && (
                <span className="absolute top-3 right-3 bg-[#F05535] text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-3 h-3 fill-white text-white" /> Flagship
                </span>
              )}

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] font-medium text-white/90 drop-shadow-xs">{r.city}</span>
                <h3 className="font-heading font-extrabold text-lg text-white leading-tight drop-shadow-sm line-clamp-1">
                  {r.name}
                </h3>
              </div>
            </div>

            <div className="p-5 flex flex-col flex-1 justify-between">
              <div className="space-y-2 text-xs text-[#717275]">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#F05535] shrink-0 mt-0.5" />
                  <span className="text-[#343538]">{r.address}</span>
                </p>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#F05535] shrink-0" />
                  <div className="flex flex-wrap items-center gap-1.5">
                    {r.phone.split(/[/,]/).map((phoneNum, pIdx, pArr) => {
                      const trimmed = phoneNum.trim();
                      const dial = trimmed.replace(/[^0-9+]/g, '');
                      return (
                        <span key={trimmed} className="inline-flex items-center gap-1">
                          <a
                            href={`tel:${dial}`}
                            className="text-[#343538] hover:text-[#F05535] hover:underline font-medium transition-colors cursor-pointer"
                            aria-label={`Call ${r.name} at ${trimmed}`}
                          >
                            {trimmed}
                          </a>
                          {pIdx < pArr.length - 1 && <span className="text-[#8A8B8E]">/</span>}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F05535] shrink-0" />
                  <span>{r.hours}</span>
                </p>
              </div>

              {/* Service Chips */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex flex-wrap gap-1.5">
                  {r.services.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-medium text-[#717275] bg-[#F7F7F7] border border-gray-200/80 px-2.5 py-0.5 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(r.name + ' ' + r.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-[#343538] hover:bg-black text-white py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#F6A18F]" /> Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-8 shadow-xs">
          <Store className="w-12 h-12 mx-auto text-gray-300 mb-3" />
          <h3 className="font-heading font-bold text-lg text-[#343538]">No restaurants found</h3>
          <p className="text-sm text-[#717275] mt-1 max-w-sm mx-auto">
            We couldn&apos;t find any outlets matching your selected filters. Try broadening your criteria.
          </p>
          <button
            onClick={resetFilters}
            className="mt-4 btn-primary py-2 px-5 text-xs inline-block"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Film, Play, Volume2, ShieldCheck } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  poster?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, poster = '/assets/images/hero_fried_chicken_1785741263782.jpg' }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#343538] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/20 relative text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F05535] text-white flex items-center justify-center font-bold">
                  <Film className="w-5 h-5 text-[#F6A18F]" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-white">
                    Fri-Chiks ® Corporate Documentary
                  </h3>
                  <p className="text-xs text-gray-400">
                    "Standards, Crunch & Franchise Scaling" (2:45)
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
                aria-label="Close Video"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Container (Simulated HTML5 Player with Poster Fallback & Controls) */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <img
                src={poster}
                alt="Corporate Video Stream"
                className="w-full h-full object-cover filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Simulated Playing HUD Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-[#F05535]/90 text-white flex items-center justify-center shadow-2xl animate-pulse">
                  <Play className="w-10 h-10 fill-[#F6A18F] text-[#F6A18F] ml-1" />
                </div>
                <p className="mt-4 font-bold text-sm tracking-wider uppercase text-[#F6A18F]">
                  Streaming High-Definition Corporate Reel
                </p>
              </div>

              {/* Simulated Progress Bar Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent flex flex-col gap-2">
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#F05535] w-3/5 rounded-full" />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-white">01:38 / 02:45</span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[#F6A18F] text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded">
                      <Volume2 className="w-3 h-3" /> Stereo Audio
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#F05535]" />
                    <span className="text-[11px] font-bold">Fri-Chiks HQ Official</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Information */}
            <div className="p-4 sm:p-6 bg-[#2F3033] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
              <p>
                Filmed across MM Alam Corporate HQ, Kot Lakhpat Central Processing Hub, and Flagship Outlets in Lahore.
              </p>
              <button
                onClick={onClose}
                className="bg-[#F05535] hover:bg-[#D34518] text-white px-5 py-2 rounded-xl font-bold transition-all text-xs cursor-pointer shrink-0"
              >
                Close Trailer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

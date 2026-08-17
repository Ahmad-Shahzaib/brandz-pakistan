'use client';

import React from 'react';

interface FriChiksLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Render wordmark text in light color for dark backgrounds */
  light?: boolean;
}

export const FriChiksLogo: React.FC<FriChiksLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  light = false
}) => {
  // Dimensions helper
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-11',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24'
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official Fri-Chiks Emblem Badge SVG */}
      <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses}`}>
        <svg
          viewBox="0 0 240 140"
          className="h-full w-auto drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Red Background Oval Badge Container */}
          <ellipse cx="120" cy="70" rx="110" ry="60" fill="#E51821" />
          
          {/* Double White Oval Ring Lines */}
          <ellipse cx="120" cy="70" rx="104" ry="54" stroke="white" strokeWidth="6" fill="none" />
          <ellipse cx="120" cy="70" rx="92" ry="44" stroke="white" strokeWidth="2" strokeDasharray="6 3" fill="none" opacity="0.4" />

          {/* Stylized White Chicken Head Silhouette on the Right */}
          <g transform="translate(130, 20)">
            {/* White Chicken Head & Neck */}
            <path
              d="M10 50 C10 20, 35 10, 50 10 C65 10, 75 25, 75 45 C75 55, 68 65, 60 75 C52 85, 45 90, 30 90 C15 90, 10 70, 10 50 Z"
              fill="white"
            />
            {/* Red Comb on Top */}
            <path
              d="M32 10 C30 2, 38 0, 42 5 C46 0, 52 2, 53 8 C57 4, 63 8, 60 15 C52 14, 42 12, 32 10 Z"
              fill="#E51821"
            />
            {/* Eye */}
            <circle cx="52" cy="28" r="3.5" fill="#1A1818" />
            {/* Yellow Beak */}
            <path
              d="M62 28 L72 32 L62 38 C64 35, 64 31, 62 28 Z"
              fill="#FFC700"
            />
            {/* Wattle */}
            <path
              d="M58 39 C62 42, 60 48, 55 46 Z"
              fill="#E51821"
            />
          </g>

          {/* White Bold Serif Typography "Fri-Chiks" */}
          <g>
            {/* Shadow behind text */}
            <text
              x="50"
              y="62"
              fill="#9E0C13"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontWeight="900"
              fontSize="38"
              letterSpacing="-0.5"
            >
              Fri-
            </text>
            <text
              x="42"
              y="102"
              fill="#9E0C13"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontWeight="900"
              fontSize="44"
              letterSpacing="-0.5"
            >
              Chiks
            </text>

            {/* Front White Text */}
            <text
              x="48"
              y="60"
              fill="white"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontWeight="900"
              fontSize="38"
              letterSpacing="-0.5"
            >
              Fri-
            </text>
            <text
              x="40"
              y="100"
              fill="white"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontWeight="900"
              fontSize="44"
              letterSpacing="-0.5"
            >
              Chiks
            </text>
          </g>

          {/* Registered Trademark symbol ® */}
          <circle cx="205" cy="55" r="8" fill="white" />
          <text x="205" y="59" fill="#E51821" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">®</text>
        </svg>
      </div>

      {variant === 'full' && (
        <div className="flex flex-col justify-center">
          <span className={`font-heading font-extrabold text-xl sm:text-2xl tracking-tight leading-none flex items-center gap-1 ${light ? 'text-white' : 'text-[#1A1818]'}`}>
            Fri-Chiks <span className="text-[#E51821] text-xs font-bold">®</span>
          </span>
          <span className="text-[10px] uppercase font-bold text-[#E51821] tracking-widest leading-none mt-1">
            Corporate & Franchise
          </span>
        </div>
      )}
    </div>
  );
};
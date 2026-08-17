'use client';

import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && (
        <span className="inline-flex rounded-full border border-[#9BD77B] bg-[#EAF7E4] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-[#2C7A35]">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-[-.03em] text-[#163323] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-[#52605A] sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
};

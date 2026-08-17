'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const effects = ['rise', 'slide-left', 'slide-right', 'soft-scale'];

/** Adds a light, one-time reveal to every content section without changing page markup. */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);

    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) return;

    sections.forEach((section, index) => {
      section.dataset.reveal = effects[index % effects.length];
      section.classList.add('scroll-reveal');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -9% 0px', threshold: 0.08 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

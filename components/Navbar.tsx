'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  ['Home', '/'],
  ['About', '/#about'],
  ['Brands', '/#brands'],
  ['Partners', '/franchise'],
  ['Careers', '/careers'],
  ['News', '/media'],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-center gap-3" aria-label="Brandz Pakistan home">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[#70C84A] bg-[#0B2B1C] font-sans text-base font-extrabold text-[#93DC67] transition group-hover:bg-[#173C27]">B</span>
          <span>
            <b className="block text-sm font-extrabold uppercase leading-none tracking-[-.04em] text-white sm:text-base">Brandz Pakistan</b>
            <small className="mt-1 block text-[7px] font-bold uppercase tracking-[.22em] text-[#9BB4A7]">Food &amp; hospitality</small>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="text-[11px] font-bold uppercase tracking-wide text-white/85 transition hover:text-[#91D969]">
              {label}
            </Link>
          ))}
          <Link href="/contact" className="ml-1 inline-flex min-h-10 items-center gap-2 rounded-md border border-[#67C63C]/70 px-4 text-[10px] font-extrabold uppercase tracking-wide text-[#8FDE68] transition hover:bg-[#67C63C] hover:text-[#062314]">
            Partner portal <ArrowUpRight size={14} />
          </Link>
        </nav>

        <button aria-label="Toggle navigation" aria-expanded={open} className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition hover:border-[#67C63C] hover:text-[#91D969] xl:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#031B12]/[.98] px-6 py-4 shadow-2xl backdrop-blur xl:hidden" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <Link key={label} onClick={() => setOpen(false)} href={href} className="block border-b border-white/10 py-4 text-sm font-bold text-white transition hover:text-[#91D969]">
              {label}
            </Link>
          ))}
          <Link onClick={() => setOpen(false)} href="/contact" className="mt-5 flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#67C63C] px-4 text-xs font-extrabold uppercase tracking-wide text-[#062314]">
            Contact Brandz <ArrowUpRight size={15} />
          </Link>
        </nav>
      )}
    </header>
  );
}

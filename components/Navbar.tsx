'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react';

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
  const pathname = usePathname();
  const isBrandDetail = /^\/brands\/[^/]+$/.test(pathname);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group block" aria-label="Brandz Pakistan home">
          <Image
            src="/assets/logos/brandz-logo.png"
            alt="Brandz Pakistan"
            width={180}
            height={39}
            priority
            className="h-auto w-[150px] object-contain transition-opacity group-hover:opacity-85 sm:w-[180px]"
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="text-[11px] font-bold uppercase tracking-wide text-white/85 transition hover:text-[#F6A18F]">
              {label}
            </Link>
          ))}
          {isBrandDetail && (
            <Link href="#enquiry-form" className="ml-1 inline-flex min-h-10 items-center gap-2 rounded-md bg-[#F05535] px-4 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-lg shadow-[#F05535]/20 transition hover:bg-[#D34518]">
              <MessageCircle size={14} /> Enquire Now
            </Link>
          )}
          <Link href="/contact" className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#F05535]/70 px-4 text-[10px] font-extrabold uppercase tracking-wide text-[#F6A18F] transition hover:bg-[#F05535] hover:text-white">
            Partner portal <ArrowUpRight size={14} />
          </Link>
        </nav>

        <button aria-label="Toggle navigation" aria-expanded={open} className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition hover:border-[#F05535] hover:text-[#F6A18F] xl:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#292A2D]/[.98] px-6 py-4 shadow-2xl backdrop-blur xl:hidden" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <Link key={label} onClick={() => setOpen(false)} href={href} className="block border-b border-white/10 py-4 text-sm font-bold text-white transition hover:text-[#F6A18F]">
              {label}
            </Link>
          ))}
          {isBrandDetail && (
            <Link onClick={() => setOpen(false)} href="#enquiry-form" className="mt-5 flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#F05535] px-4 text-xs font-extrabold uppercase tracking-wide text-white">
              <MessageCircle size={15} /> Enquire Now
            </Link>
          )}
          <Link onClick={() => setOpen(false)} href="/contact" className={`${isBrandDetail ? 'mt-3' : 'mt-5'} flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#F05535]/70 px-4 text-xs font-extrabold uppercase tracking-wide text-[#F6A18F]`}>
            Contact Brandz <ArrowUpRight size={15} />
          </Link>
        </nav>
      )}
    </header>
  );
}

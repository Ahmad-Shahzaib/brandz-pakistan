import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const companyLinks = [
  ['About us', '/#about'],
  ['Our approach', '/#approach'],
  ['Leadership', '/about'],
  ['Careers', '/careers'],
];

const brandLinks = [
  ['All brands', '/#brands'],
  ['Brand partners', '/franchise'],
  ['New openings', '/media'],
  ['Franchising', '/franchise'],
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#242528] text-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-7 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.45fr_.8fr_.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex rounded-lg bg-white px-3 py-2 transition hover:opacity-90" aria-label="Brandz Pakistan home">
              <Image
                src="/assets/logos/BRANDZ%20PAKISTAN%20LOGO.png"
                alt="Brandz Pakistan"
                width={205}
                height={44}
                className="h-auto w-[185px] object-contain sm:w-[205px]"
              />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-6 text-[#B8B8BA]">Building and scaling food brands that people love—across Pakistan and beyond.</p>
            <Link href="/contact" className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-md border border-[#F05535]/70 px-4 text-[10px] font-extrabold uppercase tracking-wide text-[#F6A18F] transition hover:bg-[#F05535] hover:text-[#292A2D]">Connect with us <ArrowUpRight size={14} /></Link>
          </div>

          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Brands" links={brandLinks} />

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wide text-white">Contact</h3>
            <div className="mt-6 space-y-4 text-sm leading-6 text-[#B8B8BA]">
              <a href="mailto:hello@brandz.pk" className="flex gap-2.5 transition hover:text-[#F6A18F]"><Mail className="mt-1 shrink-0 text-[#F05535]" size={15} />hello@brandz.pk</a>
              <a href="tel:+9242111272697" className="flex gap-2.5 transition hover:text-[#F6A18F]"><Phone className="mt-1 shrink-0 text-[#F05535]" size={15} />+92 42 111 272 697</a>
              <p className="flex gap-2.5"><MapPin className="mt-1 shrink-0 text-[#F05535]" size={15} />Lahore, Punjab, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[11px] text-[#9D9EA1] sm:flex-row">
          <p>© 2026 Brandz Pakistan. All rights reserved.</p>
          <div className="flex gap-5"><span>Privacy Policy</span><span>Terms of Use</span></div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="text-xs font-extrabold uppercase tracking-wide text-white">{title}</h3>
      <div className="mt-6 space-y-3.5">
        {links.map(([label, href]) => <Link key={label} href={href} className="block text-sm text-[#B8B8BA] transition hover:text-[#F6A18F]">{label}</Link>)}
      </div>
    </div>
  );
}

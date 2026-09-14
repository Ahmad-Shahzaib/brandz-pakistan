import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import type { FooterSection } from '@/lib/api';

export function Footer({
  logo,
  tagline,
  email,
  phone,
  address,
  sections = [],
}: {
  logo?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  address?: string;
  sections?: FooterSection[];
}) {
  const displaySections = sections.slice(0, 2);
  return (
    <footer className="border-t border-white/10 bg-[#242528] text-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-7 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.45fr_.8fr_.8fr_1fr]">
          <div>
            {logo && (
              <Link href="/" className="inline-flex rounded-lg bg-white px-3 py-2 transition hover:opacity-90" aria-label="Brandz Pakistan home">
                <Image
                  src={logo}
                  alt="Brandz Pakistan"
                  width={205}
                  height={44}
                  className="h-auto w-[185px] object-contain sm:w-[205px]"
                />
              </Link>
            )}
            {tagline && <p className="mt-6 max-w-xs text-sm leading-6 text-[#B8B8BA]">{tagline}</p>}
            <Link href="/contact" className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-md border border-[#F05535]/70 px-4 text-[10px] font-extrabold uppercase tracking-wide text-[#F6A18F] transition hover:bg-[#F05535] hover:text-[#292A2D]">Connect with us <ArrowUpRight size={14} /></Link>
          </div>

          {displaySections.map((section) => (
            <FooterColumn key={section.id} title={section.title} links={section.links.map((link) => [link.label, link.url])} />
          ))}

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wide text-white">Contact Us</h3>
            <div className="mt-6 space-y-3.5 text-sm leading-6 text-[#B8B8BA]">
              {email && (
                <div className="flex items-start gap-2.5">
                  <Mail className="mt-1 shrink-0 text-[#F05535]" size={15} />
                  <div className="flex flex-wrap items-center gap-1.5">
                    {email.split(/[/,]/).map((eStr, i, arr) => {
                      const cleanE = eStr.trim();
                      return (
                        <span key={cleanE} className="inline-flex items-center gap-1">
                          <a href={`mailto:${cleanE}`} className="break-all transition hover:text-[#F6A18F] hover:underline" aria-label={`Email us at ${cleanE}`}>
                            {cleanE}
                          </a>
                          {i < arr.length - 1 && <span className="text-[#717275]">/</span>}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
              {phone && (
                <div className="flex items-start gap-2.5">
                  <Phone className="mt-1 shrink-0 text-[#F05535]" size={15} />
                  <div className="flex flex-wrap items-center gap-1.5">
                    {phone.split(/[/,]/).map((pStr, i, arr) => {
                      const cleanP = pStr.trim();
                      const dial = cleanP.replace(/[^\d+]/g, '');
                      return (
                        <span key={cleanP} className="inline-flex items-center gap-1">
                          <a href={`tel:${dial}`} className="transition hover:text-[#F6A18F] hover:underline" aria-label={`Call us at ${cleanP}`}>
                            {cleanP}
                          </a>
                          {i < arr.length - 1 && <span className="text-[#717275]">/</span>}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
              {address && (
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-1 shrink-0 text-[#F05535]" size={15} />
                  <span>{address}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[11px] text-[#9D9EA1] sm:flex-row">
          <p>© 2026 Brandz Pakistan. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms of Use
            </Link>
          </div>
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
        {links.map(([label, href]) => {
          const isMail = href.startsWith('mailto:') || (!href.startsWith('/') && !href.startsWith('http') && href.includes('@'));
          const isTel = href.startsWith('tel:') || (!href.startsWith('/') && !href.startsWith('http') && /^\+?[\d\s\-()]+$/.test(href));

          if (isMail) {
            const mailTarget = href.startsWith('mailto:') ? href : `mailto:${href}`;
            return (
              <a key={label} href={mailTarget} className="block text-sm text-[#B8B8BA] transition hover:text-[#F6A18F] hover:underline">
                {label}
              </a>
            );
          }
          if (isTel) {
            const telTarget = href.startsWith('tel:') ? href : `tel:${href.replace(/[^\d+]/g, '')}`;
            return (
              <a key={label} href={telTarget} className="block text-sm text-[#B8B8BA] transition hover:text-[#F6A18F] hover:underline">
                {label}
              </a>
            );
          }
          return (
            <Link key={label} href={href} className="block text-sm text-[#B8B8BA] transition hover:text-[#F6A18F]">
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

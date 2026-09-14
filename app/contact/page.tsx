import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ContactForm } from '../../components/ContactForm';
import { getSiteContent } from '@/lib/api';
import { MapPin, Phone, Mail, Clock, Building2, ArrowRight, Headphones } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Brandz Pakistan for general, franchise, partnership, property, supplier, media, and careers inquiries, plus our headquarters details.',
};

export default async function ContactPage() {
  const { images, settings, inquiryTypes, pageHeroes } = await getSiteContent();
  const contact = settings.contact || {};
  const hero = pageHeroes.contact;

  const contactText = (key: string, fallback: string) => {
    const raw = contact[key]?.text ?? contact[key]?.value;
    return typeof raw === 'string' ? raw : fallback;
  };

  const rawPhone = contactText('phone', '+92 42 111 272 697');
  const cleanPhone = rawPhone.replace(/[^0-9+]/g, '');
  const email = contactText('email', 'hello@brandz.pk');
  const address = contactText('address', 'Lahore, Punjab, Pakistan');

  return (
    <main className="bg-[#F7F7F7] text-[#343538]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#292A2D] pt-20 text-white">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              'radial-gradient(circle at 18% 88%, #B93A23 0, transparent 32%), radial-gradient(circle at 78% 5%, #454649 0, transparent 44%)',
          }}
        />
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
          <Image
            src={images.interior}
            alt="Brandz Pakistan interior and service environment"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#292A2D] via-[#292A2D]/80 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[.2em] text-[#F6A18F]">
              {hero?.eyebrow || 'Contact · Brandz Pakistan'}
            </p>
            <h1 className="text-5xl font-bold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              {hero?.title || (
                <>
                  Let&apos;s <span className="text-[#F05535]">talk</span>.
                </>
              )}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
              {hero?.description ||
                'Choose the right inquiry category to connect directly with the appropriate team.'}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#F05535] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#D34518] shadow-md"
              >
                Apply for franchise <ArrowRight size={16} />
              </Link>
              <Link
                href="/brands"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/60 bg-black/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                Explore brands <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="space-y-6">
            {/* Headquarters Card */}
            <div className="rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF0EC] text-[#F05535] shadow-xs">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-extrabold text-[#343538]">
                    Corporate Headquarters
                  </h2>
                  <p className="text-xs text-[#717275]">Brandz Pakistan Executive Management</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-[#717275]">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#F05535]" />
                  <span className="text-[#343538]">{address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-[#F05535]" />
                  <div className="flex flex-wrap items-center gap-1.5">
                    {rawPhone.split(/[/,]/).map((p, idx, arr) => {
                      const trimmed = p.trim();
                      const dial = trimmed.replace(/[^0-9+]/g, '');
                      return (
                        <span key={trimmed} className="inline-flex items-center gap-1">
                          <a
                            href={`tel:${dial}`}
                            className="text-[#343538] hover:text-[#F05535] hover:underline font-semibold transition-colors cursor-pointer"
                            aria-label={`Call Brandz Pakistan at ${trimmed}`}
                          >
                            {trimmed}
                          </a>
                          {idx < arr.length - 1 && <span className="text-[#717275]">/</span>}
                        </span>
                      );
                    })}
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#F05535]" />
                  <div className="flex flex-wrap items-center gap-1.5">
                    {email.split(/[/,]/).map((e, idx, arr) => {
                      const trimmed = e.trim();
                      return (
                        <span key={trimmed} className="inline-flex items-center gap-1">
                          <a
                            href={`mailto:${trimmed}`}
                            className="text-[#343538] hover:text-[#F05535] hover:underline font-semibold transition-colors cursor-pointer"
                            aria-label={`Send email to ${trimmed}`}
                          >
                            {trimmed}
                          </a>
                          {idx < arr.length - 1 && <span className="text-[#717275]">/</span>}
                        </span>
                      );
                    })}
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-[#F05535]" />
                  <span className="text-[#343538]">Mon–Sat: 9:00 AM – 6:00 PM (PKT)</span>
                </li>
              </ul>

              {/* Direct Quick Action CTAs */}
              <div className="mt-6 flex flex-wrap gap-2.5 pt-4 border-t border-gray-100">
                <a
                  href={`tel:${cleanPhone}`}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#FFF0EC] hover:bg-[#F05535] text-[#D34518] hover:text-white px-4 py-2.5 text-xs font-bold transition-all shadow-xs cursor-pointer"
                  aria-label={`Call headquarters directly at ${rawPhone}`}
                >
                  <Phone className="w-3.5 h-3.5" /> Call HQ Directly
                </a>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#F7F7F7] hover:bg-[#343538] text-[#343538] hover:text-white px-4 py-2.5 text-xs font-bold transition-all border border-gray-200/80 cursor-pointer"
                  aria-label={`Send an email to ${email}`}
                >
                  <Mail className="w-3.5 h-3.5" /> Email Executive Desk
                </a>
              </div>
            </div>

            {/* Support Desk Card */}
            <div className="rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0EC] text-[#F05535]">
                  <Headphones className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-[#343538]">
                    Partner &amp; Franchisee Portal
                  </h3>
                  <p className="text-xs text-[#717275]">Existing partners and vendors</p>
                </div>
              </div>
              <p className="text-xs text-[#717275] leading-relaxed">
                Existing franchise operators, supply chain vendors, and enterprise partners can access documentation and submit support tickets directly through the Partner Portal.
              </p>
              <div className="mt-4">
                <Link
                  href="/portal"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F05535] hover:underline"
                >
                  Access Partner Portal <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Franchise Promo Box */}
            <div className="rounded-3xl bg-[#343538] p-6 sm:p-8 text-white shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-[.14em] text-[#F6A18F]">
                Franchise Opportunities
              </span>
              <h3 className="mt-2 font-heading text-2xl font-extrabold text-white">
                Looking to open an outlet?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                Skip the general queue — submit a formal franchise profile to review territory availability and unit economics directly with our development directors.
              </p>
              <Link
                href="/apply"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#F05535] hover:bg-[#D34518] px-5 py-3 text-xs font-bold text-white transition-all shadow-md"
              >
                <span>Launch Franchise Application</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div>
            <ContactForm inquiryTypes={inquiryTypes} />
          </div>
        </div>
      </section>
    </main>
  );
}

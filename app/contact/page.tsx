import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ContactForm } from '../../components/ContactForm';
import { getSiteContent } from '@/lib/api';
import { MapPin, Phone, Mail, Clock, Building2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Fri-Chiks ® corporate — general, franchise, partnership, property, supplier, media and careers inquiries, plus our headquarters details.',
};

export default async function ContactPage() {
  const { images, settings, inquiryTypes, pageHeroes } = await getSiteContent();
  const contact = settings.contact || {};
  const hero = pageHeroes.contact;
  const contactText = (key: string, fallback: string) => {
    const raw = contact[key]?.text ?? contact[key]?.value;
    return typeof raw === 'string' ? raw : fallback;
  };

  return (
    <main className="bg-[#F7F7F7] text-[#343538]">
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
            alt="Fri-Chiks interior and service environment"
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
              {hero?.title || <>Let&apos;s <span className="text-[#F05535]">talk</span>.</>}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
              {hero?.description || 'Choose the right inquiry type and reach the right team.'}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#F05535] px-6 py-3 text-sm font-bold text-[#292A2D] transition hover:bg-[#D34518]"
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

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="rounded-2xl border border-[#E3E3E4] bg-white p-6 shadow-sm shadow-[#292A2D]/5">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF0EC] text-[#D34518]">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-2xl font-extrabold text-[#343538]">
                  Corporate Headquarters
                </h3>
              </div>

              <ul className="space-y-4 text-sm text-[#717275]">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D34518]" />
                  <span>{contactText('address', 'Lahore, Punjab, Pakistan')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-[#D34518]" />
                  <span>{contactText('phone', '+92 42 111 272 697')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#D34518]" />
                  <span>{contactText('email', 'hello@brandz.pk')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-[#D34518]" />
                  <span>Mon–Sat, 9:00 AM – 6:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-[#343538] p-6 text-white shadow-lg shadow-[#292A2D]/15">
              <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#F6A18F]">Franchise</p>
              <h3 className="mt-4 font-heading text-2xl font-extrabold text-white">
                Interested in a franchise?
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Skip the queue — submit a formal application and our development team will follow up.
              </p>
              <Link
                href="/apply"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#F05535] px-5 py-2.5 text-sm font-bold text-[#343538] transition hover:bg-[#D34518]"
              >
                Apply for franchise <ArrowRight size={15} />
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

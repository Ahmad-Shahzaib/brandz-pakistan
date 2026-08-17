import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ContactForm } from '../../components/ContactForm';
import { INTERIOR_IMAGE } from '../../data/corporateData';
import { MapPin, Phone, Mail, Clock, Building2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Fri-Chiks ® corporate — general, franchise, partnership, property, supplier, media and careers inquiries, plus our headquarters details.',
};

export default function ContactPage() {
  return (
    <main className="bg-[#F8FAF8] text-[#122017]">
      <section className="relative overflow-hidden bg-[#031B12] pt-20 text-white">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              'radial-gradient(circle at 18% 88%, #0D6B34 0, transparent 32%), radial-gradient(circle at 78% 5%, #072B1D 0, transparent 44%)',
          }}
        />
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
          <Image
            src={INTERIOR_IMAGE}
            alt="Fri-Chiks interior and service environment"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031B12] via-[#031B12]/80 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[.2em] text-[#96D564]">
              Contact · Fri-Chiks Corporate
            </p>
            <h1 className="text-5xl font-bold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Let&apos;s <span className="text-[#67C63C]">talk</span>.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
              Choose the right inquiry type and reach the right team. For franchise applications,
              use our dedicated application form.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#67C63C] px-6 py-3 text-sm font-bold text-[#032316] transition hover:bg-[#88D961]"
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
            <div className="rounded-2xl border border-[#DCE6DE] bg-white p-6 shadow-sm shadow-[#031B12]/5">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF7E4] text-[#2C7A35]">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-2xl font-extrabold text-[#163323]">
                  Corporate Headquarters
                </h3>
              </div>

              <ul className="space-y-4 text-sm text-[#52605A]">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2C7A35]" />
                  <span>Fri-Chiks Corporate Tower, MM Alam Road, Gulberg III, Lahore, Pakistan</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-[#2C7A35]" />
                  <span>+92 (42) 111 374 244</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#2C7A35]" />
                  <span>franchise@frichiks.pk</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-[#2C7A35]" />
                  <span>Mon–Sat, 9:00 AM – 6:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-[#052B1A] p-6 text-white shadow-lg shadow-[#031B12]/15">
              <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#A7E778]">Franchise</p>
              <h3 className="mt-4 font-heading text-2xl font-extrabold text-white">
                Interested in a franchise?
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Skip the queue — submit a formal application and our development team will follow up.
              </p>
              <Link
                href="/apply"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#67C63C] px-5 py-2.5 text-sm font-bold text-[#052B1A] transition hover:bg-[#88D961]"
              >
                Apply for franchise <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

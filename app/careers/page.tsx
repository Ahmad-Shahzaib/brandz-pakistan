import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import { CareersExplorer } from '../../components/CareersExplorer';
import { TEAM_IMAGE } from '../../data/corporateData';
import { ArrowRight, HeartHandshake, GraduationCap, TrendingUp, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Grow with Brandz Pakistan. Explore restaurant, management and corporate roles across operations, marketing, supply chain, finance and franchise support.',
};

const perks = [
  { icon: GraduationCap, title: 'Structured Training', text: 'SOP-led onboarding and continuous skill development.' },
  { icon: TrendingUp, title: 'Real Growth', text: 'Clear paths from crew to management and corporate roles.' },
  { icon: Users, title: 'Team Culture', text: 'Warm, family-first culture across every outlet.' },
  { icon: HeartHandshake, title: 'Fair & Halal', text: 'Ethical employment and a values-driven workplace.' },
];

export default function CareersPage() {
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
            src={TEAM_IMAGE}
            alt="Brandz Pakistan team and restaurant staff"
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
              Careers · Brandz Pakistan
            </p>
            <h1 className="text-5xl font-bold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Grow with <span className="text-[#67C63C]">Brandz Pakistan</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
              From our kitchens to corporate HQ, we&apos;re building a team that loves great food and great service. Find your role.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#positions"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#67C63C] px-6 py-3 text-sm font-bold text-[#032316] transition hover:bg-[#88D961]"
              >
                View openings <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/60 bg-black/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                Talk to recruitment <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeader eyebrow="Why Brandz Pakistan" title="More Than a Job" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="rounded-2xl border border-[#DCE6DE] bg-white p-6 text-center shadow-sm shadow-[#031B12]/5">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7E4] text-[#2C7A35]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-base font-extrabold text-[#163323]">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-[#52605A]">{p.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="positions" className="bg-[#F3F8F4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader eyebrow="Open Positions" title="Current Openings" align="left" className="mb-10" />
          <CareersExplorer />
        </div>
      </section>
    </main>
  );
}

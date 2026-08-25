import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import { CareersExplorer } from '../../components/CareersExplorer';
import { getSiteContent } from '@/lib/api';
import { ArrowRight, HeartHandshake, GraduationCap, TrendingUp, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Grow with Brandz Pakistan. Explore restaurant, management and corporate roles across operations, marketing, supply chain, finance and franchise support.',
};

const perkIcons = { GraduationCap, TrendingUp, Users, HeartHandshake };

export default async function CareersPage() {
  const { jobs, images, careersPerks, pageHeroes } = await getSiteContent();
  const hero = pageHeroes.careers;

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
            src={images.team}
            alt="Brandz Pakistan team and restaurant staff"
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
              {hero?.eyebrow || 'Careers · Brandz Pakistan'}
            </p>
            <h1 className="text-5xl font-bold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              {hero?.title || <>Grow with <span className="text-[#F05535]">Brandz Pakistan</span></>}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
              {hero?.description || 'From our kitchens to corporate HQ, we are building a team that loves great food and great service.'}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#positions"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#F05535] px-6 py-3 text-sm font-bold text-[#292A2D] transition hover:bg-[#D34518]"
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
          {careersPerks.map((p) => {
            const Icon = perkIcons[p.icon as keyof typeof perkIcons] || GraduationCap;
            return (
              <div key={p.title} className="rounded-2xl border border-[#E3E3E4] bg-white p-6 text-center shadow-sm shadow-[#292A2D]/5">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF0EC] text-[#D34518]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-base font-extrabold text-[#343538]">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-[#717275]">{p.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="positions" className="bg-[#F7F7F7] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader eyebrow="Open Positions" title="Current Openings" align="left" className="mb-10" />
          <CareersExplorer jobs={jobs} />
        </div>
      </section>
    </main>
  );
}

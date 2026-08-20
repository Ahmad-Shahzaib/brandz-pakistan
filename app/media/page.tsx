import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import { CTABand } from '../../components/CTABand';
import { COMPANY_NEWS, INTERIOR_IMAGE } from '../../data/corporateData';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Media',
  description:
    'Corporate news, restaurant openings, product launches, awards and press releases from Brandz Pakistan.',
};

const categories = ['All', 'Franchise Growth', 'Awards', 'Food Safety', 'Restaurant Openings'];

export default function MediaPage() {
  const [featured, ...rest] = COMPANY_NEWS;

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
            src={INTERIOR_IMAGE}
            alt="Brandz Pakistan media feature and brand story"
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
              News & Media
            </p>
            <h1 className="text-5xl font-bold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              The latest from <span className="text-[#F05535]">Brandz Pakistan</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
              Corporate news, restaurant openings, product launches and press coverage as our brand grows across Pakistan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#stories"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#F05535] px-6 py-3 text-sm font-bold text-[#292A2D] transition hover:bg-[#D34518]"
              >
                Explore stories <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/60 bg-black/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                Contact media team <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="stories" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c, i) => (
            <span
              key={c}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${
                i === 0
                  ? 'border-[#F05535] bg-[#FFF0EC] text-[#D34518]'
                  : 'border-[#E3E3E4] bg-white text-[#343538]'
              }`}
            >
              {c}
            </span>
          ))}
        </div>

        <article className="mb-12 grid gap-8 overflow-hidden rounded-3xl border border-[#E3E3E4] bg-white shadow-md shadow-[#292A2D]/5 lg:grid-cols-2">
          <div className="relative h-64 min-h-[280px] lg:h-auto">
            <img src={featured.image} alt={featured.title} className="absolute inset-0 h-full w-full object-cover" referrerPolicy="no-referrer" />
            <span className="absolute left-4 top-4 rounded-full bg-[#F05535] px-3 py-1 text-xs font-bold text-[#292A2D]">
              Featured
            </span>
          </div>
          <div className="flex flex-col justify-center p-8">
            <span className="text-[10px] font-bold uppercase tracking-[.14em] text-[#D34518]">{featured.category}</span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold leading-tight text-[#343538] sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 text-[#717275] leading-relaxed">{featured.summary}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#717275]">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {featured.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {featured.readTime}
              </span>
            </div>
            <button className="mt-6 inline-flex w-fit items-center gap-2 font-bold text-[#D34518] transition hover:gap-3">
              Read Full Story <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </article>

        <SectionHeader eyebrow="More Stories" title="Recent Coverage" align="left" className="mb-10" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((n) => (
            <article key={n.id} className="group overflow-hidden rounded-2xl border border-[#E3E3E4] bg-white shadow-sm shadow-[#292A2D]/5 transition hover:shadow-lg">
              <div className="relative h-44 overflow-hidden">
                <img src={n.image} alt={n.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-[#D34518]">
                  {n.category}
                </span>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-3 text-[11px] text-[#717275]">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {n.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {n.readTime}
                  </span>
                </div>
                <h3 className="font-heading text-base font-bold leading-snug text-[#343538]">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#717275]">{n.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABand
        heading="Media & Press Enquiries"
        text="For interviews, brand assets or press information, reach our corporate communications team."
        primaryLabel="Contact Media Team"
        primaryHref="/contact"
      />
    </main>
  );
}

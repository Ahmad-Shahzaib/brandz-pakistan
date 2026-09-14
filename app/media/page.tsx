import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CTABand } from '../../components/CTABand';
import { NewsExplorer } from '../../components/NewsExplorer';
import { getSiteContent } from '@/lib/api';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Media',
  description:
    'Corporate news, restaurant openings, product launches, awards and press releases from Brandz Pakistan.',
};

export default async function MediaPage() {
  const { news, images, pageHeroes } = await getSiteContent();
  const hero = pageHeroes.media;

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
              {hero?.eyebrow || 'News & Media'}
            </p>
            <h1 className="text-5xl font-bold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              {hero?.title || (
                <>
                  The latest from <span className="text-[#F05535]">Brandz Pakistan</span>
                </>
              )}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
              {hero?.description ||
                'Corporate news, restaurant openings, product launches and press coverage.'}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#stories"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#F05535] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#D34518]"
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

      {/* Stories with interactive filters */}
      <section id="stories" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <NewsExplorer news={news} />
      </section>

      <CTABand
        heading="Media & Press Enquiries"
        text="For executive interviews, brand photography, logos, or official statements, reach our corporate media relations team."
        primaryLabel="Contact Media Team"
        primaryHref="/contact"
        secondaryLabel="Media Relations"
        secondaryHref="/contact"
        image={images.storefront}
      />
    </main>
  );
}

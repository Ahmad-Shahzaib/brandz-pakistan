import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Award,
  Building2,
  ChartNoAxesCombined,
  Handshake,
  Network,
  ShieldCheck,
  Store,
  UsersRound,
} from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { HomeBrandsSection } from '@/components/HomeBrandsSection';
import { getSiteContent } from '@/lib/api';

const icons = { Handshake, ShieldCheck, ChartNoAxesCombined, UsersRound, Building2, Store, Network };
const iconFor = (name: string) => icons[name as keyof typeof icons] || ShieldCheck;

export async function generateMetadata(): Promise<Metadata> {
  const { pageHeroes } = await getSiteContent();
  const hero = pageHeroes.home;
  return {
    title: hero?.metaTitle || hero?.title || 'Brandz Pakistan | Multi-Brand Hospitality Platform',
    description:
      hero?.metaDescription ||
      hero?.description ||
      'Building the Future of Pakistani Food & Hospitality Brands.',
  };
}

export default async function HomePage() {
  const {
    brands,
    categories,
    images,
    news,
    inquiryTypes,
    pageHeroes,
    homepageStats,
    homepageValues,
    homepageCapabilities,
    homepageAbout,
    homepageApproach,
    homepageEnquiry,
    homepageCta,
  } = await getSiteContent();

  const hero = pageHeroes.home;
  const about = homepageAbout[0];
  const enquiry = homepageEnquiry[0];
  const finalCta = homepageCta[0];

  // Server-side console output showing all bound API data from /pages/home
  console.log('========================================================');
  console.log('📌 [SERVER RENDER: HomePage — API Bound Data]');
  console.log('Heading:', hero?.title);
  console.log('Subheading:', hero?.description);
  console.log('Eyebrow:', hero?.eyebrow);
  console.log('Primary CTA Button:', {
    label: hero?.primaryCtaLabel || 'Explore our brands',
    url: hero?.primaryCtaUrl || '#brands',
  });
  console.log('Secondary CTA Button:', {
    label: hero?.secondaryCtaLabel || 'About us',
    url: hero?.secondaryCtaUrl || '#about',
  });
  console.log('Stats Items Count:', homepageStats.length);
  console.log('Brands Count:', brands.length);
  console.log('========================================================\n');

  return (
    <>
      {/* Perfected Hero Section */}
      <section className="relative overflow-hidden bg-[#292A2D] pt-24 pb-20 sm:pt-32 sm:pb-28 text-white">
        {/* Ambient Warm Gradient Lighting */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 18% 85%, #D34518 0, transparent 38%), radial-gradient(circle at 80% 12%, #454649 0, transparent 42%)',
          }}
        />

        {/* Hero Media with Smooth Gradient Overlay */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[60%]">
          <Image
            src={images.hero}
            alt="Signature dining and restaurant experiences from Brandz Pakistan"
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#292A2D] via-[#292A2D]/80 to-transparent" />
        </div>

        {/* Hero Content Grid */}
        <div className="relative mx-auto grid min-h-[600px] max-w-7xl items-center px-6 py-12 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="z-10 max-w-2xl">
            {/* Eyebrow Matching Platform Standard */}
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[.2em] text-[#F6A18F]">
              {hero?.eyebrow || 'Brandz Pakistan · Food & Hospitality Group'}
            </p>

            {/* Main Title Matching Platform Standard Sans-Serif Scale */}
            <h1 className="text-5xl font-bold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl text-white">
              {hero?.title || 'The Power Behind Great Brands.'}
            </h1>

            {/* Subheading with Crisp Readability */}
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-gray-200">
              {hero?.description || 'Building the Future of Pakistani Food & Hospitality Brands.'}
            </p>

            {/* High-Contrast Interactive CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href={hero?.primaryCtaUrl || '#brands'}
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#F05535] hover:bg-[#D34518] text-white px-8 py-3.5 text-sm font-bold transition-all duration-200 shadow-lg shadow-[#F05535]/30 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{hero?.primaryCtaLabel || 'Explore our brands'}</span>
                <ArrowRight size={16} className="text-white/90" />
              </Link>
              <Link
                href={hero?.secondaryCtaUrl || '#about'}
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/15 text-white px-8 py-3.5 text-sm font-bold backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{hero?.secondaryCtaLabel || 'About us'}</span>
                <ArrowRight size={16} className="text-white/70" />
              </Link>
            </div>

            {/* Polished Glass Brand Portfolio Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-semibold text-gray-300 mr-1">Featured Brands:</span>
              {[
                { name: 'Fri-Chiks', href: '/brands/fri-chiks' },
                { name: "Timmy's", href: '/brands/timmys' },
                { name: 'Shamana', href: '/brands/shamana-restaurant' },
                { name: 'Whata Pizza', href: '/brands/whata-pizza' },
              ].map((b) => (
                <Link
                  key={b.name}
                  href={b.href}
                  className="text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 px-3.5 py-1 rounded-full transition-all backdrop-blur-md"
                >
                  {b.name}
                </Link>
              ))}
            </div>

            {/* Clean, High-Contrast Stat Strip */}
            <div className="mt-12 grid max-w-xl grid-cols-4 divide-x divide-white/15 border-y border-white/15 py-5">
              {homepageStats.map((item) => (
                <div key={item.id} className="px-3 first:pl-0 text-left">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-none">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[.15em] text-[#F6A18F]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="bg-[#F7F7F7] text-[#343538]">
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8" id="about">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow !text-[#D34518]">{about?.label || 'Who we are'}</p>
              <h2 className="text-3xl font-bold leading-tight tracking-[-.035em] sm:text-4xl">
                {about?.title || 'A focused platform for building enduring hospitality businesses.'}
              </h2>
              <Link
                href="#approach"
                className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.1em] text-[#D34518]"
              >
                Learn more <ArrowRight size={15} />
              </Link>
            </div>
            <p className="max-w-xl self-center text-base leading-7 text-[#717275]">
              {about?.text || about?.description}
            </p>
          </div>
          <div className="mt-12 grid gap-6 border-t border-[#E3E3E4] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {homepageValues.map((item) => {
              const Icon = iconFor(item.icon);
              return (
                <article key={item.id} className="text-center">
                  <Icon className="mx-auto text-[#F05535]" size={27} />
                  <h3 className="mt-4 text-sm font-bold">{item.title}</h3>
                  <p className="mx-auto mt-2 max-w-[14rem] text-xs leading-5 text-[#717275]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-[#E3E3E4] bg-white py-16" id="approach">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-9 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <p className="eyebrow !text-[#D34518]">Our approach</p>
                <h2 className="text-3xl font-bold leading-tight tracking-[-.035em] sm:text-4xl">
                  Clear about where we are going and how we will get there.
                </h2>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {homepageApproach.map((item, index) => {
                  const featured = index === 0;
                  return (
                    <article
                      key={item.id}
                      className={`rounded-xl p-7 sm:p-9 ${
                        featured ? 'bg-[#343538] text-white' : 'border border-[#E3E3E4] bg-[#F7F7F7] text-[#343538]'
                      }`}
                    >
                      <div
                        className={`flex items-center justify-between text-[10px] font-bold uppercase tracking-[.14em] ${
                          featured ? 'text-[#F6A18F]' : 'text-[#D34518]'
                        }`}
                      >
                        <span>{item.label || (featured ? 'Our purpose' : 'Our vision')}</span>
                        <ArrowRight size={16} />
                      </div>
                      <h3 className="mt-10 text-2xl font-bold leading-tight">{item.title}</h3>
                      <p className={`mt-5 text-sm leading-6 ${featured ? 'text-white/65' : 'text-[#717275]'}`}>
                        {item.text || item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Brands Explorer with category filter tabs */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <HomeBrandsSection brands={brands} categories={categories} />
        </section>

        {/* Featured Stories linking to dedicated article pages */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow !text-[#D34518]">Featured stories</p>
              <h2 className="text-3xl font-bold tracking-[-.035em] sm:text-4xl">Real Brands. Real Impact.</h2>
            </div>
            <Link
              href="/media"
              className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[.1em] text-[#D34518] sm:inline-flex hover:underline"
            >
              View all stories <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-7 grid gap-6 lg:grid-cols-2">
            {news.slice(0, 2).map((item) => (
              <Story
                key={item.id}
                image={item.image || images.storefront}
                label={item.category}
                title={item.title}
                href={`/media/${item.slug || item.id}`}
              />
            ))}
          </div>
        </section>

        <section className="border-y border-[#E3E3E4] bg-white py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <p className="eyebrow !text-[#D34518]">Our capabilities</p>
                <h2 className="text-3xl font-bold tracking-[-.035em] sm:text-4xl">
                  Corporate capabilities behind every concept.
                </h2>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {homepageCapabilities.map((item) => {
                  const Icon = iconFor(item.icon);
                  return (
                    <article key={item.id}>
                      <Icon className="text-[#F05535]" size={25} />
                      <h3 className="mt-4 text-sm font-bold">{item.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-[#717275]">{item.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#292A2D] py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[.88fr_1.12fr] lg:px-8">
            <div className="flex flex-col justify-center">
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#F6A18F]">
                {enquiry?.label || 'Enquiry'}
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-.035em] sm:text-4xl">
                {enquiry?.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
                {enquiry?.text || enquiry?.description}
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/95 p-2 shadow-2xl shadow-[#292A2D]/25">
              <div className="rounded-[22px] bg-white p-3 sm:p-4">
                <ContactForm inquiryTypes={inquiryTypes} />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="flex flex-col justify-between gap-7 rounded-2xl bg-[#343538] p-8 text-white md:flex-row md:items-center md:p-11 shadow-xl">
            <div className="flex max-w-lg gap-5">
              <Award className="mt-1 shrink-0 text-[#F6A18F]" size={34} />
              <div>
                <h2 className="text-3xl font-bold leading-tight">{finalCta?.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {finalCta?.text || finalCta?.description}
                </p>
              </div>
            </div>
            <Link
              href={finalCta?.value || '/contact'}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#F05535] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#D34518] transition-colors shadow-md"
            >
              {finalCta?.label || 'Partner with us'} <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function Story({ image, label, title, href }: { image: string; label: string; title: string; href: string }) {
  return (
    <article className="group relative min-h-[340px] overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#242528] via-[#242528]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#F6A18F]">{label}</p>
        <h3 className="mt-2.5 max-w-md text-xl sm:text-2xl font-bold leading-tight group-hover:text-[#F6A18F] transition-colors">
          <Link href={href}>{title}</Link>
        </h3>
        <Link
          href={href}
          className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-[#F05535] hover:bg-[#D34518] px-5 py-2.5 text-xs font-bold text-white transition-all shadow-xs"
        >
          <span>Read story</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

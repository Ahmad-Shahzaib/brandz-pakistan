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
import { getSiteContent } from '@/lib/api';

const icons = { Handshake, ShieldCheck, ChartNoAxesCombined, UsersRound, Building2, Store, Network };
const iconFor = (name: string) => icons[name as keyof typeof icons] || ShieldCheck;

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

  return (
    <>
      <section
        className="relative overflow-hidden pt-20 text-white"
        style={{ backgroundColor: hero?.backgroundColor || '#292A2D' }}
      >
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              'radial-gradient(circle at 18% 88%, #B93A23 0, transparent 32%), radial-gradient(circle at 78% 5%, #454649 0, transparent 44%)',
          }}
        />
        <div className="absolute inset-y-0 right-0 w-full lg:w-[59%]">
          <Image
            src={images.hero}
            alt="Signature fried chicken from the Brandz Pakistan portfolio"
            fill
            priority
            sizes="(min-width: 1024px) 59vw, 100vw"
            className={`object-cover opacity-90 ${
              hero?.imagePosition === 'top'
                ? 'object-top'
                : hero?.imagePosition === 'bottom'
                  ? 'object-bottom'
                  : 'object-center'
            }`}
          />
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: Math.min(Math.max(hero?.overlayOpacity || 35, 0), 80) / 100 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#292A2D] via-[#292A2D]/75 to-transparent" />
        </div>
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center px-6 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-24">
          <div className="z-10 max-w-2xl">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[.2em] text-[#F6A18F]">
              {hero?.eyebrow || 'Brandz Pakistan'}
            </p>
            <h1 className="text-5xl font-bold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              {hero?.title || '40 Brands. One Bold Vision.'}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
              {hero?.description || 'We build and scale distinctive food brands that people love.'}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#brands"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#F05535] px-6 py-3 text-sm font-bold text-[#292A2D] transition hover:bg-[#D34518]"
              >
                Explore our brands <ArrowRight size={16} />
              </Link>
              <Link
                href="#about"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/60 bg-black/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                About us <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-11 grid max-w-xl grid-cols-4 divide-x divide-white/20 border-y border-white/20 py-4">
              {homepageStats.map((item) => (
                <div key={item.id} className="px-3 first:pl-0">
                  <p className="text-lg font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[.1em] text-white/60">{item.label}</p>
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

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8" id="brands">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow !text-[#D34518]">Our brands</p>
              <h2 className="text-3xl font-bold tracking-[-.035em] sm:text-4xl">A portfolio for every occasion.</h2>
            </div>
            <Link
              href="/brands"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.1em] text-[#D34518]"
            >
              View all brands <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {['All', ...categories].slice(0, 6).map((category, index) => (
              <a
                href={index === 0 ? '#brands' : `#${category.toLowerCase().replaceAll(' ', '-')}`}
                key={category}
                className={`rounded-md px-4 py-2 text-[10px] font-bold uppercase tracking-wide ${
                  index === 0 ? 'bg-[#B93A23] text-white' : 'border border-[#E3E3E4] bg-white text-[#717275]'
                }`}
              >
                {category}
              </a>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {brands.slice(0, 18).map((brand) => (
              <Link
                href={`/brands/${brand.slug}`}
                key={brand.slug}
                className="group flex h-28 items-center justify-center rounded-lg border border-[#E3E3E4] bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[#E39A88] hover:shadow-md"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} official logo`}
                  width={160}
                  height={90}
                  className="max-h-full w-full object-contain"
                />
              </Link>
            ))}
          </div>
          <div className="mt-7 flex justify-center">
            <Link
              href="/brands"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D7C2BD] bg-white px-6 py-3 text-xs font-bold text-[#4A4B4E]"
            >
              Explore all brands <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow !text-[#D34518]">Featured stories</p>
              <h2 className="text-3xl font-bold tracking-[-.035em] sm:text-4xl">Real Brands. Real Impact.</h2>
            </div>
            <Link
              href="/media"
              className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[.1em] text-[#D34518] sm:inline-flex"
            >
              View all stories <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            {news.slice(0, 2).map((item) => (
              <Story key={item.id} image={item.image || images.storefront} label={item.category} title={item.title} href="/media" />
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
          <div className="flex flex-col justify-between gap-7 rounded-xl bg-[#343538] p-8 text-white md:flex-row md:items-center md:p-11">
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
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#F05535] px-7 py-3.5 text-sm font-bold text-[#343538]"
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
    <article className="group relative min-h-[330px] overflow-hidden rounded-xl">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#242528] via-[#242528]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#F6A18F]">{label}</p>
        <h3 className="mt-3 max-w-sm text-2xl font-bold leading-tight">{title}</h3>
        <Link
          href={href}
          className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-[#F05535] px-5 py-2.5 text-xs font-bold text-[#343538]"
        >
          Read story <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

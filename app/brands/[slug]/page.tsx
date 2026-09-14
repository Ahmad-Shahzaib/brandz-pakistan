import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UtensilsCrossed,
} from 'lucide-react';
import { getBrand, getSiteContent } from '@/lib/api';
import { BRAND_ENHANCEMENTS } from '@/data/brandEnhancements';
import { BrandEnquiryForm } from '@/components/BrandEnquiryForm';

export async function generateStaticParams() {
  const { brands } = await getSiteContent();
  return brands.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = await getBrand(slug);
  if (!brand) return { title: 'Brand Details' };

  return {
    title: brand.tagline ? `${brand.name} — ${brand.tagline}` : brand.name,
    description:
      brand.description ||
      `${brand.name} — ${brand.tagline}. An official food & hospitality concept in the Brandz Pakistan portfolio.`,
    openGraph: {
      title: `${brand.name} — ${brand.tagline} | Brandz Pakistan`,
      description: brand.description,
      images: brand.image ? [{ url: brand.image, alt: `${brand.name} signature item` }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${brand.name} — ${brand.tagline} | Brandz Pakistan`,
      description: brand.description,
      images: brand.image ? [brand.image] : undefined,
    },
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = await getBrand(slug).catch(() => null);
  if (!brand) notFound();

  const enhancement = BRAND_ENHANCEMENTS[slug];
  const detailedOfferings = enhancement?.detailedOfferings;

  return (
    <div
      style={{ '--brand-accent': brand.accent || '#F05535' } as React.CSSProperties}
      className="text-[#343538]"
    >
      {/* Brand Hero Section */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#242528] text-white">
        <Image
          src={brand.image}
          alt={`${brand.name} signature item`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#242528] via-[#242528]/90 to-[#242528]/40" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col justify-between px-6 pb-20 pt-32 lg:px-8">
          <Link
            href="/brands"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={16} /> Back to all brands
          </Link>

          <div className="max-w-3xl">
            {/* Logo card */}
            <div className="mb-6 flex h-24 w-48 items-center justify-center rounded-2xl bg-white p-4 shadow-xl">
              <img
                src={brand.logo}
                alt={`${brand.name} official logo`}
                className="max-h-full w-full object-contain"
              />
            </div>

            {/* Category, Established & Network Metadata with Clear Labels */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#F05535]/30 bg-[#F05535]/15 px-3.5 py-1.5 font-bold text-[#F6A18F] backdrop-blur-sm">
                <span className="text-white/60 font-medium uppercase text-[10px] tracking-wider">Category:</span>
                <span>{brand.category}</span>
              </span>
              <span className="text-white/30 select-none" aria-hidden="true">•</span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3.5 py-1.5 font-semibold text-white/90 backdrop-blur-sm">
                <span className="text-white/60 font-medium uppercase text-[10px] tracking-wider">Established:</span>
                <span>Since {brand.since}</span>
              </span>
              <span className="text-white/30 select-none" aria-hidden="true">•</span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3.5 py-1.5 font-semibold text-white/90 backdrop-blur-sm">
                <span className="text-white/60 font-medium uppercase text-[10px] tracking-wider">Network:</span>
                <span>{brand.locations.includes('Outlet') || brand.locations.includes('Location') ? brand.locations : `${brand.locations} Outlets`}</span>
              </span>
            </div>

            <h1 className="hero-title mt-6 text-white">{brand.name}</h1>
            <p className="mt-4 text-xl font-medium text-[#F6A18F] sm:text-2xl">{brand.tagline}</p>
            <p className="body-lead mt-6 max-w-2xl text-gray-300">{brand.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#menu"
                className="btn-primary min-h-[48px] px-6 text-sm"
                style={{ backgroundColor: brand.accent }}
              >
                Explore Signature Menu <ArrowRight size={15} />
              </Link>
              <Link
                href="#enquiry-form"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-white/30 bg-black/20 px-6 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Enquire About Brand
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Profile & Story (Unique per brand) */}
      <section className="section-padding bg-[#F7F7F7]">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="eyebrow" style={{ color: brand.accent }}>
                Brand Profile
              </p>
              <h2 className="section-title">
                {enhancement?.storyHeading || `${brand.name}: Built on Flavor, Scaled with Systems`}
              </h2>
              <p className="body-lead mt-6">
                {brand.description ||
                  `Every ${brand.name} location combines authentic taste with Brandz Pakistan’s operational rigor. Centralized quality controls, supply chain efficiency, and chef-curated recipes help the concept grow sustainably.`}
              </p>

              {/* Compact 4-Item Stat Panel (D12) */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  ['Established', brand.since],
                  ['Category', brand.category],
                  ['Network', brand.locations],
                  ['Expansion', 'Open for Franchise'],
                ].map(([label, val]) => (
                  <div key={label} className="rounded-2xl border border-[#E3E3E4] bg-white p-4 shadow-xs">
                    <p className="small-copy uppercase font-extrabold">{label}</p>
                    <p className="mt-1.5 font-heading text-lg font-bold text-[#343538]">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dining Experience Photo */}
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-[#E3E3E4] bg-white shadow-xl lg:aspect-auto lg:h-[460px]">
              <img
                src={brand.gallery[1] || brand.image}
                alt={`${brand.name} dining room environment`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-3 py-1.5 text-xs font-bold text-[#343538] shadow-md backdrop-blur-sm">
                Authentic {brand.name} Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Menu Section with Equal Height Cards (D04, D05, D07, D19) */}
      <section className="section-padding bg-white" id="menu">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="eyebrow" style={{ color: brand.accent }}>
              Signature Flavors
            </p>
            <h2 className="section-title">
              {enhancement?.menuHeading || 'Crafted with Passion & Precision'}
            </h2>
            <p className="body-lead mt-4">
              {enhancement?.menuSubheading ||
                `A curated selection of guest favorites that express the unique culinary identity of ${brand.name}.`}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {detailedOfferings && detailedOfferings.length > 0
              ? detailedOfferings.map((item) => (
                  <article
                    key={item.name}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E3E4] bg-[#F7F7F7] shadow-xs transition duration-300 hover:border-[#F05535] hover:bg-white hover:shadow-xl"
                  >
                    <div>
                      <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#D34518] shadow-sm">
                          {item.tag}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="card-title text-xl">{item.name}</h3>
                        <p className="body-regular mt-2 text-sm text-[#717275]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200/60 px-6 py-3 text-xs font-bold text-[#8A8B8E]">
                      <span>Guest Favorite</span>
                      <Sparkles size={14} className="text-[#F05535]" />
                    </div>
                  </article>
                ))
              : brand.offerings.map((offering, idx) => (
                  <article
                    key={offering}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E3E3E4] bg-[#F7F7F7] shadow-xs transition duration-300 hover:border-[#F05535] hover:bg-white hover:shadow-xl"
                  >
                    <div>
                      <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                        <img
                          src={brand.gallery[idx % brand.gallery.length] || brand.image}
                          alt={offering}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#D34518] shadow-sm">
                          Featured Item
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="card-title text-xl">{offering}</h3>
                        <p className="body-regular mt-2 text-sm text-[#717275]">
                          Prepared fresh to strict brand specifications with premium ingredients and verified food safety controls.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200/60 px-6 py-3 text-xs font-bold text-[#8A8B8E]">
                      <span>Fresh Daily</span>
                      <Sparkles size={14} className="text-[#F05535]" />
                    </div>
                  </article>
                ))}
          </div>
        </div>
      </section>

      {/* Services & Operating Channels (D08) */}
      <section className="section-padding bg-[#292A2D] text-white">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#F6A18F]">
                Operational Channels
              </p>
              <h2 className="section-title mt-3 text-white">Serving Guests Across Every Touchpoint</h2>
              <p className="body-lead mt-5 text-gray-300">
                A flexible, resilient operating model engineered for dine-in comfort, high-throughput delivery, and turnkey corporate partnerships.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {brand.services.map((service, i) => (
                <div
                  key={service}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F05535]/20 text-[#F6A18F]">
                    {i === 0 ? <UtensilsCrossed size={20} /> : <CheckCircle2 size={20} />}
                  </div>
                  <h3 className="card-title mt-4 text-lg text-white">{service}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-300">
                    Supported by Brandz central procurement, digital dispatch logistics, and continuous team training.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Standards (D09) */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="eyebrow" style={{ color: brand.accent }}>
                Quality Assured
              </p>
              <h2 className="section-title">Standards Worth Celebrating</h2>
              <p className="body-lead mt-4">
                Our accolades reflect ongoing commitment to kitchen cleanliness, culinary authenticity, and guest satisfaction across Pakistan.
              </p>
            </div>

            <div className="space-y-4">
              {brand.awards.map((award, i) => (
                <div
                  key={award}
                  className="flex items-center gap-5 rounded-2xl border border-[#E3E3E4] bg-[#F7F7F7] p-5 shadow-xs transition hover:border-[#F05535]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF0EC] text-[#D34518]">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="font-heading text-base font-bold text-[#343538]">{award}</p>
                    <p className="small-copy mt-0.5">
                      {Number(brand.since) + i + 2} · Brandz Pakistan Quality &amp; Compliance Audit
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Value Pillars */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="section-container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              [ShieldCheck, 'Assured Recipe Integrity', 'Standardized marinades and certified halal supply chain across all locations.'],
              [TrendingUp, 'Scalable Economics', 'Engineered kitchen throughput designed for rapid ticket times and healthy margins.'],
              [MapPin, 'Turnkey Market Support', 'Location planning, marketing campaigns, and grand opening support from Brandz Pakistan.'],
            ].map(([Icon, title, desc]: any) => (
              <div key={title} className="rounded-2xl border border-[#E3E3E4] bg-white p-7 shadow-xs">
                <Icon className="h-7 w-7 text-[#F05535]" />
                <h3 className="card-title mt-4 text-lg">{title}</h3>
                <p className="body-regular mt-2 text-xs text-[#717275]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repositioned Brand Enquiry Form (Moved Lower to Prevent Interruption - D13) */}
      <BrandEnquiryForm
        brandSlug={brand.slug}
        brandName={brand.name}
        brandLogo={brand.logo}
        offerings={brand.offerings}
      />

      {/* Final Group Callout */}
      <section className="border-t border-[#E3E3E4] bg-white py-16">
        <div className="section-container flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#717275]">
              National Franchising
            </p>
            <h2 className="card-title mt-1 text-2xl text-[#343538]">
              Ready to open a {brand.name} outlet in your city?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/apply" className="btn-primary min-h-[48px]">
              Apply for Franchise <ArrowRight size={16} />
            </Link>
            <Link href="/franchise" className="btn-secondary min-h-[48px]">
              Explore Franchising
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

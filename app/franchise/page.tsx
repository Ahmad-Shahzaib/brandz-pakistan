import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import { FranchiseProcess } from '../../components/FranchiseProcess';
import { FranchiseFAQ } from '../../components/FranchiseFAQ';
import { CTABand } from '../../components/CTABand';
import { getSiteContent } from '@/lib/api';
import {
  ArrowRight,
  Send,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Store,
  Users,
  Boxes,
  Megaphone,
  Star,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Franchise Opportunity',
  description:
    'Bring Brandz Pakistan to your city. Explore franchise models, investment overview, our 12-step process, training & support, and FAQs.',
};

const whyInvest = [
  Store,
  Star,
  ShieldCheck,
  Boxes,
  Users,
  TrendingUp,
];

const supportIcons = [Users, Boxes, Megaphone, ShieldCheck];
const featureIcons = { Store, Star, ShieldCheck, Boxes, Users, TrendingUp };

export default async function FranchisePage() {
  const { franchiseModels, investment, supportPillars, franchiseProcess, franchiseFaqs, images, franchiseReasons, idealPartner: idealPartnerItems, pageHeroes } = await getSiteContent();
  const hero = pageHeroes.franchise;

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
            alt="Brandz Pakistan franchise opportunity and restaurant setup"
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
              {hero?.eyebrow || 'Franchise With Brandz Pakistan'}
            </p>
            <h1 className="text-5xl font-bold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              {hero?.title || <>Bring Brandz Pakistan <span className="text-[#F05535]">to your city</span></>}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
              {hero?.description || 'Build your restaurant business with established food brands, proven operating systems, structured training and ongoing support.'}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#F05535] px-6 py-3 text-sm font-bold text-[#292A2D] transition hover:bg-[#D34518]"
              >
                <Send className="h-4 w-4 text-[#292A2D]" /> Apply now
              </Link>
              <a
                href="#models"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/60 bg-black/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                View franchise models <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="why-invest" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Why Invest in Brandz Pakistan"
          title="A Serious Business, Not Just a Brand"
          description="Why choose Brandz Pakistan over another food franchise? Because behind the crunch is a structured system built to be operated consistently and scaled responsibly."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {franchiseReasons.map((w, index) => {
            const FallbackIcon = whyInvest[index % whyInvest.length];
            const Icon = featureIcons[w.icon as keyof typeof featureIcons] || Store;
            return (
              <div key={w.title} className="rounded-2xl border border-[#E3E3E4] bg-white p-6 shadow-sm shadow-[#292A2D]/5 transition hover:border-[#F05535]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF0EC] text-[#D34518]">
                  {w.icon ? <Icon className="h-6 w-6" /> : <FallbackIcon className="h-6 w-6" />}
                </div>
                <h3 className="mb-1.5 font-heading text-lg font-extrabold text-[#343538]">{w.title}</h3>
                <p className="text-sm leading-relaxed text-[#717275]">{w.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="models" className="bg-[#F7F7F7] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Franchise Models"
            title="A Format for Every Market"
            description="From compact delivery kitchens to standalone drive-thrus — choose the format that fits your site and ambition."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {franchiseModels.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col justify-between rounded-3xl border-2 bg-white p-7 transition-all ${
                  m.featured ? 'border-[#F05535] shadow-xl shadow-[#292A2D]/5' : 'border-[#E3E3E4] hover:border-[#F05535]'
                }`}
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="card-title text-xl">{m.name}</h3>
                    {m.featured && (
                      <span className="rounded-full bg-[#FFF0EC] border border-[#F05535]/30 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#D34518]">
                        Flagship Format
                      </span>
                    )}
                  </div>
                  <p className="body-regular text-sm text-[#717275]">{m.description}</p>
                  <div className="mt-5 space-y-2 rounded-2xl bg-[#F7F7F7] p-4 text-xs text-[#343538]">
                    <p><strong className="text-[#717275]">Required Area:</strong> {m.area}</p>
                    <p><strong className="text-[#717275]">Optimal Location:</strong> {m.bestFor}</p>
                  </div>
                </div>
                <div className="mt-6 border-t border-gray-100 pt-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#8A8B8E] mb-3">Key Features</p>
                  <ul className="grid grid-cols-1 gap-2">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-[#343538]">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F05535]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="investment" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Investment Overview"
          title="Transparent About the Essentials"
          description="Every restaurant is built for resilient unit economics. Initial capital includes turnkey architectural design, commercial equipment, and staff training."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Turnkey Investment', value: 'PKR 18M – 38M', note: 'Varies by outlet format & square footage' },
            { label: 'Restaurant Footprint', value: '600 – 3,500 sq.ft.', note: 'Express kiosk to full dine-in restaurant' },
            { label: 'Estimated Fit-Out Time', value: '8 – 14 Weeks', note: 'From site handover to grand opening' },
            { label: 'Franchise Royalty & Support', value: '5% Ongoing', note: 'Covers audits, marketing & central supply' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-[#E3E3E4] bg-white p-6 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-[.12em] text-[#717275]">{item.label}</p>
              <p className="mt-2 font-heading text-2xl font-extrabold text-[#D34518]">{item.value}</p>
              <p className="mt-2 text-xs text-[#717275]">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-[#F1C3B8] bg-[#FFF0EC] p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#D34518]" />
          <p className="text-xs sm:text-sm text-[#717275] leading-relaxed">
            <strong className="text-[#343538]">Note on Investment:</strong> Exact expenditure depends on location tenancy terms, MEP utility infrastructure, and selected brand equipment packages. Verified financial disclosures are provided to qualified applicants during Phase 1 screening.
          </p>
        </div>
      </section>

      <section className="bg-[#292A2D] py-16 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[.14em] text-[#F6A18F]">Ideal Franchise Partner</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight sm:text-4xl">
              Who we are looking for
            </h2>
            <p className="mt-4 max-w-xl text-gray-300 leading-relaxed">
              We build long-term partnerships. The strongest Brandz Pakistan partners combine business capability with genuine commitment to the brand and their local community.
            </p>
            <Link href="/apply" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#F05535] px-6 py-3.5 text-sm font-bold text-[#292A2D] transition hover:bg-[#D34518]">
              Check your eligibility <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {idealPartnerItems.map((item) => item.label).map((p) => (
              <div key={p} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3.5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F6A18F]" />
                <span className="text-sm font-medium">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Franchise Process"
          title="From Application to Grand Opening"
          description="A clear, structured 12-step journey — you are supported at every stage."
        />
        <div className="mx-auto mt-14 max-w-5xl">
          <FranchiseProcess steps={franchiseProcess} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="What Brandz Pakistan Provides"
            title="Built on Systems. Delivered by People."
            description="A complete operating system — so you can focus on running a great restaurant."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {supportPillars.map((pillar, i) => {
              const Icon = supportIcons[i % supportIcons.length];
              return (
                <div key={pillar.title} className="rounded-2xl border border-[#E3E3E4] bg-[#F7F7F7] p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#343538] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-extrabold text-[#343538]">{pillar.title}</h3>
                      <p className="text-xs text-[#717275]">{pillar.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {pillar.points.map((pt) => (
                      <div key={pt} className="flex items-center gap-1.5 text-xs text-[#717275]">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#D34518]" />
                        {pt}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#F7F7F7] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader eyebrow="Franchise FAQ" title="The Questions Investors Actually Ask" />
          <div className="mt-12">
            <FranchiseFAQ faqs={franchiseFaqs} />
          </div>
        </div>
      </section>

      <CTABand
        heading="Ready to Bring Brandz Pakistan to Your City?"
        text="Submit your application and our franchise development team will be in touch to guide you through the next steps."
        image={images.interior}
      />
    </main>
  );
}

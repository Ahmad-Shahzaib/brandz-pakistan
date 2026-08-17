import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import { FranchiseProcess } from '../../components/FranchiseProcess';
import { FranchiseFAQ } from '../../components/FranchiseFAQ';
import { CTABand } from '../../components/CTABand';
import {
  FRANCHISE_MODELS,
  INVESTMENT_OVERVIEW,
  SUPPORT_PILLARS,
} from '../../data/siteData';
import { INTERIOR_IMAGE } from '../../data/corporateData';
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
  { icon: Store, title: 'Established Restaurant Brand', text: 'A recognised homegrown name with 45+ outlets and strong customer loyalty.' },
  { icon: Star, title: 'Proven, Loved Menu', text: 'A signature product with consistent recipes people return for.' },
  { icon: ShieldCheck, title: 'Standardized Operations', text: 'Documented SOPs for kitchen, service, hygiene and inventory.' },
  { icon: Boxes, title: 'Central Supply Chain', text: 'Consistent ingredients through central procurement and distribution.' },
  { icon: Users, title: 'Training & People Systems', text: 'Structured onboarding and staff training for reliable delivery.' },
  { icon: TrendingUp, title: 'Scalable & Multi-Format', text: 'From express outlets to drive-thru — models that fit many markets.' },
];

const idealPartner = [
  'Entrepreneurial mindset',
  'Financial capability',
  'Strong local market understanding',
  'Commitment to brand standards',
  'Leadership ability',
  'Operational involvement',
  'Long-term business mindset',
  'Customer-focused approach',
];

const supportIcons = [Users, Boxes, Megaphone, ShieldCheck];

export default function FranchisePage() {
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
            alt="Brandz Pakistan franchise opportunity and restaurant setup"
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
              Franchise With Brandz Pakistan
            </p>
            <h1 className="text-5xl font-bold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              Bring Brandz Pakistan <span className="text-[#67C63C]">to your city</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
              Build your restaurant business with an established food brand, proven operating systems, structured training and ongoing franchise support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#67C63C] px-6 py-3 text-sm font-bold text-[#032316] transition hover:bg-[#88D961]"
              >
                <Send className="h-4 w-4 text-[#032316]" /> Apply now
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
          {whyInvest.map((w) => {
            const Icon = w.icon;
            return (
              <div key={w.title} className="rounded-2xl border border-[#DCE6DE] bg-white p-6 shadow-sm shadow-[#031B12]/5 transition hover:border-[#67C63C]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7E4] text-[#2C7A35]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1.5 font-heading text-lg font-extrabold text-[#163323]">{w.title}</h3>
                <p className="text-sm leading-relaxed text-[#52605A]">{w.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="models" className="bg-[#F3F8F4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Franchise Models"
            title="A Format for Every Market"
            description="From compact delivery kitchens to standalone drive-thrus — choose the format that fits your site and ambition."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FRANCHISE_MODELS.map((m) => (
              <div
                key={m.id}
                className={`rounded-2xl border-2 bg-white p-6 transition-all ${
                  m.featured ? 'border-[#67C63C] shadow-lg shadow-[#031B12]/5' : 'border-[#DCE6DE] hover:border-[#67C63C]'
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-heading text-xl font-extrabold text-[#163323]">{m.name}</h3>
                  {m.featured && (
                    <span className="rounded-full bg-[#67C63C] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#032316]">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-[#52605A]">{m.description}</p>
                <div className="mt-4 space-y-1.5 text-xs text-[#163323]">
                  <p><span className="font-bold">Area:</span> {m.area}</p>
                  <p><span className="font-bold">Best for:</span> {m.bestFor}</p>
                </div>
                <ul className="mt-4 grid grid-cols-2 gap-1.5">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-xs text-[#52605A]">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#2C7A35]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="investment" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Investment Overview"
          title="Transparent About the Essentials"
          description="Final figures depend on format, location and property condition — verified details are shared with qualified applicants."
        />
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INVESTMENT_OVERVIEW.map((item) => (
            <div key={item.label} className="rounded-2xl border border-[#DCE6DE] bg-[#F7FAF7] p-5">
              <p className="text-xs font-bold uppercase tracking-[.12em] text-[#52605A]">{item.label}</p>
              <p className="mt-1.5 font-heading text-lg font-extrabold text-[#2C7A35]">{item.value}</p>
              {item.note && <p className="mt-1 text-xs text-[#52605A]">{item.note}</p>}
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-[#D9E9C3] bg-[#EEF7E8] p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#2C7A35]" />
          <p className="text-sm text-[#52605A]">
            <strong className="text-[#163323]">Please note:</strong> Investment requirements vary based on location, restaurant format, property condition and market. Contact the franchise team for current investment details.
          </p>
        </div>
      </section>

      <section className="bg-[#031B12] py-16 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[.14em] text-[#A7E778]">Ideal Franchise Partner</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight sm:text-4xl">
              Who we are looking for
            </h2>
            <p className="mt-4 max-w-xl text-gray-300 leading-relaxed">
              We build long-term partnerships. The strongest Brandz Pakistan partners combine business capability with genuine commitment to the brand and their local community.
            </p>
            <Link href="/apply" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#67C63C] px-6 py-3.5 text-sm font-bold text-[#032316] transition hover:bg-[#88D961]">
              Check your eligibility <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {idealPartner.map((p) => (
              <div key={p} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3.5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#A7E778]" />
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
          <FranchiseProcess />
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
            {SUPPORT_PILLARS.map((pillar, i) => {
              const Icon = supportIcons[i % supportIcons.length];
              return (
                <div key={pillar.title} className="rounded-2xl border border-[#DCE6DE] bg-[#F7FAF7] p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#052B1A] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-extrabold text-[#163323]">{pillar.title}</h3>
                      <p className="text-xs text-[#52605A]">{pillar.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {pillar.points.map((pt) => (
                      <div key={pt} className="flex items-center gap-1.5 text-xs text-[#52605A]">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#2C7A35]" />
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

      <section id="faq" className="bg-[#F3F8F4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader eyebrow="Franchise FAQ" title="The Questions Investors Actually Ask" />
          <div className="mt-12">
            <FranchiseFAQ />
          </div>
        </div>
      </section>

      <CTABand
        heading="Ready to Bring Brandz Pakistan to Your City?"
        text="Submit your application and our franchise development team will be in touch to guide you through the next steps."
      />
    </main>
  );
}

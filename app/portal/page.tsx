import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Download,
  FileText,
  KeyRound,
  ShieldCheck,
  Building2,
  Phone,
  HelpCircle,
} from 'lucide-react';
import { PortalSignInForm } from '@/components/PortalSignInForm';

export const metadata: Metadata = {
  title: 'Partner & Franchisee Portal',
  description:
    'Dedicated portal for Brandz Pakistan franchise partners, investors, and brand operators to access resources, submit inquiries, and manage operations.',
};

export default function PortalPage() {
  return (
    <main className="bg-[#F7F7F7] text-[#343538]">
      {/* Portal Hero */}
      <section className="relative overflow-hidden bg-[#292A2D] pt-28 pb-20 text-white sm:pt-36 sm:pb-24">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 85%, #B93A23 0, transparent 35%), radial-gradient(circle at 80% 10%, #454649 0, transparent 40%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F05535]/30 bg-[#FFF0EC]/10 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#F6A18F]">
              <KeyRound className="h-3.5 w-3.5 text-[#F05535]" /> Partner Network
            </span>
            <h1 className="hero-title text-white">
              Partner &amp; Franchisee <span className="text-[#F05535]">Portal</span>
            </h1>
            <p className="body-lead mt-5 text-gray-300">
              A secure gateway for registered franchise owners, commercial partners, and authorized operators to access brand operating systems, training documents, and central support.
            </p>
          </div>
        </div>
      </section>

      {/* Portal Dashboard Grid */}
      <section className="section-padding section-container">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column: Sign-in & Status */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#E3E3E4] bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center justify-between border-b border-[#E3E3E4] pb-5">
                <div>
                  <h2 className="card-title">Franchisee Access</h2>
                  <p className="small-copy mt-1">Sign in with your registered franchise credentials</p>
                </div>
                <span className="rounded-full bg-[#FFF0EC] px-3 py-1 text-xs font-bold text-[#D34518]">
                  Verified Partners
                </span>
              </div>

              <PortalSignInForm />

              <div className="mt-6 rounded-2xl bg-[#F7F7F7] p-4 text-xs leading-relaxed text-[#717275]">
                <strong className="text-[#343538]">Notice:</strong> First-time franchise partners receive their access credentials upon signing the formal Franchise Agreement and completing the Phase 1 orientation.
              </div>
            </div>

            {/* Prospective Franchisees */}
            <div className="rounded-3xl border border-[#E3E3E4] bg-white p-8 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D34518]">
                New Applicants
              </span>
              <h3 className="card-title mt-2">Not Yet a Franchise Partner?</h3>
              <p className="body-regular mt-2">
                Brandz Pakistan welcomes qualified investors, operators, and commercial property owners to join our national franchise network.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/apply" className="btn-primary">
                  Start Franchise Application <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/franchise" className="btn-secondary">
                  Review Franchise Models
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Downloads & Support Hub */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-[#343538] p-8 text-white shadow-xl">
              <h3 className="font-heading text-2xl font-bold text-white">Partner Resources</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                Official documents, branding guidelines, and compliance frameworks for Brandz Pakistan outlets.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { title: 'Brandz Franchise Development Deck 2026', size: '4.8 MB PDF', icon: FileText },
                  { title: 'Outlet Fit-Out & Kitchen Specifications SOP', size: '7.2 MB PDF', icon: Building2 },
                  { title: 'Supply Chain & Approved Vendor Directory', size: '2.1 MB PDF', icon: ShieldCheck },
                  { title: 'Food Safety & QA Audit Checklist', size: '1.5 MB PDF', icon: Download },
                ].map((doc) => {
                  const Icon = doc.icon;
                  return (
                    <div
                      key={doc.title}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F05535]/20 text-[#F6A18F]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white leading-snug">{doc.title}</p>
                          <p className="text-xs text-white/50">{doc.size}</p>
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="shrink-0 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#F05535]"
                      >
                        Request
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Partner Support */}
            <div id="portal-support" className="rounded-3xl border border-[#E3E3E4] bg-white p-8 shadow-sm">
              <h3 className="card-title">Franchise Helpdesk</h3>
              <p className="body-regular mt-2">
                Need immediate operational assistance, supply chain guidance, or account access help?
              </p>
              <div className="mt-5 space-y-3 text-sm">
                <a
                  href="tel:+9242111272697"
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-[#F7F7F7] p-3 text-[#343538] transition hover:border-[#F05535]"
                >
                  <Phone className="h-4 w-4 text-[#F05535]" />
                  <span>Partner Hotline: +92 42 111 272 697</span>
                </a>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-[#F7F7F7] p-3 text-[#343538] transition hover:border-[#F05535]"
                >
                  <HelpCircle className="h-4 w-4 text-[#F05535]" />
                  <span>Submit Partner Ticket / Inquiry</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

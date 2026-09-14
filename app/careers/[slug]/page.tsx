import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getJob, getSiteContent } from '@/lib/api';
import { JobApplicationForm } from '@/components/JobApplicationForm';
import {
  MapPin,
  Briefcase,
  Building2,
  CheckCircle,
  ArrowLeft,
  Clock,
  ShieldCheck,
  Award,
  Users,
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { jobs } = await getSiteContent();
  return jobs.map((j) => ({ slug: j.slug || j.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJob(slug);

  if (!job) {
    return {
      title: 'Job Not Found',
    };
  }

  return {
    title: `${job.title} – Careers`,
    description: `${job.summary} Join Brandz Pakistan as a ${job.title} in ${job.location}. Apply today.`,
    openGraph: {
      title: `${job.title} | Careers at Brandz Pakistan`,
      description: job.summary,
      type: 'article',
    },
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = await getJob(slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="bg-[#F7F7F7] min-h-screen text-[#343538] pb-24">
      {/* Hero Header */}
      <section className="bg-[#292A2D] text-white pt-28 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 85%, #B93A23 0, transparent 35%), radial-gradient(circle at 85% 15%, #55575B 0, transparent 40%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Positions
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-[#F05535] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              {job.department}
            </span>
            <span className="text-white/40 select-none" aria-hidden="true">•</span>
            <span className="bg-white/10 text-gray-200 text-[11px] font-bold px-3 py-1 rounded-full">
              {job.type}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            {job.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F6A18F]" />
              <span>Location: {job.location}</span>
            </span>
            <span className="text-white/30 select-none" aria-hidden="true">•</span>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#F6A18F]" />
              Brandz Pakistan Corporate &amp; Operations
            </span>
            <span className="text-white/30 select-none" aria-hidden="true">•</span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F6A18F]" />
              Immediate Hiring
            </span>
          </div>
        </div>
      </section>

      {/* Main Content & Application Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Role Details */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-xs">
              <h2 className="font-heading font-extrabold text-xl text-[#343538] mb-3">
                Role Overview
              </h2>
              <p className="body-lead text-[#343538] leading-relaxed">
                {job.description || job.summary}
              </p>
            </div>

            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-xs">
                <h2 className="font-heading font-extrabold text-xl text-[#343538] mb-4">
                  Key Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((r: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#717275] leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-[#F05535] shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Qualifications / Requirements */}
            {job.qualifications && job.qualifications.length > 0 && (
              <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-xs">
                <h2 className="font-heading font-extrabold text-xl text-[#343538] mb-4">
                  Qualifications & Requirements
                </h2>
                <ul className="space-y-3">
                  {job.qualifications.map((q: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#717275] leading-relaxed">
                      <ShieldCheck className="w-5 h-5 text-[#F05535] shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {job.benefits && job.benefits.length > 0 && (
              <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-xs">
                <h2 className="font-heading font-extrabold text-xl text-[#343538] mb-4">
                  What We Offer
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {job.benefits.map((b: string, i: number) => (
                    <div
                      key={i}
                      className="bg-[#FFF0EC]/50 border border-[#F6A18F]/40 rounded-2xl p-4 flex items-start gap-3"
                    >
                      <Award className="w-5 h-5 text-[#F05535] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#343538] font-medium leading-snug">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3-Step Journey */}
            <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-xs">
              <span className="eyebrow">Recruitment Journey</span>
              <h2 className="font-heading font-extrabold text-xl text-[#343538] mt-1 mb-6">
                Our 3-Step Hiring Process
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-[#F7F7F7] rounded-2xl p-4 border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-[#F05535] text-white flex items-center justify-center text-xs font-black mb-3">
                    1
                  </div>
                  <h3 className="font-bold text-sm text-[#343538]">Application Review</h3>
                  <p className="text-xs text-[#717275] mt-1">Our HR team screens CVs within 48 business hours.</p>
                </div>
                <div className="bg-[#F7F7F7] rounded-2xl p-4 border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-[#343538] text-white flex items-center justify-center text-xs font-black mb-3">
                    2
                  </div>
                  <h3 className="font-bold text-sm text-[#343538]">Interview & Case</h3>
                  <p className="text-xs text-[#717275] mt-1">Structured interview with department heads and team leads.</p>
                </div>
                <div className="bg-[#F7F7F7] rounded-2xl p-4 border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-[#343538] text-white flex items-center justify-center text-xs font-black mb-3">
                    3
                  </div>
                  <h3 className="font-bold text-sm text-[#343538]">Offer & Onboarding</h3>
                  <p className="text-xs text-[#717275] mt-1">Official offer letter, duty kit, and comprehensive orientation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <JobApplicationForm job={job} />
          </div>
        </div>
      </section>
    </main>
  );
}

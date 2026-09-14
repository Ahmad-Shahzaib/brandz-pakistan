import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms and Conditions governing the use of Brandz Pakistan websites, portals, and franchise materials.',
};

export default function TermsPage() {
  return (
    <main className="bg-[#F7F7F7] text-[#343538]">
      <section className="bg-[#292A2D] pt-28 pb-16 text-white sm:pt-36">
        <div className="section-container">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F6A18F] hover:text-white">
            <ArrowLeft size={14} /> Return to Home
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F05535]/20 text-[#F6A18F]">
              <Scale size={20} />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F6A18F]">Terms &amp; Conditions</span>
          </div>
          <h1 className="hero-title mt-4 text-white">Terms of Use</h1>
          <p className="small-copy mt-2 text-gray-300">Effective Date: January 1, 2026</p>
        </div>
      </section>

      <section className="section-padding section-container">
        <div className="max-w-4xl space-y-10 rounded-3xl border border-[#E3E3E4] bg-white p-8 sm:p-12 shadow-sm">
          <div>
            <h2 className="card-title">1. Acceptance of Terms</h2>
            <p className="body-regular mt-3">
              By accessing or browsing the Brandz Pakistan website, partner portal, or associated digital services, you agree to comply with and be bound by these Terms of Use. If you do not agree, please discontinue using this site.
            </p>
          </div>

          <div>
            <h2 className="card-title">2. Intellectual Property Rights</h2>
            <p className="body-regular mt-3">
              All trademarks, logos, brand names (including Fri-Chiks, Timmy&apos;s, Shamana Restaurant, Whata Pizza, and other portfolio marks), photographs, text, designs, and downloadable materials are the proprietary intellectual property of Brandz Pakistan or its licensors. Unauthorized copying, modification, or commercial use is strictly prohibited without prior written consent.
            </p>
          </div>

          <div>
            <h2 className="card-title">3. Franchise Inquiries &amp; Non-Binding Estimates</h2>
            <p className="body-regular mt-3">
              Information presented on this website regarding franchise models, investment ranges, and development processes is provided for general informational purposes only. Submitting an application or inquiry does not constitute a binding franchise offer or contractual commitment. Formal franchise relationships are governed solely by signed Franchise Agreements.
            </p>
          </div>

          <div>
            <h2 className="card-title">4. Accuracy of Submissions</h2>
            <p className="body-regular mt-3">
              You agree that any information submitted through our contact, franchise application, careers, or property forms is true, accurate, and up-to-date. Brandz Pakistan reserves the right to decline or terminate discussions based on misleading or incomplete representations.
            </p>
          </div>

          <div>
            <h2 className="card-title">5. Governing Law</h2>
            <p className="body-regular mt-3">
              These Terms of Use are governed by and construed in accordance with the applicable laws of the Islamic Republic of Pakistan. Any disputes arising in connection with this site shall be subject to the jurisdiction of the competent courts in Lahore, Pakistan.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Brandz Pakistan Privacy Policy: How we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#F7F7F7] text-[#343538]">
      <section className="bg-[#292A2D] pt-28 pb-16 text-white sm:pt-36">
        <div className="section-container">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F6A18F] hover:text-white">
            <ArrowLeft size={14} /> Return to Home
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F05535]/20 text-[#F6A18F]">
              <Shield size={20} />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F6A18F]">Legal &amp; Compliance</span>
          </div>
          <h1 className="hero-title mt-4 text-white">Privacy Policy</h1>
          <p className="small-copy mt-2 text-gray-300">Effective Date: January 1, 2026 | Last Updated: August 2026</p>
        </div>
      </section>

      <section className="section-padding section-container">
        <div className="max-w-4xl space-y-10 rounded-3xl border border-[#E3E3E4] bg-white p-8 sm:p-12 shadow-sm">
          <div>
            <h2 className="card-title">1. Introduction</h2>
            <p className="body-regular mt-3">
              Brandz Pakistan (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is dedicated to protecting the personal data of our guests, franchise applicants, partners, and job seekers. This Privacy Policy explains our practices regarding data collection, usage, and disclosure across our websites, applications, and corporate communication channels.
            </p>
          </div>

          <div>
            <h2 className="card-title">2. Information We Collect</h2>
            <p className="body-regular mt-3">We collect information that you provide directly to us through forms on our website, including:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-[#717275]">
              <li><strong>Contact Information:</strong> Full name, email address, telephone/WhatsApp number, city, and province.</li>
              <li><strong>Franchise Application Details:</strong> Business experience, preferred territory, restaurant format interests, property details, and estimated investment capacity.</li>
              <li><strong>Employment Details:</strong> Resumes, cover notes, employment history, and qualifications submitted through our Careers explorer.</li>
              <li><strong>Customer Inquiries &amp; Feedback:</strong> General messages, restaurant feedback, and catering requests.</li>
            </ul>
          </div>

          <div>
            <h2 className="card-title">3. How We Use Your Information</h2>
            <p className="body-regular mt-3">We utilize the collected information strictly for legitimate commercial purposes:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-[#717275]">
              <li>To evaluate and process franchise applications and coordinate discovery meetings.</li>
              <li>To respond promptly to customer feedback, brand queries, and property proposals.</li>
              <li>To evaluate candidates for career opportunities within Brandz Pakistan and our brand concepts.</li>
              <li>To maintain our website security, optimize server performance, and audit compliance.</li>
            </ul>
          </div>

          <div>
            <h2 className="card-title">4. Data Security &amp; Retention</h2>
            <p className="body-regular mt-3">
              We implement industry-standard encryption, firewalls, and secure server access protocols to safeguard your personal information against unauthorized access, alteration, or disclosure. We never sell or lease your personal information to third-party marketing brokers.
            </p>
          </div>

          <div>
            <h2 className="card-title">5. Contact Us Regarding Your Data</h2>
            <p className="body-regular mt-3">
              If you have any questions about this Privacy Policy, wish to update your details, or request deletion of your data, please contact our data officer at <a href="mailto:privacy@brandz.pk" className="font-bold text-[#D34518] hover:underline">privacy@brandz.pk</a> or visit our <Link href="/contact" className="font-bold text-[#D34518] hover:underline">Contact Page</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import { FormEvent, useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';

interface BrandEnquiryFormProps {
  brandSlug: string;
  brandName: string;
  brandLogo: string;
  offerings: string[];
}

const inputClass =
  'w-full rounded-xl border border-[#E3E3E4] bg-white px-4 py-3.5 text-sm text-[#343538] outline-none transition placeholder:text-[#9A9A9D] focus:border-[#F05535] focus:ring-4 focus:ring-[#F05535]/10';

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://brandz-pakistan.softsuitetech.com/api/v1').replace(/\/$/, '');

export function BrandEnquiryForm({ brandSlug, brandName, brandLogo, offerings }: BrandEnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setSubmitting(true);
    setError('');
    fetch(`${API_BASE}/enquiries`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'brand',
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        city: formData.get('city'),
        message: formData.get('message'),
        consent: formData.get('contactConsent') === 'on',
        payload: {
          brand_slug: brandSlug,
          brand_name: brandName,
          enquiry_type: formData.get('enquiryType'),
          preferred_contact: formData.get('preferredContact'),
          interest: formData.get('interest'),
        },
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Could not send enquiry.');
        setSubmitted(true);
      })
      .catch((err) => setError(err instanceof Error ? err.message : 'Could not send enquiry.'))
      .finally(() => setSubmitting(false));
  };

  return (
    <section id="enquiry-form" className="scroll-mt-24 bg-[#292A2D] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[.04] shadow-2xl shadow-black/15">
          <div className="grid lg:grid-cols-[.8fr_1.2fr]">
            <div className="relative overflow-hidden border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#F05535]/15 blur-3xl" />
              <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#F6A18F]/10 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#F6A18F]">Enquire about {brandName}</p>
                <h2 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-[-.035em] sm:text-5xl">
                  Have a question?<br />We&apos;re here to help.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/60 sm:text-base">
                  Send an enquiry to the {brandName} team for menu information, outlet details, catering, events, feedback or any other brand-related question.
                </p>

                <div className="mt-8 flex h-28 w-52 items-center justify-center rounded-2xl bg-white p-4 shadow-xl shadow-black/15">
                  <img src={brandLogo} alt={`${brandName} logo`} className="max-h-full w-full object-contain" />
                </div>

                <div className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {[
                    [MessageCircle, 'Easy enquiry', 'Tell us what you need'],
                    [Clock3, 'Quick response', 'Our team follows up'],
                    [MapPin, 'Brand support', 'Right team, right answer'],
                  ].map(([Icon, title, copy]: any) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/[.05] p-4">
                      <Icon size={18} className="text-[#F05535]" />
                      <p className="mt-3 text-sm font-bold text-white">{title}</p>
                      <p className="mt-1 text-xs text-white/45">{copy}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-xs leading-5 text-white/40">
                  This is an enquiry form only. Submitting it does not place an order or confirm a booking. The relevant team will contact you regarding your request.
                </p>
              </div>
            </div>

            <div className="bg-[#F7F7F7] p-6 text-[#343538] sm:p-10 lg:p-12">
              {submitted ? (
                <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF0EC] text-[#D34518]">
                    <CheckCircle2 size={42} />
                  </div>
                  <p className="mt-7 text-xs font-extrabold uppercase tracking-[.2em] text-[#D34518]">Enquiry received</p>
                  <h3 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">Thank you for reaching out.</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-[#717275]">
                    Your enquiry about {brandName} has been captured. The relevant team can review your message and get back to you using your preferred contact method.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-xl bg-[#F05535] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#D34518]"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={submitEnquiry}>
                  <div className="flex flex-col gap-3 border-b border-[#E3E3E4] pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#D34518]">Enquiry details</p>
                      <h3 className="mt-2 font-heading text-3xl font-bold tracking-[-.025em]">How can we help?</h3>
                    </div>
                    <p className="text-xs font-semibold text-[#8A8B8E]">* Required fields</p>
                  </div>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-bold">Full name *</label>
                      <input name="name" required className={inputClass} placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-bold">Phone number *</label>
                      <div className="relative">
                        <Phone size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9A9A9D]" />
                        <input name="phone" type="tel" required className={`${inputClass} pl-11`} placeholder="03xx xxxxxxx" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-bold">Email address *</label>
                      <div className="relative">
                        <Mail size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9A9A9D]" />
                        <input name="email" type="email" required className={`${inputClass} pl-11`} placeholder="name@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-bold">City *</label>
                      <div className="relative">
                        <MapPin size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9A9A9D]" />
                        <input name="city" required className={`${inputClass} pl-11`} placeholder="Your city" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-bold">Enquiry type *</label>
                      <div className="relative">
                        <select name="enquiryType" required defaultValue="" className={`${inputClass} appearance-none pr-11`}>
                          <option value="" disabled>Select an enquiry type</option>
                          <option>General enquiry</option>
                          <option>Menu & product information</option>
                          <option>Outlet / location information</option>
                          <option>Catering & events</option>
                          <option>Feedback / suggestion</option>
                          <option>Business / partnership enquiry</option>
                          <option>Other</option>
                        </select>
                        <ChevronDown size={17} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#717275]" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-bold">Preferred contact *</label>
                      <div className="relative">
                        <select name="preferredContact" required defaultValue="" className={`${inputClass} appearance-none pr-11`}>
                          <option value="" disabled>Choose contact method</option>
                          <option>Phone call</option>
                          <option>WhatsApp</option>
                          <option>Email</option>
                        </select>
                        <ChevronDown size={17} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#717275]" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="mb-2 block text-xs font-bold">Interested in</label>
                    <div className="relative">
                      <select name="interest" defaultValue="" className={`${inputClass} appearance-none pr-11`}>
                        <option value="">Select a product / topic (optional)</option>
                        {offerings.map((item) => <option key={item} value={item}>{item}</option>)}
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown size={17} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#717275]" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="mb-2 block text-xs font-bold">Your message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                      placeholder={`Tell us how the ${brandName} team can help you...`}
                    />
                  </div>

                  <label className="mt-5 flex items-start gap-3 rounded-xl border border-[#E3E3E4] bg-white p-4 text-xs leading-5 text-[#717275]">
                    <input type="checkbox" name="contactConsent" required className="mt-0.5 h-4 w-4 accent-[#F05535]" />
                    <span><strong className="text-[#343538]">Contact permission:</strong> I agree that Brandz Pakistan or the relevant {brandName} team may contact me regarding this enquiry.</span>
                  </label>

                  {error && <p className="mt-5 rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">{error}</p>}
                  <button type="submit" disabled={submitting} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F05535] px-6 py-4 text-sm font-extrabold uppercase tracking-[.08em] text-white shadow-lg shadow-[#F05535]/15 transition hover:-translate-y-0.5 hover:bg-[#D34518] hover:shadow-xl disabled:opacity-60">
                    <Sparkles size={18} /> {submitting ? 'Sending...' : 'Send enquiry'} <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

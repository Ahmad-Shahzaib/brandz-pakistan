'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  User,
  Briefcase,
  Building2,
  Wallet,
  MapPin,
  MessageSquare,
  ClipboardCheck,
  Send,
  Edit3,
} from 'lucide-react';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  occupation: string;
  company: string;
  businessExp: string;
  restaurantExp: string;
  preferredCity: string;
  preferredFormat: string;
  unitType: string;
  timeline: string;
  investmentRange: string;
  fundingMethod: string;
  hasLocation: string;
  propertyType: string;
  propertySize: string;
  whyFrichiks: string;
  hearAbout: string;
  comments: string;
  accurate: boolean;
  consent: boolean;
}

const initialState: FormState = {
  fullName: '', email: '', phone: '', country: 'Pakistan', city: '',
  occupation: '', company: '', businessExp: '', restaurantExp: 'No',
  preferredCity: '', preferredFormat: 'Standard Restaurant', unitType: 'Single Unit', timeline: '3–6 months',
  investmentRange: 'PKR 15M – 25M', fundingMethod: 'Personal',
  hasLocation: 'No', propertyType: '', propertySize: '',
  whyFrichiks: '', hearAbout: 'Website', comments: '',
  accurate: false, consent: false,
};

const steps = [
  { id: 0, label: 'Personal', icon: User },
  { id: 1, label: 'Experience', icon: Briefcase },
  { id: 2, label: 'Interest', icon: Building2 },
  { id: 3, label: 'Financial', icon: Wallet },
  { id: 4, label: 'Property', icon: MapPin },
  { id: 5, label: 'Final', icon: MessageSquare },
  { id: 6, label: 'Review', icon: ClipboardCheck },
];

const inputClass =
  'form-input-standard w-full text-sm text-[#343538] focus:outline-none focus:ring-2 focus:ring-[#F05535] focus:bg-white transition';
const labelClass = 'block text-xs font-bold text-[#343538] mb-1.5';
const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://brandz-pakistan.softsuitetech.com/api/v1').replace(/\/$/, '');
const DRAFT_STORAGE_KEY = 'brandz_franchise_draft';

const Field: React.FC<{ label: string; children: React.ReactNode; full?: boolean }> = ({ label, children }) => (
  <div>
    <label className={labelClass}>{label}</label>
    {children}
  </div>
);

export const FranchiseApplication: React.FC = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [hasRestoredDraft, setHasRestoredDraft] = useState(false);

  // Restore draft on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DRAFT_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setData((prev) => ({ ...prev, ...parsed }));
        setHasRestoredDraft(true);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Save draft whenever form state changes
  useEffect(() => {
    try {
      localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(data));
    } catch {
      // Ignore
    }
  }, [data]);

  const set = (k: keyof FormState, v: string | boolean) => {
    setData((d) => ({ ...d, [k]: v }));
    setError('');
  };

  const validateStep = (s: number): boolean => {
    if (s === 0) {
      if (!data.fullName.trim()) { setError('Please enter your full name.'); return false; }
      if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) { setError('Please enter a valid email address.'); return false; }
      if (!data.phone.trim()) { setError('Please enter your phone or WhatsApp number.'); return false; }
      if (!data.country.trim()) { setError('Please enter your country.'); return false; }
      if (!data.city.trim()) { setError('Please enter your city.'); return false; }
    }
    if (s === 1) {
      if (!data.occupation.trim()) { setError('Please specify your current occupation.'); return false; }
      if (!data.businessExp) { setError('Please select your business experience range.'); return false; }
    }
    if (s === 2) {
      if (!data.preferredCity.trim()) { setError('Please specify your preferred city or territory.'); return false; }
    }
    if (s === 3) {
      if (!data.investmentRange) { setError('Please select an investment range.'); return false; }
    }
    if (s === 4) {
      if (!data.hasLocation) { setError('Please specify whether you already have a property location.'); return false; }
    }
    if (s === 6) {
      if (!data.accurate) { setError('Please confirm that the information provided is accurate.'); return false; }
      if (!data.consent) { setError('Please consent to processing your application details.'); return false; }
    }
    setError('');
    return true;
  };

  const next = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const back = () => {
    setError('');
    setStep((s) => Math.max(s - 1, 0));
  };

  const submit = async () => {
    if (!validateStep(step)) return;
    setSubmitting(true);
    setError('');
    try {
      const response = await fetch(`${API_BASE}/franchise-applications`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          city: data.city,
          consent: data.consent,
          payload: data,
        }),
      });
      if (!response.ok) throw new Error('Could not submit application.');
      try {
        localStorage.removeItem(DRAFT_STORAGE_KEY);
      } catch {
        // Ignore
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not submit application.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl border border-gray-200/80 shadow-xl p-10">
        <div className="w-20 h-20 bg-[#FFF0EC] text-[#F05535] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h2 className="font-heading font-extrabold text-3xl text-[#343538] mt-6">
          Thank You for Your Interest in Brandz Pakistan
        </h2>
        <p className="text-[#717275] mt-3 leading-relaxed">
          Your application has been received. Our franchise development team will review your submission and reach out to <strong className="text-[#343538]">{data.email}</strong> to discuss the next steps.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/our-story" className="btn-primary">Explore Our Story</Link>
          <Link href="/restaurants" className="btn-secondary">View Restaurants</Link>
          <Link href="/" className="btn-secondary">Return Home</Link>
        </div>
      </div>
    );
  }

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Draft restoration indicator */}
      {hasRestoredDraft && (
        <div className="mb-4 flex items-center justify-between text-xs text-[#717275] bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl">
          <span>Draft restored from your last session</span>
          <button
            type="button"
            onClick={() => {
              setData(initialState);
              setHasRestoredDraft(false);
              try { localStorage.removeItem(DRAFT_STORAGE_KEY); } catch {}
            }}
            className="text-[#F05535] hover:underline font-semibold cursor-pointer"
          >
            Clear Draft
          </button>
        </div>
      )}

      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2" aria-live="polite">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#343538]">Step {step + 1} of {steps.length}</span>
            <span className="text-sm text-[#717275]">• {steps[step].label}</span>
          </div>
          <span className="text-xs font-semibold text-[#F05535]">{Math.round(progress)}% Completed</span>
        </div>
        <div
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Application progress: Step ${step + 1} of ${steps.length} (${steps[step].label})`}
          className="h-2.5 bg-gray-200 rounded-full overflow-hidden"
        >
          <motion.div className="h-full bg-[#F05535] rounded-full" animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
        </div>
        {/* Visual-only desktop step indicator (aria-hidden to avoid duplicate screen-reader speech) */}
        <div className="mt-4 hidden sm:flex items-center justify-between" aria-hidden="true">
          {steps.map((s) => {
            const Icon = s.icon;
            const done = s.id < step;
            const current = s.id === step;
            return (
              <div key={s.id} className="flex flex-col items-center gap-1 flex-1">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs transition-colors ${current ? 'bg-[#F05535] text-white shadow-md' : done ? 'bg-[#F6A18F] text-[#343538]' : 'bg-gray-200 text-gray-500'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-semibold ${current ? 'text-[#F05535]' : 'text-[#717275]'}`}>{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xl p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {step === 0 && (
              <div className="space-y-4">
                <h3 className="font-heading font-extrabold text-xl text-[#343538]">Personal Details</h3>
                <p className="text-xs text-[#717275]">Please provide your primary contact information for franchise correspondence.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name *"><input className={inputClass} value={data.fullName} onChange={(e) => set('fullName', e.target.value)} placeholder="e.g. Ali Raza" /></Field>
                  <Field label="Email Address *"><input type="email" className={inputClass} value={data.email} onChange={(e) => set('email', e.target.value)} placeholder="ali@example.pk" /></Field>
                  <Field label="Phone / WhatsApp *"><input className={inputClass} value={data.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+92 300 1234567" /></Field>
                  <Field label="Country *"><input className={inputClass} value={data.country} onChange={(e) => set('country', e.target.value)} placeholder="Pakistan" /></Field>
                  <div className="sm:col-span-2">
                    <Field label="City *"><input className={inputClass} value={data.city} onChange={(e) => set('city', e.target.value)} placeholder="e.g. Lahore" /></Field>
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <h3 className="font-heading font-extrabold text-xl text-[#343538]">Business Experience</h3>
                <p className="text-xs text-[#717275]">Share your professional background and management experience.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Current Occupation *"><input className={inputClass} value={data.occupation} onChange={(e) => set('occupation', e.target.value)} placeholder="e.g. Business Owner / Executive" /></Field>
                  <Field label="Company / Organisation"><input className={inputClass} value={data.company} onChange={(e) => set('company', e.target.value)} placeholder="e.g. Self-employed / Firm name" /></Field>
                  <Field label="Years of Business Experience *">
                    <select className={inputClass} value={data.businessExp} onChange={(e) => set('businessExp', e.target.value)}>
                      <option value="">Select experience…</option><option>0–2 years</option><option>3–5 years</option><option>6–10 years</option><option>10+ years</option>
                    </select>
                  </Field>
                  <Field label="Prior Restaurant / F&B Experience">
                    <select className={inputClass} value={data.restaurantExp} onChange={(e) => set('restaurantExp', e.target.value)}>
                      <option>No</option><option>Some</option><option>Extensive</option>
                    </select>
                  </Field>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="font-heading font-extrabold text-xl text-[#343538]">Franchise Interest</h3>
                <p className="text-xs text-[#717275]">Select your desired location and preferred outlet operational format.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Preferred City / Territory *"><input className={inputClass} value={data.preferredCity} onChange={(e) => set('preferredCity', e.target.value)} placeholder="e.g. Multan, Rawalpindi" /></Field>
                  <Field label="Preferred Restaurant Format">
                    <select className={inputClass} value={data.preferredFormat} onChange={(e) => set('preferredFormat', e.target.value)}>
                      <option>Standard Restaurant</option><option>Express Outlet</option><option>Takeaway / Delivery</option><option>Drive-Thru</option><option>Not sure yet</option>
                    </select>
                  </Field>
                  <Field label="Unit Type">
                    <select className={inputClass} value={data.unitType} onChange={(e) => set('unitType', e.target.value)}>
                      <option>Single Unit</option><option>Multi Unit</option><option>Area Development</option>
                    </select>
                  </Field>
                  <Field label="Expected Opening Timeline">
                    <select className={inputClass} value={data.timeline} onChange={(e) => set('timeline', e.target.value)}>
                      <option>Within 3 months</option><option>3–6 months</option><option>6–12 months</option><option>12+ months</option>
                    </select>
                  </Field>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="font-heading font-extrabold text-xl text-[#343538]">Financial Profile</h3>
                <p className="text-xs text-[#717275]">Indicate your investment readiness to help us match the best restaurant model.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Available Investment Range *">
                    <select className={inputClass} value={data.investmentRange} onChange={(e) => set('investmentRange', e.target.value)}>
                      <option>PKR 15M – 25M</option><option>PKR 25M – 40M</option><option>PKR 40M+</option><option>Contact for details</option>
                    </select>
                  </Field>
                  <Field label="Funding Method">
                    <select className={inputClass} value={data.fundingMethod} onChange={(e) => set('fundingMethod', e.target.value)}>
                      <option>Personal</option><option>Partnership</option><option>Company</option><option>Financing</option>
                    </select>
                  </Field>
                </div>
                <p className="text-xs text-[#717275] bg-[#FFF5F2] border border-[#F6A18F]/40 rounded-xl p-3">
                  We never ask for banking credentials or account numbers. Verified investment details are shared in confidence after initial qualification.
                </p>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h3 className="font-heading font-extrabold text-xl text-[#343538]">Property & Location</h3>
                <p className="text-xs text-[#717275]">Tell us whether you have secured or identified a commercial location.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Do You Already Have a Location? *">
                    <select className={inputClass} value={data.hasLocation} onChange={(e) => set('hasLocation', e.target.value)}>
                      <option>No</option><option>Yes — owned</option><option>Yes — leased</option><option>Under negotiation</option>
                    </select>
                  </Field>
                  <Field label="Property Type"><input className={inputClass} value={data.propertyType} onChange={(e) => set('propertyType', e.target.value)} placeholder="e.g. Corner plot, high street, mall unit" /></Field>
                  <div className="sm:col-span-2">
                    <Field label="Approximate Size (sq.ft.)"><input className={inputClass} value={data.propertySize} onChange={(e) => set('propertySize', e.target.value)} placeholder="e.g. 1800" /></Field>
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4">
                <h3 className="font-heading font-extrabold text-xl text-[#343538]">Final Questions</h3>
                <p className="text-xs text-[#717275]">A few final details to help our franchise development team prepare for our call.</p>
                <Field label="Why Brandz Pakistan?">
                  <textarea rows={3} className="form-input-standard w-full text-sm text-[#343538] focus:outline-none focus:ring-2 focus:ring-[#F05535] focus:bg-white transition" value={data.whyFrichiks} onChange={(e) => set('whyFrichiks', e.target.value)} placeholder="Tell us what draws you to our brands…" />
                </Field>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="How Did You Hear About Us?">
                    <select className={inputClass} value={data.hearAbout} onChange={(e) => set('hearAbout', e.target.value)}>
                      <option>Website</option><option>Social Media</option><option>A Brandz Pakistan Restaurant</option><option>Referral</option><option>News / Press</option><option>Other</option>
                    </select>
                  </Field>
                </div>
                <Field label="Additional Comments">
                  <textarea rows={3} className="form-input-standard w-full text-sm text-[#343538] focus:outline-none focus:ring-2 focus:ring-[#F05535] focus:bg-white transition" value={data.comments} onChange={(e) => set('comments', e.target.value)} placeholder="Any questions or specific requests for our team?" />
                </Field>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-5">
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-[#343538]">Review Your Application</h3>
                  <p className="text-xs text-[#717275] mt-1">Review all sections before submitting. You can click &ldquo;Edit&rdquo; on any section to make changes.</p>
                </div>

                {/* Section Review Groups */}
                <div className="space-y-3">
                  {/* Group 1: Personal */}
                  <div className="bg-[#F7F7F7] rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-200/80">
                      <span className="font-bold text-xs uppercase tracking-wider text-[#343538]">1. Personal Details</span>
                      <button type="button" onClick={() => setStep(0)} className="inline-flex items-center gap-1 text-xs text-[#F05535] hover:underline font-bold cursor-pointer">
                        <Edit3 className="w-3 h-3" /> Edit
                      </button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                      <div><span className="text-[#717275]">Name:</span> <strong className="text-[#343538] font-semibold">{data.fullName || '—'}</strong></div>
                      <div><span className="text-[#717275]">Email:</span> <strong className="text-[#343538] font-semibold">{data.email || '—'}</strong></div>
                      <div><span className="text-[#717275]">Phone:</span> <strong className="text-[#343538] font-semibold">{data.phone || '—'}</strong></div>
                      <div><span className="text-[#717275]">City / Country:</span> <strong className="text-[#343538] font-semibold">{data.city ? `${data.city}, ${data.country}` : '—'}</strong></div>
                    </div>
                  </div>

                  {/* Group 2: Business */}
                  <div className="bg-[#F7F7F7] rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-200/80">
                      <span className="font-bold text-xs uppercase tracking-wider text-[#343538]">2. Business Experience</span>
                      <button type="button" onClick={() => setStep(1)} className="inline-flex items-center gap-1 text-xs text-[#F05535] hover:underline font-bold cursor-pointer">
                        <Edit3 className="w-3 h-3" /> Edit
                      </button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                      <div><span className="text-[#717275]">Occupation:</span> <strong className="text-[#343538] font-semibold">{data.occupation || '—'}</strong></div>
                      <div><span className="text-[#717275]">Company:</span> <strong className="text-[#343538] font-semibold">{data.company || '—'}</strong></div>
                      <div><span className="text-[#717275]">Experience:</span> <strong className="text-[#343538] font-semibold">{data.businessExp || '—'}</strong></div>
                      <div><span className="text-[#717275]">F&B Background:</span> <strong className="text-[#343538] font-semibold">{data.restaurantExp}</strong></div>
                    </div>
                  </div>

                  {/* Group 3: Interest & Model */}
                  <div className="bg-[#F7F7F7] rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-200/80">
                      <span className="font-bold text-xs uppercase tracking-wider text-[#343538]">3. Franchise Interest</span>
                      <button type="button" onClick={() => setStep(2)} className="inline-flex items-center gap-1 text-xs text-[#F05535] hover:underline font-bold cursor-pointer">
                        <Edit3 className="w-3 h-3" /> Edit
                      </button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                      <div><span className="text-[#717275]">Target Territory:</span> <strong className="text-[#343538] font-semibold">{data.preferredCity || '—'}</strong></div>
                      <div><span className="text-[#717275]">Format:</span> <strong className="text-[#343538] font-semibold">{data.preferredFormat}</strong></div>
                      <div><span className="text-[#717275]">Unit Type:</span> <strong className="text-[#343538] font-semibold">{data.unitType}</strong></div>
                      <div><span className="text-[#717275]">Timeline:</span> <strong className="text-[#343538] font-semibold">{data.timeline}</strong></div>
                    </div>
                  </div>

                  {/* Group 4: Financial & Property */}
                  <div className="bg-[#F7F7F7] rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-200/80">
                      <span className="font-bold text-xs uppercase tracking-wider text-[#343538]">4. Financial & Property Profile</span>
                      <button type="button" onClick={() => setStep(3)} className="inline-flex items-center gap-1 text-xs text-[#F05535] hover:underline font-bold cursor-pointer">
                        <Edit3 className="w-3 h-3" /> Edit
                      </button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                      <div><span className="text-[#717275]">Investment Range:</span> <strong className="text-[#343538] font-semibold">{data.investmentRange}</strong></div>
                      <div><span className="text-[#717275]">Funding Source:</span> <strong className="text-[#343538] font-semibold">{data.fundingMethod}</strong></div>
                      <div><span className="text-[#717275]">Location Secured:</span> <strong className="text-[#343538] font-semibold">{data.hasLocation}</strong></div>
                      <div><span className="text-[#717275]">Property Size:</span> <strong className="text-[#343538] font-semibold">{data.propertySize ? `${data.propertySize} sq.ft.` : '—'}</strong></div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  <label className="flex items-start gap-2.5 text-sm text-[#343538] cursor-pointer">
                    <input type="checkbox" checked={data.accurate} onChange={(e) => set('accurate', e.target.checked)} className="mt-1 w-4 h-4 accent-[#F05535] cursor-pointer" />
                    <span>I confirm that the information provided is accurate to the best of my knowledge.</span>
                  </label>
                  <label className="flex items-start gap-2.5 text-sm text-[#343538] cursor-pointer">
                    <input type="checkbox" checked={data.consent} onChange={(e) => set('consent', e.target.checked)} className="mt-1 w-4 h-4 accent-[#F05535] cursor-pointer" />
                    <span>I consent to Brandz Pakistan processing my details to review this application in accordance with the <Link href="/privacy" className="text-[#F05535] underline hover:text-[#D34518]" target="_blank">Privacy Policy</Link>.</span>
                  </label>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 text-[#F05535] rounded-xl text-sm font-semibold flex items-center gap-2">
            <span>⚠️</span> {error}
          </div>
        )}

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between pt-4 border-t border-gray-100">
          {step > 0 ? (
            <button
              type="button"
              onClick={back}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-sm border border-gray-200 text-[#343538] hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
          ) : (
            <div />
          )}

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="flex items-center gap-1.5 bg-[#F05535] hover:bg-[#D34518] text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer shadow-md hover:shadow-lg"
            >
              Continue <ChevronRight className="w-4 h-4 text-[#F6A18F]" />
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              disabled={submitting}
              className="flex items-center gap-2 bg-[#F05535] hover:bg-[#D34518] disabled:opacity-60 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer shadow-md hover:shadow-lg"
            >
              <Send className="w-4 h-4 text-[#F6A18F]" /> {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

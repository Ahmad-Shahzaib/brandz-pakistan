'use client';

import React, { useState } from 'react';
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
  investmentRange: 'Contact for details', fundingMethod: 'Personal',
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
  'w-full bg-[#F7F7F7] text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535] transition';
const labelClass = 'block text-xs font-bold text-[#343538] mb-1.5';
const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://brandz-pakistan.softsuitetech.com/api/v1').replace(/\/$/, '');

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

  const set = (k: keyof FormState, v: string | boolean) => {
    setData((d) => ({ ...d, [k]: v }));
    setError('');
  };

  const validateStep = (): boolean => {
    if (step === 0) {
      if (!data.fullName || !data.email || !data.phone || !data.city) {
        setError('Please complete all required fields.');
        return false;
      }
    }
    if (step === 6 && (!data.accurate || !data.consent)) {
      setError('Please confirm accuracy and privacy consent to submit.');
      return false;
    }
    return true;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    if (!validateStep()) return;
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
          Thank You for Your Interest in Fri-Chiks ®
        </h2>
        <p className="text-[#717275] mt-3 leading-relaxed">
          Your application has been received. Our franchise development team will review your submission and reach out to <strong className="text-[#343538]">{data.email}</strong> to discuss the next steps.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/our-story" className="bg-[#F05535] hover:bg-[#D34518] text-white px-5 py-3 rounded-xl font-bold text-sm transition-all">Explore Our Story</Link>
          <Link href="/restaurants" className="bg-[#F7F7F7] border border-gray-200 text-[#343538] px-5 py-3 rounded-xl font-bold text-sm transition-all">View Restaurants</Link>
          <Link href="/" className="bg-[#F7F7F7] border border-gray-200 text-[#343538] px-5 py-3 rounded-xl font-bold text-sm transition-all">Return Home</Link>
        </div>
      </div>
    );
  }

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-[#343538]">Step {step + 1} of {steps.length}</span>
          <span className="text-sm text-[#717275]">{steps[step].label}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div className="h-full bg-[#F05535] rounded-full" animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
        </div>
        <div className="mt-4 hidden sm:flex items-center justify-between">
          {steps.map((s) => {
            const Icon = s.icon;
            const done = s.id < step;
            const current = s.id === step;
            return (
              <div key={s.id} className="flex flex-col items-center gap-1 flex-1">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs transition-colors ${current ? 'bg-[#F05535] text-white' : done ? 'bg-[#F6A18F] text-[#343538]' : 'bg-gray-200 text-gray-500'}`}>
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
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name *"><input className={inputClass} value={data.fullName} onChange={(e) => set('fullName', e.target.value)} placeholder="e.g. Ali Raza" /></Field>
                  <Field label="Email Address *"><input type="email" className={inputClass} value={data.email} onChange={(e) => set('email', e.target.value)} placeholder="ali@example.pk" /></Field>
                  <Field label="Phone / WhatsApp *"><input className={inputClass} value={data.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+92 300 1234567" /></Field>
                  <Field label="Country"><input className={inputClass} value={data.country} onChange={(e) => set('country', e.target.value)} /></Field>
                  <Field label="City *"><input className={inputClass} value={data.city} onChange={(e) => set('city', e.target.value)} placeholder="e.g. Lahore" /></Field>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <h3 className="font-heading font-extrabold text-xl text-[#343538]">Business Experience</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Current Occupation"><input className={inputClass} value={data.occupation} onChange={(e) => set('occupation', e.target.value)} /></Field>
                  <Field label="Company / Organisation"><input className={inputClass} value={data.company} onChange={(e) => set('company', e.target.value)} /></Field>
                  <Field label="Years of Business Experience">
                    <select className={inputClass} value={data.businessExp} onChange={(e) => set('businessExp', e.target.value)}>
                      <option value="">Select…</option><option>0–2 years</option><option>3–5 years</option><option>6–10 years</option><option>10+ years</option>
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
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Preferred City / Territory"><input className={inputClass} value={data.preferredCity} onChange={(e) => set('preferredCity', e.target.value)} placeholder="e.g. Multan" /></Field>
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
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Available Investment Range">
                    <select className={inputClass} value={data.investmentRange} onChange={(e) => set('investmentRange', e.target.value)}>
                      <option>Contact for details</option><option>PKR 15M – 25M</option><option>PKR 25M – 40M</option><option>PKR 40M+</option>
                    </select>
                  </Field>
                  <Field label="Funding Method">
                    <select className={inputClass} value={data.fundingMethod} onChange={(e) => set('fundingMethod', e.target.value)}>
                      <option>Personal</option><option>Partnership</option><option>Company</option><option>Financing</option>
                    </select>
                  </Field>
                </div>
                <p className="text-xs text-[#717275] bg-[#FFF5F2] border border-[#F6A18F]/40 rounded-xl p-3">
                  We never ask for banking credentials or account numbers. Verified investment details are shared after initial screening.
                </p>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h3 className="font-heading font-extrabold text-xl text-[#343538]">Property</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Do You Already Have a Location?">
                    <select className={inputClass} value={data.hasLocation} onChange={(e) => set('hasLocation', e.target.value)}>
                      <option>No</option><option>Yes — owned</option><option>Yes — leased</option><option>Under negotiation</option>
                    </select>
                  </Field>
                  <Field label="Property Type"><input className={inputClass} value={data.propertyType} onChange={(e) => set('propertyType', e.target.value)} placeholder="e.g. Corner plot, mall unit" /></Field>
                  <Field label="Approximate Size (sq.ft.)"><input className={inputClass} value={data.propertySize} onChange={(e) => set('propertySize', e.target.value)} placeholder="e.g. 1800" /></Field>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4">
                <h3 className="font-heading font-extrabold text-xl text-[#343538]">Final Questions</h3>
                <Field label="Why Fri-Chiks ®?">
                  <textarea rows={3} className={inputClass} value={data.whyFrichiks} onChange={(e) => set('whyFrichiks', e.target.value)} placeholder="Tell us what draws you to the brand…" />
                </Field>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="How Did You Hear About Us?">
                    <select className={inputClass} value={data.hearAbout} onChange={(e) => set('hearAbout', e.target.value)}>
                      <option>Website</option><option>Social Media</option><option>A Fri-Chiks ® Restaurant</option><option>Referral</option><option>News / Press</option><option>Other</option>
                    </select>
                  </Field>
                </div>
                <Field label="Additional Comments">
                  <textarea rows={3} className={inputClass} value={data.comments} onChange={(e) => set('comments', e.target.value)} />
                </Field>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-4">
                <h3 className="font-heading font-extrabold text-xl text-[#343538]">Review Your Application</h3>
                <div className="bg-[#F7F7F7] rounded-2xl p-5 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  {([
                    ['Name', data.fullName], ['Email', data.email], ['Phone', data.phone], ['City', data.city],
                    ['Occupation', data.occupation], ['Business Exp.', data.businessExp], ['Restaurant Exp.', data.restaurantExp],
                    ['Preferred City', data.preferredCity], ['Format', data.preferredFormat], ['Unit Type', data.unitType],
                    ['Timeline', data.timeline], ['Investment', data.investmentRange], ['Funding', data.fundingMethod],
                    ['Has Location', data.hasLocation],
                  ] as [string, string][]).map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-3 border-b border-gray-200/70 py-1">
                      <span className="text-[#717275]">{k}</span>
                      <span className="font-semibold text-[#343538] text-right">{v || '—'}</span>
                    </div>
                  ))}
                </div>
                <label className="flex items-start gap-2.5 text-sm text-[#343538] cursor-pointer">
                  <input type="checkbox" checked={data.accurate} onChange={(e) => set('accurate', e.target.checked)} className="mt-1 accent-[#F05535]" />
                  <span>I confirm that the information provided is accurate.</span>
                </label>
                <label className="flex items-start gap-2.5 text-sm text-[#343538] cursor-pointer">
                  <input type="checkbox" checked={data.consent} onChange={(e) => set('consent', e.target.checked)} className="mt-1 accent-[#F05535]" />
                  <span>I consent to Fri-Chiks ® processing my details to respond to this application.</span>
                </label>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {error && <p className="mt-4 text-sm text-[#F05535] font-semibold">{error}</p>}

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={back}
            disabled={step === 0}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-sm border border-gray-200 text-[#343538] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>

          {step < steps.length - 1 ? (
            <button onClick={next} className="flex items-center gap-1.5 bg-[#F05535] hover:bg-[#D34518] text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer">
              Continue <ChevronRight className="w-4 h-4 text-[#F6A18F]" />
            </button>
          ) : (
            <button onClick={submit} disabled={submitting} className="flex items-center gap-2 bg-[#F05535] hover:bg-[#D34518] disabled:opacity-60 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer">
              <Send className="w-4 h-4 text-[#F6A18F]" /> {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

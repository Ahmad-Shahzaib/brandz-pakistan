'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { INQUIRY_TYPES } from '../data/siteData';

export const ContactForm: React.FC<{ defaultType?: string }> = ({ defaultType = 'general' }) => {
  const [type, setType] = useState(defaultType);
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-3xl border border-[#DCE6DE] bg-white p-10 text-center shadow-md shadow-[#031B12]/5">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF7E4] text-[#2C7A35]">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h3 className="mt-5 font-heading text-2xl font-extrabold text-[#163323]">Message Sent</h3>
        <p className="mt-2 text-[#52605A]">
          Thank you for reaching out. The relevant Fri-Chiks ® team will get back to you.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 cursor-pointer rounded-xl bg-[#67C63C] px-6 py-3 text-sm font-bold text-[#032316] transition hover:bg-[#88D961]"
        >
          Send Another
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-[#DCE6DE] bg-[#F5F8F5] px-3.5 py-2.5 text-sm text-[#173126] placeholder:text-[#6F7A73] focus:outline-none focus:ring-2 focus:ring-[#67C63C]';

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-5 rounded-3xl border border-[#DCE6DE] bg-white p-6 shadow-md shadow-[#031B12]/5 sm:p-8"
    >
      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-[.12em] text-[#163323]">
          Inquiry Type
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {INQUIRY_TYPES.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setType(t.id)}
              className={`rounded-xl border p-2.5 text-left transition-colors ${
                type === t.id
                  ? 'border-[#67C63C] bg-[#EAF7E4]'
                  : 'border-[#DCE6DE] bg-[#F5F8F5] hover:border-[#67C63C]/70'
              }`}
            >
              <span className={`block text-xs font-bold ${type === t.id ? 'text-[#2C7A35]' : 'text-[#163323]'}`}>
                {t.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-bold text-[#163323]">Full Name *</label>
          <input required className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold text-[#163323]">Email *</label>
          <input required type="email" className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold text-[#163323]">Phone</label>
          <input className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold text-[#163323]">City</label>
          <input className={inputClass} />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold text-[#163323]">Message *</label>
        <textarea required rows={5} className={`${inputClass} resize-y`} placeholder="How can we help?" />
      </div>

      <label className="flex items-start gap-2 text-xs text-[#52605A]">
        <input type="checkbox" required className="mt-0.5 accent-[#2C7A35]" />
        <span>I consent to Fri-Chiks ® using my details to respond to this inquiry.</span>
      </label>

      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#67C63C] py-3.5 text-base font-bold text-[#032316] transition hover:bg-[#88D961]"
      >
        <Send className="h-4 w-4 text-[#032316]" /> Send Message
      </button>
    </form>
  );
};

'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { INQUIRY_TYPES } from '../data/siteData';

export const ContactForm: React.FC<{ defaultType?: string }> = ({ defaultType = 'general' }) => {
  const [type, setType] = useState(defaultType);
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-3xl border border-[#E3E3E4] bg-white p-10 text-center shadow-md shadow-[#292A2D]/5">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF0EC] text-[#D34518]">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h3 className="mt-5 font-heading text-2xl font-extrabold text-[#343538]">Message Sent</h3>
        <p className="mt-2 text-[#717275]">
          Thank you for reaching out. The relevant Fri-Chiks ® team will get back to you.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 cursor-pointer rounded-xl bg-[#F05535] px-6 py-3 text-sm font-bold text-[#292A2D] transition hover:bg-[#D34518]"
        >
          Send Another
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-[#E3E3E4] bg-[#F7F7F7] px-3.5 py-2.5 text-sm text-[#343538] placeholder:text-[#8A8B8E] focus:outline-none focus:ring-2 focus:ring-[#F05535]';

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-5 rounded-3xl border border-[#E3E3E4] bg-white p-6 shadow-md shadow-[#292A2D]/5 sm:p-8"
    >
      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-[.12em] text-[#343538]">
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
                  ? 'border-[#F05535] bg-[#FFF0EC]'
                  : 'border-[#E3E3E4] bg-[#F7F7F7] hover:border-[#F05535]/70'
              }`}
            >
              <span className={`block text-xs font-bold ${type === t.id ? 'text-[#D34518]' : 'text-[#343538]'}`}>
                {t.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-bold text-[#343538]">Full Name *</label>
          <input required className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold text-[#343538]">Email *</label>
          <input required type="email" className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold text-[#343538]">Phone</label>
          <input className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold text-[#343538]">City</label>
          <input className={inputClass} />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold text-[#343538]">Message *</label>
        <textarea required rows={5} className={`${inputClass} resize-y`} placeholder="How can we help?" />
      </div>

      <label className="flex items-start gap-2 text-xs text-[#717275]">
        <input type="checkbox" required className="mt-0.5 accent-[#D34518]" />
        <span>I consent to Fri-Chiks ® using my details to respond to this inquiry.</span>
      </label>

      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#F05535] py-3.5 text-base font-bold text-[#292A2D] transition hover:bg-[#D34518]"
      >
        <Send className="h-4 w-4 text-[#292A2D]" /> Send Message
      </button>
    </form>
  );
};

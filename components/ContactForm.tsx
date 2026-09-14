'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import type { InquiryType } from '@/lib/types';

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://brandz-pakistan.softsuitetech.com/api/v1').replace(/\/$/, '');

export const ContactForm: React.FC<{ defaultType?: string; inquiryTypes?: InquiryType[] }> = ({
  defaultType = 'general',
  inquiryTypes = [],
}) => {
  const [type, setType] = useState(defaultType);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (sent) {
    return (
      <div className="rounded-3xl border border-[#E3E3E4] bg-white p-8 sm:p-12 text-center shadow-md">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF0EC] text-[#F05535] shadow-xs">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h3 className="mt-5 font-heading text-2xl font-extrabold text-[#343538]">
          Inquiry Successfully Sent!
        </h3>
        <p className="mt-2 text-sm text-[#717275] max-w-md mx-auto leading-relaxed">
          Thank you for getting in touch. Your message has been routed to our <strong className="text-[#343538] capitalize">{type}</strong> desk. A Brandz Pakistan representative will respond to your provided contact within 24–48 business hours.
        </p>
        <button
          onClick={() => setSent(false)}
          className="btn-primary mt-6 text-xs px-6 py-2.5 inline-block cursor-pointer"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  const inputClass =
    'form-input-standard w-full text-sm text-[#343538] bg-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-[#F05535] focus:bg-white transition';

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setSubmitting(true);
        setError('');

        const payload: Record<string, unknown> = {
          type,
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          city: formData.get('city'),
          message: formData.get('message'),
          consent: formData.get('consent') === 'on',
        };

        // Contextual fields
        if (formData.get('contextual_info')) {
          payload.contextual_info = formData.get('contextual_info');
        }

        fetch(`${API_BASE}/enquiries`, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
          .then((response) => {
            if (!response.ok) throw new Error('Could not send message. Please verify all fields.');
            setSent(true);
          })
          .catch((err) => setError(err instanceof Error ? err.message : 'Could not send message.'))
          .finally(() => setSubmitting(false));
      }}
      className="space-y-5 rounded-3xl border border-gray-200/80 bg-white p-6 shadow-md sm:p-8"
    >
      <div>
        <label className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-[#343538]">
          Select Inquiry Type
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {(inquiryTypes.length > 0
            ? inquiryTypes
            : [
                { id: 'general', label: 'General' },
                { id: 'franchise', label: 'Franchise' },
                { id: 'property', label: 'Property / Real Estate' },
                { id: 'supplier', label: 'Vendor / Supply' },
                { id: 'media', label: 'Press / Media' },
                { id: 'careers', label: 'Careers' },
              ]
          ).map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setType(t.id)}
              className={`rounded-xl border p-2.5 text-left transition-all cursor-pointer ${
                type === t.id
                  ? 'border-[#F05535] bg-[#FFF0EC] shadow-xs'
                  : 'border-gray-200 bg-[#F7F7F7] hover:border-[#F05535]/50'
              }`}
            >
              <span className={`block text-xs font-bold ${type === t.id ? 'text-[#F05535]' : 'text-[#343538]'}`}>
                {t.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-xs font-bold text-[#343538]">
            Full Name *
          </label>
          <input
            id="contact-name"
            required
            name="name"
            placeholder="e.g. Asim Qureshi"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-xs font-bold text-[#343538]">
            Email Address *
          </label>
          <input
            id="contact-email"
            required
            name="email"
            type="email"
            placeholder="asim@example.pk"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-xs font-bold text-[#343538]">
            Phone / WhatsApp *
          </label>
          <input
            id="contact-phone"
            required
            name="phone"
            placeholder="+92 300 1234567"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-city" className="mb-1.5 block text-xs font-bold text-[#343538]">
            City *
          </label>
          <input
            id="contact-city"
            required
            name="city"
            placeholder="e.g. Lahore, Karachi, Islamabad"
            className={inputClass}
          />
        </div>
      </div>

      {/* Contextual Field depending on inquiry type */}
      {type === 'property' && (
        <div>
          <label htmlFor="contact-context" className="mb-1.5 block text-xs font-bold text-[#343538]">
            Property Details (Location, Dimensions, Covered Area sq.ft.)
          </label>
          <input
            id="contact-context"
            name="contextual_info"
            placeholder="e.g. 2,000 sq.ft corner commercial unit, Main Boulevard Gulberg"
            className={inputClass}
          />
        </div>
      )}

      {type === 'supplier' && (
        <div>
          <label htmlFor="contact-context" className="mb-1.5 block text-xs font-bold text-[#343538]">
            Company Name &amp; Product/Service Category
          </label>
          <input
            id="contact-context"
            name="contextual_info"
            placeholder="e.g. ABC Packaging Ltd — Eco-friendly takeaway boxes"
            className={inputClass}
          />
        </div>
      )}

      {type === 'media' && (
        <div>
          <label htmlFor="contact-context" className="mb-1.5 block text-xs font-bold text-[#343538]">
            Media Outlet / Publication Name
          </label>
          <input
            id="contact-context"
            name="contextual_info"
            placeholder="e.g. Daily Business Dawn / TechJuice"
            className={inputClass}
          />
        </div>
      )}

      {type === 'careers' && (
        <div>
          <label htmlFor="contact-context" className="mb-1.5 block text-xs font-bold text-[#343538]">
            Department / Target Role
          </label>
          <input
            id="contact-context"
            name="contextual_info"
            placeholder="e.g. Kitchen Supervisor / Restaurant Manager / Supply Chain"
            className={inputClass}
          />
        </div>
      )}

      {type === 'franchise' && (
        <div className="bg-[#FFF0EC] border border-[#F6A18F]/50 rounded-xl p-3 text-xs text-[#343538] flex items-center justify-between">
          <span>Looking to submit a full franchise application?</span>
          <Link href="/apply" className="text-[#F05535] font-bold underline hover:text-[#D34518]">
            Go to 7-Step Application →
          </Link>
        </div>
      )}

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-xs font-bold text-[#343538]">
          Message *
        </label>
        <textarea
          id="contact-message"
          required
          name="message"
          rows={4}
          className={`${inputClass} resize-y h-auto min-h-[100px]`}
          placeholder="How can we assist you today?"
        />
      </div>

      {/* Accessible Consent Checkbox with proper label association */}
      <div className="flex items-start gap-2.5">
        <input
          id="contact-consent"
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 accent-[#F05535] rounded-sm cursor-pointer"
        />
        <label htmlFor="contact-consent" className="text-xs text-[#717275] leading-relaxed cursor-pointer select-none">
          I consent to Brandz Pakistan processing my details to respond to this inquiry in accordance with the{' '}
          <Link href="/privacy" className="text-[#F05535] underline hover:text-[#D34518]" target="_blank">
            Privacy Policy
          </Link>
          .
        </label>
      </div>

      {error && (
        <div className="rounded-xl bg-red-50 p-3 text-sm font-semibold text-[#F05535] border border-red-200">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-md"
      >
        <Send className="h-4 w-4 text-[#F6A18F]" />
        <span>{submitting ? 'Sending Message…' : 'Send Message'}</span>
      </button>
    </form>
  );
};

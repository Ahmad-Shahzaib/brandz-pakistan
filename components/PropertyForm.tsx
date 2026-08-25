'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send, Upload } from 'lucide-react';

export const PropertyForm: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const apiBase = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://brandz-pakistan.softsuitetech.com/api/v1').replace(/\/$/, '');
  const inputClass = 'w-full bg-[#F7F7F7] text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]';
  const label = 'block text-xs font-bold text-[#343538] mb-1.5';

  if (sent) {
    return (
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-md p-10 text-center">
        <div className="w-16 h-16 bg-[#FFF0EC] text-[#F05535] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-heading font-extrabold text-2xl text-[#343538] mt-5">Property Submitted</h3>
        <p className="text-[#717275] mt-2 max-w-md mx-auto">Thank you. Our site-selection team will review your property against our location criteria and reach out if it's a potential fit.</p>
        <button onClick={() => setSent(false)} className="mt-6 bg-[#F05535] text-white font-bold px-6 py-3 rounded-xl text-sm cursor-pointer">Submit Another</button>
      </div>
    );
  }

  return (
    <form onSubmit={async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      setSubmitting(true);
      setError('');
      try {
        const response = await fetch(`${apiBase}/property-submissions`, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
        });
        if (!response.ok) throw new Error('Could not submit property.');
        setSent(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Could not submit property.');
      } finally {
        setSubmitting(false);
      }
    }} className="bg-white rounded-3xl border border-gray-200/80 shadow-md p-6 sm:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className={label}>Owner / Agent Name *</label><input name="name" required className={inputClass} /></div>
        <div><label className={label}>Are you the *</label>
          <select name="payload[role]" className={inputClass}><option>Owner</option><option>Agent</option><option>Representative</option></select>
        </div>
        <div><label className={label}>Phone / WhatsApp *</label><input name="phone" required className={inputClass} /></div>
        <div><label className={label}>Email</label><input name="email" type="email" className={inputClass} /></div>
        <div><label className={label}>City *</label><input name="city" required className={inputClass} /></div>
        <div><label className={label}>Area / Locality *</label><input name="payload[area]" required className={inputClass} /></div>
      </div>

      <div><label className={label}>Complete Address *</label><input name="payload[address]" required className={inputClass} /></div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div><label className={label}>Property Type</label>
          <select name="payload[property_type]" className={inputClass}><option>Corner Plot</option><option>Standalone Building</option><option>Shop / Unit</option><option>Mall / Food Court</option><option>Highway Plot</option></select>
        </div>
        <div><label className={label}>Size (sq.ft.)</label><input name="payload[size]" className={inputClass} placeholder="e.g. 2000" /></div>
        <div><label className={label}>Frontage (ft.)</label><input name="payload[frontage]" className={inputClass} placeholder="e.g. 30" /></div>
        <div><label className={label}>Parking Available</label>
          <select name="payload[parking]" className={inputClass}><option>Yes</option><option>Limited</option><option>No</option></select>
        </div>
        <div><label className={label}>Ownership</label>
          <select name="payload[ownership]" className={inputClass}><option>Owned</option><option>Leased</option><option>For Sale</option><option>For Rent</option></select>
        </div>
        <div><label className={label}>Expected Rent / Price (PKR)</label><input name="payload[price]" className={inputClass} /></div>
      </div>

      <div><label className={label}>Additional Notes</label><textarea name="payload[notes]" rows={3} className={`${inputClass} resize-y`} placeholder="Footfall, nearby anchors, visibility, map link…" /></div>

      <label className="flex items-center gap-2 text-sm text-[#717275] border-2 border-dashed border-gray-300 rounded-xl p-3 cursor-pointer hover:border-[#F05535] transition-colors">
        <Upload className="w-4 h-4 text-[#F05535]" />
        <span>Attach property images / documents</span>
        <input type="file" name="attachments[]" multiple className="hidden" />
      </label>

      <label className="flex items-start gap-2 text-xs text-[#717275]">
        <input type="checkbox" name="consent" required className="mt-0.5 accent-[#F05535]" />
        <span>I consent to Fri-Chiks ® reviewing and storing these property details for site evaluation.</span>
      </label>

      {error && <p className="rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">{error}</p>}
      <button type="submit" disabled={submitting} className="w-full bg-[#F05535] hover:bg-[#D34518] disabled:opacity-60 text-white font-bold py-3.5 rounded-xl text-base transition-all flex items-center justify-center gap-2 cursor-pointer">
        <Send className="w-4 h-4 text-[#F6A18F]" /> {submitting ? 'Submitting...' : 'Submit Property'}
      </button>
    </form>
  );
};

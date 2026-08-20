'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send, Upload } from 'lucide-react';

export const PropertyForm: React.FC = () => {
  const [sent, setSent] = useState(false);
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
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-white rounded-3xl border border-gray-200/80 shadow-md p-6 sm:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className={label}>Owner / Agent Name *</label><input required className={inputClass} /></div>
        <div><label className={label}>Are you the *</label>
          <select className={inputClass}><option>Owner</option><option>Agent</option><option>Representative</option></select>
        </div>
        <div><label className={label}>Phone / WhatsApp *</label><input required className={inputClass} /></div>
        <div><label className={label}>Email</label><input type="email" className={inputClass} /></div>
        <div><label className={label}>City *</label><input required className={inputClass} /></div>
        <div><label className={label}>Area / Locality *</label><input required className={inputClass} /></div>
      </div>

      <div><label className={label}>Complete Address *</label><input required className={inputClass} /></div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div><label className={label}>Property Type</label>
          <select className={inputClass}><option>Corner Plot</option><option>Standalone Building</option><option>Shop / Unit</option><option>Mall / Food Court</option><option>Highway Plot</option></select>
        </div>
        <div><label className={label}>Size (sq.ft.)</label><input className={inputClass} placeholder="e.g. 2000" /></div>
        <div><label className={label}>Frontage (ft.)</label><input className={inputClass} placeholder="e.g. 30" /></div>
        <div><label className={label}>Parking Available</label>
          <select className={inputClass}><option>Yes</option><option>Limited</option><option>No</option></select>
        </div>
        <div><label className={label}>Ownership</label>
          <select className={inputClass}><option>Owned</option><option>Leased</option><option>For Sale</option><option>For Rent</option></select>
        </div>
        <div><label className={label}>Expected Rent / Price (PKR)</label><input className={inputClass} /></div>
      </div>

      <div><label className={label}>Additional Notes</label><textarea rows={3} className={`${inputClass} resize-y`} placeholder="Footfall, nearby anchors, visibility, map link…" /></div>

      <label className="flex items-center gap-2 text-sm text-[#717275] border-2 border-dashed border-gray-300 rounded-xl p-3 cursor-pointer hover:border-[#F05535] transition-colors">
        <Upload className="w-4 h-4 text-[#F05535]" />
        <span>Attach property images / documents — upload wiring ready for backend</span>
        <input type="file" multiple className="hidden" />
      </label>

      <label className="flex items-start gap-2 text-xs text-[#717275]">
        <input type="checkbox" required className="mt-0.5 accent-[#F05535]" />
        <span>I consent to Fri-Chiks ® reviewing and storing these property details for site evaluation.</span>
      </label>

      <button type="submit" className="w-full bg-[#F05535] hover:bg-[#D34518] text-white font-bold py-3.5 rounded-xl text-base transition-all flex items-center justify-center gap-2 cursor-pointer">
        <Send className="w-4 h-4 text-[#F6A18F]" /> Submit Property
      </button>
    </form>
  );
};

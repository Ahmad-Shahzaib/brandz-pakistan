'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Briefcase, ChevronRight, X, Upload, CheckCircle2 } from 'lucide-react';
import { JOBS, Job } from '../data/siteData';

const departments = ['All', ...Array.from(new Set(JOBS.map((j) => j.department)))];

export const CareersExplorer: React.FC = () => {
  const [dept, setDept] = useState('All');
  const [active, setActive] = useState<Job | null>(null);
  const [applied, setApplied] = useState(false);

  const filtered = useMemo(
    () => JOBS.filter((j) => dept === 'All' || j.department === dept),
    [dept]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {departments.map((d) => (
          <button
            key={d}
            onClick={() => setDept(d)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
              dept === d ? 'bg-[#67C63C] text-[#032316] border-[#67C63C]' : 'bg-white text-[#1A1818] border-gray-200 hover:border-[#67C63C]'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((job) => (
          <div key={job.id} className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#67C63C]/50 transition-colors">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-heading font-extrabold text-lg text-[#1A1818]">{job.title}</h3>
                <span className="text-[10px] font-bold text-[#0E3B2A] bg-[#EAF7E4] px-2 py-0.5 rounded-full">{job.department}</span>
              </div>
              <p className="text-sm text-[#6B655C] mt-1">{job.summary}</p>
              <div className="mt-2 flex items-center gap-4 text-xs text-[#6B655C]">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#2C7A35]" />{job.location}</span>
                <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5 text-[#2C7A35]" />{job.type}</span>
              </div>
            </div>
            <button
              onClick={() => { setActive(job); setApplied(false); }}
              className="shrink-0 flex items-center gap-1.5 bg-[#1A1818] hover:bg-black text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors cursor-pointer"
            >
              View & Apply <ChevronRight className="w-4 h-4 text-[#FFC700]" />
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs" onClick={() => setActive(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <div className="bg-[#1A1818] text-white p-6 relative">
                <button onClick={() => setActive(null)} className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 p-2 rounded-full transition-colors cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
                <span className="text-[#FFC700] text-xs font-bold uppercase tracking-widest">{active.department} · {active.type}</span>
                <h3 className="font-heading font-extrabold text-2xl mt-1">{active.title}</h3>
                <p className="text-sm text-gray-300 mt-1 flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#FFC700]" />{active.location}</p>
              </div>
              <div className="p-6">
                {applied ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-16 h-16 bg-[#EAF7E4] text-[#2C7A35] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="font-heading font-bold text-xl text-[#1A1818]">Application Received</h4>
                    <p className="text-sm text-[#6B655C]">Thank you for applying. Our HR team will review your profile and reach out if there's a match.</p>
                    <button onClick={() => setActive(null)} className="bg-[#67C63C] text-[#032316] font-bold px-6 py-2.5 rounded-xl text-sm cursor-pointer">Done</button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setApplied(true); }} className="space-y-4">
                    <p className="text-sm text-[#6B655C]">{active.summary}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input required placeholder="Full name *" className="w-full bg-[#FAF8F7] text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#67C63C]" />
                      <input required type="email" placeholder="Email *" className="w-full bg-[#FAF8F7] text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#67C63C]" />
                    </div>
                    <input required placeholder="Phone / WhatsApp *" className="w-full bg-[#FAF8F7] text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#67C63C]" />
                    <textarea rows={3} placeholder="Why are you a great fit?" className="w-full bg-[#FAF8F7] text-sm p-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#67C63C]" />
                    <label className="flex items-center gap-2 text-sm text-[#6B655C] border-2 border-dashed border-gray-300 rounded-xl p-3 cursor-pointer hover:border-[#67C63C] transition-colors">
                      <Upload className="w-4 h-4 text-[#2C7A35]" />
                      <span>Attach CV (PDF) — upload wiring ready for backend</span>
                      <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                    </label>
                    <button type="submit" className="w-full bg-[#67C63C] hover:bg-[#88D961] text-[#032316] font-bold py-3 rounded-xl text-sm transition-all cursor-pointer">Submit Application</button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

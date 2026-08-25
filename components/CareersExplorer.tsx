'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Briefcase, ChevronRight, X, Upload, CheckCircle2 } from 'lucide-react';
import type { Job } from '@/lib/types';

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://brandz-pakistan.softsuitetech.com/api/v1').replace(/\/$/, '');

export const CareersExplorer: React.FC<{ jobs: Job[] }> = ({ jobs }) => {
  const [dept, setDept] = useState('All');
  const [active, setActive] = useState<Job | null>(null);
  const [applied, setApplied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const departments = useMemo(() => ['All', ...Array.from(new Set(jobs.map((j) => j.department)))], [jobs]);

  const filtered = useMemo(
    () => jobs.filter((j) => dept === 'All' || j.department === dept),
    [dept, jobs]
  );

  const submitApplication = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!active) return;
    setSubmitting(true);
    setError('');

    try {
      const formData = new FormData(event.currentTarget);
      formData.set('payload[cover_note]', String(formData.get('cover_note') || ''));
      formData.delete('cover_note');
      const response = await fetch(`${API_BASE}/jobs/${active.id}/apply`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      if (!response.ok) throw new Error('Could not submit application.');
      setApplied(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not submit application.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {departments.map((d) => (
          <button
            key={d}
            onClick={() => setDept(d)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
              dept === d ? 'bg-[#F05535] text-[#292A2D] border-[#F05535]' : 'bg-white text-[#343538] border-gray-200 hover:border-[#F05535]'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((job) => (
          <div key={job.id} className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#F05535]/50 transition-colors">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-heading font-extrabold text-lg text-[#343538]">{job.title}</h3>
                <span className="text-[10px] font-bold text-[#4A4B4E] bg-[#FFF0EC] px-2 py-0.5 rounded-full">{job.department}</span>
              </div>
              <p className="text-sm text-[#717275] mt-1">{job.summary}</p>
              <div className="mt-2 flex items-center gap-4 text-xs text-[#717275]">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#D34518]" />{job.location}</span>
                <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5 text-[#D34518]" />{job.type}</span>
              </div>
            </div>
            <button
              onClick={() => { setActive(job); setApplied(false); }}
              className="shrink-0 flex items-center gap-1.5 bg-[#343538] hover:bg-black text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors cursor-pointer"
            >
              View & Apply <ChevronRight className="w-4 h-4 text-[#F6A18F]" />
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
              <div className="bg-[#343538] text-white p-6 relative">
                <button onClick={() => setActive(null)} className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 p-2 rounded-full transition-colors cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
                <span className="text-[#F6A18F] text-xs font-bold uppercase tracking-widest">{active.department} · {active.type}</span>
                <h3 className="font-heading font-extrabold text-2xl mt-1">{active.title}</h3>
                <p className="text-sm text-gray-300 mt-1 flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#F6A18F]" />{active.location}</p>
              </div>
              <div className="p-6">
                {applied ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-16 h-16 bg-[#FFF0EC] text-[#D34518] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="font-heading font-bold text-xl text-[#343538]">Application Received</h4>
                    <p className="text-sm text-[#717275]">Thank you for applying. Our HR team will review your profile and reach out if there's a match.</p>
                    <button onClick={() => setActive(null)} className="bg-[#F05535] text-[#292A2D] font-bold px-6 py-2.5 rounded-xl text-sm cursor-pointer">Done</button>
                  </div>
                ) : (
                  <form onSubmit={submitApplication} className="space-y-4">
                    <p className="text-sm text-[#717275]">{active.summary}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input required name="name" placeholder="Full name *" className="w-full bg-[#F7F7F7] text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]" />
                      <input required name="email" type="email" placeholder="Email *" className="w-full bg-[#F7F7F7] text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]" />
                    </div>
                    <input required name="phone" placeholder="Phone / WhatsApp *" className="w-full bg-[#F7F7F7] text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]" />
                    <textarea name="cover_note" rows={3} placeholder="Why are you a great fit?" className="w-full bg-[#F7F7F7] text-sm p-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]" />
                    <label className="flex items-center gap-2 text-sm text-[#717275] border-2 border-dashed border-gray-300 rounded-xl p-3 cursor-pointer hover:border-[#F05535] transition-colors">
                      <Upload className="w-4 h-4 text-[#D34518]" />
                      <span>Attach CV (PDF, DOC, DOCX)</span>
                      <input required type="file" name="resume" accept=".pdf,.doc,.docx" className="hidden" />
                    </label>
                    {error && <p className="rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">{error}</p>}
                    <button type="submit" disabled={submitting} className="w-full bg-[#F05535] hover:bg-[#D34518] disabled:opacity-60 text-[#292A2D] font-bold py-3 rounded-xl text-sm transition-all cursor-pointer">{submitting ? 'Submitting...' : 'Submit Application'}</button>
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

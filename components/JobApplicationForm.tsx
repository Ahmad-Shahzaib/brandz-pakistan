'use client';

import React, { useState } from 'react';
import { CheckCircle2, Upload, Send } from 'lucide-react';
import type { Job } from '@/lib/types';

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://brandz-pakistan.softsuitetech.com/api/v1').replace(/\/$/, '');

export const JobApplicationForm: React.FC<{ job: Job }> = ({ job }) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const formData = new FormData(e.currentTarget);
      const coverNote = String(formData.get('cover_note') || '');
      formData.set('payload[cover_note]', coverNote);
      formData.delete('cover_note');

      const endpoint = `${API_BASE}/jobs/${job.slug || job.id}/apply`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Unable to submit your application. Please check your inputs and try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#FFF0EC] border border-[#F6A18F]/60 rounded-3xl p-8 text-center">
        <div className="w-16 h-16 bg-white text-[#F05535] rounded-full flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="font-heading font-extrabold text-2xl text-[#343538] mt-4">
          Application Received!
        </h3>
        <p className="text-sm text-[#717275] mt-2 max-w-md mx-auto leading-relaxed">
          Thank you for applying for the <strong className="text-[#343538]">{job.title}</strong> position. Our HR and talent acquisition team will review your CV and reach out if your profile matches our requirements.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-200/80 shadow-lg p-6 sm:p-8">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#F05535]">Quick Application</span>
        <h3 className="font-heading font-extrabold text-2xl text-[#343538] mt-1">Apply for this Position</h3>
        <p className="text-xs text-[#717275] mt-1">
          Submit your CV below. Our recruitment team reviews all applications within 48 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-[#343538] mb-1.5">Full Name *</label>
          <input
            required
            name="name"
            placeholder="e.g. Tariq Mehmood"
            className="form-input-standard w-full bg-[#F7F7F7] text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#343538] mb-1.5">Email Address *</label>
            <input
              required
              type="email"
              name="email"
              placeholder="tariq@example.com"
              className="form-input-standard w-full bg-[#F7F7F7] text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#343538] mb-1.5">Phone / WhatsApp *</label>
            <input
              required
              name="phone"
              placeholder="+92 300 1234567"
              className="form-input-standard w-full bg-[#F7F7F7] text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#343538] mb-1.5">Why are you a great fit for this role?</label>
          <textarea
            name="cover_note"
            rows={3}
            placeholder="Briefly highlight relevant experience, skills, and notice period…"
            className="form-input-standard w-full bg-[#F7F7F7] text-sm p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#343538] mb-1.5">Attach Resume / CV *</label>
          <label className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-[#717275] border-2 border-dashed border-gray-300 hover:border-[#F05535] rounded-xl p-4 cursor-pointer transition-colors bg-[#FAFAFA]">
            <Upload className="w-5 h-5 text-[#F05535]" />
            <span className="font-semibold text-[#343538] text-xs">
              {fileName ? fileName : 'Upload PDF, DOC, or DOCX (Max 5MB)'}
            </span>
            <input
              required
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setFileName(e.target.files[0].name);
                }
              }}
            />
          </label>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-sm text-[#F05535] rounded-xl font-semibold">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          <Send className="w-4 h-4 text-[#F6A18F]" />
          <span>{submitting ? 'Submitting Application…' : 'Submit Application'}</span>
        </button>

        <p className="text-[11px] text-[#717275] text-center">
          By applying, you agree to our processing of your details for recruitment purposes.
        </p>
      </form>
    </div>
  );
};

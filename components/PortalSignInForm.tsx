'use client';

import React, { useState } from 'react';
import { ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

export const PortalSignInForm: React.FC = () => {
  const [partnerId, setPartnerId] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSignedIn(true);
    }, 800);
  };

  if (signedIn) {
    return (
      <div className="rounded-2xl bg-[#FFF0EC] border border-[#F6A18F]/50 p-6 text-center">
        <CheckCircle2 className="w-10 h-10 text-[#F05535] mx-auto mb-2" />
        <h4 className="font-heading font-bold text-base text-[#343538]">Portal Verification Simulated</h4>
        <p className="text-xs text-[#717275] mt-1">
          Welcome, partner <strong className="text-[#343538]">{partnerId}</strong>. Live portal authentication is integrated with your corporate ERP single-sign-on.
        </p>
        <button
          type="button"
          onClick={() => setSignedIn(false)}
          className="mt-4 text-xs font-bold text-[#F05535] hover:underline"
        >
          Sign Out / Change Account
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#343538]">
          Partner ID / Email Address
        </label>
        <input
          type="text"
          required
          value={partnerId}
          onChange={(e) => setPartnerId(e.target.value)}
          placeholder="e.g. PK-FR-4029 or owner@franchise.pk"
          className="form-input-standard w-full"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#343538]">
          Security Password / Access Token
        </label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••••••"
          className="form-input-standard w-full"
        />
      </div>

      <div className="flex items-center justify-between text-xs">
        <label className="flex items-center gap-2 cursor-pointer text-[#717275]">
          <input type="checkbox" className="accent-[#F05535] w-3.5 h-3.5 rounded" />
          Remember this device
        </label>
        <a href="#portal-support" className="font-bold text-[#F05535] hover:underline">
          Trouble signing in?
        </a>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary mt-2 w-full font-heading tracking-wide uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
      >
        <span>{loading ? 'Authenticating…' : 'Access Partner Dashboard'}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
};

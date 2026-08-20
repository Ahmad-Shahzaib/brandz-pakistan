'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Building2, CheckCircle2, Send, PhoneCall, Mail, User, MapPin, DollarSign } from 'lucide-react';

interface FranchiseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FranchiseModal: React.FC<FranchiseModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredLocation: '',
    budget: '$250k - $500k',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 relative"
          >
            {/* Header */}
            <div className="bg-[#F05535] text-white p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-[#F6A18F] text-xs font-extrabold uppercase tracking-widest mb-1">
                <Building2 className="w-4 h-4" />
                <span>Fri-Chiks ® Partnership</span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-white">
                Franchise Opportunity Inquiry
              </h3>
              <p className="text-xs text-[#FFD9D0] mt-1">
                Speak directly with our expansion director. We respond within 24 business hours.
              </p>
            </div>

            {/* Body */}
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-[#FFF0EC] text-[#F05535] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-[#343538]">
                    Application Submitted!
                  </h4>
                  <p className="text-sm text-[#717275] max-w-sm mx-auto">
                    Thank you, <strong className="text-[#343538]">{formData.fullName || 'Applicant'}</strong>. Our franchise partnership manager will contact you at <strong className="text-[#343538]">{formData.email}</strong> with our Franchise Disclosure Pack.
                  </p>
                  <button
                    onClick={handleReset}
                    className="bg-[#F05535] hover:bg-[#D34518] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#343538] mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ali Raza"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#F7F7F7] text-sm px-3.5 py-2.5 pl-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]"
                      />
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    </div>
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#343538] mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          placeholder="ali@example.pk"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#F7F7F7] text-sm px-3.5 py-2.5 pl-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]"
                        />
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#343538] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          placeholder="+92 300 1234567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#F7F7F7] text-sm px-3.5 py-2.5 pl-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]"
                        />
                        <PhoneCall className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      </div>
                    </div>
                  </div>

                  {/* Preferred Location & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#343538] mb-1">
                        Target Area / City
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="e.g. Johar Town Lahore, Multan, Rawalpindi"
                          value={formData.preferredLocation}
                          onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                          className="w-full bg-[#F7F7F7] text-sm px-3.5 py-2.5 pl-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]"
                        />
                        <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#343538] mb-1">
                        Investment Budget (PKR)
                      </label>
                      <div className="relative">
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-[#F7F7F7] text-sm px-3.5 py-2.5 pl-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]"
                        >
                          <option>PKR 15M - 25M (Rs. 1.5 - 2.5 Crore)</option>
                          <option>PKR 25M - 40M (Rs. 2.5 - 4.0 Crore)</option>
                          <option>PKR 40M+ (Multi-Unit Agreement)</option>
                        </select>
                        <DollarSign className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      </div>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#343538] mb-1">
                      Brief Business Background (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your F&B experience or current business portfolio..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F7F7F7] text-sm p-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F05535]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F05535] hover:bg-[#D34518] text-white font-bold py-3.5 rounded-xl text-base transition-all shadow-md shadow-red-900/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#F6A18F]" />
                    <span>Submit Franchise Application</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
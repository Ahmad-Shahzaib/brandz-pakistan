'use client';

import React from 'react';
import { motion } from 'motion/react';
import type { ProcessStep } from '@/lib/types';
import { Award, Building, CheckCircle2, Rocket, Sparkles } from 'lucide-react';

const phases = [
  { title: 'Phase 1: Application & Screening', stepsRange: [0, 3], icon: Sparkles },
  { title: 'Phase 2: Territory & Agreement', stepsRange: [3, 5], icon: Building },
  { title: 'Phase 3: Fit-Out & Training', stepsRange: [5, 9], icon: Award },
  { title: 'Phase 4: Launch & Operational Scale', stepsRange: [9, 12], icon: Rocket },
];

export const FranchiseProcess: React.FC<{ steps: ProcessStep[] }> = ({ steps }) => {
  return (
    <div className="space-y-12">
      {phases.map((phase) => {
        const phaseSteps = steps.slice(phase.stepsRange[0], phase.stepsRange[1]);
        const Icon = phase.icon;
        if (phaseSteps.length === 0) return null;

        return (
          <div key={phase.title} className="rounded-3xl border border-[#E3E3E4] bg-white p-6 sm:p-8 shadow-xs">
            <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0EC] text-[#D34518]">
                <Icon size={20} />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D34518]">
                  Development Stage
                </span>
                <h3 className="font-heading text-xl font-bold text-[#343538]">{phase.title}</h3>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {phaseSteps.map((s, idx) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-[#F7F7F7] p-5 transition hover:border-[#F05535]/50 hover:bg-white hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F05535] text-xs font-extrabold text-white">
                        {s.step}
                      </span>
                      <CheckCircle2 size={16} className="text-[#F6A18F]" />
                    </div>
                    <h4 className="card-title mt-3 text-base text-[#343538]">{s.title}</h4>
                    <p className="body-regular mt-2 text-xs leading-relaxed text-[#717275]">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

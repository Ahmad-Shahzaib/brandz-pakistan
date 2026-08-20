import type { Metadata } from 'next';
import { PageHero } from '../../components/PageHero';
import { SectionHeader } from '../../components/SectionHeader';
import { ContactForm } from '../../components/ContactForm';
import { INTERIOR_IMAGE } from '../../data/corporateData';
import { CheckCircle2, Boxes, ShieldCheck, Truck, ClipboardList } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Suppliers & Vendors',
  description:
    'Partner with Fri-Chiks ® as an approved supplier. Understand our procurement categories, supplier standards and vendor onboarding.',
};

const categories = ['Poultry & Proteins', 'Packaging', 'Cooking Oil & Fats', 'Spices & Marinades', 'Beverages', 'Equipment', 'Cleaning & Hygiene', 'Logistics'];

const standards = [
  { icon: ShieldCheck, title: 'Quality & Compliance', text: 'Consistent, verifiable quality meeting our food-safety and Halal standards.' },
  { icon: Truck, title: 'Reliable Supply', text: 'Dependable capacity, lead times and distribution reliability.' },
  { icon: ClipboardList, title: 'Documentation', text: 'Complete traceability, certifications and transparent processes.' },
  { icon: Boxes, title: 'Fair Value', text: 'Competitive, sustainable pricing that supports network-wide consistency.' },
];

export default function SuppliersPage() {
  return (
    <>
      <PageHero
        eyebrow="Suppliers & Vendors"
        crumbs={[{ label: 'Suppliers' }]}
        image={INTERIOR_IMAGE}
        title={<>Partner in Our <span className="text-[#F6A18F]">Supply Chain</span></>}
        description="We work with vendors who share our commitment to quality, consistency and Halal integrity. Learn what we look for and register your interest."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Procurement Categories" title="Where We Source" />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <span key={c} className="flex items-center gap-2 bg-[#F7F7F7] border border-gray-200/80 rounded-full px-4 py-2 text-sm font-semibold text-[#343538]">
                <CheckCircle2 className="w-4 h-4 text-[#F05535]" />{c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Supplier Standards" title="What We Expect From Partners" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white rounded-2xl p-6 border border-gray-200/80 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF0EC] text-[#F05535] flex items-center justify-center mx-auto mb-4"><Icon className="w-6 h-6" /></div>
                  <h3 className="font-heading font-bold text-base text-[#343538]">{s.title}</h3>
                  <p className="text-sm text-[#717275] mt-1.5">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Vendor Onboarding" title="Register Your Interest" className="mb-10" />
          <ContactForm defaultType="supplier" />
        </div>
      </section>
    </>
  );
}

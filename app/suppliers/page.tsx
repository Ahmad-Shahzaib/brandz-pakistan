import type { Metadata } from 'next';
import { PageHero } from '../../components/PageHero';
import { SectionHeader } from '../../components/SectionHeader';
import { ContactForm } from '../../components/ContactForm';
import { getSiteContent } from '@/lib/api';
import { CheckCircle2, Boxes, ShieldCheck, Truck, ClipboardList } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Suppliers & Vendors',
  description:
    'Partner with Brandz Pakistan as an approved supplier. Understand our procurement categories, supplier standards and vendor onboarding.',
};

const standardIcons = { ShieldCheck, Truck, ClipboardList, Boxes };

export default async function SuppliersPage() {
  const { images, inquiryTypes, supplierCategories, supplierStandards, pageHeroes } = await getSiteContent();
  const hero = pageHeroes.suppliers;

  return (
    <>
      <PageHero
        eyebrow={hero?.eyebrow || 'Suppliers & Vendors'}
        crumbs={[{ label: 'Suppliers' }]}
        image={images.interior}
        title={hero?.title || <>Partner in Our <span className="text-[#F6A18F]">Supply Chain</span></>}
        description={hero?.description || 'We work with vendors who share our commitment to quality, consistency and integrity.'}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Procurement Categories" title="Where We Source" />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {supplierCategories.map((item) => item.label).map((c) => (
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
            {supplierStandards.map((s) => {
              const Icon = standardIcons[s.icon as keyof typeof standardIcons] || ShieldCheck;
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
          <ContactForm defaultType="supplier" inquiryTypes={inquiryTypes} />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import { PageHero } from '../../components/PageHero';
import { SectionHeader } from '../../components/SectionHeader';
import { PropertyForm } from '../../components/PropertyForm';
import { STOREFRONT_IMAGE } from '../../data/corporateData';
import { MapPin, Eye, Car, Users, Store, Ruler } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Suggest a Location',
  description:
    'Own or manage a commercial property? Submit it for a potential Fri-Chiks ® restaurant. See our site-selection criteria and share your site.',
};

const criteria = [
  { icon: Users, title: 'Footfall & Density', text: 'High pedestrian and vehicle traffic with strong local population.' },
  { icon: Eye, title: 'Visibility', text: 'Clear frontage and signage exposure from the main road.' },
  { icon: Car, title: 'Accessibility & Parking', text: 'Easy access, parking and delivery-rider convenience.' },
  { icon: Store, title: 'Commercial Profile', text: 'Established commercial zone with complementary anchors.' },
  { icon: Ruler, title: 'Size & Frontage', text: 'Right footprint for the intended restaurant format.' },
  { icon: MapPin, title: 'Catchment Area', text: 'Healthy residential and office catchment nearby.' },
];

export default function PropertyPage() {
  return (
    <>
      <PageHero
        eyebrow="Property / Site Submission"
        crumbs={[{ label: 'Suggest a Location' }]}
        image={STOREFRONT_IMAGE}
        title={<>Suggest a <span className="text-[#FFC700]">Location</span></>}
        description="Property owners and agents can submit potential restaurant sites. Strong locations are a key driver of our expansion."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What We Look For" title="Our Site-Selection Criteria" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {criteria.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="bg-[#FAF8F7] rounded-2xl p-6 border border-gray-200/80">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF0F1] text-[#E51821] flex items-center justify-center mb-3"><Icon className="w-5 h-5" /></div>
                  <h3 className="font-heading font-bold text-base text-[#1A1818]">{c.title}</h3>
                  <p className="text-sm text-[#6B655C] mt-1">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAF8F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Submit Your Site" title="Tell Us About the Property" className="mb-10" />
          <PropertyForm />
        </div>
      </section>
    </>
  );
}

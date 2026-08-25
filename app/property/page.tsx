import type { Metadata } from 'next';
import { PageHero } from '../../components/PageHero';
import { SectionHeader } from '../../components/SectionHeader';
import { PropertyForm } from '../../components/PropertyForm';
import { getSiteContent } from '@/lib/api';
import { MapPin, Eye, Car, Users, Store, Ruler } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Suggest a Location',
  description:
    'Own or manage a commercial property? Submit it for a potential Fri-Chiks ® restaurant. See our site-selection criteria and share your site.',
};

const criteriaIcons = { Users, Eye, Car, Store, Ruler, MapPin };

export default async function PropertyPage() {
  const { images, propertyCriteria, pageHeroes } = await getSiteContent();
  const hero = pageHeroes.property;

  return (
    <>
      <PageHero
        eyebrow={hero?.eyebrow || 'Property / Site Submission'}
        crumbs={[{ label: 'Suggest a Location' }]}
        image={images.storefront}
        title={hero?.title || <>Suggest a <span className="text-[#F6A18F]">Location</span></>}
        description={hero?.description || 'Property owners and agents can submit potential restaurant sites.'}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What We Look For" title="Our Site-Selection Criteria" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyCriteria.map((c) => {
              const Icon = criteriaIcons[c.icon as keyof typeof criteriaIcons] || MapPin;
              return (
                <div key={c.title} className="bg-[#F7F7F7] rounded-2xl p-6 border border-gray-200/80">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF0EC] text-[#F05535] flex items-center justify-center mb-3"><Icon className="w-5 h-5" /></div>
                  <h3 className="font-heading font-bold text-base text-[#343538]">{c.title}</h3>
                  <p className="text-sm text-[#717275] mt-1">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Submit Your Site" title="Tell Us About the Property" className="mb-10" />
          <PropertyForm />
        </div>
      </section>
    </>
  );
}

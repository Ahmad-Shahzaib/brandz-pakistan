import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '../../components/PageHero';
import { FoodShowcase } from '../../components/FoodShowcase';
import { SectionHeader } from '../../components/SectionHeader';
import { BrandStory } from '../../components/BrandStory';
import { CTABand } from '../../components/CTABand';
import { FOOD_CATEGORIES } from '../../data/siteData';
import { HERO_IMAGE } from '../../data/corporateData';
import { ArrowRight, Utensils } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Food',
  description:
    'The taste behind the brand — signature fried chicken, burgers, broast, family meals and more, crafted fresh with our secret 12-spice marinade.',
};

export default function FoodPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Food"
        crumbs={[{ label: 'Our Food' }]}
        image={HERO_IMAGE}
        title={
          <>
            The Taste <span className="text-[#FFC700]">Behind the Brand</span>
          </>
        }
        description="Even as a corporate brand, our food is everything. Freshly prepared, generously portioned, and built on recipes people come back for."
      >
        <a
          href="https://frichiks.pk"
          className="inline-flex items-center gap-2 bg-[#E51821] hover:bg-[#B80F16] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all"
        >
          <Utensils className="w-4 h-4 text-[#FFC700]" />
          Explore Full Menu & Order
        </a>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Signature Categories"
            title="Freshly Prepared, Every Time"
            description="Hover a category to preview it. Our menu is evidence of brand strength — the reason customers keep coming back."
          />
          <div className="mt-14">
            <FoodShowcase />
          </div>
        </div>
      </section>

      <BrandStory />

      {/* Full category list */}
      <section className="py-20 bg-[#FAF8F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="The Full Range" title="Something for Every Craving" align="left" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOOD_CATEGORIES.map((cat) => (
              <div key={cat.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-lg transition-shadow group">
                <div className="relative h-44 overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-extrabold text-lg text-[#1A1818]">{cat.name}</h3>
                  <p className="text-sm text-[#6B655C] mt-1.5 leading-relaxed">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/franchise" className="inline-flex items-center gap-2 text-[#E51821] font-bold hover:gap-3 transition-all">
              See how this menu powers a franchise business
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        heading="Love the Food? Build the Business."
        text="A proven menu is the foundation of a Fri-Chiks ® franchise. Explore how you can bring it to your city."
        primaryLabel="Explore Franchise"
        primaryHref="/franchise"
      />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '../../components/PageHero';
import { FoodShowcase } from '../../components/FoodShowcase';
import { SectionHeader } from '../../components/SectionHeader';
import { BrandStory } from '../../components/BrandStory';
import { CTABand } from '../../components/CTABand';
import { getSiteContent } from '@/lib/api';
import { ArrowRight, Utensils } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Food',
  description:
    'The taste behind the brand — signature fried chicken, burgers, broast, family meals and more, crafted fresh with our secret 12-spice marinade.',
};

export default async function FoodPage() {
  const { foodCategories, images, pageHeroes } = await getSiteContent();
  const hero = pageHeroes.food;

  return (
    <>
      <PageHero
        eyebrow={hero?.eyebrow || 'Our Food'}
        crumbs={[{ label: 'Our Food' }]}
        image={images.hero}
        title={hero?.title ||
          <>
            The Taste <span className="text-[#F6A18F]">Behind the Brand</span>
          </>
        }
        description={hero?.description || 'Freshly prepared, generously portioned, and built on recipes people come back for.'}
      >
        <a
          href="https://frichiks.pk"
          className="inline-flex items-center gap-2 bg-[#F05535] hover:bg-[#D34518] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all"
        >
          <Utensils className="w-4 h-4 text-[#F6A18F]" />
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
            <FoodShowcase categories={foodCategories} />
          </div>
        </div>
      </section>

      <BrandStory image={images.hero} />

      {/* Full category list */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="The Full Range" title="Something for Every Craving" align="left" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodCategories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-lg transition-shadow group">
                <div className="relative h-44 overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-extrabold text-lg text-[#343538]">{cat.name}</h3>
                  <p className="text-sm text-[#717275] mt-1.5 leading-relaxed">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/franchise" className="inline-flex items-center gap-2 text-[#F05535] font-bold hover:gap-3 transition-all">
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
        image={images.interior}
      />
    </>
  );
}

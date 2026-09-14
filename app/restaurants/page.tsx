import type { Metadata } from 'next';
import { PageHero } from '../../components/PageHero';
import { RestaurantExplorer } from '../../components/RestaurantExplorer';
import { CTABand } from '../../components/CTABand';
import { getSiteContent } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Restaurants | Brand Outlets & Locations Across Pakistan',
  description:
    'Find a Brandz Pakistan restaurant near you. Explore Fri-Chiks, Timmy’s, Shamana, and Whata Pizza locations across Lahore, Faisalabad, Gujranwala, and Islamabad.',
};

export default async function RestaurantsPage() {
  const { restaurants, images, pageHeroes } = await getSiteContent();
  const hero = pageHeroes.restaurants;

  return (
    <>
      <PageHero
        eyebrow={hero?.eyebrow || 'Restaurant Network'}
        crumbs={[{ label: 'Restaurants' }]}
        image={images.storefront}
        title={
          hero?.title || (
            <>
              Growing One <span className="text-[#F6A18F]">Restaurant at a Time</span>
            </>
          )
        }
        description={
          hero?.description ||
          'Featured Brand Outlets & Key Locations Across Pakistan. Find your nearest Brandz Pakistan dining, express, or drive-thru outlet.'
        }
      />
      <section className="py-16 sm:py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="section-title">Explore Outlets & Locations</h2>
            <p className="body-lead mt-2">
              Featured Brand Outlets & Key Locations Across Pakistan
            </p>
          </div>
          <RestaurantExplorer restaurants={restaurants} />
        </div>
      </section>
      <CTABand
        heading="Don't See Your City Yet?"
        text="We're expanding fast across Pakistan. Bring Brandz Pakistan to your area as a franchise partner, or suggest a location you own."
        primaryLabel="Explore Franchise"
        primaryHref="/franchise"
        secondaryLabel="Partner Portal"
        secondaryHref="/portal"
        image={images.interior}
      />
    </>
  );
}

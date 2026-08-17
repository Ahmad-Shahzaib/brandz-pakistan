import type { Metadata } from 'next';
import { PageHero } from '../../components/PageHero';
import { RestaurantExplorer } from '../../components/RestaurantExplorer';
import { CTABand } from '../../components/CTABand';
import { STOREFRONT_IMAGE } from '../../data/corporateData';

export const metadata: Metadata = {
  title: 'Restaurants',
  description:
    'Find a Fri-Chiks ® near you. Browse our growing network of restaurants across Lahore, Faisalabad, Gujranwala and Islamabad by city, format and service.',
};

export default function RestaurantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Restaurant Network"
        crumbs={[{ label: 'Restaurants' }]}
        image={STOREFRONT_IMAGE}
        title={
          <>
            Growing One <span className="text-[#FFC700]">Restaurant at a Time</span>
          </>
        }
        description="45+ outlets and counting across Pakistan's major cities. Find your nearest Fri-Chiks ® and see the formats we operate."
      />
      <section className="py-16 sm:py-20 bg-[#FAF8F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RestaurantExplorer />
        </div>
      </section>
      <CTABand
        heading="Don't See Your City Yet?"
        text="We're expanding fast. Bring Fri-Chiks ® to your area as a franchise partner, or suggest a location you own."
        primaryLabel="Explore Franchise"
        primaryHref="/franchise"
      />
    </>
  );
}

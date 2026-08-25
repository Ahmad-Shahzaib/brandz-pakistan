import type { Metadata } from 'next';
import { PageHero } from '../../components/PageHero';
import { RestaurantExplorer } from '../../components/RestaurantExplorer';
import { CTABand } from '../../components/CTABand';
import { getSiteContent } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Restaurants',
  description:
    'Find a Fri-Chiks ® near you. Browse our growing network of restaurants across Lahore, Faisalabad, Gujranwala and Islamabad by city, format and service.',
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
        title={hero?.title ||
          <>
            Growing One <span className="text-[#F6A18F]">Restaurant at a Time</span>
          </>
        }
        description={hero?.description || "Find your nearest Brandz Pakistan restaurant and see the formats we operate."}
      />
      <section className="py-16 sm:py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RestaurantExplorer restaurants={restaurants} />
        </div>
      </section>
      <CTABand
        heading="Don't See Your City Yet?"
        text="We're expanding fast. Bring Fri-Chiks ® to your area as a franchise partner, or suggest a location you own."
        primaryLabel="Explore Franchise"
        primaryHref="/franchise"
        image={images.interior}
      />
    </>
  );
}

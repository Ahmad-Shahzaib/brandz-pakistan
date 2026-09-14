import { getSiteContent } from '@/lib/api';
import { BrandsExplorer } from '@/components/BrandsExplorer';

export const metadata = {
  title: 'Our Brands',
  description: 'Explore the Brandz Pakistan food and hospitality portfolio — 40 diverse culinary concepts.',
};

export default async function BrandsPage() {
  const { brands, categories, pageHeroes } = await getSiteContent();
  const hero = pageHeroes.brands;

  return (
    <>
      <section className="bg-[#292A2D] pb-16 pt-32 text-white sm:pb-20">
        <div className="section-container">
          <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#F6A18F]">
            {hero?.eyebrow || 'Brandz Pakistan portfolio'}
          </p>
          <h1 className="hero-title mt-4 max-w-3xl text-white">
            {hero?.title || 'A brand for every appetite and occasion.'}
          </h1>
          <p className="body-lead mt-5 max-w-2xl text-gray-300">
            {hero?.description || 'Discover 40 distinctive food and hospitality concepts supported by Brandz Pakistan.'}
          </p>
        </div>
      </section>

      <main className="section-padding bg-[#F7F7F7]">
        <div className="section-container">
          <BrandsExplorer initialBrands={brands} categories={categories} />
        </div>
      </main>
    </>
  );
}

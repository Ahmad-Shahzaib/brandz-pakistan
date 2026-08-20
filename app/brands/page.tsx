import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { brands, categories } from '../../data/brands';

export const metadata = { title: 'Our Brands', description: 'Explore the Brandz Pakistan food and hospitality portfolio.' };

export default function BrandsPage() {
  return (
    <>
      <section className="bg-[#292A2D] pb-16 pt-32 text-white sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#F6A18F]">Brandz Pakistan portfolio</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-.045em] sm:text-6xl">A brand for every<br /><span className="text-[#F05535]">appetite and occasion.</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">Discover the food and hospitality concepts supported by Brandz Pakistan—each with its own identity, flavour and guest experience.</p>
        </div>
      </section>

      <main className="bg-[#F7F7F7] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 border-b border-[#E3E3E4] pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="eyebrow !text-[#D34518]">All brands</p><h2 className="text-3xl font-bold tracking-[-.035em] text-[#343538] sm:text-4xl">{brands.length} concepts. One portfolio.</h2></div>
            <p className="text-sm text-[#717275]">Browse by category below</p>
          </div>

          <div className="space-y-14">
            {categories.map((category) => {
              const categoryBrands = brands.filter((brand) => brand.category === category);
              return (
                <section key={category} id={category.toLowerCase().replaceAll(' ', '-')}>
                  <div className="mb-5 flex items-center gap-4"><h2 className="text-xl font-bold text-[#343538]">{category}</h2><span className="h-px flex-1 bg-[#E3E3E4]" /><span className="rounded-full bg-[#FFF0EC] px-3 py-1 text-[10px] font-bold text-[#D34518]">{categoryBrands.length} brands</span></div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {categoryBrands.map((brand) => (
                      <Link key={brand.slug} href={`/brands/${brand.slug}`} className="group flex min-h-52 flex-col rounded-xl border border-[#E3E3E4] bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-[#E39A88] hover:shadow-xl hover:shadow-[#343538]/[.08]">
                        <div className="flex h-24 items-center justify-center rounded-lg bg-[#F7F7F7] p-4"><Image src={brand.logo} alt={`${brand.name} official logo`} width={180} height={90} className="max-h-full w-full object-contain" /></div>
                        <div className="mt-5 flex items-end justify-between gap-3"><div><h3 className="text-lg font-bold text-[#343538]">{brand.name}</h3><p className="mt-1 text-sm leading-5 text-[#717275]">{brand.tagline}</p></div><ArrowRight className="mb-1 shrink-0 text-[#D34518] transition duration-200 group-hover:translate-x-1" size={18} /></div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

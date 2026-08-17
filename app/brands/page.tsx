import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { brands, categories } from '../../data/brands';

export const metadata = { title: 'Our Brands', description: 'Explore the Brandz Pakistan food and hospitality portfolio.' };

export default function BrandsPage() {
  return (
    <>
      <section className="bg-[#031B12] pb-16 pt-32 text-white sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#8EDD67]">Brandz Pakistan portfolio</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-.045em] sm:text-6xl">A brand for every<br /><span className="text-[#67C63C]">appetite and occasion.</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">Discover the food and hospitality concepts supported by Brandz Pakistan—each with its own identity, flavour and guest experience.</p>
        </div>
      </section>

      <main className="bg-[#F8FAF8] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 border-b border-[#DCE6DE] pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="eyebrow !text-[#2C7A35]">All brands</p><h2 className="text-3xl font-bold tracking-[-.035em] text-[#122017] sm:text-4xl">{brands.length} concepts. One portfolio.</h2></div>
            <p className="text-sm text-[#637168]">Browse by category below</p>
          </div>

          <div className="space-y-14">
            {categories.map((category) => {
              const categoryBrands = brands.filter((brand) => brand.category === category);
              return (
                <section key={category} id={category.toLowerCase().replaceAll(' ', '-')}>
                  <div className="mb-5 flex items-center gap-4"><h2 className="text-xl font-bold text-[#153222]">{category}</h2><span className="h-px flex-1 bg-[#DCE6DE]" /><span className="rounded-full bg-[#EAF3E9] px-3 py-1 text-[10px] font-bold text-[#397A3C]">{categoryBrands.length} brands</span></div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {categoryBrands.map((brand) => (
                      <Link key={brand.slug} href={`/brands/${brand.slug}`} className="group flex min-h-52 flex-col rounded-xl border border-[#E0E8E1] bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-[#7ABD65] hover:shadow-xl hover:shadow-[#153222]/[.08]">
                        <div className="flex h-24 items-center justify-center rounded-lg bg-[#FAFCFA] p-4"><Image src={brand.logo} alt={`${brand.name} official logo`} width={180} height={90} className="max-h-full w-full object-contain" /></div>
                        <div className="mt-5 flex items-end justify-between gap-3"><div><h3 className="text-lg font-bold text-[#122017]">{brand.name}</h3><p className="mt-1 text-sm leading-5 text-[#66746B]">{brand.tagline}</p></div><ArrowRight className="mb-1 shrink-0 text-[#438C45] transition duration-200 group-hover:translate-x-1" size={18} /></div>
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

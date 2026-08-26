import type { Brand } from '@/lib/types';

const imageSet = [
  '/assets/images/hero_fried_chicken_1785741263782.jpg',
  '/assets/images/storefront_signage_1785741282569.jpg',
  '/assets/images/store_interior_1785741297229.jpg',
];

export const brands: Brand[] = [
  {
    slug: 'fri-chiks',
    name: 'Fri-Chiks',
    category: 'Fast Food',
    tagline: 'Something Different',
    since: '2002',
    accent: '#e31b23',
    locations: '45+',
    description: 'A professionally managed Pakistani quick-service concept built around consistent quality and memorable guest experiences.',
    services: ['Dine-in and takeaway operations', 'Delivery and digital ordering', 'Franchise development and support', 'Catering and corporate orders'],
    awards: ['Brandz Pakistan Quality Standard 2005', 'Guest Choice Recognition', 'Operational Excellence Citation'],
    logo: '/assets/logos/fri-chiks.png',
    image: imageSet[0],
    gallery: imageSet,
    offerings: ['Signature fried chicken', 'Crispy chicken burgers', 'Family sharing meals'],
  },
];

export const categories = [...new Set(brands.map((brand) => brand.category))];
export const getBrand = (slug: string) => brands.find((brand) => brand.slug === slug);

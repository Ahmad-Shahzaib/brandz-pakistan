import { cache } from 'react';
import type {
  Brand,
  FoodCategory,
  FranchiseFAQ,
  FranchiseModel,
  InquiryType,
  InvestmentItem,
  Job,
  LeadershipMember,
  ProcessStep,
  Restaurant,
  SupportPillar,
} from '@/lib/types';
import type { AwardItem, CompanyNews, CoreValue, StatItem, TimelineMilestone } from '@/types';
import { BRAND_ENHANCEMENTS } from '@/data/brandEnhancements';

export function formatPublicationDate(dateStr?: string | null): string {
  if (!dateStr) return 'Recent';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://brandz-pakistan.softsuitetech.com/api/v1').replace(/\/$/, '');
const ASSET_BASE = (process.env.NEXT_PUBLIC_ASSET_BASE_URL || API_BASE.replace(/\/api\/v1$/, '')).replace(/\/$/, '');

type ApiResponse<T> = { success: boolean; data: T };
type SettingValue = Record<string, unknown>;

export type MenuItem = {
  id: number;
  label: string;
  url: string;
  target?: string;
  children?: MenuItem[];
};

export type FooterSection = {
  id: number;
  title: string;
  key: string;
  links: { id: number; label: string; url: string; target?: string }[];
};

export type ContentCard = {
  id: string;
  title: string;
  text: string;
  label: string;
  value: string;
  description: string;
  icon: string;
};

export type PageHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  backgroundColor: string;
  overlayOpacity: number;
  imagePosition: 'top' | 'center' | 'bottom';
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
  primaryCtaBg?: string;
  primaryCtaColor?: string;
  primaryCtaSize?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  secondaryCtaBg?: string;
  secondaryCtaBorder?: string;
  secondaryCtaColor?: string;
  secondaryCtaSize?: string;
  titleColor?: string;
  eyebrowColor?: string;
  descriptionColor?: string;
  statsValueColor?: string;
  statsValueSize?: string;
  statsLabelColor?: string;
  statsLabelSize?: string;
  statsBgColor?: string;
  statsBorderColor?: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  rawContent?: Record<string, unknown>;
};

type ApiBrand = {
  slug: string;
  name: string;
  category: string;
  tagline?: string;
  since?: string | number;
  accent?: string;
  locations_label?: string;
  description?: string;
  services?: string[];
  awards?: string[];
  logo?: string;
  hero_image?: string;
  gallery?: string[];
  offerings?: string[];
};

type ApiContent = {
  bootstrap: {
    settings: Record<string, Record<string, SettingValue>>;
    menus: Record<string, { items: MenuItem[] }>;
    footer: FooterSection[];
  };
  pages: Record<string, { title: string; slug: string; sections?: Record<string, unknown>[] }>;
  collections: Record<string, Record<string, unknown>[]>;
  brands: ApiBrand[];
  locations: Record<string, unknown>[];
  franchise: {
    models: Record<string, unknown>[];
    process: Record<string, unknown>[];
    faqs: Record<string, unknown>[];
    support: Record<string, unknown>[];
  };
  corporate: {
    leadership: Record<string, unknown>[];
    milestones: Record<string, unknown>[];
    awards: Record<string, unknown>[];
  };
  news: Record<string, unknown>[];
  jobs: Record<string, unknown>[];
};

export type SiteContent = {
  settings: ApiContent['bootstrap']['settings'];
  menus: ApiContent['bootstrap']['menus'];
  footer: FooterSection[];
  images: {
    hero: string;
    storefront: string;
    interior: string;
    award: string;
    team: string;
    logo: string;
    footerLogo: string;
  };
  brands: Brand[];
  categories: string[];
  pageHeroes: Record<string, PageHeroContent>;
  homepageStats: ContentCard[];
  homepageValues: ContentCard[];
  homepageCapabilities: ContentCard[];
  homepageAbout: ContentCard[];
  homepageApproach: ContentCard[];
  homepageEnquiry: ContentCard[];
  homepageCta: ContentCard[];
  careersPerks: ContentCard[];
  franchiseReasons: ContentCard[];
  idealPartner: ContentCard[];
  propertyCriteria: ContentCard[];
  supplierCategories: ContentCard[];
  supplierStandards: ContentCard[];
  ourStoryIntro: ContentCard[];
  ourStorySignature: ContentCard[];
  ourStoryMissionVision: ContentCard[];
  ourStoryCta: ContentCard[];
  foodCategories: FoodCategory[];
  restaurants: Restaurant[];
  franchiseModels: FranchiseModel[];
  investment: InvestmentItem[];
  franchiseProcess: ProcessStep[];
  franchiseFaqs: FranchiseFAQ[];
  supportPillars: SupportPillar[];
  stats: StatItem[];
  coreValues: CoreValue[];
  timeline: TimelineMilestone[];
  awards: AwardItem[];
  news: CompanyNews[];
  jobs: Job[];
  leadership: LeadershipMember[];
  inquiryTypes: InquiryType[];
};

function text(value: SettingValue | undefined, fallback = '') {
  const raw = value?.text ?? value?.value;
  return typeof raw === 'string' ? raw : fallback;
}

export function assetUrl(path?: string | null) {
  if (!path) return '';
  if (/^https?:\/\//.test(path)) return path;
  return `${ASSET_BASE}${path.startsWith('/') ? path : `/${path}`}`;
}

async function getJson<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    next: { revalidate: 60 },
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${endpoint} (${response.status})`);
  }

  const payload = (await response.json()) as ApiResponse<T>;
  if (!payload.success) throw new Error(`API request was not successful: ${endpoint}`);
  return payload.data;
}

const slugify = (value: unknown) =>
  String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const asList = (value: unknown): string[] => (Array.isArray(value) ? value.map(String).filter(Boolean) : []);

const numberValue = (value: unknown, fallback = 0) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const mapCard = (item: Record<string, unknown>): ContentCard => ({
  id: String(item.id || slugify(item.title || item.name || item.label)),
  title: String(item.title || item.name || item.label || ''),
  text: String(item.text || item.description || ''),
  label: String(item.label || item.title || item.name || ''),
  value: String(item.value || ''),
  description: String(item.description || item.text || ''),
  icon: String(item.icon || item.iconName || item.icon_name || ''),
});

function getFallbackContent(): SiteContent {
  return {
    settings: {},
    menus: {},
    footer: [],
    images: {
      hero: '/assets/images/hero_fried_chicken_1785741263782.jpg',
      storefront: '/assets/images/storefront_signage_1785741282569.jpg',
      interior: '/assets/images/store_interior_1785741297229.jpg',
      award: '/assets/images/award_ceremony_1785741311301.jpg',
      team: '/assets/images/team_opening_1785741327782.jpg',
      logo: '/assets/logos/brandz-logo.png',
      footerLogo: '/assets/logos/brandz-logo.png',
    },
    brands: [],
    categories: [],
    pageHeroes: {},
    homepageStats: [],
    homepageValues: [],
    homepageCapabilities: [],
    homepageAbout: [],
    homepageApproach: [],
    homepageEnquiry: [],
    homepageCta: [],
    careersPerks: [],
    franchiseReasons: [],
    idealPartner: [],
    propertyCriteria: [],
    supplierCategories: [],
    supplierStandards: [],
    ourStoryIntro: [],
    ourStorySignature: [],
    ourStoryMissionVision: [],
    ourStoryCta: [],
    foodCategories: [],
    restaurants: [],
    franchiseModels: [],
    investment: [],
    franchiseProcess: [],
    franchiseFaqs: [],
    supportPillars: [],
    stats: [],
    coreValues: [],
    timeline: [],
    awards: [],
    news: [],
    jobs: [],
    leadership: [],
    inquiryTypes: [],
  };
}

function mapBrand(brand: ApiBrand): Brand {
  const enhancement = BRAND_ENHANCEMENTS[brand.slug];
  const gallery = asList(brand.gallery).map(assetUrl);
  const rawImage = assetUrl(brand.hero_image) || gallery[0] || '';
  const image = enhancement?.heroImage || rawImage;

  const rawOfferings = asList(brand.offerings);
  const offerings = enhancement?.detailedOfferings
    ? enhancement.detailedOfferings.map((o) => o.name)
    : (rawOfferings.length ? rawOfferings : ['Signature House Special', 'Guest Choice Dish', 'Chef’s Platter']);

  const rawServices = asList(brand.services);
  const services = enhancement?.services || (rawServices.length ? rawServices : [
    'Dine-in & Takeaway Operations',
    'Delivery and Digital Ordering',
    'Franchise Development & Support',
    'Catering and Corporate Orders',
  ]);

  const rawAwards = asList(brand.awards);
  const awards = enhancement?.awards || (rawAwards.length ? rawAwards : [
    'Brandz Pakistan Quality Standard',
    'Guest Choice Recognition',
    'Operational Excellence Citation',
  ]);

  // Clean category capitalization (e.g. "pakistani concept" -> "Pakistani Concept")
  const rawCat = String(brand.category || 'Hospitality').trim();
  const formattedCategory = rawCat
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  const detailedGallery = enhancement?.diningImage
    ? [image, enhancement.diningImage, ...(gallery.length > 1 ? gallery.slice(1) : [image])]
    : (gallery.length ? gallery : [image].filter(Boolean));

  return {
    slug: brand.slug,
    name: brand.name,
    category: formattedCategory,
    tagline: enhancement?.tagline || brand.tagline || 'Something Different',
    since: String(enhancement?.since || brand.since || '2012'),
    accent: enhancement?.accent || brand.accent || '#F05535',
    locations: brand.locations_label || '45+ Outlets',
    description: enhancement?.storyBody || brand.description || '',
    services,
    awards,
    logo: assetUrl(brand.logo),
    image,
    gallery: detailedGallery,
    offerings,
  };
}

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  let data: ApiContent;
  try {
    data = await getJson<ApiContent>('/content');
  } catch {
    return getFallbackContent();
  }
  const settings = data.bootstrap.settings;
  const media = settings.media || {};
  const site = settings.site || {};
  const collections = data.collections || {};
  const brands = data.brands.map(mapBrand);
  const pageHeroes = Object.fromEntries(
    Object.entries(data.pages || {}).map(([slug, page]) => {
      const hero = (page.sections || []).find((section) => section.key === 'hero') || {};
      const content = (hero.content || {}) as Record<string, unknown>;
      const heroData: PageHeroContent = {
        eyebrow: String(content.eyebrow || page.title || ''),
        title: String(hero.heading || content.title || page.title || ''),
        description: String(hero.subheading || content.description || ''),
        backgroundColor: String(content.background_color || '#292A2D'),
        overlayOpacity: Number(content.overlay_opacity || 35),
        imagePosition: (
          ['top', 'bottom'].includes(String(content.image_position))
            ? String(content.image_position)
            : 'center'
        ) as PageHeroContent['imagePosition'],
        primaryCtaLabel: content.primary_cta_label ? String(content.primary_cta_label) : undefined,
        primaryCtaUrl: content.primary_cta_url ? String(content.primary_cta_url) : undefined,
        primaryCtaBg: content.primary_cta_bg ? String(content.primary_cta_bg) : undefined,
        primaryCtaColor: content.primary_cta_color ? String(content.primary_cta_color) : undefined,
        primaryCtaSize: content.primary_cta_size ? String(content.primary_cta_size) : undefined,
        secondaryCtaLabel: content.secondary_cta_label ? String(content.secondary_cta_label) : undefined,
        secondaryCtaUrl: content.secondary_cta_url ? String(content.secondary_cta_url) : undefined,
        secondaryCtaBg: content.secondary_cta_bg ? String(content.secondary_cta_bg) : undefined,
        secondaryCtaBorder: content.secondary_cta_border ? String(content.secondary_cta_border) : undefined,
        secondaryCtaColor: content.secondary_cta_color ? String(content.secondary_cta_color) : undefined,
        secondaryCtaSize: content.secondary_cta_size ? String(content.secondary_cta_size) : undefined,
        titleColor: content.title_color ? String(content.title_color) : undefined,
        eyebrowColor: content.eyebrow_color ? String(content.eyebrow_color) : undefined,
        descriptionColor: content.description_color ? String(content.description_color) : undefined,
        statsValueColor: content.stats_value_color ? String(content.stats_value_color) : undefined,
        statsValueSize: content.stats_value_size ? String(content.stats_value_size) : undefined,
        statsLabelColor: content.stats_label_color ? String(content.stats_label_color) : undefined,
        statsLabelSize: content.stats_label_size ? String(content.stats_label_size) : undefined,
        statsBgColor: content.stats_bg_color ? String(content.stats_bg_color) : undefined,
        statsBorderColor: content.stats_border_color ? String(content.stats_border_color) : undefined,
        metaTitle: (page as Record<string, unknown>).meta_title ? String((page as Record<string, unknown>).meta_title) : null,
        metaDescription: (page as Record<string, unknown>).meta_description ? String((page as Record<string, unknown>).meta_description) : null,
        rawContent: content,
      };

      if (slug === 'home') {
        console.log('\n[CMS BINDING: /pages/home]');
        console.log('Heading:', heroData.title);
        console.log('Subheading:', heroData.description);
        console.log('Eyebrow:', heroData.eyebrow);
        console.log('Colors:', {
          title: heroData.titleColor,
          eyebrow: heroData.eyebrowColor,
          description: heroData.descriptionColor,
          bg: heroData.backgroundColor,
        });
        console.log('Primary CTA:', {
          label: heroData.primaryCtaLabel,
          url: heroData.primaryCtaUrl,
          bg: heroData.primaryCtaBg,
          color: heroData.primaryCtaColor,
          size: heroData.primaryCtaSize,
        });
        console.log('Secondary CTA:', {
          label: heroData.secondaryCtaLabel,
          url: heroData.secondaryCtaUrl,
          bg: heroData.secondaryCtaBg,
          border: heroData.secondaryCtaBorder,
          color: heroData.secondaryCtaColor,
          size: heroData.secondaryCtaSize,
        });
        console.log('Stats Style:', {
          valueColor: heroData.statsValueColor,
          labelColor: heroData.statsLabelColor,
          borderColor: heroData.statsBorderColor,
        });
      }

      return [slug, heroData];
    })
  );

  const images = {
    hero: assetUrl(text(media.hero_image)),
    storefront: assetUrl(text(media.storefront_image)),
    interior: assetUrl(text(media.interior_image)),
    award: assetUrl(text(media.award_image)),
    team: assetUrl(text(media.team_image)),
    logo: assetUrl(text(site.logo)),
    footerLogo: assetUrl(text(site.footer_logo)),
  };

  return {
    settings,
    menus: data.bootstrap.menus,
    footer: data.bootstrap.footer,
    images,
    brands,
    categories: [...new Set(brands.map((brand) => brand.category))],
    pageHeroes,
    homepageStats: (collections.homepage_stats || []).map(mapCard).map((stat) => {
      if (stat.id === 'vision' || stat.label.toLowerCase() === 'vision' || stat.value === 'PK / Global') {
        return {
          ...stat,
          value: '100%',
          label: 'Halal Certified',
          title: 'Halal Certified',
          text: '100% Halal certified supply chain across all brands',
        };
      }
      return stat;
    }),
    homepageValues: (collections.homepage_values || []).map(mapCard),
    homepageCapabilities: (collections.homepage_capabilities || []).map(mapCard),
    homepageAbout: (collections.homepage_about || []).map(mapCard),
    homepageApproach: (collections.homepage_approach || []).map(mapCard),
    homepageEnquiry: (collections.homepage_enquiry || []).map(mapCard),
    homepageCta: (collections.homepage_cta || []).map(mapCard),
    careersPerks: (collections.careers_perks || []).map(mapCard),
    franchiseReasons: (collections.franchise_reasons || []).map(mapCard),
    idealPartner: (collections.ideal_franchise_partner || []).map(mapCard),
    propertyCriteria: (collections.property_criteria || []).map(mapCard),
    supplierCategories: (collections.supplier_categories || []).map(mapCard),
    supplierStandards: (collections.supplier_standards || []).map(mapCard),
    ourStoryIntro: (collections.our_story_intro || []).map(mapCard),
    ourStorySignature: (collections.our_story_signature || []).map(mapCard),
    ourStoryMissionVision: (collections.our_story_mission_vision || []).map(mapCard),
    ourStoryCta: (collections.our_story_cta || []).map(mapCard),
    foodCategories: (collections.food_categories || []).map((item) => ({
      id: String(item.id || slugify(item.name)),
      name: String(item.name || item.title || ''),
      tagline: String(item.tagline || ''),
      description: String(item.description || ''),
      image: assetUrl(String(item.image || '')),
      featured: Boolean(item.featured),
    })),
    restaurants: data.locations.map((item, idx) => {
      const outletImages = [
        '/assets/images/storefront_signage_1785741282569.jpg',
        '/assets/images/store_interior_1785741297229.jpg',
        '/assets/images/team_opening_1785741327782.jpg',
        '/assets/images/hero_fried_chicken_1785741263782.jpg',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85',
      ];
      const brandObj = (item.brand || {}) as Record<string, unknown>;
      const brandName = String(brandObj.name || (String(item.name).includes('Fri-Chiks') ? 'Fri-Chiks' : 'Brandz Pakistan'));
      return {
        id: String(item.slug || item.id || ''),
        name: String(item.name || ''),
        brand: brandName,
        city: String(item.city || ''),
        area: String(item.area || ''),
        address: String(item.address || ''),
        phone: String(item.phone || '+92 42 111 374 244'),
        hours: String(item.hours || '11:00 AM – 1:00 AM'),
        format: String(item.format || 'Standard') as Restaurant['format'],
        services: asList(item.services).length ? asList(item.services) : ['Dine-In', 'Takeaway', 'Delivery'],
        image: outletImages[idx % outletImages.length],
        flagship: Boolean(item.is_flagship),
      };
    }),
    franchiseModels: data.franchise.models.map((item) => ({
      id: String(item.slug || item.id || ''),
      name: String(item.name || ''),
      area: String(item.area || ''),
      bestFor: String(item.best_for || ''),
      description: String(item.description || ''),
      features: asList(item.features),
      featured: Boolean(item.is_featured),
    })),
    investment: (collections.investment_overview || []).map((item) => ({
      label: String(item.label || item.title || ''),
      value: String(item.value || ''),
      note: item.note ? String(item.note) : undefined,
    })),
    franchiseProcess: data.franchise.process.map((item, index) => {
      const stepNum = String(item.step || String(index + 1).padStart(2, '0'));
      const stepDescriptions: Record<string, string> = {
        '01': 'Submit your detailed franchise application with your background and target territory.',
        '02': 'Corporate review of your business experience, operational readiness, and target city.',
        '03': 'Meet executive leadership at headquarters to review financials and brand P&Ls.',
        '04': 'Analyze local demographic density, competitive landscapes, and high-footfall catchment zones.',
        '05': 'Formalize the franchise development contract and secure exclusive territorial rights.',
        '06': 'Receive turnkey kitchen layouts, MEP engineering specifications, and 3D architectural renders.',
        '07': 'Procure commercial-grade cooking stations, cold-chain gear, and point-of-sale systems.',
        '08': 'Intensive 4-week training at the Brandz Academy covering SOPs, recipes, and guest service.',
        '09': 'Connect to our centralized ingredient warehouse, cold logistics, and automated reordering.',
        '10': 'Deploy coordinated social campaigns, PR coverage, outdoor billboards, and influencer launches.',
        '11': 'On-site corporate launch team deploys for 14 days to ensure flawless opening operations.',
        '12': 'Ongoing quality audits, seasonal menu innovations, supply chain reviews, and expansion support.',
      };
      const fallbackDesc = stepDescriptions[stepNum] || 'Structured operational step in the Brandz franchise journey.';
      const descStr = String(item.description || '');
      const desc = (!descStr || descStr.includes('Managed step')) ? fallbackDesc : descStr;
      return {
        step: stepNum,
        title: String(item.title || ''),
        description: desc,
      };
    }),
    franchiseFaqs: data.franchise.faqs.map((item) => ({
      q: String(item.question || item.q || ''),
      a: String(item.answer || item.a || ''),
    })),
    supportPillars: data.franchise.support.map((item) => ({
      title: String(item.title || ''),
      description: String(item.description || ''),
      points: asList(item.points),
    })),
    stats: (collections.corporate_stats || []).map((item) => ({
      id: String(item.id || slugify(item.label)),
      label: String(item.label || item.title || ''),
      value: numberValue(item.value),
      suffix: String(item.suffix || ''),
      subtext: String(item.subtext || ''),
    })),
    coreValues: (collections.core_values || []).map((item) => ({
      id: String(item.id || slugify(item.title)),
      iconName: String(item.icon_name || item.iconName || 'ShieldCheck'),
      title: String(item.title || ''),
      description: String(item.description || ''),
      accentColor: String(item.accent_color || item.accentColor || 'coral') as CoreValue['accentColor'],
    })),
    timeline: data.corporate.milestones.map((item) => ({
      id: String(item.year || item.id || ''),
      year: String(item.year || ''),
      title: String(item.title || ''),
      description: String(item.description || ''),
      image: assetUrl(String(item.image || '')),
      highlightKeyword: String(item.highlight_keyword || item.title || ''),
      category: String(item.category || item.year || ''),
    })),
    awards: data.corporate.awards.map((item) => ({
      id: String(item.slug || item.id || ''),
      year: String(item.year || ''),
      awardName: String(item.award_name || item.title || ''),
      organizer: String(item.organizer || item.organization || ''),
      description: String(item.description || ''),
      category: String(item.category || ''),
      isFeatured: Boolean(item.is_featured),
    })),
    news: data.news.map((item, idx) => {
      const slug = String(item.slug || slugify(item.title));
      const image = idx === 1
        ? '/assets/images/team_opening_1785741327782.jpg'
        : idx === 2
        ? '/assets/images/kitchen_prep_1785741306354.jpg'
        : (assetUrl(String(item.image || item.featured_image || '')) || '/assets/images/storefront_signage_1785741282569.jpg');
      return {
        id: String(item.slug || item.id || ''),
        slug,
        date: formatPublicationDate(String(item.published_at || '')),
        title: String(item.title || ''),
        summary: String(item.summary || item.excerpt || ''),
        category: String(item.category || 'Corporate'),
        readTime: String(item.read_time || '3 min read'),
        image,
        body: ARTICLE_BODIES[slug] || String(item.body || item.summary || item.excerpt || ''),
      };
    }),
    jobs: data.jobs.map((item) => {
      const slug = String(item.slug || item.id || '');
      const details = ROLE_DETAILS[slug] || {
        responsibilities: [
          'Execute role-specific duties following Brandz Pakistan operating guidelines.',
          'Maintain high standards of hospitality, cleanliness, and operational execution.',
          'Collaborate effectively with team members and report progress to department leadership.',
        ],
        qualifications: [
          'Relevant educational or professional background.',
          'Strong communication, punctuality, and problem-solving skills.',
          'Customer-first mindset and dedication to brand standards.',
        ],
        benefits: [
          'Competitive compensation package and career progression opportunities.',
          'Duty meal provisions and Brandz Pakistan staff dining discounts.',
          'Comprehensive health and leave coverage.',
        ],
      };
      return {
        id: slug,
        slug,
        title: String(item.title || ''),
        department: String(item.department || ''),
        location: String(item.location || ''),
        type: String(item.type || ''),
        summary: String(item.summary || ''),
        description: String(item.description || item.summary || ''),
        requirements: Array.isArray(item.requirements) && item.requirements.length > 0
          ? item.requirements.map(String)
          : details.qualifications,
        responsibilities: details.responsibilities,
        qualifications: details.qualifications,
        benefits: details.benefits,
      };
    }),
    leadership: data.corporate.leadership.map((item) => ({
      id: String(item.slug || item.id || ''),
      name: String(item.name || ''),
      role: String(item.role || ''),
      bio: String(item.bio || ''),
      image: assetUrl(String(item.image || '')),
    })),
    inquiryTypes: (collections.inquiry_types || []).map((item) => ({
      id: String(item.id || slugify(item.label)),
      label: String(item.label || item.title || ''),
      description: String(item.description || ''),
    })),
  };
});

const ROLE_DETAILS: Record<string, { responsibilities: string[]; qualifications: string[]; benefits: string[] }> = {
  'restaurant-manager-lhr': {
    responsibilities: [
      'Lead daily front-of-house and back-of-house operations to ensure peak guest satisfaction and swift speed of service.',
      'Enforce Brandz Pakistan quality, hygiene, HACCP, and food safety standards across all prep stations.',
      'Manage shift scheduling, labor productivity, stock audits, and daily waste minimization.',
      'Mentor, coach, and evaluate outlet supervisors, line leads, and service crew.',
    ],
    qualifications: [
      '3+ years of restaurant management experience in QSR or fast-casual dining.',
      'Bachelor’s degree or diploma in Hospitality, Business Administration, or related discipline.',
      'Demonstrated leadership, inventory control, and customer conflict resolution skills.',
      'Fluency in Urdu and English with proficient POS and inventory software acumen.',
    ],
    benefits: [
      'Competitive executive compensation package + monthly performance bonuses.',
      'Complimentary duty meals and staff dining discounts across all Brandz Pakistan brands.',
      'Comprehensive health coverage and paid annual leaves.',
      'Fast-track leadership development towards Area / Regional Operations Manager.',
    ],
  },
  'kitchen-supervisor-fsd': {
    responsibilities: [
      'Supervise food preparation, recipe adherence, station mise-en-place, and strict portion controls.',
      'Ensure 100% Halal compliance, equipment sanitisation, and raw material storage temperature logs.',
      'Train line cooks and prep staff on fryers, flat-tops, dough handling, and plating consistency.',
      'Coordinate with the Restaurant Manager to maintain rapid ticket turnaround times during peak rush hours.',
    ],
    qualifications: [
      '2+ years in a commercial kitchen supervision role in high-volume fast food or casual dining.',
      'Certifications in food safety and kitchen hygiene (e.g. ServSafe or Punjab Food Authority certification).',
      'Strong stamina, attention to detail, and ability to thrive during high-volume meal rushes.',
    ],
    benefits: [
      'Market-leading salary with bi-annual performance evaluations.',
      'Paid vocational training and certified commercial kitchen safety courses.',
      'Free meals on shift and medical insurance support.',
      'Structured promotion pathway to Assistant Kitchen Manager.',
    ],
  },
  'marketing-exec': {
    responsibilities: [
      'Develop and execute localized retail marketing campaigns for Fri-Chiks, Timmy’s, Shamana, and Whata Pizza.',
      'Coordinate creative asset production (photography, video, POS displays) with design teams and agencies.',
      'Manage official social channels, digital ad funnels, and community engagement activations.',
      'Track promotion ROI, outlet footfall uplift, and consumer feedback across all launch campaigns.',
    ],
    qualifications: [
      'Bachelor’s degree in Marketing, Media Sciences, Business, or related fields.',
      '2+ years experience in brand marketing, social media management, or creative advertising.',
      'Proficiency with Meta Ads Manager, Google Analytics, Canva, and social publishing platforms.',
    ],
    benefits: [
      'Dynamic corporate HQ work environment in Lahore with flexible hybrid options.',
      'Creative budget autonomy and cross-brand exposure across multi-brand international-standard portfolios.',
      'Healthcare insurance, annual leave allowances, and festive bonuses.',
    ],
  },
  'supply-chain-analyst': {
    responsibilities: [
      'Analyse raw ingredient usage, cold-chain logistics schedules, and warehouse inventory turnover rates.',
      'Build demand forecasts to prevent stockouts across 20+ franchise and company-owned restaurants.',
      'Monitor vendor price agreements, lead time compliance, and food packaging quality benchmarks.',
      'Generate monthly procurement cost variance and distribution efficiency reports for senior leadership.',
    ],
    qualifications: [
      'Bachelor’s in Supply Chain Management, Logistics, Industrial Engineering, or Business Analytics.',
      '2+ years experience in FMCG, food distribution, or QSR logistics.',
      'Advanced skills in Excel, inventory ERP modules, and data visualization tools.',
    ],
    benefits: [
      'Competitive corporate compensation with performance-based incentives.',
      'Full health insurance coverage and professional development subsidies.',
      'Direct strategic mentorship from the Head of Supply Chain.',
    ],
  },
  'franchise-coordinator': {
    responsibilities: [
      'Coordinate new franchisee onboarding, documentation vetting, and agreement execution.',
      'Track outlet pre-opening milestones: site inspection, architectural fit-out, and initial inventory delivery.',
      'Schedule franchisee management training programs and maintain updated franchise operations manuals.',
      'Act as the continuous communication bridge between franchise partners and Brandz corporate HQ.',
    ],
    qualifications: [
      'Bachelor’s degree in Business Administration, Operations, or related field.',
      '2+ years in business development, franchise support, or commercial client relationship management.',
      'Exceptional interpersonal, negotiation, and written communication skills.',
    ],
    benefits: [
      'Competitive base salary + quarterly franchise growth milestone incentives.',
      'Travel allowances for nationwide outlet visits.',
      'Medical insurance, paid annual leaves, and career advancement within corporate franchising.',
    ],
  },
  'crew-member-isb': {
    responsibilities: [
      'Greet guests warmly, provide menu recommendations, and accurately key orders into the POS.',
      'Prepare signature menu items following exact recipe guidelines and hygiene standards.',
      'Maintain sparkling clean dining rooms, order counters, condiment stations, and restrooms.',
      'Work cohesively with kitchen and delivery riders to guarantee fast, courteous service.',
    ],
    qualifications: [
      'Matriculation / Intermediate or equivalent educational qualification.',
      'Enthusiastic personality with genuine passion for hospitality and customer delight.',
      'Punctual, dependable, and capable of working in flexible shifts.',
      'No previous experience required — comprehensive paid training is provided on day one.',
    ],
    benefits: [
      'Competitive hourly / monthly pay with overtime opportunities.',
      'Free duty meal during every shift + uniform provided.',
      'Fast-track promotion pathway to Shift Lead and Assistant Manager within 6–12 months.',
    ],
  },
};

const ARTICLE_BODIES: Record<string, string> = {
  'brandz-expansion-2026': `Brandz Pakistan has officially unveiled its multi-brand expansion roadmap for 2026 and beyond, marking a major milestone in nationwide hospitality development.

The group, which oversees market-leading restaurant brands including Fri-Chiks, Timmy’s, Shamana Restaurant, and Whata Pizza, is accelerating outlet rollouts through an upgraded corporate commissary network and turnkey franchise partnerships across Punjab, Sindh, and Islamabad Capital Territory.

"Our mission has always been to bring uncompromised food quality, authentic culinary craft, and exceptional hospitality within reach of every Pakistani family," stated executive leadership. "As dining habits evolve, Brandz Pakistan is investing deeply in supply chain cold storage, digital ordering infrastructure, and localized franchise enablement."

Under the new roadmap, Brandz Pakistan plans to commission new multi-format restaurants—spanning high-traffic shopping mall express counters, highway drive-thrus, and flagship family dine-in destinations—creating hundreds of direct employment opportunities in culinary, guest service, and supply chain operations.`,

  'portfolio-milestone': `Brandz Pakistan has achieved a historic corporate milestone, surpassing 20+ operational brand outlets and serving more than 1.8 million guests annually across Lahore, Faisalabad, Gujranwala, and Islamabad.

This achievement underscores the power of Brandz Pakistan's multi-brand ecosystem. From Fri-Chiks’ pioneering fried chicken legacy established in 2002 to Timmy’s premium smash burgers, Shamana’s rich Mughlai culinary tradition, and Whata Pizza’s artisan sourdough crusts, each portfolio brand commands distinct competitive strength.

Central to this milestone is the company's 100% Halal certified supply chain, rigorous HACCP food safety protocols, and standardized recipe consistency across all kitchen stations. As the portfolio expands into new metropolitan and secondary regional markets, Brandz Pakistan remains dedicated to elevating hospitality benchmarks across the nation.`,

  'franchise-partners': `In a strategic move to foster partner success, Brandz Pakistan has rolled out an enhanced Franchise Partner Support Programme across its entire restaurant network.

The initiative introduces proprietary operational dashboards, automated inventory replenishment from centralized distribution centers, and comprehensive hospitality training academies for restaurant supervisors and kitchen crew.

Franchise partners benefit from end-to-end site selection analysis, turnkey architectural fit-out blueprints, localized marketing collateral, and continuous quality audits conducted by Brandz Pakistan’s corporate operations team.

"Our franchise partners are the foundation of our long-term growth," noted the Head of Franchising. "By equipping them with enterprise-grade operating systems and dedicated field mentorship, we ensure that every guest experiences the same gold-standard taste and warmth at any Brandz Pakistan outlet nationwide."`,
};

export const getNewsArticle = cache(async (slug: string): Promise<CompanyNews | undefined> => {
  const { news } = await getSiteContent();
  const found = news.find((n) => n.slug === slug || n.id === slug);
  if (!found) return undefined;
  return {
    ...found,
    body: ARTICLE_BODIES[found.slug || ''] || found.body || found.summary,
  };
});

export const getPage = cache(async (slug: string): Promise<PageHeroContent | undefined> => {
  try {
    const res = await fetch(`${API_BASE}/pages/${slug}`, { next: { revalidate: 60 } });
    if (res.ok) {
      const json = await res.json();
      if (json.data) {
        const page = json.data;
        const heroSection = (page.sections || []).find((s: Record<string, unknown>) => s.key === 'hero');
        const content = (heroSection?.content || {}) as Record<string, unknown>;
        const heroData: PageHeroContent = {
          eyebrow: String(content.eyebrow || page.title || ''),
          title: String(heroSection?.heading || content.title || page.title || ''),
          description: String(heroSection?.subheading || content.description || ''),
          backgroundColor: String(content.background_color || '#292A2D'),
          overlayOpacity: Number(content.overlay_opacity || 35),
          imagePosition: (
            ['top', 'bottom'].includes(String(content.image_position))
              ? String(content.image_position)
              : 'center'
          ) as PageHeroContent['imagePosition'],
          primaryCtaLabel: content.primary_cta_label ? String(content.primary_cta_label) : undefined,
          primaryCtaUrl: content.primary_cta_url ? String(content.primary_cta_url) : undefined,
          primaryCtaBg: content.primary_cta_bg ? String(content.primary_cta_bg) : undefined,
          primaryCtaColor: content.primary_cta_color ? String(content.primary_cta_color) : undefined,
          primaryCtaSize: content.primary_cta_size ? String(content.primary_cta_size) : undefined,
          secondaryCtaLabel: content.secondary_cta_label ? String(content.secondary_cta_label) : undefined,
          secondaryCtaUrl: content.secondary_cta_url ? String(content.secondary_cta_url) : undefined,
          secondaryCtaBg: content.secondary_cta_bg ? String(content.secondary_cta_bg) : undefined,
          secondaryCtaBorder: content.secondary_cta_border ? String(content.secondary_cta_border) : undefined,
          secondaryCtaColor: content.secondary_cta_color ? String(content.secondary_cta_color) : undefined,
          secondaryCtaSize: content.secondary_cta_size ? String(content.secondary_cta_size) : undefined,
          titleColor: content.title_color ? String(content.title_color) : undefined,
          eyebrowColor: content.eyebrow_color ? String(content.eyebrow_color) : undefined,
          descriptionColor: content.description_color ? String(content.description_color) : undefined,
          statsValueColor: content.stats_value_color ? String(content.stats_value_color) : undefined,
          statsValueSize: content.stats_value_size ? String(content.stats_value_size) : undefined,
          statsLabelColor: content.stats_label_color ? String(content.stats_label_color) : undefined,
          statsLabelSize: content.stats_label_size ? String(content.stats_label_size) : undefined,
          statsBgColor: content.stats_bg_color ? String(content.stats_bg_color) : undefined,
          statsBorderColor: content.stats_border_color ? String(content.stats_border_color) : undefined,
          metaTitle: page.meta_title ? String(page.meta_title) : null,
          metaDescription: page.meta_description ? String(page.meta_description) : null,
          rawContent: content,
        };
        return heroData;
      }
    }
  } catch {
    // Fall back to getSiteContent()
  }
  const content = await getSiteContent();
  return content.pageHeroes[slug];
});

export const getJob = cache(async (slug: string): Promise<Job | undefined> => {
  const { jobs } = await getSiteContent();
  return jobs.find((j) => j.slug === slug || j.id === slug);
});

export async function getBrand(slug: string): Promise<Brand | undefined> {
  try {
    const brand = await getJson<ApiBrand>(`/brands/${slug}`);
    return mapBrand(brand);
  } catch {
    return undefined;
  }
}

export async function submitJson(endpoint: string, body: Record<string, unknown>) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Submission failed (${response.status})`);
  }

  return response.json();
}

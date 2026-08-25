import { cache } from 'react';
import type {
  Brand,
  FoodCategory,
  FranchiseFAQ,
  FranchiseModel,
  InquiryType,
  InvestmentItem,
  LeadershipMember,
  ProcessStep,
  Restaurant,
  SupportPillar,
} from '@/lib/types';
import type { AwardItem, CompanyNews, CoreValue, StatItem, TimelineMilestone } from '@/types';
import { brands as fallbackBrands, getBrand as getFallbackBrand } from '@/data/brands';
import {
  AWARD_IMAGE,
  HERO_IMAGE,
  INTERIOR_IMAGE,
  LOGO_IMAGE,
  STOREFRONT_IMAGE,
  TEAM_IMAGE,
  STATS_DATA,
  CORE_VALUES_DATA,
  TIMELINE_DATA,
  AWARDS_DATA,
} from '@/data/corporateData';
import {
  FRANCHISE_FAQS,
  FRANCHISE_MODELS,
  FRANCHISE_PROCESS,
  INVESTMENT_OVERVIEW,
  LEADERSHIP,
  RESTAURANTS,
  SUPPORT_PILLARS,
  JOBS,
  INQUIRY_TYPES,
} from '@/data/siteData';

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
  jobs: {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    summary: string;
  }[];
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
      hero: HERO_IMAGE,
      storefront: STOREFRONT_IMAGE,
      interior: INTERIOR_IMAGE,
      award: AWARD_IMAGE,
      team: TEAM_IMAGE,
      logo: LOGO_IMAGE,
      footerLogo: LOGO_IMAGE,
    },
    brands: fallbackBrands,
    categories: [...new Set(fallbackBrands.map((brand) => brand.category))],
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
    foodCategories: [],
    restaurants: RESTAURANTS,
    franchiseModels: FRANCHISE_MODELS,
    investment: INVESTMENT_OVERVIEW,
    franchiseProcess: FRANCHISE_PROCESS,
    franchiseFaqs: FRANCHISE_FAQS,
    supportPillars: SUPPORT_PILLARS,
    stats: STATS_DATA,
    coreValues: CORE_VALUES_DATA,
    timeline: TIMELINE_DATA,
    awards: AWARDS_DATA,
    news: [],
    jobs: JOBS,
    leadership: LEADERSHIP,
    inquiryTypes: INQUIRY_TYPES,
  };
}

function mapBrand(brand: ApiBrand): Brand {
  const gallery = asList(brand.gallery).map(assetUrl);
  const image = assetUrl(brand.hero_image) || gallery[0] || '';

  return {
    slug: brand.slug,
    name: brand.name,
    category: brand.category,
    tagline: brand.tagline || '',
    since: String(brand.since || ''),
    accent: brand.accent || '#F05535',
    locations: brand.locations_label || '',
    description: brand.description || '',
    services: asList(brand.services),
    awards: asList(brand.awards),
    logo: assetUrl(brand.logo),
    image,
    gallery: gallery.length ? gallery : [image].filter(Boolean),
    offerings: asList(brand.offerings),
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
      return [
        slug,
        {
          eyebrow: String(content.eyebrow || page.title || ''),
          title: String(hero.heading || page.title || ''),
          description: String(hero.subheading || ''),
        },
      ];
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
    homepageStats: (collections.homepage_stats || []).map(mapCard),
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
    foodCategories: (collections.food_categories || []).map((item) => ({
      id: String(item.id || slugify(item.name)),
      name: String(item.name || item.title || ''),
      tagline: String(item.tagline || ''),
      description: String(item.description || ''),
      image: assetUrl(String(item.image || '')),
      featured: Boolean(item.featured),
    })),
    restaurants: data.locations.map((item) => ({
      id: String(item.slug || item.id || ''),
      name: String(item.name || ''),
      city: String(item.city || ''),
      area: String(item.area || ''),
      address: String(item.address || ''),
      phone: String(item.phone || ''),
      hours: String(item.hours || ''),
      format: String(item.format || 'Standard') as Restaurant['format'],
      services: asList(item.services),
      image: assetUrl(String(item.image || '')),
      flagship: Boolean(item.is_flagship),
    })),
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
    franchiseProcess: data.franchise.process.map((item, index) => ({
      step: String(item.step || String(index + 1).padStart(2, '0')),
      title: String(item.title || ''),
      description: String(item.description || ''),
    })),
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
    news: data.news.map((item) => ({
      id: String(item.slug || item.id || ''),
      date: String(item.published_at || ''),
      title: String(item.title || ''),
      summary: String(item.summary || item.excerpt || ''),
      category: String(item.category || ''),
      readTime: String(item.read_time || ''),
      image: assetUrl(String(item.image || item.featured_image || '')),
    })),
    jobs: data.jobs.map((item) => ({
      id: String(item.slug || item.id || ''),
      title: String(item.title || ''),
      department: String(item.department || ''),
      location: String(item.location || ''),
      type: String(item.type || ''),
      summary: String(item.summary || ''),
    })),
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

export async function getBrand(slug: string) {
  try {
    const brand = await getJson<ApiBrand>(`/brands/${slug}`);
    return mapBrand(brand);
  } catch {
    return getFallbackBrand(slug);
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

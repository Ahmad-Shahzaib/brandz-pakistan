import type { AwardItem, CoreValue, StatItem, TimelineMilestone } from '@/types';

export const HERO_IMAGE = '/assets/images/hero_fried_chicken_1785741263782.jpg';
export const STOREFRONT_IMAGE = '/assets/images/storefront_signage_1785741282569.jpg';
export const INTERIOR_IMAGE = '/assets/images/store_interior_1785741297229.jpg';
export const AWARD_IMAGE = '/assets/images/award_ceremony_1785741311301.jpg';
export const TEAM_IMAGE = '/assets/images/team_opening_1785741327782.jpg';
export const LOGO_IMAGE = '/assets/images/frichiks_official_logo_1785742193610.jpg';

export const STATS_DATA: StatItem[] = [
  { id: 'years', label: 'Years of experience', value: 20, suffix: '+', subtext: 'Growing since 2002' },
  { id: 'locations', label: 'Locations', value: 45, suffix: '+', subtext: 'Across Pakistan' },
];

export const CORE_VALUES_DATA: CoreValue[] = [
  { id: 'quality', iconName: 'ShieldCheck', title: 'Consistent quality', description: 'Clear standards guide every guest experience.', accentColor: 'coral' },
  { id: 'growth', iconName: 'TrendingUp', title: 'Responsible growth', description: 'We build durable brands and strong partnerships.', accentColor: 'gray' },
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  { id: '2002', year: '2002', title: 'The first kitchen opens', description: 'Fri-Chiks begins its journey in Lahore.', image: HERO_IMAGE, highlightKeyword: 'first kitchen', category: 'Foundation' },
];

export const AWARDS_DATA: AwardItem[] = [
  { id: 'quality-standard', year: '2025', awardName: 'Operational Excellence Citation', organizer: 'Brandz Pakistan', description: 'Recognition for dependable restaurant standards.', category: 'Operations', isFeatured: true },
];

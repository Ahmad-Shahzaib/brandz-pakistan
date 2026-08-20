import { TimelineMilestone, AwardItem, CoreValue, StatItem, CompanyNews } from '../types';

export const HERO_IMAGE = '/assets/images/hero_fried_chicken_1785741263782.jpg';
export const STOREFRONT_IMAGE = '/assets/images/storefront_signage_1785741282569.jpg';
export const INTERIOR_IMAGE = '/assets/images/store_interior_1785741297229.jpg';
export const AWARD_IMAGE = '/assets/images/award_ceremony_1785741311301.jpg';
export const TEAM_IMAGE = '/assets/images/team_opening_1785741327782.jpg';
export const LOGO_IMAGE = '/assets/images/frichiks_official_logo_1785742193610.jpg';

export const STATS_DATA: StatItem[] = [
  {
    id: 'outlets',
    label: 'Active Outlets',
    value: 45,
    suffix: '+',
    subtext: 'Across Lahore & major cities in Pakistan'
  },
  {
    id: 'meals',
    label: 'Meals Served Annually',
    value: 5,
    suffix: 'M+',
    subtext: 'Delighted fried chicken enthusiasts'
  },
  {
    id: 'satisfaction',
    label: 'Franchise Partner Retention',
    value: 100,
    suffix: '%',
    subtext: 'Proven sustainable profitability'
  },
  {
    id: 'awards',
    label: 'Franchise & Quality Awards',
    value: 8,
    suffix: '+',
    subtext: 'Recognized industry leadership'
  }
];

export const CORE_VALUES_DATA: CoreValue[] = [
  {
    id: 'uncompromising-quality',
    iconName: 'ShieldCheck',
    title: 'Uncompromising Taste & Standards',
    description: 'We source only 100% fresh, non-frozen local farm poultry, marinated in our proprietary 12-spice recipe for 24 hours.',
    accentColor: 'coral'
  },
  {
    id: 'franchise-empowerment',
    iconName: 'TrendingUp',
    title: 'Franchise Success First',
    description: 'We prioritize our franchise partners with end-to-end central kitchen supply, staff SOP training, and site selection in high-footfall areas.',
    accentColor: 'charcoal'
  },
  {
    id: '100-halal',
    iconName: 'Award',
    title: '100% Halal & PFA Certified',
    description: 'Strict compliance with Punjab Food Authority (PFA) A+ hygiene standards and SANHA Halal certification across all kitchens.',
    accentColor: 'gray'
  },
  {
    id: 'people-community',
    iconName: 'HeartHandshake',
    title: 'Pakistani Hospitality & Warmth',
    description: 'Bringing families together across Lahore and Pakistan with affordable luxury comfort food, generous portions, and "Something Different!".',
    accentColor: 'coral'
  }
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    id: '2002',
    year: '2002',
    title: 'The Recipe Born in Lahore',
    description: 'First Fri-Chiks ® store opened in Lahore, launching our signature golden crunch chicken and proprietary 12-spice marinade.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80',
    highlightKeyword: 'First Lahore Outlet',
    category: 'Brand Birth'
  },
  {
    id: '2008',
    year: '2008',
    title: 'Expansion Across Gulberg & MM Alam',
    description: 'Established flagship dining locations on MM Alam Road and Model Town Lahore, becoming a household name for fried chicken lovers.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    highlightKeyword: 'Flagship MM Alam',
    category: 'Standards & Growth'
  },
  {
    id: '2015',
    year: '2015',
    title: 'Turnkey Franchise Program',
    description: 'Standardized kitchen SOPs and expanded into Johar Town, DHA Lahore, Faisalabad, and Gujranwala with turnkey franchisee support.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    highlightKeyword: 'Franchise Rollout',
    category: 'Franchising'
  },
  {
    id: '2021',
    year: '2021',
    title: 'Lahore Central Kitchen Facility',
    description: 'Commissioned a state-of-the-art 20,000 sq.ft. centralized food processing and marinade distribution hub in Kot Lakhpat, Lahore.',
    image: INTERIOR_IMAGE,
    highlightKeyword: 'Central Processing Hub',
    category: 'Infrastructure'
  },
  {
    id: '2024',
    year: '2024',
    title: '40+ Outlets Milestone',
    description: 'Milestone 40th outlet celebration in Lahore with modern drive-thru express formats and multi-tier delivery integration.',
    image: STOREFRONT_IMAGE,
    highlightKeyword: '40 Outlets Milestone',
    category: 'Expansion'
  },
  {
    id: '2026',
    year: '2026',
    title: '50+ Nationwide Roadmap',
    description: 'Accelerating growth target of 50+ operational stores nationwide with upgraded digital app ordering and regional supply hubs.',
    image: AWARD_IMAGE,
    highlightKeyword: '50 Stores Vision',
    category: 'Future Vision'
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'award-2025-1',
    year: '2025',
    awardName: 'Best Homegrown QSR Fried Chicken Brand of the Year',
    organizer: 'Pakistan Retail & Franchise Association (PRFA)',
    description: 'Awarded for exceptional store profitability, high customer loyalty, and zero franchisee turnover across Lahore and Punjab.',
    category: 'Franchise Excellence',
    isFeatured: true
  },
  {
    id: 'award-2025-2',
    year: '2025',
    awardName: 'Punjab Food Authority (PFA) A+ Hygiene Excellence',
    organizer: 'Punjab Food Authority (PFA)',
    description: 'Recognized for top-tier food safety standards, kitchen hygiene SOPs, and fresh ingredient sourcing protocols in Lahore.',
    category: 'Food Safety'
  },
  {
    id: 'award-2024-1',
    year: '2024',
    awardName: 'Consumer Choice Most Popular Fried Chicken Chain',
    organizer: 'Lahore Food & Lifestyle Guild',
    description: 'Voted #1 fast-food fried chicken brand by over 100,000 retail consumers across Lahore, Faisalabad, and Islamabad.',
    category: 'Consumer Favorite'
  },
  {
    id: 'award-2024-2',
    year: '2024',
    awardName: '100% Halal Supply Chain Integrity Citation',
    organizer: 'SANHA Pakistan & Halal Certification Council',
    description: 'Honored for 100% strict Halal poultry sourcing and transparent central kitchen logistics.',
    category: 'Halal Integrity'
  },
  {
    id: 'award-2023-1',
    year: '2023',
    awardName: 'Franchise Operational Leadership Award',
    organizer: 'Pakistan QSR Leadership Forum',
    description: 'Recognized for comprehensive franchisee training programs, automated POS suites, and site selection guidance.',
    category: 'Franchise Support'
  },
  {
    id: 'award-2022-1',
    year: '2022',
    awardName: 'Pioneer Fast-Food Innovator Award',
    organizer: 'Lahore Chamber of Commerce & Industry (LCCI)',
    description: 'Acknowledged for pioneering Pakistani quick-service restaurant standards with the iconic "Something Different!" tagline.',
    category: 'Brand Innovation'
  }
];

export const COMPANY_NEWS: CompanyNews[] = [
  {
    id: 'news-1',
    date: 'August 01, 2026',
    title: 'Fri-Chiks ® Unveils Lahore Expansion & Target of 50 Nationwide Outlets by 2027',
    summary: 'Building on 45 successful locations in Lahore and Punjab, Fri-Chiks ® announces an expanded franchise roadmap backed by its central processing facility.',
    category: 'Franchise Growth',
    readTime: '4 min read',
    image: STOREFRONT_IMAGE
  },
  {
    id: 'news-2',
    date: 'June 14, 2026',
    title: 'Fri-Chiks ® Wins Best Homegrown QSR Brand at Pakistan Franchise Awards in Lahore',
    summary: 'The brand was honored at the annual Lahore ceremony for outstanding franchisee profitability, customer choice, and standardized kitchen SOPs.',
    category: 'Awards',
    readTime: '3 min read',
    image: AWARD_IMAGE
  },
  {
    id: 'news-3',
    date: 'March 20, 2026',
    title: 'Lahore Central Kitchen Hub Achieves PFA A+ Grade Recertification',
    summary: 'Our state-of-the-art central kitchen facility in Kot Lakhpat achieved top audit scores from the Punjab Food Authority.',
    category: 'Food Safety',
    readTime: '5 min read',
    image: INTERIOR_IMAGE
  }
];

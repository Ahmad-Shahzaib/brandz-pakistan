export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
  highlightKeyword: string;
  category: string;
}

export interface AwardItem {
  id: string;
  year: string;
  awardName: string;
  organizer: string;
  description: string;
  category: string;
  isFeatured?: boolean;
}

export interface CoreValue {
  id: string;
  iconName: string;
  title: string;
  description: string;
  accentColor: 'coral' | 'gray' | 'charcoal';
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  subtext: string;
}

export interface CompanyNews {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  image: string;
}

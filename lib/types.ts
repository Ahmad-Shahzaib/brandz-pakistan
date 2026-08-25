export type Brand = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  since: string;
  accent: string;
  locations: string;
  description: string;
  services: string[];
  awards: string[];
  logo: string;
  image: string;
  gallery: string[];
  offerings: string[];
};

export interface FoodCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface FranchiseModel {
  id: string;
  name: string;
  area: string;
  bestFor: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export interface InvestmentItem {
  label: string;
  value: string;
  note?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FranchiseFAQ {
  q: string;
  a: string;
}

export interface SupportPillar {
  title: string;
  description: string;
  points: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  city: string;
  area: string;
  address: string;
  phone: string;
  hours: string;
  format: 'Dine-in' | 'Express' | 'Delivery' | 'Drive-Thru' | 'Standard' | string;
  services: string[];
  image: string;
  flagship?: boolean;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface InquiryType {
  id: string;
  label: string;
  description: string;
}

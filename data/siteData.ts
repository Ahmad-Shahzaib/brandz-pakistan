import type { FranchiseFAQ, FranchiseModel, InquiryType, InvestmentItem, LeadershipMember, ProcessStep, Restaurant, SupportPillar } from '@/lib/types';
import { INTERIOR_IMAGE, STOREFRONT_IMAGE, TEAM_IMAGE } from './corporateData';

export const FRANCHISE_MODELS: FranchiseModel[] = [
  { id: 'standard', name: 'Standard Restaurant', area: '1,800 - 3,000 sq.ft.', bestFor: 'High-street and commercial hubs', description: 'A full dine-in restaurant with takeaway and delivery operations.', features: ['Dine-in seating', 'Takeaway counter', 'Delivery operations'], featured: true },
  { id: 'express', name: 'Express Outlet', area: '600 - 1,200 sq.ft.', bestFor: 'Malls and food courts', description: 'A compact format designed for quick service and high footfall.', features: ['Compact footprint', 'Core menu', 'Fast throughput'] },
];

export const INVESTMENT_OVERVIEW: InvestmentItem[] = [
  { label: 'Total Investment Range', value: 'Contact Franchise Team', note: 'Varies by format and location' },
  { label: 'Restaurant Area', value: '400 - 4,000 sq.ft.', note: 'Depends on format' },
  { label: 'Setup Period', value: '8 - 16 weeks', note: 'Site-dependent' },
];

export const FRANCHISE_PROCESS: ProcessStep[] = [
  { step: '01', title: 'Submit Application', description: 'Complete the online franchise application.' },
  { step: '02', title: 'Initial Screening', description: 'Our team reviews your background and target market.' },
  { step: '03', title: 'Site Selection', description: 'We help evaluate a high-potential location.' },
  { step: '04', title: 'Launch', description: 'Design, training and opening support take you live.' },
];

export const FRANCHISE_FAQS: FranchiseFAQ[] = [
  { q: 'How much space do I need?', a: 'It depends on the format, from a compact delivery model to a full restaurant.' },
  { q: 'How much investment is required?', a: 'Investment varies by format, location and property condition. Contact the franchise team for verified figures.' },
];

export const SUPPORT_PILLARS: SupportPillar[] = [
  { title: 'Training and Operations', description: 'Built on systems, delivered by people.', points: ['Kitchen SOPs', 'Food safety', 'Customer service', 'Opening support'] },
  { title: 'Supply Chain', description: 'Consistent ingredients, every outlet.', points: ['Approved vendors', 'Central procurement', 'Inventory planning', 'Distribution'] },
];

export const RESTAURANTS: Restaurant[] = [
  { id: 'mm-alam', name: 'Fri-Chiks MM Alam Flagship', city: 'Lahore', area: 'Gulberg III', address: 'MM Alam Road, Gulberg III, Lahore', phone: '+92 42 111 374 244', hours: '11:00 AM - 2:00 AM', format: 'Standard', services: ['Dine-In', 'Takeaway', 'Delivery'], image: STOREFRONT_IMAGE, flagship: true },
  { id: 'johar-town', name: 'Fri-Chiks Johar Town', city: 'Lahore', area: 'Johar Town', address: 'Maulana Shaukat Ali Road, Lahore', phone: '+92 42 111 374 244', hours: '11:00 AM - 1:00 AM', format: 'Standard', services: ['Dine-In', 'Takeaway', 'Delivery'], image: INTERIOR_IMAGE },
];

export const LEADERSHIP: LeadershipMember[] = [
  { id: 'founder', name: 'Muhammad Yousaf', role: 'Founder and Chairman', bio: 'Leads the brand vision for quality and expansion.', image: TEAM_IMAGE },
  { id: 'ceo', name: 'Ahmad Raza', role: 'Chief Executive Officer', bio: 'Drives corporate strategy and franchise growth.', image: STOREFRONT_IMAGE },
];

export const JOBS = [
  { id: 'restaurant-manager', title: 'Restaurant Manager', department: 'Operations', location: 'Lahore', type: 'Full-time', summary: 'Lead daily operations and customer experience.' },
  { id: 'marketing-executive', title: 'Marketing Executive', department: 'Marketing', location: 'Lahore (HQ)', type: 'Full-time', summary: 'Plan campaigns and outlet launch activations.' },
];

export const INQUIRY_TYPES: InquiryType[] = [
  { id: 'general', label: 'General Inquiry', description: 'Questions about the company or brand.' },
  { id: 'franchise', label: 'Franchise Inquiry', description: 'Explore opening a Fri-Chiks.' },
  { id: 'property', label: 'Property Proposal', description: 'Offer a site or location.' },
  { id: 'supplier', label: 'Supplier Inquiry', description: 'Become an approved vendor.' },
];


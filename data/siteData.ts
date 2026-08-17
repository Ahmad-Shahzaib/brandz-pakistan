import {
  HERO_IMAGE,
  STOREFRONT_IMAGE,
  INTERIOR_IMAGE,
  AWARD_IMAGE,
  TEAM_IMAGE,
} from './corporateData';

/* ------------------------------------------------------------------ */
/* FOOD                                                                */
/* ------------------------------------------------------------------ */
export interface FoodCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const FOOD_CATEGORIES: FoodCategory[] = [
  {
    id: 'fried-chicken',
    name: 'Signature Fried Chicken',
    tagline: 'The golden crunch that started it all',
    description:
      'Fresh farm poultry marinated 24 hours in our secret 12-spice blend, double-dredged and fried to a shattering golden crust.',
    image: HERO_IMAGE,
    featured: true,
  },
  {
    id: 'chicken-burgers',
    name: 'Chicken Burgers',
    tagline: 'Crispy fillets, soft buns',
    description:
      'Hand-breaded chicken fillets stacked with fresh vegetables and house sauces on toasted brioche buns.',
    image: STOREFRONT_IMAGE,
  },
  {
    id: 'broast',
    name: 'Broast',
    tagline: 'Pressure-fried perfection',
    description:
      'Juicy pressure-cooked and fried chicken broast served with signature garlic sauce and warm bread.',
    image: INTERIOR_IMAGE,
  },
  {
    id: 'family-meals',
    name: 'Family Meals',
    tagline: 'Made for the table',
    description:
      'Generous sharing buckets and combo platters designed to bring families together at every outlet.',
    image: TEAM_IMAGE,
  },
  {
    id: 'wraps',
    name: 'Wraps & Rolls',
    tagline: 'Flavor on the go',
    description:
      'Spiced grilled and crispy chicken wraps rolled with fresh salad and creamy sauces.',
    image: AWARD_IMAGE,
  },
  {
    id: 'sides',
    name: 'Fries & Sides',
    tagline: 'The perfect pairing',
    description:
      'Seasoned fries, creamy coleslaw, garlic butter rice and fiery sambal dips made in-house daily.',
    image: STOREFRONT_IMAGE,
  },
  {
    id: 'beverages',
    name: 'Beverages',
    tagline: 'Cool it down',
    description:
      'Chilled soft drinks, fresh lemonades and signature mocktails to complement every meal.',
    image: INTERIOR_IMAGE,
  },
];

/* ------------------------------------------------------------------ */
/* FRANCHISE                                                           */
/* ------------------------------------------------------------------ */
export interface FranchiseModel {
  id: string;
  name: string;
  area: string;
  bestFor: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export const FRANCHISE_MODELS: FranchiseModel[] = [
  {
    id: 'standard',
    name: 'Standard Restaurant',
    area: '1,800 – 3,000 sq.ft.',
    bestFor: 'High-street & commercial hubs',
    description:
      'A full dine-in restaurant with dedicated seating, takeaway counter and delivery operations serving the complete menu.',
    features: ['Dine-in seating', 'Takeaway counter', 'Delivery operations', 'Full menu'],
    featured: true,
  },
  {
    id: 'express',
    name: 'Express Outlet',
    area: '600 – 1,200 sq.ft.',
    bestFor: 'Malls & food courts',
    description:
      'A compact, high-footfall format optimised for quick service in shopping centres and food courts.',
    features: ['Compact footprint', 'Food-court ready', 'Core menu', 'Fast throughput'],
  },
  {
    id: 'takeaway',
    name: 'Takeaway / Delivery',
    area: '400 – 800 sq.ft.',
    bestFor: 'Dense city neighbourhoods',
    description:
      'A lean kitchen model built for delivery platforms and takeaway in dense residential catchments.',
    features: ['Delivery-first', 'Low setup cost', 'Platform integrations', 'Minimal staff'],
  },
  {
    id: 'drive-thru',
    name: 'Drive-Thru',
    area: '2,500 – 4,000 sq.ft.',
    bestFor: 'Highways & standalone plots',
    description:
      'A standalone destination format with drive-thru lane designed for highways and commercial arteries.',
    features: ['Drive-thru lane', 'Standalone plot', 'Ample parking', 'Extended hours'],
  },
  {
    id: 'multi-unit',
    name: 'Multi-Unit Franchise',
    area: 'Varies by territory',
    bestFor: 'Experienced business groups',
    description:
      'A development agreement to open and operate several Fri-Chiks ® outlets across an agreed area.',
    features: ['Multiple outlets', 'Development schedule', 'Priority territory', 'Volume support'],
  },
  {
    id: 'master',
    name: 'Master / Regional',
    area: 'Regional / national',
    bestFor: 'Large investors & partners',
    description:
      'Territory rights to develop and sub-franchise Fri-Chiks ® across a region — availability subject to review.',
    features: ['Territory rights', 'Sub-franchising', 'Regional exclusivity', 'Corporate partnership'],
  },
];

export interface InvestmentItem {
  label: string;
  value: string;
  note?: string;
}

export const INVESTMENT_OVERVIEW: InvestmentItem[] = [
  { label: 'Total Investment Range', value: 'Contact Franchise Team', note: 'Varies by format & location' },
  { label: 'Franchise Fee', value: 'Contact Franchise Team' },
  { label: 'Restaurant Area', value: '400 – 4,000 sq.ft.', note: 'Depends on format' },
  { label: 'Setup Period', value: '8 – 16 weeks', note: 'Site-dependent' },
  { label: 'Agreement Term', value: '5 – 10 Years', note: 'Renewable' },
  { label: 'Working Capital', value: 'Contact Franchise Team' },
  { label: 'Royalty Structure', value: 'Competitive', note: 'Disclosed on application' },
  { label: 'Territory Availability', value: 'Selected Cities Open' },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const FRANCHISE_PROCESS: ProcessStep[] = [
  { step: '01', title: 'Submit Application', description: 'Complete the online franchise application with your profile and preferences.' },
  { step: '02', title: 'Initial Screening', description: 'Our team reviews your background, capability and target market fit.' },
  { step: '03', title: 'Business Discussion', description: 'A discovery call to align on expectations, model and territory.' },
  { step: '04', title: 'Financial Evaluation', description: 'Confirmation of investment capability and funding structure.' },
  { step: '05', title: 'Market & Territory Review', description: 'Assessment of demand, competition and catchment in your area.' },
  { step: '06', title: 'Site Selection', description: 'Guidance on identifying and evaluating a high-potential location.' },
  { step: '07', title: 'Agreement', description: 'Signing of the franchise agreement and onboarding paperwork.' },
  { step: '08', title: 'Design & Construction', description: 'Restaurant layout, interior design, kitchen planning and build-out.' },
  { step: '09', title: 'Recruitment & Training', description: 'Hiring support and comprehensive SOP training for your team.' },
  { step: '10', title: 'Pre-Opening Marketing', description: 'Launch campaign, local activation and grand-opening readiness.' },
  { step: '11', title: 'Grand Opening', description: 'On-ground opening support to ensure a strong start.' },
  { step: '12', title: 'Ongoing Support', description: 'Continuous operations, marketing and performance reviews.' },
];

export interface FranchiseFAQ {
  q: string;
  a: string;
}

export const FRANCHISE_FAQS: FranchiseFAQ[] = [
  { q: 'Why should I invest in Fri-Chiks ®?', a: 'You join an established homegrown brand with a proven menu, standardized operations, central supply and a franchise support team dedicated to helping partners operate consistently.' },
  { q: 'How much space do I need?', a: 'It depends on the format — from around 400 sq.ft. for a delivery model up to 4,000 sq.ft. for a drive-thru. Our team helps you match a format to your site.' },
  { q: 'How much investment is required?', a: 'Investment varies by format, location and property condition. Verified figures are shared with qualified applicants — please contact the franchise team.' },
  { q: 'Which cities are available?', a: 'We are actively expanding across Lahore, Faisalabad, Gujranwala, Islamabad and other major cities. Territory availability is confirmed during review.' },
  { q: 'How long does setup take?', a: 'Typically 8–16 weeks from signed agreement to opening, depending on the site and construction scope.' },
  { q: 'Does Fri-Chiks ® help find locations?', a: 'Yes. We provide site-selection criteria and evaluation support, and property owners can also submit sites through our portal.' },
  { q: 'Who trains the staff?', a: 'Fri-Chiks ® delivers structured SOP training covering kitchen operations, food safety, service and POS, plus opening support.' },
  { q: 'Who supplies the ingredients?', a: 'Approved ingredients and key items are supplied through our central procurement and distribution system for consistency and quality.' },
  { q: 'What support happens after opening?', a: 'Ongoing operational guidance, marketing campaigns, supply chain support and periodic performance reviews.' },
  { q: 'Can I own multiple locations?', a: 'Yes. Experienced partners can pursue multi-unit development agreements, and larger investors may explore master/regional rights where available.' },
];

export interface SupportPillar {
  title: string;
  description: string;
  points: string[];
}

export const SUPPORT_PILLARS: SupportPillar[] = [
  {
    title: 'Training & Operations',
    description: 'Built on systems, delivered by people.',
    points: ['Owner orientation', 'Kitchen & food prep SOPs', 'Food safety & hygiene', 'Customer service', 'POS & inventory', 'Opening support'],
  },
  {
    title: 'Supply Chain',
    description: 'Consistent ingredients, every outlet.',
    points: ['Approved vendors', 'Central procurement', 'Packaging standards', 'Inventory planning', 'Distribution', 'Cost control'],
  },
  {
    title: 'Marketing Support',
    description: 'National reach, local activation.',
    points: ['National campaigns', 'Social media', 'Brand guidelines', 'Opening campaigns', 'Seasonal promotions', 'Delivery platform marketing'],
  },
  {
    title: 'Technology & Systems',
    description: 'A modern restaurant operation.',
    points: ['POS suite', 'Inventory management', 'Order management', 'Delivery integrations', 'Sales reporting', 'Performance monitoring'],
  },
];

/* ------------------------------------------------------------------ */
/* RESTAURANTS / LOCATIONS                                             */
/* ------------------------------------------------------------------ */
export interface Restaurant {
  id: string;
  name: string;
  city: string;
  area: string;
  address: string;
  phone: string;
  hours: string;
  format: 'Standard' | 'Express' | 'Drive-Thru' | 'Takeaway';
  services: string[];
  image: string;
  flagship?: boolean;
}

export const RESTAURANTS: Restaurant[] = [
  { id: 'mm-alam', name: 'Fri-Chiks ® MM Alam Flagship', city: 'Lahore', area: 'Gulberg III', address: 'MM Alam Road, Gulberg III, Lahore', phone: '+92 42 111 374 244', hours: '11:00 AM – 2:00 AM', format: 'Standard', services: ['Dine-In', 'Takeaway', 'Delivery'], image: STOREFRONT_IMAGE, flagship: true },
  { id: 'johar-town', name: 'Fri-Chiks ® Johar Town', city: 'Lahore', area: 'Johar Town', address: 'Maulana Shaukat Ali Road, Johar Town, Lahore', phone: '+92 42 111 374 244', hours: '11:00 AM – 1:00 AM', format: 'Standard', services: ['Dine-In', 'Takeaway', 'Delivery'], image: INTERIOR_IMAGE },
  { id: 'dha-phase5', name: 'Fri-Chiks ® DHA Phase 5', city: 'Lahore', area: 'DHA', address: 'Phase 5 Commercial, DHA, Lahore', phone: '+92 42 111 374 244', hours: '12:00 PM – 1:00 AM', format: 'Express', services: ['Takeaway', 'Delivery'], image: STOREFRONT_IMAGE },
  { id: 'model-town', name: 'Fri-Chiks ® Model Town', city: 'Lahore', area: 'Model Town', address: 'Model Town Link Road, Lahore', phone: '+92 42 111 374 244', hours: '11:00 AM – 12:00 AM', format: 'Standard', services: ['Dine-In', 'Takeaway', 'Delivery'], image: INTERIOR_IMAGE },
  { id: 'faisalabad-dground', name: 'Fri-Chiks ® D-Ground', city: 'Faisalabad', area: 'D Ground', address: 'People\'s Colony, D Ground, Faisalabad', phone: '+92 41 111 374 244', hours: '11:00 AM – 12:00 AM', format: 'Standard', services: ['Dine-In', 'Takeaway', 'Delivery'], image: STOREFRONT_IMAGE },
  { id: 'gujranwala-gt', name: 'Fri-Chiks ® GT Road', city: 'Gujranwala', area: 'GT Road', address: 'GT Road, Gujranwala', phone: '+92 55 111 374 244', hours: '11:00 AM – 12:00 AM', format: 'Drive-Thru', services: ['Drive-Thru', 'Takeaway', 'Delivery'], image: INTERIOR_IMAGE },
  { id: 'islamabad-f7', name: 'Fri-Chiks ® F-7 Markaz', city: 'Islamabad', area: 'F-7', address: 'F-7 Markaz, Islamabad', phone: '+92 51 111 374 244', hours: '12:00 PM – 1:00 AM', format: 'Standard', services: ['Dine-In', 'Takeaway', 'Delivery'], image: STOREFRONT_IMAGE },
  { id: 'islamabad-blue', name: 'Fri-Chiks ® Blue Area', city: 'Islamabad', area: 'Blue Area', address: 'Jinnah Avenue, Blue Area, Islamabad', phone: '+92 51 111 374 244', hours: '11:00 AM – 12:00 AM', format: 'Express', services: ['Takeaway', 'Delivery'], image: INTERIOR_IMAGE },
];

/* ------------------------------------------------------------------ */
/* LEADERSHIP                                                          */
/* ------------------------------------------------------------------ */
export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const LEADERSHIP: LeadershipMember[] = [
  { id: 'founder', name: 'Muhammad Yousaf', role: 'Founder & Chairman', bio: 'Opened the first Fri-Chiks ® kitchen in Lahore in 2002 and has led the brand\'s vision for quality and expansion ever since.', image: TEAM_IMAGE },
  { id: 'ceo', name: 'Ahmad Raza', role: 'Chief Executive Officer', bio: 'Drives corporate strategy, operational excellence and the national franchise growth roadmap.', image: STOREFRONT_IMAGE },
  { id: 'coo', name: 'Sana Khalid', role: 'Chief Operating Officer', bio: 'Oversees restaurant operations, central kitchen logistics and quality standards across the network.', image: INTERIOR_IMAGE },
  { id: 'franchise-dir', name: 'Bilal Ahmed', role: 'Director, Franchise Development', bio: 'Leads partner onboarding, territory planning and end-to-end franchise support.', image: AWARD_IMAGE },
];

/* ------------------------------------------------------------------ */
/* CAREERS                                                             */
/* ------------------------------------------------------------------ */
export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
}

export const JOBS: Job[] = [
  { id: 'restaurant-manager-lhr', title: 'Restaurant Manager', department: 'Operations', location: 'Lahore', type: 'Full-time', summary: 'Lead daily operations, team performance and customer experience at a flagship outlet.' },
  { id: 'kitchen-supervisor-fsd', title: 'Kitchen Supervisor', department: 'Kitchen', location: 'Faisalabad', type: 'Full-time', summary: 'Supervise food preparation, quality and hygiene to Fri-Chiks ® standards.' },
  { id: 'marketing-exec', title: 'Marketing Executive', department: 'Marketing', location: 'Lahore (HQ)', type: 'Full-time', summary: 'Plan and execute brand campaigns, social media and outlet launch activations.' },
  { id: 'supply-chain-analyst', title: 'Supply Chain Analyst', department: 'Supply Chain', location: 'Lahore (HQ)', type: 'Full-time', summary: 'Optimise procurement, inventory planning and distribution across the network.' },
  { id: 'franchise-coordinator', title: 'Franchise Support Coordinator', department: 'Franchise', location: 'Lahore (HQ)', type: 'Full-time', summary: 'Support franchise partners through onboarding, training and ongoing operations.' },
  { id: 'crew-member-isb', title: 'Restaurant Crew Member', department: 'Operations', location: 'Islamabad', type: 'Full-time / Part-time', summary: 'Deliver friendly, fast service at the counter, kitchen and dining floor.' },
];

/* ------------------------------------------------------------------ */
/* CONTACT INQUIRY TYPES                                               */
/* ------------------------------------------------------------------ */
export interface InquiryType {
  id: string;
  label: string;
  description: string;
}

export const INQUIRY_TYPES: InquiryType[] = [
  { id: 'general', label: 'General Inquiry', description: 'Questions about the company or brand.' },
  { id: 'franchise', label: 'Franchise Inquiry', description: 'Explore opening a Fri-Chiks ®.' },
  { id: 'feedback', label: 'Restaurant Feedback', description: 'Share your dining experience.' },
  { id: 'partnership', label: 'Corporate Partnership', description: 'Collaborations & sponsorships.' },
  { id: 'property', label: 'Property Proposal', description: 'Offer a site or location.' },
  { id: 'supplier', label: 'Supplier Inquiry', description: 'Become an approved vendor.' },
  { id: 'media', label: 'Media Inquiry', description: 'Press & communications.' },
  { id: 'careers', label: 'Careers', description: 'Jobs & recruitment.' },
];

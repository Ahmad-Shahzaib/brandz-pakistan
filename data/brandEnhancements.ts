export interface BrandEnhancement {
  slug: string;
  tagline?: string;
  since?: string;
  accent?: string;
  heroImage?: string;
  diningImage?: string;
  storyHeading?: string;
  storyBody?: string;
  menuHeading?: string;
  menuSubheading?: string;
  detailedOfferings?: {
    name: string;
    tag: string;
    description: string;
    image: string;
  }[];
  services?: string[];
  awards?: string[];
}

export const BRAND_ENHANCEMENTS: Record<string, BrandEnhancement> = {
  'fri-chiks': {
    slug: 'fri-chiks',
    tagline: 'Crispy. Juicy. Something Different.',
    since: '2002',
    accent: '#E31B23',
    heroImage: '/assets/images/hero_fried_chicken_1785741263782.jpg',
    diningImage: '/assets/images/store_interior_1785741297229.jpg',
    storyHeading: 'Pakistan’s Homegrown Crispy Chicken Pioneer',
    storyBody:
      'Since 2002, Fri-Chiks has perfected its signature pressure-fried crispy chicken using proprietary marination and custom spice blends tailored to Pakistani palates. Across 45+ outlets nationwide, our high-volume kitchens combine automated frying systems with strict food safety protocols.',
    menuHeading: 'Signature Kitchen Favorites',
    menuSubheading: 'Golden, crispy, pressure-cooked perfection seasoned with our proprietary spice blend.',
    detailedOfferings: [
      {
        name: 'Golden Crispy Broast',
        tag: 'Original Recipe',
        description: 'Fresh, never-frozen chicken steeped in a 12-spice marinade and pressure-fried to a golden crunch.',
        image: '/assets/images/hero_fried_chicken_1785741263782.jpg',
      },
      {
        name: 'The Big Chiks Fillet Burger',
        tag: 'Bestseller',
        description: 'Whole crispy breast fillet topped with hand-shredded iceberg lettuce and house garlic mayonnaise on a toasted brioche bun.',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Zesty Wings & Seasoned Wedges',
        tag: 'Snack & Share',
        description: 'Crispy fried wings tossed in tangy glaze, paired with thick-cut skin-on potato wedges.',
        image: 'https://images.unsplash.com/photo-1527477378408-1bc0a4864f1c?auto=format&fit=crop&w=800&q=80',
      },
    ],
    services: [
      'High-Volume Dine-In & Drive-Thru',
      'Centralized Temperature-Controlled Delivery',
      'Turnkey Franchise SOPs & Kitchen Audits',
      'Corporate Catering & Event Food Trucks',
    ],
    awards: [
      'Fast Food Brand of the Year — Pakistan Consumer Choice Awards',
      'Halal Quality Assurance Certified (HACCP Compliant)',
      'Operational Excellence Citation 2024',
    ],
  },

  'timmys': {
    slug: 'timmys',
    tagline: 'Smash Burgers & Handcrafted Shakes',
    since: '2014',
    accent: '#D97706',
    heroImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=85',
    diningImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85',
    storyHeading: 'The Modern Gourmet Burger Movement',
    storyBody:
      'Timmy’s reimagined fast-casual dining in Pakistan by introducing griddled smash beef patties, artisan potato buns, and thick custard shakes. With industrial-modern restaurant spaces and high-efficiency double clamshell griddles, Timmy’s delivers speed without cutting culinary corners.',
    menuHeading: 'Crafted on the Flat-Top',
    menuSubheading: 'Freshly smashed Angus beef patties, melted sharp cheddar, and handcrafted shakes.',
    detailedOfferings: [
      {
        name: 'Double Bacon Smash Burger',
        tag: 'House Special',
        description: 'Two smashed patties with caramelized lacy edges, melted sharp cheddar, smoked beef bacon, and secret Timmy sauce.',
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Loaded Curly Fries',
        tag: 'Signature Side',
        description: 'Crispy spiral potatoes showered with warm jalapeño cheese sauce, crispy beef bits, and diced green chillies.',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Artisan Salted Caramel Shake',
        tag: 'Hand-Spun',
        description: 'Rich premium dairy soft serve blended with sea-salt caramel sauce and topped with whipped cream.',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
      },
    ],
    services: [
      'Fast-Casual Express Dining & Curbside Pickup',
      'Direct-to-Consumer Smartphone App Ordering',
      'Dedicated Fry & Shake Station Ergonomics',
      'Youth & College Campus Franchise Units',
    ],
    awards: [
      'Best Gourmet Burger Concept — Lahore Food Festival',
      'Emerging Brand of Excellence Citation',
      'Top Rated Delivery Brand on FoodPanda',
    ],
  },

  'shamana': {
    slug: 'shamana',
    tagline: 'Timeless Flavors of Royal Pakistani Heritage',
    since: '2009',
    accent: '#8B551D',
    heroImage: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=1200&q=85',
    diningImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85',
    storyHeading: 'Celebrated Desi Cuisine in an Elegant Atmosphere',
    storyBody:
      'Shamana Restaurant honors centuries of subcontinental culinary heritage. From slow-simmered Shinwari mutton karahis cooked in pure fat to clay tandoor roghni naans and fragrant saffron biryanis, Shamana bridges rich tradition with contemporary family dining standards.',
    menuHeading: 'Masterpieces of the Clay Oven & Dastarkhwan',
    menuSubheading: 'Authentic coal-fired grills, slow-cooked gravies, and aromatic saffron-scented rice.',
    detailedOfferings: [
      {
        name: 'Peshawari Charsi Mutton Karahi',
        tag: 'Chef’s Masterpiece',
        description: 'Prime mutton cuts simmered live in a heavy wok with ripe tomatoes, black pepper, and whole green chillies.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Dum Pukht Saffron Biryani',
        tag: 'Royal Heritage',
        description: 'Long-grain basmati layered with tender spiced meat and sealed with dough under low coals to infuse aroma.',
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Reshmi Malai Boti Platter',
        tag: 'Charcoal Grill',
        description: 'Boneless chicken cubes marinated in green cardamom, clotted cream, and mild green herbs roasted over live coals.',
        image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
      },
    ],
    services: [
      'Spacious Family Banquet & Executive Dining Rooms',
      'Live Charcoal BBQ & Tawa Stations for Events',
      'Pre-Booked Dawat & Bulk Catering Operations',
      'Spill-Proof Heat-Retaining Home Delivery Packaging',
    ],
    awards: [
      'Excellence in Traditional Pakistani Hospitality',
      'Consumer Heritage Dining Award',
      'Certified Halal & Hygiene Standard Grade-A',
    ],
  },

  'whata-pizza': {
    slug: 'whata-pizza',
    tagline: 'Loaded Crusts. Bold Toppings. Serious Slices.',
    since: '2018',
    accent: '#C2410C',
    heroImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=85',
    diningImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85',
    storyHeading: 'Artisan Crust Meets High-Velocity Baking',
    storyBody:
      'Whata Pizza is built on a 48-hour cold-fermented dough that produces an airy, blistered crust topped with whole-milk mozzarella and vibrant plum tomato marinara. Specially engineered conveyor stone ovens ensure each pie bakes evenly in under six minutes.',
    menuHeading: 'Oven-Fired Slices & Calzones',
    menuSubheading: 'Slow-fermented dough, house marinara, and Wisconsin mozzarella baked to bubbling perfection.',
    detailedOfferings: [
      {
        name: 'The Crown Stuffed Crust Pizza',
        tag: 'Flagship Pie',
        description: 'Hand-tossed crust ring filled with garlic cream cheese and smoky kabab bites, topped with pepperoni and bell peppers.',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Smoked Chicken & Peri-Peri Pie',
        tag: 'Local Favorite',
        description: 'Chargrilled chicken strips, pickled red onions, jalapeños, and a fiery peri-peri drizzle over melted mozzarella.',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Creamy Four-Cheese Baked Penne',
        tag: 'Pasta Special',
        description: 'Penne tossed in Alfredo garlic cream sauce, topped with mozzarella, parmesan, and cheddar baked golden brown.',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
      },
    ],
    services: [
      'Fast-Casual Slice Bars & Mall Outlets',
      'Heat-Insulated Guaranteed 30-Min Delivery Fleet',
      'Custom Pizza Catering for Corporate Lunches',
      'Automated Inventory & Temperature-Monitored Proofing',
    ],
    awards: [
      'Best New Pizza Concept — Pakistan Hospitality Awards',
      'Food Innovation & Rapid Service Citation',
      'Hygiene & Cold-Chain Compliance Grade-A',
    ],
  },
};

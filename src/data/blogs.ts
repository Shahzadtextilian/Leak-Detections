import { APP_IMAGES } from './images';

export interface BlogPost {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDesc: string;
  excerpt: string;
  badge: string;
  readTime: string;
  publishDate: string;
  updateDate: string;
  author: string;
  featuredImage: string;
  imageAlt: string;
  targetKeywords: string[];
  canonicalUrl: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'guide-to-leak-detection-and-repair',
    title: 'The Complete Guide to Leak Detection and Leak Repair in City Heights, San Diego',
    shortTitle: 'Leak Detection & Leak Repair Guide',
    metaTitle: 'Leak Detection & Leak Repair Guide | City Heights, San Diego CA',
    metaDesc: 'Complete leak detection & repair guide for City Heights (92105). Learn how acoustic sensors, thermal imaging & slab repairs work. Call (619) 910-9411.',
    excerpt: 'Comprehensive local guide covering non-invasive acoustic ground sensors, thermal FLIR imaging, hidden pinhole pipe leaks, and cost-effective repair solutions for San Diego property owners.',
    badge: 'Homeowner Diagnostic Guide',
    readTime: '6 min read',
    publishDate: '2026-10-01',
    updateDate: '2026-10-03',
    author: 'City Heights Leak Detection Editorial Team',
    featuredImage: APP_IMAGES.heroWaterLeak,
    imageAlt: 'Licensed technician performing acoustic leak detection on a concrete slab in City Heights San Diego',
    targetKeywords: [
      'leak detection',
      'leak repair',
      'City Heights leak detection',
      'non-invasive leak detection',
      'slab leak repair San Diego'
    ],
    canonicalUrl: 'https://www.cityheightsleakdetectionpro.com/blog/'
  },
  {
    slug: 'underground-slab-water-leak-detection-guide',
    title: 'Underground Water & Slab Leak Detection: How Plumbers Pinpoint Hidden Pipe Leaks Without Jackhammers',
    shortTitle: 'Underground & Slab Leak Detection Deep Dive',
    metaTitle: 'Underground Water & Slab Leak Detection Guide | San Diego CA',
    metaDesc: 'Discover how professional underground water leak detection and non-invasive slab leak locating pinpoint hidden copper pipe leaks in San Diego. Call (619) 910-9411.',
    excerpt: 'An in-depth technical walkthrough of acoustic listening discs, infrared thermal imaging, tracer helium testing, and line pressure decay testing used to locate sub-slab leaks without tearing apart your foundation.',
    badge: 'Advanced Diagnostic Deep Dive',
    readTime: '8 min read',
    publishDate: '2026-10-12',
    updateDate: '2026-10-12',
    author: 'Master Diagnostic Plumbing Advisory Group',
    featuredImage: APP_IMAGES.thermalImaging,
    imageAlt: 'Infrared FLIR thermal imaging camera identifying hidden sub-slab water leak temperature differentials under concrete floor',
    targetKeywords: [
      'water leak detection',
      'slab leak detection',
      'underground water leak detection',
      'hidden water leak detection',
      'electronic leak detection',
      'acoustic leak detection',
      'thermal imaging leak detection',
      'emergency leak detection',
      'residential leak detection',
      'commercial leak detection',
      'leak detection San Diego',
      'leak detection City Heights 92105',
      'water leak repair'
    ],
    canonicalUrl: 'https://www.cityheightsleakdetectionpro.com/blog/'
  },
  {
    slug: 'leak-detection-cost-and-insurance-guide',
    title: 'How Much Does Leak Detection Cost in 2026? Pricing, Insurance Coverage & Non-Invasive Methods Explained',
    shortTitle: '2026 Leak Detection Cost & Insurance Guide',
    metaTitle: 'How Much Does Leak Detection Cost? 2026 Price & Insurance Guide',
    metaDesc: 'Discover 2026 leak detection costs in San Diego. Compare slab, water line & gas testing prices, learn if insurance covers detection, and avoid excavation. Call (619) 910-9411.',
    excerpt: 'A comprehensive 2026 cost guide breakdown for homeowners: average pricing for electronic slab leak locating, main line detection, insurance coverage rules (tear-out vs repairs), and how non-invasive diagnostics save thousands in repair bills.',
    badge: '2026 Cost & Insurance Authority Guide',
    readTime: '9 min read',
    publishDate: '2026-10-19',
    updateDate: '2026-10-19',
    author: 'San Diego Master Diagnostic Advisory Group',
    featuredImage: APP_IMAGES.plumberInspection,
    imageAlt: 'Licensed professional plumbing contractor conducting line pressure testing and electronic leak detection in San Diego',
    targetKeywords: [
      'leak detection cost',
      'how much does leak detection cost',
      'slab leak detection cost',
      'water leak detection cost',
      'does insurance cover leak detection',
      'emergency leak detection',
      'hidden water leak detection',
      'underground leak detection cost',
      'leak detection San Diego',
      'electronic leak detection',
      'leak repair cost',
      'non-invasive leak detection',
      'gas leak detection cost',
      'leak detection City Heights 92105'
    ],
    canonicalUrl: 'https://www.cityheightsleakdetectionpro.com/blog/'
  }
];


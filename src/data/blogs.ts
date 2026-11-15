import { APP_IMAGES } from './images';
import { Page } from '../types';

export interface BlogPost {
  slug: string;
  routePage: Page;
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
    routePage: 'leak-detection-and-repair-guide',
    title: 'The Complete Guide to Leak Detection and Leak Repair in City Heights, San Diego',
    shortTitle: 'Leak Detection & Leak Repair Guide',
    metaTitle: 'Leak Detection & Repair Guide | City Heights, San Diego',
    metaDesc: 'Complete leak detection & repair guide for City Heights (92105). Learn how acoustic sensors, thermal imaging & slab repairs work. Call (619) 910-9411.',
    excerpt: 'Comprehensive local guide covering non-invasive acoustic ground sensors, thermal FLIR imaging, hidden pinhole pipe leaks, and cost-effective repair solutions for San Diego property owners.',
    badge: 'Homeowner Diagnostic Guide',
    readTime: '6 min read',
    publishDate: '2026-10-01',
    updateDate: '2026-11-15',
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
    canonicalUrl: 'https://www.cityheightsleakdetectionpro.com/leak-detection-and-repair-guide/'
  },
  {
    slug: 'underground-slab-water-leak-detection-guide',
    routePage: 'underground-slab-leak-detection',
    title: 'Underground Water & Slab Leak Detection: How Plumbers Pinpoint Hidden Pipe Leaks Without Jackhammers',
    shortTitle: 'Underground & Slab Leak Detection Deep Dive',
    metaTitle: 'Underground Water & Slab Leak Detection | San Diego CA',
    metaDesc: 'How underground water & slab leak detection pinpoints hidden pipe leaks in San Diego without jackhammers. Non-invasive help: (619) 910-9411.',
    excerpt: 'An in-depth technical walkthrough of acoustic listening discs, infrared thermal imaging, tracer helium testing, and line pressure decay testing used to locate sub-slab leaks without tearing apart your foundation.',
    badge: 'Advanced Diagnostic Deep Dive',
    readTime: '8 min read',
    publishDate: '2026-10-12',
    updateDate: '2026-11-15',
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
      'leak detection San Diego',
      'leak detection City Heights 92105'
    ],
    canonicalUrl: 'https://www.cityheightsleakdetectionpro.com/underground-slab-leak-detection/'
  },
  {
    slug: 'leak-detection-cost-and-insurance-guide',
    routePage: 'blog',
    title: 'How Much Does Leak Detection Cost in 2026? Pricing, Insurance Coverage & Non-Invasive Methods Explained',
    shortTitle: '2026 Leak Detection Cost & Insurance Guide',
    metaTitle: 'Leak Detection Cost in San Diego (2026 Price Guide)',
    metaDesc: 'How much does leak detection cost in San Diego? See 2026 price ranges, cost factors, and whether insurance covers slab leak locating.',
    excerpt: 'A comprehensive 2026 cost guide breakdown for homeowners: average pricing for electronic slab leak locating, main line detection, insurance coverage rules (tear-out vs repairs), and how non-invasive diagnostics save thousands in repair bills.',
    badge: '2026 Cost & Insurance Authority Guide',
    readTime: '9 min read',
    publishDate: '2026-10-19',
    updateDate: '2026-11-15',
    author: 'San Diego Master Diagnostic Advisory Group',
    featuredImage: APP_IMAGES.plumberInspection,
    imageAlt: 'Licensed professional plumbing contractor conducting line pressure testing and electronic leak detection in San Diego',
    targetKeywords: [
      'leak detection cost',
      'how much does leak detection cost',
      'slab leak detection cost',
      'water leak detection cost',
      'does insurance cover leak detection',
      'underground leak detection cost',
      'leak detection San Diego',
      'gas leak detection cost',
      'leak detection City Heights 92105'
    ],
    canonicalUrl: 'https://www.cityheightsleakdetectionpro.com/blog/'
  },
  {
    slug: 'leak-detection-city-heights-san-diego',
    routePage: 'leak-detection-city-heights-san-diego',
    title: 'Leak Detection in City Heights, San Diego: A Friendly Homeowner’s Guide',
    shortTitle: 'City Heights Homeowner Guide',
    metaTitle: 'Leak Detection in City Heights, San Diego | Local Guide',
    metaDesc: 'Learn the signs of hidden leaks, how pros find them, and what pricing depends on. Call City Heights Leak Detection Pro at (619) 910-9411.',
    excerpt: 'A practical, friendly guide for City Heights homeowners on hidden water, slab, and gas leaks: warning signs, non-invasive diagnostic tools, cost factors, and finding licensed local pros.',
    badge: 'City Heights Homeowner Guide',
    readTime: '7 min read',
    publishDate: '2026-11-05',
    updateDate: '2026-11-15',
    author: 'City Heights Leak Detection Pro Advisory Team',
    featuredImage: APP_IMAGES.heroWaterLeak,
    imageAlt: 'Non-invasive acoustic leak detection technician pinpointing hidden water leak in City Heights San Diego home',
    targetKeywords: [
      'leak detection in City Heights San Diego',
      'water leak detection university heights san diego',
      'slab leak detection service university heights san diego',
      'gas leak detection san diego',
      'how much does leak detection cost',
      'plumbers city heights ca'
    ],
    canonicalUrl: 'https://www.cityheightsleakdetectionpro.com/leak-detection-city-heights-san-diego/'
  }
];


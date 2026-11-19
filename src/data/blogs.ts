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
  },
  {
    slug: 'hidden-water-leak-signs-city-heights',
    routePage: 'hidden-water-leak-signs-city-heights',
    title: 'Is Your City Heights Home Hiding a Water Leak?',
    shortTitle: 'Hidden Water Leak Signs',
    metaTitle: 'How to Spot a Hidden Water Leak in City Heights Homes',
    metaDesc: 'Higher water bill, damp smell, or a sound in the walls? Learn how City Heights homeowners can spot a hidden leak early. Call (619) 910-9411.',
    excerpt: 'Learn how City Heights homeowners can spot hidden water leaks early using water bill trends, a ten-minute meter check, and telltale wall or floor warning signs.',
    badge: 'Homeowner Leak Checklist',
    readTime: '5 min read',
    publishDate: '2026-11-18',
    updateDate: '2026-11-18',
    author: 'City Heights Leak Detection Pro Editorial Team',
    featuredImage: APP_IMAGES.thermalImaging,
    imageAlt: 'Technician checking interior wall for hidden moisture and water leaks with thermal imaging in City Heights home',
    targetKeywords: [
      'hidden water leak signs',
      'water leak City Heights',
      'how to spot a hidden water leak',
      'water meter leak check',
      'City Heights leak detection'
    ],
    canonicalUrl: 'https://www.cityheightsleakdetectionpro.com/hidden-water-leak-signs-city-heights/'
  }
];


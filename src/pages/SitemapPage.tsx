import React, { useState } from 'react';
import {
  FileCode,
  ExternalLink,
  Copy,
  Check,
  Globe,
  Droplets,
  Flame,
  FileText,
  Info,
  Mail,
  ShieldCheck,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data/content';

interface SitemapPageProps {
  onNavigate: (page: Page) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const rawXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.cityheightsleakdetectionpro.com/</loc>
    <lastmod>2026-11-22</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.cityheightsleakdetectionpro.com/water-leak/</loc>
    <lastmod>2026-11-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.cityheightsleakdetectionpro.com/gas-leak/</loc>
    <lastmod>2026-11-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.cityheightsleakdetectionpro.com/blog/</loc>
    <lastmod>2026-11-22</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.cityheightsleakdetectionpro.com/leak-detection-city-heights-san-diego/</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.cityheightsleakdetectionpro.com/underground-slab-leak-detection/</loc>
    <lastmod>2026-11-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.cityheightsleakdetectionpro.com/leak-detection-and-repair-guide/</loc>
    <lastmod>2026-11-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.cityheightsleakdetectionpro.com/hidden-water-leak-signs-city-heights/</loc>
    <lastmod>2026-11-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.cityheightsleakdetectionpro.com/about/</loc>
    <lastmod>2026-11-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.cityheightsleakdetectionpro.com/contact/</loc>
    <lastmod>2026-11-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.cityheightsleakdetectionpro.com/privacy/</loc>
    <lastmod>2026-10-06</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://www.cityheightsleakdetectionpro.com/disclaimer/</loc>
    <lastmod>2026-10-06</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://www.cityheightsleakdetectionpro.com/sitemap/</loc>
    <lastmod>2026-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`;

  const sitemapItems = [
    {
      loc: 'https://www.cityheightsleakdetectionpro.com/',
      path: '/',
      page: 'home' as Page,
      title: 'Leak Detection & Repair in San Diego, CA | (619) 910-9411',
      desc: 'Hidden water, slab or gas leak anywhere in San Diego? Get matched with a CSLB-licensed pro for non-invasive leak detection. Call (619) 910-9411.',
      priority: '1.0',
      changefreq: 'daily',
      icon: <Globe className="w-5 h-5 text-blue-500" />
    },
    {
      loc: 'https://www.cityheightsleakdetectionpro.com/water-leak/',
      path: '/water-leak/',
      page: 'water-leak' as Page,
      title: 'Slab & Water Leak Detection in San Diego | No Digging',
      desc: 'Suspect a leak under your slab or walls in San Diego? Acoustic & thermal imaging pinpoints it without tearing up floors. Free quote: (619) 910-9411.',
      priority: '0.9',
      changefreq: 'weekly',
      icon: <Droplets className="w-5 h-5 text-blue-400" />
    },
    {
      loc: 'https://www.cityheightsleakdetectionpro.com/gas-leak/',
      path: '/gas-leak/',
      page: 'gas-leak' as Page,
      title: 'Gas Leak Detection San Diego, CA | 24/7 Emergency',
      desc: 'Smell gas in San Diego? Evacuate and call 911 or SDG&E first, then call our 24/7 dispatch for licensed gas leak testing & clearance: (619) 910-9411.',
      priority: '0.9',
      changefreq: 'weekly',
      icon: <Flame className="w-5 h-5 text-amber-500" />
    },
    {
      loc: 'https://www.cityheightsleakdetectionpro.com/blog/',
      path: '/blog/',
      page: 'blog' as Page,
      title: 'San Diego Leak Detection Blog & Homeowner Guides',
      desc: 'Explore San Diego leak detection guides covering hidden water leak signs, slab leak locating, acoustic testing, and targeted pipe repair methods.',
      priority: '0.9',
      changefreq: 'daily',
      icon: <FileText className="w-5 h-5 text-cyan-500" />
    },
    {
      loc: 'https://www.cityheightsleakdetectionpro.com/leak-detection-city-heights-san-diego/',
      path: '/leak-detection-city-heights-san-diego/',
      page: 'leak-detection-city-heights-san-diego' as Page,
      title: 'Leak Detection in City Heights, San Diego | Local Guide',
      desc: 'Learn the signs of hidden leaks, how pros find them, and what pricing depends on. Call Leak Detection Pro in San Diego at (619) 910-9411.',
      priority: '0.9',
      changefreq: 'weekly',
      icon: <FileText className="w-5 h-5 text-blue-500" />
    },
    {
      loc: 'https://www.cityheightsleakdetectionpro.com/underground-slab-leak-detection/',
      path: '/underground-slab-leak-detection/',
      page: 'underground-slab-leak-detection' as Page,
      title: 'Underground Water & Slab Leak Detection | San Diego CA',
      desc: 'How underground water & slab leak detection pinpoints hidden pipe leaks in San Diego without jackhammers. Non-invasive help: (619) 910-9411.',
      priority: '0.9',
      changefreq: 'weekly',
      icon: <FileText className="w-5 h-5 text-indigo-500" />
    },
    {
      loc: 'https://www.cityheightsleakdetectionpro.com/leak-detection-and-repair-guide/',
      path: '/leak-detection-and-repair-guide/',
      page: 'leak-detection-and-repair-guide' as Page,
      title: 'Leak Detection & Repair Guide | San Diego, CA',
      desc: 'Complete leak detection & repair guide for San Diego homeowners. Learn how acoustic sensors, thermal imaging & slab repairs work. Call (619) 910-9411.',
      priority: '0.9',
      changefreq: 'weekly',
      icon: <FileText className="w-5 h-5 text-teal-500" />
    },
    {
      loc: 'https://www.cityheightsleakdetectionpro.com/hidden-water-leak-signs-city-heights/',
      path: '/hidden-water-leak-signs-city-heights/',
      page: 'hidden-water-leak-signs-city-heights' as Page,
      title: 'How to Spot a Hidden Water Leak in City Heights Homes',
      desc: 'Higher water bill, damp smell, or a sound in the walls? Learn how San Diego homeowners can spot a hidden leak early. Call (619) 910-9411.',
      priority: '0.9',
      changefreq: 'weekly',
      icon: <FileText className="w-5 h-5 text-sky-500" />
    },
    {
      loc: 'https://www.cityheightsleakdetectionpro.com/about/',
      path: '/about/',
      page: 'about' as Page,
      title: 'About Leak Detection Pro | San Diego Plumber Network',
      desc: 'We connect San Diego homeowners with pre-screened, CSLB-licensed plumbers for non-invasive leak detection citywide. See how it works: (619) 910-9411.',
      priority: '0.7',
      changefreq: 'monthly',
      icon: <Info className="w-5 h-5 text-indigo-500" />
    },
    {
      loc: 'https://www.cityheightsleakdetectionpro.com/contact/',
      path: '/contact/',
      page: 'contact' as Page,
      title: 'Contact Leak Detection Pro | San Diego, CA 24/7 Dispatch',
      desc: 'Request a leak detection estimate anywhere in San Diego. Call (619) 910-9411 anytime or reach our central dispatch at 3431 43rd St, San Diego, CA.',
      priority: '0.8',
      changefreq: 'monthly',
      icon: <Mail className="w-5 h-5 text-emerald-500" />
    },
    {
      loc: 'https://www.cityheightsleakdetectionpro.com/privacy/',
      path: '/privacy/',
      page: 'privacy' as Page,
      title: 'Privacy Policy | Leak Detection Pro San Diego',
      desc: 'How Leak Detection Pro collects, uses and protects your personal information across San Diego, including your rights under California CCPA/CPRA.',
      priority: '0.3',
      changefreq: 'yearly',
      icon: <ShieldCheck className="w-5 h-5 text-slate-400" />
    },
    {
      loc: 'https://www.cityheightsleakdetectionpro.com/disclaimer/',
      path: '/disclaimer/',
      page: 'disclaimer' as Page,
      title: 'Legal Disclaimer & Licensing | Leak Detection Pro',
      desc: 'Leak Detection Pro connects San Diego property owners with independent CSLB-licensed plumbers. Read our qualified contractor network licensing terms.',
      priority: '0.3',
      changefreq: 'yearly',
      icon: <AlertTriangle className="w-5 h-5 text-slate-400" />
    },
    {
      loc: 'https://www.cityheightsleakdetectionpro.com/sitemap/',
      path: '/sitemap/',
      page: 'sitemap' as Page,
      title: 'Sitemap | Leak Detection Pro San Diego',
      desc: 'Browse every Leak Detection Pro San Diego page: water & slab leak detection, gas leak testing, homeowner guides, and 24/7 citywide dispatch details.',
      priority: '0.5',
      changefreq: 'weekly',
      icon: <FileCode className="w-5 h-5 text-blue-400" />
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(rawXml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-sky-50 via-blue-50/40 to-white border-b border-slate-200 text-slate-900 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="hover:underline hover:text-blue-700"
            >
              Home
            </a>
            <span>/</span>
            <span className="text-slate-900 font-medium">Sitemap</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-semibold text-blue-800">
            <FileCode className="w-3.5 h-3.5 text-blue-600" />
            <span>Search Engine &amp; Human-Readable Index</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Website Sitemap &amp; XML Feed
          </h1>

          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            Direct access to all verified pages, services, diagnostic guides, and XML feeds for search engine crawlers and users.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Raw /sitemap.xml</span>
            </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-xs"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied XML to Clipboard!' : 'Copy XML Sitemap Code'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content: Human-Readable Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Indexed Pages ({sitemapItems.length} URLs)
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                All pages return HTTP 200 and follow standard sitemaps.org 0.9 protocol.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                ● 100% Crawlable
              </span>
              <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold">
                0 Nofollow
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sitemapItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {item.path}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold">
                      <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        Priority {item.priority}
                      </span>
                      <span className="text-slate-500 bg-slate-100 px-2 py-0.5 rounded capitalize">
                        {item.changefreq}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 leading-snug">
                    <a
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(item.page);
                      }}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </a>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px] truncate max-w-[240px]">
                    {item.loc}
                  </span>
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.page);
                    }}
                    className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:underline"
                  >
                    <span>Visit Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* XML Code Viewer Accordion */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs text-slate-900 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-blue-600" />
                  <span>Raw sitemap.xml Source (Clean Sitemaps Protocol 0.9)</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Ready to copy and submit to Google Search Console or Bing Webmaster Tools.
                </p>
              </div>
              <button
                onClick={handleCopy}
                className="self-start sm:self-auto inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-200" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy XML'}</span>
              </button>
            </div>

            <pre className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono text-slate-800 overflow-x-auto leading-relaxed max-h-96">
              {rawXml}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyCallBanner } from './components/StickyCallBanner';
import { HomePage } from './pages/HomePage';

// Route-level code-splitting: Lazy-load subpages on demand to keep initial mobile bundle ultra-light
const WaterLeakPage = lazy(() => import('./pages/WaterLeakPage').then(m => ({ default: m.WaterLeakPage })));
const GasLeakPage = lazy(() => import('./pages/GasLeakPage').then(m => ({ default: m.GasLeakPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage').then(m => ({ default: m.DisclaimerPage })));
const SitemapPage = lazy(() => import('./pages/SitemapPage').then(m => ({ default: m.SitemapPage })));

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Resolve initial and updated page based on pathname or hash
  useEffect(() => {
    const validPages: Page[] = ['home', 'water-leak', 'gas-leak', 'blog', 'about', 'contact', 'privacy', 'disclaimer', 'sitemap'];

    const resolvePageFromLocation = (): Page => {
      // First check clean pathname e.g. /water-leak or /water-leak/
      const pathSegment = window.location.pathname.replace(/^\/|\/$/g, '').toLowerCase() as Page;
      if (validPages.includes(pathSegment)) {
        return pathSegment;
      }
      // Then check hash fallback e.g. #water-leak
      const hashSegment = window.location.hash.replace(/^#\/?/, '').toLowerCase() as Page;
      if (validPages.includes(hashSegment)) {
        return hashSegment;
      }
      return 'home';
    };

    const handleLocationChange = () => {
      setCurrentPage(resolvePageFromLocation());
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Synchronize high-ranking document titles and meta tags per view
  useEffect(() => {
    const pageMeta: Record<Page, { title: string; desc: string }> = {
      'home': {
        title: 'Leak Detection in City Heights, San Diego | Fast Help',
        desc: 'Hidden water, slab or gas leak in City Heights? Get matched with a licensed local pro for non-invasive leak detection. Call (619) 910-9411.'
      },
      'water-leak': {
        title: 'Slab & Water Leak Detection in City Heights | No Digging',
        desc: 'Suspect a leak under your slab or walls? Acoustic and thermal imaging pinpoints it without tearing up floors. Free estimate: (619) 910-9411.'
      },
      'gas-leak': {
        title: 'Gas Leak Detection City Heights, CA | 24/7 Emergency',
        desc: 'Smell gas? Leave the home and call 911 or SDG&E first. Then call us for licensed gas leak testing in City Heights. (619) 910-9411.'
      },
      'blog': {
        title: 'Leak Detection Cost in San Diego (2026 Price Guide)',
        desc: 'How much does leak detection cost in San Diego? See 2026 price ranges, cost factors, and whether insurance covers slab leak locating.'
      },
      'about': {
        title: 'About Leak Detection Pro | City Heights Plumber Network',
        desc: 'We connect City Heights homeowners with pre-screened, CSLB-licensed plumbers for leak detection. See how it works. Call (619) 910-9411.'
      },
      'contact': {
        title: 'Contact Leak Detection Pro | City Heights, CA 92105',
        desc: 'Request a leak detection estimate in City Heights. Call (619) 910-9411 anytime or reach our dispatch desk at 3431 43rd St, San Diego, CA 92105.'
      },
      'privacy': {
        title: 'Privacy Policy | Leak Detection Pro',
        desc: 'How Leak Detection Pro collects, uses and protects your personal information, including your rights under the CCPA.'
      },
      'disclaimer': {
        title: 'Legal Disclaimer & Licensing | Leak Detection Pro',
        desc: 'Leak Detection Pro connects customers with qualified contractors. Work is performed by independent CSLB-licensed plumbers. Read our licensing and service terms.'
      },
      'sitemap': {
        title: 'Sitemap | Leak Detection Pro City Heights',
        desc: 'Browse every Leak Detection Pro page: water leak detection, gas leak detection, cost guides and contact details for City Heights, San Diego.'
      }
    };

    const current = pageMeta[currentPage] || pageMeta.home;
    document.title = current.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', current.desc);
    }

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', current.title);
    }
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', current.desc);
    }

    // Update Twitter card tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', current.title);
    }
    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute('content', current.desc);
    }

    // Dynamically synchronize canonical URL, hreflang, and og:url to match exact sitemap URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const pageSuffix = currentPage === 'home' ? '' : currentPage;
    const baseOrigin = window.location.origin.includes('cityheightsleakdetectionpro.com')
      ? 'https://www.cityheightsleakdetectionpro.com'
      : window.location.origin;
    const canonicalUrl = pageSuffix ? `${baseOrigin}/${pageSuffix}/` : `${baseOrigin}/`;
    canonical.setAttribute('href', canonicalUrl);

    // Synchronize self-referential hreflang annotations
    const hreflangUs = document.querySelector('link[hreflang="en-US"]');
    if (hreflangUs) {
      hreflangUs.setAttribute('href', canonicalUrl);
    }
    const hreflangDefault = document.querySelector('link[hreflang="x-default"]');
    if (hreflangDefault) {
      hreflangDefault.setAttribute('href', canonicalUrl);
    }

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    const targetPath = page === 'home' ? '/' : `/${page}/`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        <Suspense fallback={
          <div className="min-h-[50vh] flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-xs text-slate-500 font-medium">Loading City Heights Leak Services...</span>
          </div>
        }>
          {currentPage === 'home' && (
            <HomePage onNavigate={handleNavigate} />
          )}
          {currentPage === 'water-leak' && (
            <WaterLeakPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'gas-leak' && (
            <GasLeakPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'blog' && (
            <BlogPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'about' && (
            <AboutPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'contact' && (
            <ContactPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'privacy' && (
            <PrivacyPolicyPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'disclaimer' && (
            <DisclaimerPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'sitemap' && (
            <SitemapPage onNavigate={handleNavigate} />
          )}
        </Suspense>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Quick Call Banner */}
      <StickyCallBanner />
    </div>
  );
}

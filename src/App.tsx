import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyCallBanner } from './components/StickyCallBanner';
import { HomePage } from './pages/HomePage';
import { WaterLeakPage } from './pages/WaterLeakPage';
import { GasLeakPage } from './pages/GasLeakPage';
import { BlogPage } from './pages/BlogPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { SitemapPage } from './pages/SitemapPage';

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
        title: 'Leak Detection City Heights, San Diego | Leak Detection Pro',
        desc: 'Need expert leak detection in City Heights? We find hidden water, slab, and gas leaks quickly using non-invasive tools. Call for an upfront estimate today!'
      },
      'water-leak': {
        title: 'Water & Slab Leak Detection City Heights, San Diego | 24/7 Dispatch',
        desc: 'Non-invasive water leak detection & slab leak locating in City Heights (92105). Acoustic pipe testing & FLIR thermal scans. Call (619) 910-9411.'
      },
      'gas-leak': {
        title: 'Emergency Gas Leak Detection City Heights, San Diego CA | 24/7 Hotline',
        desc: '24/7 emergency gas leak detection in City Heights, CA (92105). Pressure decay testing, safety inspections & SDG&E tag clearance. Call (619) 910-9411.'
      },
      'blog': {
        title: 'Leak Detection & Leak Repair Guide | City Heights, San Diego CA',
        desc: 'Complete leak detection & repair guide for City Heights (92105). Learn how acoustic sensors, thermal imaging & slab repairs work. Call (619) 910-9411.'
      },
      'about': {
        title: 'About Us | City Heights Local Leak Detection Network (92105)',
        desc: 'About Leak Detection Pro at 3431 43rd St, City Heights, CA. Connecting homeowners with pre-screened CSLB licensed plumbers. Call (619) 910-9411.'
      },
      'contact': {
        title: 'Contact & Emergency Dispatch | 3431 43rd St, City Heights CA 92105',
        desc: 'Contact Leak Detection Pro at 3431 43rd St, City Heights, CA 92105. 24/7 emergency dispatch desk & instant contractor referral. Call (619) 910-9411.'
      },
      'privacy': {
        title: 'Privacy Policy | Leak Detection Pro City Heights',
        desc: 'Privacy policy for Leak Detection Pro in City Heights, CA. Learn how we protect your personal information under CCPA regulations. Call (619) 910-9411.'
      },
      'disclaimer': {
        title: 'Legal Disclaimers & Licensing | Leak Detection Pro',
        desc: 'Contractor referral disclosure & licensing terms for Leak Detection Pro in City Heights, San Diego CA. Independent CSLB plumbers. Call (619) 910-9411.'
      },
      'sitemap': {
        title: 'Website Sitemap & XML Feed | Leak Detection Pro',
        desc: 'Complete XML and HTML sitemap index for Leak Detection Pro. Access all services, diagnostic guides, and verified URLs.'
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
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Quick Call Banner */}
      <StickyCallBanner />
    </div>
  );
}

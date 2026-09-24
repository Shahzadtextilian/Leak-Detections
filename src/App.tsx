import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyCallBanner } from './components/StickyCallBanner';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { WaterLeakPage } from './pages/WaterLeakPage';
import { GasLeakPage } from './pages/GasLeakPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { DisclaimerPage } from './pages/DisclaimerPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteServiceType, setQuoteServiceType] = useState<'water' | 'gas' | 'both' | 'inspection'>('water');

  // Handle URL hash changes if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (['home', 'water-leak', 'gas-leak', 'about', 'contact', 'privacy', 'disclaimer'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Synchronize high-ranking document titles and meta tags per view
  useEffect(() => {
    const pageMeta: Record<Page, { title: string; desc: string }> = {
      'home': {
        title: '24/7 Leak Detection City Heights, San Diego CA | Water & Gas Leak Locating (92105)',
        desc: '24/7 emergency water and gas leak detection in City Heights, San Diego (92105). Non-invasive slab leak locating, acoustic testing & thermal imaging. Call (619) 910-9411.'
      },
      'water-leak': {
        title: 'Water & Slab Leak Detection City Heights, San Diego | 24/7 Dispatch',
        desc: 'Non-invasive underground water leak detection and slab leak locating in City Heights (92105). Thermal FLIR imaging and acoustic pipe testing. Call (619) 910-9411.'
      },
      'gas-leak': {
        title: 'Emergency Gas Leak Detection City Heights, San Diego CA | 24/7 Hotline',
        desc: 'Emergency natural gas odor detection, line pressure decay testing, and SDG&E coordination in City Heights, San Diego (92105). Rapid 24/7 certified dispatch.'
      },
      'about': {
        title: 'About Us | City Heights Local Leak Detection Network (92105)',
        desc: 'Learn about Leak Detection Pro based at 3431 43rd St, connecting City Heights property owners with licensed, certified San Diego leak detection contractors.'
      },
      'contact': {
        title: 'Contact & Emergency Dispatch | 3431 43rd St, City Heights CA 92105',
        desc: 'Contact Leak Detection Pro at 3431 43rd St, San Diego CA 92105. 24/7 emergency hotline (619) 910-9411 or instant online contractor matching.'
      },
      'privacy': {
        title: 'Privacy Policy | Leak Detection Pro City Heights',
        desc: 'Privacy policy and consumer data protection terms for Leak Detection Pro serving City Heights, San Diego CA.'
      },
      'disclaimer': {
        title: 'Legal Disclaimers & Licensing | Leak Detection Pro',
        desc: 'Consumer referral notices, California licensing standards, and lead generation disclosures for Leak Detection Pro.'
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

    // Dynamically synchronize canonical URL to match production canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const canonicalUrl = window.location.origin.includes('cityheightsleakdetectionpro.com')
      ? 'https://www.cityheightsleakdetectionpro.com/'
      : window.location.origin + '/';
    canonical.setAttribute('href', canonicalUrl);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (service: 'water' | 'gas' = 'water') => {
    setQuoteServiceType(service);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote('water')}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />
        )}
        {currentPage === 'water-leak' && (
          <WaterLeakPage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />
        )}
        {currentPage === 'gas-leak' && (
          <GasLeakPage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote('water')} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote('water')} />
        )}
        {currentPage === 'privacy' && (
          <PrivacyPolicyPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'disclaimer' && (
          <DisclaimerPage onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote('water')} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Quick Call & Dispatch Banner */}
      <StickyCallBanner onOpenQuote={() => handleOpenQuote('water')} />

      {/* Global Interactive Quote / Dispatch Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        serviceType={quoteServiceType}
      />
    </div>
  );
}

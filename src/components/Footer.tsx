import React from 'react';
import {
  Phone,
  MapPin,
  ShieldAlert,
  Droplets,
  Flame,
  Clock,
  HeartHandshake,
  FileText,
  Facebook
} from 'lucide-react';
import { Page } from '../types';
import { BUSINESS_INFO, LEGAL_DISCLAIMER, CITY_HEIGHTS_AREAS } from '../data/content';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 text-slate-700 border-t border-slate-200 pt-14 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          {/* Col 1: About & Local Presence */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <Droplets className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                Leak Detection, <span className="text-blue-600">San Diego</span>
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your trusted citywide connection for prompt, non-destructive water, slab, and gas leak detection and plumbing repair services across every neighborhood in San Diego, CA.
            </p>
            <div className="pt-1 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.fullAddress}
                  <br />
                  <span className="text-slate-500">(Central San Diego Dispatch Hub)</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href={BUSINESS_INFO.telLink} className="text-slate-900 hover:text-blue-700 font-bold text-sm">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <span>24/7 Rapid Emergency Dispatch Line</span>
              </div>
            </div>

            {/* Social Media Links in Brand Column */}
            <div className="pt-3 border-t border-slate-200 space-y-2">
              <div className="text-xs font-semibold text-slate-800">Follow Our Community Updates:</div>
              <div className="flex items-center gap-2.5">
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Leak Detection, San Diego on Facebook"
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-blue-600 text-slate-700 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors border border-slate-200 shadow-xs group"
                >
                  <Facebook className="w-3.5 h-3.5 text-blue-600 group-hover:text-white" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Leak Detection Services
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href="/water-leak/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('water-leak');
                  }}
                  className="hover:text-blue-700 transition-colors flex items-center gap-2 text-left font-medium text-slate-800"
                >
                  <Droplets className="w-3.5 h-3.5 text-blue-600" />
                  Water Leak Detection
                </a>
              </li>
              <li>
                <a
                  href="/water-leak/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('water-leak');
                  }}
                  className="hover:text-blue-700 transition-colors pl-5 text-xs text-left block"
                >
                  • Concrete Slab Leak Tracing
                </a>
              </li>
              <li>
                <a
                  href="/water-leak/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('water-leak');
                  }}
                  className="hover:text-blue-700 transition-colors pl-5 text-xs text-left block"
                >
                  • Underground Main Line Acoustic Locating
                </a>
              </li>
              <li>
                <a
                  href="/gas-leak/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('gas-leak');
                  }}
                  className="hover:text-amber-700 transition-colors flex items-center gap-2 text-left pt-1 font-medium text-slate-800"
                >
                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                  Gas Leak Detection &amp; Testing
                </a>
              </li>
              <li>
                <a
                  href="/gas-leak/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('gas-leak');
                  }}
                  className="hover:text-amber-700 transition-colors pl-5 text-xs text-left block"
                >
                  • Electronic Sniffer &amp; Pressure Drop
                </a>
              </li>
              <li>
                <a
                  href="/gas-leak/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('gas-leak');
                  }}
                  className="hover:text-amber-700 transition-colors pl-5 text-xs text-left block"
                >
                  • SDG&amp;E Shut-Off Tag Clearance
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas Across San Diego */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              San Diego Citywide Coverage
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {CITY_HEIGHTS_AREAS.map((area, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong className="text-slate-900">{area.name}</strong> - {area.desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-slate-500 pt-1">
              Serving All City of San Diego ZIPs: 92037, 92101–92111, 92113–92117, 92119–92124, 92126–92131, 92139, 92154, 92173
            </p>
          </div>

          {/* Col 4: Quick Links, Blog & Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Company &amp; Resources
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('home');
                  }}
                  className="hover:text-blue-700 transition-colors block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/blog/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('blog');
                  }}
                  className="hover:text-blue-700 transition-colors flex items-center gap-1.5 font-semibold text-blue-700"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-600" />
                  <span>Leak Detection &amp; Repair Blog</span>
                </a>
              </li>
              <li>
                <a
                  href="/leak-detection-city-heights-san-diego/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('leak-detection-city-heights-san-diego');
                  }}
                  className="hover:text-blue-700 transition-colors text-xs text-slate-600 pl-4 block"
                >
                  • City Heights Homeowner Guide
                </a>
              </li>
              <li>
                <a
                  href="/underground-slab-leak-detection/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('underground-slab-leak-detection');
                  }}
                  className="hover:text-blue-700 transition-colors text-xs text-slate-600 pl-4 block"
                >
                  • Underground &amp; Slab Leak Guide
                </a>
              </li>
              <li>
                <a
                  href="/leak-detection-and-repair-guide/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('leak-detection-and-repair-guide');
                  }}
                  className="hover:text-blue-700 transition-colors text-xs text-slate-600 pl-4 block"
                >
                  • Leak Detection &amp; Repair Guide
                </a>
              </li>
              <li>
                <a
                  href="/hidden-water-leak-signs-city-heights/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('hidden-water-leak-signs-city-heights');
                  }}
                  className="hover:text-blue-700 transition-colors text-xs text-slate-600 pl-4 block"
                >
                  • Hidden Water Leak Signs
                </a>
              </li>
              <li>
                <a
                  href="/about/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('about');
                  }}
                  className="hover:text-blue-700 transition-colors block"
                >
                  About Our Contractor Network
                </a>
              </li>
              <li>
                <a
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('contact');
                  }}
                  className="hover:text-blue-700 transition-colors block"
                >
                  Contact &amp; Location Details
                </a>
              </li>
              <li>
                <a
                  href="/privacy/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('privacy');
                  }}
                  className="hover:text-blue-700 transition-colors block"
                >
                  Privacy Policy (CCPA Compliant)
                </a>
              </li>
              <li>
                <a
                  href="/disclaimer/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('disclaimer');
                  }}
                  className="hover:text-amber-700 transition-colors block"
                >
                  Lead Generation &amp; Contractor Disclaimer
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <a
                  href="/sitemap/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('sitemap');
                  }}
                  className="text-blue-700 hover:underline font-semibold"
                >
                  HTML Sitemap
                </a>
                <span className="text-slate-400">&bull;</span>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-semibold"
                >
                  XML Sitemap
                </a>
              </li>
            </ul>

            <div className="pt-3 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <HeartHandshake className="w-4 h-4 text-blue-600" />
                <span>Pre-screened &amp; CSLB licensed independent contractor network</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright, social media links & emergency warning */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Leak Detection, San Diego. All rights reserved. 3431 43rd St, San Diego, CA 92105.
          </p>

          {/* Social Links Centered on Bottom Bar */}
          <div className="flex items-center gap-2.5 text-xs text-slate-600">
            <span className="text-slate-500 font-medium">Follow Us:</span>
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 flex items-center gap-1.5 transition-colors font-medium"
              aria-label="Facebook Page"
            >
              <Facebook className="w-4 h-4 text-blue-600" />
              <span>Facebook</span>
            </a>
          </div>

          <p className="text-center md:text-right text-[11px] text-slate-500">
            Immediate Gas Emergency? Call 911 or SDG&amp;E at 1-800-411-7343 before ordering contractor service.
          </p>
        </div>
      </div>
    </footer>
  );
};

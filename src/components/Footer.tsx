import React from 'react';
import { Phone, MapPin, ShieldAlert, Droplets, Flame, Clock, HeartHandshake } from 'lucide-react';
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
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-14 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MANDATORY PROMINENT LEAD GENERATION DISCLAIMER BOX */}
        <div className="bg-slate-900/90 border border-amber-500/40 rounded-2xl p-5 mb-12 shadow-lg">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-amber-300 tracking-tight mb-1 flex items-center gap-2">
                Mandatory Consumer Disclosure & Lead Generation Disclaimer
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong>Leak Detection Pro is a referral advertising and lead generation service, NOT a licensed plumbing or leak detection contractor.</strong> We connect homeowners and business clients with independent, licensed, and insured plumbing and leak detection specialists operating in City Heights and San Diego County. All diagnostic evaluations, inspections, repairs, warranties, and pricing are handled directly and independently by the third-party contractor assigned to your request. We do not provide physical labor or direct contracting services.
              </p>
              <div className="mt-2.5">
                <button
                  onClick={() => handleNav('disclaimer')}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  Read our full Referral Network Terms & Contractor Match Disclosure &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: About & Local Presence */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Droplets className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Leak Detection <span className="text-blue-400">Pro</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your trusted connection for prompt, non-destructive water and gas leak detection referrals throughout City Heights, San Diego CA 92105.
            </p>
            <div className="pt-1 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.fullAddress}
                  <br />
                  <span className="text-slate-400">(City Heights, San Diego County)</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={BUSINESS_INFO.telLink} className="text-white hover:text-blue-400 font-semibold text-sm">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>24/7 Rapid Emergency Dispatch Line</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100">
              Leak Detection Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('water-leak')}
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 text-left"
                >
                  <Droplets className="w-3.5 h-3.5 text-blue-400" />
                  Water Leak Detection
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('water-leak')}
                  className="hover:text-blue-400 transition-colors pl-5 text-xs text-left"
                >
                  • Concrete Slab Leak Tracing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('water-leak')}
                  className="hover:text-blue-400 transition-colors pl-5 text-xs text-left"
                >
                  • Underground Main Line Acoustic Locating
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gas-leak')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2 text-left pt-1"
                >
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  Gas Leak Detection & Testing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gas-leak')}
                  className="hover:text-amber-400 transition-colors pl-5 text-xs text-left"
                >
                  • Electronic Sniffer & Pressure Drop
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gas-leak')}
                  className="hover:text-amber-400 transition-colors pl-5 text-xs text-left"
                >
                  • SDG&E Shut-Off Tag Clearance
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas in City Heights */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100">
              City Heights Service Coverage
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {CITY_HEIGHTS_AREAS.map((area, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>
                    <strong className="text-slate-300">{area.name}</strong> - {area.desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-slate-500 pt-1">
              Serving Zip Codes: 92105, 92104, 92115, 92116, 92102, 92113
            </p>
          </div>

          {/* Col 4: Quick Links & Trust */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  About Our Referral Network
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Contact & Location Details
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('privacy')} className="hover:text-white transition-colors">
                  Privacy Policy (CCPA Compliant)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('disclaimer')} className="hover:text-amber-400 transition-colors">
                  Lead Generation & Contractor Disclaimer
                </button>
              </li>
            </ul>

            <div className="pt-3 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <HeartHandshake className="w-4 h-4 text-blue-400" />
                <span>Pre-screened & CSLB licensed independent contractor network</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & emergency warning */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Leak Detection Pro. All rights reserved. 3431 43rd St, San Diego, CA 92105.
          </p>
          <p className="text-center md:text-right text-[11px] text-slate-400">
            Immediate Gas Emergency? Call 911 or SDG&E at 1-800-411-7343 before ordering contractor service.
          </p>
        </div>
      </div>
    </footer>
  );
};

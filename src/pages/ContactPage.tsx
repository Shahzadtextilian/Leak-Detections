import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  Navigation,
  CheckCircle2,
  AlertTriangle,
  Droplets,
  Flame
} from 'lucide-react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { LocationMap } from '../components/LocationMap';
import { APP_IMAGES } from '../data/images';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="hover:underline hover:text-white"
            >
              Home
            </a>
            <span>/</span>
            <span className="text-white font-medium">Contact Us</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <span className="bg-blue-600/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30">
              City Heights, San Diego CA
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Contact &amp; 24/7 Emergency Dispatch
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Have an urgent water or gas leak? Stationed at 3431 43rd St in City Heights, our contractor referral network connects you immediately with certified technicians across the 92105 area.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact & Hotline */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Business &amp; Referral Desk Details
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Physical Address:</h3>
                    <p className="text-sm text-slate-700 font-semibold">{BUSINESS_INFO.fullAddress}</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Located in City Heights, between University Ave &amp; Wightman St (San Diego, CA 92105)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">24/7 Telephone Hotline:</h3>
                    <a
                      href={BUSINESS_INFO.telLink}
                      className="text-lg font-extrabold text-blue-600 hover:text-blue-700 block"
                    >
                      {BUSINESS_INFO.phoneFormatted}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Direct 24/7 emergency dispatch line for water &amp; gas leaks
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Hours of Dispatch:</h3>
                    <p className="text-sm text-slate-700 font-medium">Open 24 Hours / 7 Days a Week</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Round-the-clock weekend, holiday, and overnight contractor routing
                    </p>
                  </div>
                </div>
              </div>

              {/* Call Action Box */}
              <div className="p-4 bg-slate-900 text-white rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Technicians Active in 92105</span>
                </div>
                <a
                  href={BUSINESS_INFO.telLink}
                  className="w-full py-3.5 bg-red-600 hover:bg-red-700 active:scale-98 text-white font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 24/7 Dispatch: {BUSINESS_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Professional Dispatch & Inspection Photo Card */}
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-slate-50">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={APP_IMAGES.plumberInspection}
                  alt="Licensed plumbing technician on site for leak inspection in City Heights"
                  width={400}
                  height={180}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2 left-2 bg-slate-900/85 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>CSLB Licensed Specialists</span>
                </span>
              </div>
              <div className="p-4 text-xs text-slate-600 space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  Fast Local Diagnostic Dispatch
                </div>
                <p className="leading-relaxed">
                  Our City Heights coordination desk routes incoming calls directly to certified local leak locators equipped with acoustic microphones, thermal FLIR cameras, and combustible gas sensors.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map & Area Details */}
          <div className="lg:col-span-6 space-y-8">
            {/* Embedded Live Google Map Card */}
            <LocationMap height="h-72 sm:h-80" />

            {/* Local Navigation Details Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-base text-white">
                  <Navigation className="w-5 h-5 text-blue-400" />
                  <span>City Heights Area Navigation</span>
                </div>
                <span className="text-[11px] bg-blue-900/60 text-blue-300 px-2.5 py-1 rounded-md border border-blue-700">
                  Zip 92105
                </span>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs space-y-3">
                <p className="text-slate-300 leading-relaxed">
                  Our network dispatch coordination center is based at <strong>3431 43rd St, San Diego, CA 92105</strong>, strategically positioned between Interstate 15 and Interstate 805 corridors. This central position enables partner plumbing contractors to reach City Heights, Normal Heights, Talmadge, Kensington, and North Park within minutes.
                </p>
                <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                  <div>• University Ave (2 blocks)</div>
                  <div>• Fairmount Ave (3 mins)</div>
                  <div>• I-15 Freeway (4 mins)</div>
                  <div>• El Cajon Blvd (5 mins)</div>
                </div>
              </div>
            </div>

            {/* Emergency Protocols Guide Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>Emergency Action Protocol</span>
              </h3>
              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950">
                  <strong>Suspected Gas Leak:</strong> Evacuate occupants immediately. Do not touch electrical switches or appliances. Call SDG&amp;E at 1-800-411-7343 or dial 911 from a safe distance outside.
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950">
                  <strong>Active Slab Water Leak:</strong> Locate your home's main water shutoff valve (usually at the front hose bib or curb box) and turn clockwise to stop flow until technician arrival.
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
                <a
                  href="/water-leak"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('water-leak');
                  }}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  &rarr; Water Leak Diagnostics
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="/gas-leak"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('gas-leak');
                  }}
                  className="text-amber-700 hover:underline font-semibold"
                >
                  &rarr; Gas Line Testing
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="/blog"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('blog');
                  }}
                  className="text-cyan-700 hover:underline font-semibold"
                >
                  &rarr; Field Guides
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

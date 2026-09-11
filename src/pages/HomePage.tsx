import React, { useState } from 'react';
import {
  Phone,
  ShieldCheck,
  Droplets,
  Flame,
  Search,
  MapPin,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Activity,
  Zap,
  Layers,
  HelpCircle,
  Eye
} from 'lucide-react';
import { Page } from '../types';
import { BUSINESS_INFO, FAQ_ITEMS, TESTIMONIALS, CITY_HEIGHTS_AREAS } from '../data/content';
import { LeadCaptureForm } from '../components/LeadCaptureForm';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onOpenQuote: (service?: 'water' | 'gas') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [diagnosticChoice, setDiagnosticChoice] = useState<'water' | 'gas'>('water');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-16 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-10 pb-16 lg:pt-14 lg:pb-24">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb / Local Tag */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-6">
            <span className="flex items-center gap-1 text-blue-400 font-semibold bg-blue-950/80 px-2.5 py-1 rounded-md border border-blue-800/60">
              <MapPin className="w-3.5 h-3.5 text-red-400" /> City Heights, San Diego • 92105
            </span>
            <span>&bull;</span>
            <span className="text-slate-300">Local Contractor Referral Network</span>
            <span>&bull;</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <Clock className="w-3 h-3" /> Average Match Time: &lt; 15 mins
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Col: Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Certified Independent Plumbers Ready on 43rd St Corridor</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                City Heights <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Water & Gas Leak</span> Detection & Repair Service
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Suffering from an unexplained high water bill, warm flooring, or dangerous sulfur gas odor? <strong>Leak Detection Pro</strong> quickly connects property owners at 3431 43rd St and across City Heights (92105) with licensed, insured leak detection contractors equipped with acoustic sensors and thermal scanners.
              </p>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/50 border border-slate-700/60">
                  <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400 shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-200">Non-Invasive</div>
                    <div className="text-[10px] text-slate-400">Zero wall damage</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/50 border border-slate-700/60">
                  <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-200">CSLB Licensed</div>
                    <div className="text-[10px] text-slate-400">Vetted contractors</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/50 border border-slate-700/60 col-span-2 sm:col-span-1">
                  <div className="p-1.5 rounded-lg bg-red-500/20 text-red-400 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-200">24/7 Dispatch</div>
                    <div className="text-[10px] text-slate-400">Rapid local response</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={BUSINESS_INFO.telLink}
                  className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:scale-98 text-white px-6 py-4 rounded-xl font-extrabold text-base shadow-lg shadow-red-600/30 transition-all text-center"
                  id="hero-call-now"
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  <span>Call 24/7 Hotline: {BUSINESS_INFO.phoneFormatted}</span>
                </a>

                <button
                  onClick={() => onOpenQuote('water')}
                  className="px-5 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-sm border border-slate-600 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Request Online Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Explicit Referral Disclaimer Card in Hero */}
              <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-3.5 text-xs text-slate-300 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-normal">
                  <strong className="text-amber-300">Consumer Notice:</strong> Leak Detection Pro is a marketing & referral service connecting users with licensed independent contractors. We do not provide direct plumbing or repair services.
                </p>
              </div>
            </div>

            {/* Right Col: Instant Dispatch / Quote Card */}
            <div className="lg:col-span-5">
              <LeadCaptureForm initialService="water" compact />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRIMARY SERVICE PAGES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Specialized Services in City Heights
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Precision Water & Gas Leak Detection
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Independent specialists matched to your home utilize non-destructive diagnostic tools to pinpoint hidden leaks under concrete slabs, behind walls, or in gas supply lines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Water Leak Detection */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Droplets className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                  Primary Service 1
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Water Leak Detection & Slab Leak Tracing
              </h3>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Older homes in City Heights (built between the 1920s and 1960s) frequently suffer from corroded copper lines and sub-slab foundation leaks. Our contractor network accurately maps your pressurized water system without destructive drywall demolition.
              </p>

              <div className="space-y-2 mb-6">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  What Specialists Locate:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>Concrete Slab Leaks:</strong> Warm tiles, wet carpets, foundation settlement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>Underground Water Mains:</strong> Yard damp spots, street-to-meter pressure drop</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>Hidden Drywall Pinhole Leaks:</strong> Acoustic sensors detect pressurized spray</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>Irrigation & Pool Supply Lines:</strong> Electronic helium & tracer gas tests</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('water-leak')}
                className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
                id="explore-water-leak-btn"
              >
                <span>View Water Leak Service Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenQuote('water')}
                className="px-3.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-semibold"
              >
                Get Water Quote
              </button>
            </div>
          </div>

          {/* Card 2: Gas Leak Detection */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Flame className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                  Primary Service 2
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Gas Leak Detection & Safety Diagnostics
              </h3>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Natural gas leaks pose severe fire, explosion, and carbon monoxide hazards. If you smell rotten egg / sulfur odor or received an SDG&E red tag shutoff notice, our network immediately connects you with certified gas line technicians.
              </p>

              <div className="space-y-2 mb-6">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Diagnostic Capabilities:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>Electronic Combustible Gas Sniffers:</strong> Detect PPM gas vapor levels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>Digital Manometer Pressure Decay:</strong> Confirms total line integrity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>SDG&E Shutoff Clearances:</strong> Gas test and inspection certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>Appliance Flex Lines:</strong> Water heaters, dryers, furnaces, cooktops</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('gas-leak')}
                className="text-sm font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
                id="explore-gas-leak-btn"
              >
                <span>View Gas Leak Service Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenQuote('gas')}
                className="px-3.5 py-2 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-lg text-xs font-semibold"
              >
                Get Gas Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SYMPTOM DIAGNOSTIC & WARNING SIGNS HELPER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl text-white p-6 sm:p-10 border border-slate-800">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Eye className="w-4 h-4" /> City Heights Homeowner Diagnostic Guide
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Common Signs You Need Emergency Leak Detection
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Don't wait for visible ceiling collapse or dangerous gas accumulation. Look for these early telltale signs around your 92105 property:
            </p>
          </div>

          {/* Toggle Tab */}
          <div className="inline-flex p-1 bg-slate-800 rounded-xl mb-6">
            <button
              onClick={() => setDiagnosticChoice('water')}
              className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors ${
                diagnosticChoice === 'water'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Droplets className="w-3.5 h-3.5" />
              Water Leak Symptoms
            </button>
            <button
              onClick={() => setDiagnosticChoice('gas')}
              className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors ${
                diagnosticChoice === 'gas'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              Gas Leak Symptoms
            </button>
          </div>

          {diagnosticChoice === 'water' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-xl">
                <div className="text-red-400 font-bold text-sm mb-1">1. Spinning Water Meter</div>
                <p className="text-xs text-slate-300">
                  Shut off all faucets and appliances. If the leak indicator dial or digital flow rate on your City of San Diego water meter continues moving, water is escaping unseen.
                </p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-xl">
                <div className="text-red-400 font-bold text-sm mb-1">2. Warm Floor Spots</div>
                <p className="text-xs text-slate-300">
                  A hot or warm area on laminate, hardwood, or tile floor typically indicates a fractured hot water copper pipe beneath your concrete foundation slab.
                </p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-xl">
                <div className="text-red-400 font-bold text-sm mb-1">3. Musty Smells & Mold</div>
                <p className="text-xs text-slate-300">
                  Persistent damp odors along baseboards or discoloration along ceilings points to slow interior wall plumbing or drain line seepage.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-xl">
                <div className="text-amber-400 font-bold text-sm mb-1">1. Rotten Egg Odor</div>
                <p className="text-xs text-slate-300">
                  Utility companies add Mercaptan to odorless natural gas so humans detect it quickly. Even a faint whiff near appliances requires urgent inspection.
                </p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-xl">
                <div className="text-amber-400 font-bold text-sm mb-1">2. Hissing Noise at Pipes</div>
                <p className="text-xs text-slate-300">
                  A high-pitched whistling or hissing sound near gas valves, meters, or appliance flex connectors signals an active pressurized gas breach.
                </p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-xl">
                <div className="text-amber-400 font-bold text-sm mb-1">3. Dead Vegetation Patches</div>
                <p className="text-xs text-slate-300">
                  Underground gas supply line leaks can suffocate soil roots, creating unexplained circular patches of brown, dying grass or bubbling yard mud.
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Not sure which issue you're facing? Call our local helpline for immediate triage.
            </div>
            <a
              href={BUSINESS_INFO.telLink}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Dispatch: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. LOCAL SEO: CITY HEIGHTS, SAN DIEGO COVERAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Local Presence & Community
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Serving All Neighborhoods in City Heights, CA (92105)
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Leak Detection Pro operates right from <strong>3431 43rd St, San Diego, CA 92105</strong>. Our dispatch network covers the dense residential corridors along University Ave, El Cajon Blvd, Fairmount Ave, and Euclid Ave. We know the unique plumbing challenges of older Spanish-revival bungalows, mid-century ranch homes, and multi-unit apartment complexes prevalent in City Heights.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {CITY_HEIGHTS_AREAS.map((area, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                    <div className="text-xs font-bold text-slate-900">{area.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{area.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Location Card */}
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">City Heights Operations Hub</h4>
                  <p className="text-xs text-slate-400">{BUSINESS_INFO.fullAddress}</p>
                </div>
              </div>

              {/* Stylized Local Map Representation */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs space-y-3 mb-5">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Primary Service Zip:</span>
                  <span className="font-bold text-emerald-400">92105 (City Heights Core)</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Major Cross Streets:</span>
                  <span className="font-semibold text-slate-200">43rd St & University Ave</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Response Window:</span>
                  <span className="font-bold text-blue-400">45 - 90 mins priority</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Contractor Verification:</span>
                  <span className="font-semibold text-slate-200">California CSLB Licensed</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.telLink}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold text-center text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 py-3 rounded-xl font-semibold text-center text-xs border border-slate-700"
                >
                  View Location & Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Real City Heights Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Trusted by Your Neighbors in 92105
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            See how our referral network connected local San Diego residents with rapid leak solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  <span className="text-xs text-slate-400 ml-2 font-medium">{review.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">{review.name}</div>
                  <div className="text-[11px] text-slate-500">{review.location}</div>
                </div>
                <span className="text-[10px] font-semibold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ACCORDION FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            City Heights Leak Detection FAQs
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Clear answers about pricing, referral process, technology, and gas emergency protocols.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                id={`faq-btn-${idx}`}
              >
                <span className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. BOTTOM ACTION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 rounded-3xl text-white p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="bg-white/15 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
              City Heights 24/7 Hotline
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Suspect a Leak in Your Home or Building?
            </h2>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Don't allow hidden water to rot your foundation or natural gas to build up inside your walls. Connect with a licensed City Heights leak technician now.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={BUSINESS_INFO.telLink}
                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-blue-900 font-extrabold px-8 py-4 rounded-xl text-base shadow-lg transition-all flex items-center justify-center gap-2"
                id="cta-bottom-call"
              >
                <Phone className="w-5 h-5 text-red-600" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <button
                onClick={() => onOpenQuote('water')}
                className="w-full sm:w-auto bg-blue-600/60 hover:bg-blue-600 text-white font-bold px-6 py-4 rounded-xl text-sm border border-white/30 transition-all"
              >
                Request Free Match Online
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

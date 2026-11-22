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
  Eye,
  FileText,
  Wrench,
  Building2,
  DollarSign
} from 'lucide-react';
import { Page } from '../types';
import {
  BUSINESS_INFO,
  FAQ_ITEMS,
  TESTIMONIALS,
  CITY_HEIGHTS_AREAS,
  CITY_HEIGHTS_PLUMBING_ISSUES,
  HOMEPAGE_PRICING_TIERS
} from '../data/content';
import { APP_IMAGES } from '../data/images';

const LocationMap = React.lazy(() => import('../components/LocationMap').then(m => ({ default: m.LocationMap })));

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [diagnosticChoice, setDiagnosticChoice] = useState<'water' | 'gas'>('water');
  const [mapVisible, setMapVisible] = useState<boolean>(false);
  const mapRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setMapVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    if (mapRef.current) {
      observer.observe(mapRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-16 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-blue-50/40 to-white border-b border-slate-200 text-slate-900 pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/35 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Col: Hero Copy */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Single Refined Status Eyebrow Badge */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-xs text-slate-700 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-blue-700 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-red-600" /> City of San Diego, CA
                </span>
                <span className="text-slate-300 hidden sm:inline">&bull;</span>
                <span className="text-slate-600 hidden sm:inline">All Neighborhoods &amp; ZIP Codes</span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Rapid 24/7 Dispatch
                </span>
              </div>

              {/* Single Primary H1 focused on Water, Slab, and Gas Leak Detection in San Diego */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-extrabold tracking-tight text-slate-900 leading-[1.16]">
                <span className="text-slate-900">Water, Slab &amp; Gas Leak</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700 mt-1 sm:mt-1.5">
                  Detection Across San Diego, CA
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                Suffering from an unexplained high water bill, warm flooring, or dangerous sulfur gas odor? <strong>Leak Detection Pro</strong> connects San Diego homeowners and businesses—from La Jolla and Downtown to Clairemont, Mira Mesa, Rancho Bernardo, and City Heights—with licensed, insured leak detection contractors equipped with acoustic ground probes and thermal FLIR cameras.
              </p>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">Non-Invasive</div>
                    <div className="text-[10px] text-slate-500">Zero wall damage</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">CSLB Licensed</div>
                    <div className="text-[10px] text-slate-500">Vetted contractors</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
                  <div className="p-1.5 rounded-lg bg-red-50 text-red-600 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">24/7 Dispatch</div>
                    <div className="text-[10px] text-slate-500">Rapid local response</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <a
                  href={BUSINESS_INFO.telLink}
                  className="flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 active:scale-98 text-white px-5 py-3.5 rounded-xl font-extrabold text-sm sm:text-base shadow-lg shadow-red-600/20 transition-all text-center"
                  id="hero-call-now"
                >
                  <Phone className="w-4 h-4 animate-pulse" />
                  <span>Call 24/7 Hotline: {BUSINESS_INFO.phoneFormatted}</span>
                </a>

                <a
                  href="/water-leak/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('water-leak');
                  }}
                  className="px-4 py-3.5 bg-white hover:bg-slate-50 text-slate-800 rounded-xl font-bold text-sm border border-slate-300 shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Leak Services</span>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </a>
              </div>

              {/* Authentic Equipment & Field Preview in Hero */}
              <div className="pt-1 flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden shrink-0">
                  <img
                    src={APP_IMAGES.thumbWater}
                    alt="Technician detecting slab leak"
                    width={36}
                    height={36}
                    loading="lazy"
                    decoding="async"
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src={APP_IMAGES.thumbThermal}
                    alt="Thermal imaging inspection"
                    width={36}
                    height={36}
                    loading="lazy"
                    decoding="async"
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src={APP_IMAGES.thumbGas}
                    alt="Gas detector testing"
                    width={36}
                    height={36}
                    loading="lazy"
                    decoding="async"
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-xs text-slate-600">
                  <span className="font-semibold text-slate-900">Non-destructive tools:</span> Acoustic probes, thermal imaging, &amp; gas sniffers.
                </div>
              </div>
            </div>

            {/* Right Col: 24/7 Emergency Dispatch Information Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl space-y-5">
                <div className="relative rounded-xl overflow-hidden border border-slate-200">
                  <img
                    src={APP_IMAGES.heroWaterLeak}
                    alt="Acoustic ground sensor detecting slab water leak in San Diego"
                    width={600}
                    height={336}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent flex items-end p-4">
                    <div>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 shadow-xs">
                        ● Technicians On Call 24/7
                      </span>
                      <div className="text-white font-bold text-sm mt-1.5 drop-shadow-xs">
                        Full City of San Diego &amp; All Local ZIPs
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                      <MapPin className="w-3.5 h-3.5 text-red-600" />
                      Hub: 3431 43rd St, San Diego
                    </span>
                    <span className="text-emerald-700 font-bold">45-90 Min Response</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-xl bg-sky-50 border border-sky-200/80">
                      <div className="font-bold text-blue-700 flex items-center gap-1.5">
                        <Droplets className="w-4 h-4" /> Water Leaks
                      </div>
                      <div className="text-[11px] text-slate-600 mt-1">Acoustic &amp; FLIR slab leak pinpointing</div>
                    </div>
                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80">
                      <div className="font-bold text-amber-800 flex items-center gap-1.5">
                        <Flame className="w-4 h-4 text-amber-600" /> Gas Leaks
                      </div>
                      <div className="text-[11px] text-slate-600 mt-1">Sniffing &amp; SDG&amp;E safety clearance</div>
                    </div>
                  </div>

                  <a
                    href={BUSINESS_INFO.telLink}
                    className="w-full py-3.5 px-4 bg-red-600 hover:bg-red-700 active:scale-98 text-white font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
                    id="hero-dispatch-box-call"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call 24/7 Dispatch: {BUSINESS_INFO.phoneFormatted}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRIMARY SERVICE PAGES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Citywide Services Across San Diego
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Precision Water &amp; Gas Leak Detection
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Independent specialists matched to your home utilize non-destructive diagnostic tools to pinpoint hidden leaks under concrete slabs, behind walls, or in gas supply lines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Water Leak Detection */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Authentic Leak Detection Photo */}
              <div className="relative rounded-xl overflow-hidden mb-5 border border-slate-200 shadow-xs">
                <img
                  src={APP_IMAGES.heroWaterLeak}
                  alt="Acoustic ground sensor water leak detection under slab floor"
                  width={600}
                  height={350}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-52 object-cover transition-transform duration-300 hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Acoustic Ground Sensor Testing</span>
                </div>
              </div>

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
                San Diego homes—from 1920s Uptown cottages and coastal La Jolla villas to post-war concrete slab houses in Clairemont, Mira Mesa, and Allied Gardens—frequently suffer from corroded copper lines and sub-slab foundation leaks. Our contractor network accurately maps your pressurized water system without destructive demolition.
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
              <a
                href="/water-leak/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('water-leak');
                }}
                className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
                id="explore-water-leak-btn"
                title="View San Diego Water & Slab Leak Detection Services"
              >
                <span>View Water Leak Service Page</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.telLink}
                className="px-3.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Call Dispatch</span>
              </a>
            </div>
          </div>

          {/* Card 2: Gas Leak Detection */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Authentic Gas Leak Testing Photo */}
              <div className="relative rounded-xl overflow-hidden mb-5 border border-slate-200 shadow-xs">
                <img
                  src={APP_IMAGES.gasLeakTesting}
                  alt="Electronic combustible gas detector sniffer inspecting gas meter line"
                  width={600}
                  height={350}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-52 object-cover transition-transform duration-300 hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Digital Combustible Gas Sniffing</span>
                </div>
              </div>

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
              <a
                href="/gas-leak/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('gas-leak');
                }}
                className="text-sm font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
                id="explore-gas-leak-btn"
                title="View San Diego Emergency Gas Leak Detection Services"
              >
                <span>View Gas Leak Service Page</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.telLink}
                className="px-3.5 py-2 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Emergency Call</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2B. DIAGNOSTIC TECHNOLOGY SHOWCASE GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-sky-50 to-slate-50 text-slate-900 rounded-3xl p-6 sm:p-10 border border-sky-200/80 shadow-xs">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200">
              State-Of-The-Art Equipment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Advanced Non-Destructive Leak Detection Technology
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              We connect San Diego property owners with licensed specialists who use diagnostic sensors to pinpoint leaks within inches before tearing up floors, slabs, or drywall.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Equipment 1: Acoustic */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col group shadow-xs">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={APP_IMAGES.heroWaterLeak}
                  alt="Acoustic ground microphone sensor on concrete floor"
                  width={400}
                  height={250}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                  Acoustic Probe
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Electro-Acoustic Ground Sensor</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Amplifies micro-vibrations of pressurized water rushing through pinhole pipe ruptures under concrete.
                  </p>
                </div>
                <div className="text-[11px] text-blue-700 font-semibold pt-2 border-t border-slate-100">
                  Pinpoint accuracy: within 1-2 inches
                </div>
              </div>
            </div>

            {/* Equipment 2: Thermal Camera */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col group shadow-xs">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={APP_IMAGES.thermalImaging}
                  alt="FLIR infrared thermal camera inspecting drywall water leak"
                  width={400}
                  height={250}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2 left-2 bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                  Thermal FLIR
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Infrared Thermal Imaging</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Maps temperature variations behind walls and ceilings to detect hidden moisture plumes without drilling.
                  </p>
                </div>
                <div className="text-[11px] text-purple-700 font-semibold pt-2 border-t border-slate-100">
                  Zero wall damage inspection
                </div>
              </div>
            </div>

            {/* Equipment 3: Gas Sniffer */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col group shadow-xs">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={APP_IMAGES.gasLeakTesting}
                  alt="Combustible gas electronic detector wand inspecting brass valve"
                  width={400}
                  height={250}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2 left-2 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                  Gas Detector
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Digital Gas Sniffer Wand</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Detects trace methane and propane concentrations down to 1 PPM around appliance valves and meter fittings.
                  </p>
                </div>
                <div className="text-[11px] text-amber-700 font-semibold pt-2 border-t border-slate-100">
                  Instant hazardous gas alert
                </div>
              </div>
            </div>

            {/* Equipment 4: Licensed Plumber */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col group shadow-xs">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={APP_IMAGES.plumberInspection}
                  alt="Certified licensed plumbing technician inspecting water manifold"
                  width={400}
                  height={250}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                  Verified Pros
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-bold text-sm text-slate-900">CSLB Licensed Specialists</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Background-verified, insured contractors with years of field experience in San Diego residential plumbing.
                  </p>
                </div>
                <div className="text-[11px] text-emerald-700 font-semibold pt-2 border-t border-slate-100">
                  Central San Diego base (43rd St)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SYMPTOM DIAGNOSTIC & WARNING SIGNS HELPER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sky-50/70 rounded-3xl text-slate-900 p-6 sm:p-10 border border-sky-200 shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
              <Eye className="w-4 h-4" /> San Diego Homeowner Diagnostic Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Common Signs You Need Emergency Leak Detection
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Don't wait for visible ceiling collapse or dangerous gas accumulation. Look for these early telltale signs around your San Diego property:
            </p>
          </div>

          {/* Toggle Tab */}
          <div className="inline-flex p-1 bg-white border border-slate-200 rounded-xl mb-6 shadow-xs">
            <button
              onClick={() => setDiagnosticChoice('water')}
              className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors ${
                diagnosticChoice === 'water'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
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
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              Gas Leak Symptoms
            </button>
          </div>

          {diagnosticChoice === 'water' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs">
                <div className="text-red-600 font-bold text-sm mb-1">1. Spinning Water Meter</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Shut off all faucets and appliances. If the leak indicator dial or digital flow rate on your City of San Diego water meter continues moving, water is escaping unseen.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs">
                <div className="text-red-600 font-bold text-sm mb-1">2. Warm Floor Spots</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A hot or warm area on laminate, hardwood, or tile floor typically indicates a fractured hot water copper pipe beneath your concrete foundation slab.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs">
                <div className="text-red-600 font-bold text-sm mb-1">3. Musty Smells &amp; Mold</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Persistent damp odors along baseboards or discoloration along ceilings points to slow interior wall plumbing or drain line seepage.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-amber-200 p-5 rounded-xl shadow-xs">
                <div className="text-amber-700 font-bold text-sm mb-1">1. Rotten Egg Odor</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Utility companies add Mercaptan to odorless natural gas so humans detect it quickly. Even a faint whiff near appliances requires urgent inspection.
                </p>
              </div>

              <div className="bg-white border border-amber-200 p-5 rounded-xl shadow-xs">
                <div className="text-amber-700 font-bold text-sm mb-1">2. Hissing Noise at Pipes</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A high-pitched whistling or hissing sound near gas valves, meters, or appliance flex connectors signals an active pressurized gas breach.
                </p>
              </div>

              <div className="bg-white border border-amber-200 p-5 rounded-xl shadow-xs">
                <div className="text-amber-700 font-bold text-sm mb-1">3. Dead Vegetation Patches</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Underground gas supply line leaks can suffocate soil roots, creating unexplained circular patches of brown, dying grass or bubbling yard mud.
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-sky-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 font-medium">
              Not sure which issue you're facing? Call our local helpline for immediate triage.
            </div>
            <a
              href={BUSINESS_INFO.telLink}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Dispatch: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. LOCAL SEO: FULL CITY OF SAN DIEGO COVERAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Citywide San Diego Service Territory
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Covering Every Neighborhood Across the City of San Diego
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Coordinated from our central San Diego dispatch base at <strong>3431 43rd St, San Diego, CA 92105</strong>, <strong>Leak Detection Pro</strong> connects homeowners and commercial properties across every region of the city—including <strong>Downtown, La Jolla, Pacific Beach, Point Loma, North Park, Clairemont, Mission Valley, Mira Mesa, Scripps Ranch, Rancho Bernardo, Carmel Valley, College Area, City Heights, and South Bay</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {CITY_HEIGHTS_AREAS.map((area, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                    <h3 className="text-xs font-bold text-slate-900">{area.name}</h3>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Location Card with Live Google Map */}
            <div className="lg:col-span-6 space-y-4">
              <div ref={mapRef} className="h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
                {mapVisible ? (
                  <React.Suspense fallback={<div className="h-full bg-sky-50 flex items-center justify-center text-slate-600 text-xs">Loading San Diego dispatch map...</div>}>
                    <LocationMap height="h-full" />
                  </React.Suspense>
                ) : (
                  <div className="h-full bg-sky-50 flex flex-col items-center justify-center p-6 text-center">
                    <MapPin className="w-8 h-8 text-red-600 mb-2 animate-bounce" />
                    <div className="text-slate-900 font-bold text-sm">Central San Diego Dispatch Hub: 3431 43rd St</div>
                    <div className="text-slate-600 text-xs mt-1">Interactive San Diego citywide contractor dispatch &amp; coverage map</div>
                    <button
                      type="button"
                      onClick={() => setMapVisible(true)}
                      className="mt-3.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all shadow-md cursor-pointer"
                    >
                      Load Interactive Map
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-slate-50 text-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200">
                <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Citywide Coverage:</span>
                    <strong className="text-emerald-700 font-bold">All San Diego ZIPs (92037–92173)</strong>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Central Dispatch Base:</span>
                    <strong className="text-slate-900 font-semibold">3431 43rd St (I-15 / I-805)</strong>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={BUSINESS_INFO.telLink}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2.5 px-4 rounded-xl font-bold text-center text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                  </a>
                  <a
                    href="/contact/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('contact');
                    }}
                    className="flex-1 bg-white hover:bg-slate-100 text-slate-800 py-2.5 px-4 rounded-xl font-semibold text-center text-xs border border-slate-300 transition-colors"
                  >
                    Contact &amp; Driving Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4A-1. COMMON SAN DIEGO PLUMBING & FOUNDATION LEAK ISSUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              <Wrench className="w-3.5 h-3.5" /> San Diego Infrastructure Diagnostics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Common Plumbing &amp; Slab Leak Issues Across San Diego Homes
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              San Diego neighborhoods span nearly a century of residential building styles. From coastal salt air in La Jolla and Point Loma to raised bungalows in Uptown and concrete slabs in Clairemont, Mira Mesa, and Tierrasanta, aging pipes react predictably to local hard water minerals, elevated pressure zones, and canyon clay soil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CITY_HEIGHTS_PLUMBING_ISSUES.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2.5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">{item.title}</h3>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-100/80 px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4A-2. LOCAL UTILITY COORDINATION: CITY OF SAN DIEGO PUD & SDG&E */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sky-50 via-white to-emerald-50/50 text-slate-900 rounded-3xl p-6 sm:p-10 border border-sky-200/90 shadow-xs space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
              <Building2 className="w-3.5 h-3.5" /> Municipal Utility Coordination
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Working Alongside the City of San Diego Public Utilities &amp; SDG&amp;E
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Accurate leak resolution requires knowing where utility responsibility stops and homeowner lateral piping begins. Licensed technicians in our San Diego network coordinate seamlessly with local public agencies to resolve active losses and restore shut-off service across the city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                <Droplets className="w-5 h-5" />
                <span>Water Meter &amp; Lateral Isolation</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                City of San Diego Public Utilities Department
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Before any yard trenching starts, contractors perform a static spin test at the municipal curb box to verify whether water is leaking on the City side of the meter or along your private service lateral. Once repaired, you receive an itemized acoustic and pressure test report structured for submission when applying for a City of San Diego High-Water-Bill Leak Adjustment.
              </p>
            </div>

            <div className="bg-white border border-amber-200 rounded-2xl p-6 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                <Flame className="w-5 h-5" />
                <span>Emergency Shutoffs &amp; Red-Tag Restoration</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                San Diego Gas &amp; Electric (SDG&amp;E) Coordination
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If you smell natural gas outdoors or inside, evacuate immediately and call <strong>SDG&amp;E Emergency Dispatch at 1-800-411-7343</strong> or <strong>911</strong>. When SDG&amp;E locks a meter with a safety Red Tag, our matched CSLB-licensed gas plumbers perform calibrated digital manometer pressure decay tests, repair leaking black-iron joints or shutoff valves, and document line integrity so SDG&amp;E can safely turn service back on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4A-3. TRANSPARENT ACOUSTIC & THERMAL LEAK DETECTION PRICING IN SAN DIEGO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <DollarSign className="w-3.5 h-3.5" /> San Diego Pricing Transparency
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Upfront Acoustic &amp; Thermal Leak Detection Price Ranges
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every San Diego property receives a clear diagnostic quote before electronic testing begins. Exact pricing depends on slab thickness, crawlspace access, yard main depth, and whether multiple zones require tracer gas testing.
              </p>
            </div>
            <a
              href={BUSINESS_INFO.telLink}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-colors shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>Request Free Phone Quote</span>
            </a>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-sky-50 text-slate-900 border-b border-slate-200 text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-4 font-bold">Diagnostic Service</th>
                  <th className="py-3.5 px-4 font-bold">Primary Method</th>
                  <th className="py-3.5 px-4 font-bold">Typical San Diego Range</th>
                  <th className="py-3.5 px-4 font-bold">What Is Included</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                {HOMEPAGE_PRICING_TIERS.map((tier, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="py-3.5 px-4 font-bold text-slate-900">{tier.service}</td>
                    <td className="py-3.5 px-4 text-slate-600">{tier.method}</td>
                    <td className="py-3.5 px-4 font-extrabold text-blue-700 whitespace-nowrap">{tier.range}</td>
                    <td className="py-3.5 px-4 text-slate-600 leading-relaxed">{tier.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed">
            Diagnostic rates cover precision locating and leak marking prior to any invasive excavation. Once located, technicians explain targeted spot-repair vs. overhead PEX reroute options with written flat-rate pricing before repair work proceeds.
          </p>
        </div>
      </section>

      {/* 4B. FEATURED BLOG & KNOWLEDGE CENTER: LEAK DETECTION & LEAK REPAIR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sky-50 via-white to-indigo-50 text-slate-900 rounded-3xl p-6 sm:p-10 border border-blue-200/80 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-xs text-blue-800 font-semibold">
                <FileText className="w-3.5 h-3.5" />
                <span>Featured Homeowner Guides • San Diego Leak Detection Hub</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                Complete Guide to <span className="text-blue-700">Leak Detection</span> &amp; <span className="text-amber-600">Slab Leak Locating</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                Wondering how acoustic ground microphones and thermal imaging isolate slab leaks without floor demolition? Explore our diagnostic guides covering underground pipe testing, non-invasive acoustic listening, and cost-effective repair solutions.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/blog/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('blog');
                  }}
                  className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-transform active:scale-95"
                  id="home-read-blog-btn"
                >
                  <span>Browse All Diagnostic Guides</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/leak-detection-city-heights-san-diego/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('leak-detection-city-heights-san-diego');
                  }}
                  className="px-4 py-3 bg-white hover:bg-slate-50 text-blue-700 font-bold rounded-xl text-xs sm:text-sm border border-blue-200 flex items-center gap-1.5 transition-colors"
                >
                  <span>City Heights Homeowner Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={BUSINESS_INFO.telLink}
                  className="px-4 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl text-xs sm:text-sm border border-slate-300 flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call 24/7: {BUSINESS_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3.5 shadow-xs">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Featured Diagnostic Articles:
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <a
                    href="/hidden-water-leak-signs-city-heights/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('hidden-water-leak-signs-city-heights');
                    }}
                    className="hover:text-blue-700 transition-colors"
                  >
                    <strong>How to Spot a Hidden Water Leak:</strong> Water bill checks, 10-minute meter test &amp; early signs.
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <a
                    href="/leak-detection-city-heights-san-diego/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('leak-detection-city-heights-san-diego');
                    }}
                    className="hover:text-blue-700 transition-colors"
                  >
                    <strong>City Heights Homeowner’s Guide:</strong> Hidden water &amp; gas warning signs, methods, and local pricing.
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <a
                    href="/underground-slab-leak-detection/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('underground-slab-leak-detection');
                    }}
                    className="hover:text-blue-700 transition-colors"
                  >
                    <strong>Underground &amp; Slab Leak Deep Dive:</strong> Pinpointing copper pipe leaks without jackhammers.
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <a
                    href="/leak-detection-and-repair-guide/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('leak-detection-and-repair-guide');
                    }}
                    className="hover:text-blue-700 transition-colors"
                  >
                    <strong>Complete Repair &amp; Locating Guide:</strong> Acoustic probes, FLIR thermal imaging &amp; PEX rerouting.
                  </a>
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>By San Diego Editorial Desk</span>
                <span className="text-amber-700 font-semibold">4 Full Field Guides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Real San Diego Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Trusted by Homeowners Across San Diego
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            See how our citywide leak specialists helped San Diego residents with rapid, non-invasive solutions.
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
            San Diego Leak Detection FAQs
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Clear answers about pricing, service process, technology, and gas emergency protocols.
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
        <div className="bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-50 border border-blue-200 rounded-3xl text-slate-900 p-8 sm:p-12 text-center shadow-sm relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="bg-white text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200 inline-block">
              San Diego 24/7 Emergency Hotline
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              Suspect a Leak in Your San Diego Home or Building?
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Don't allow hidden water to rot your foundation or natural gas to build up inside your walls. Connect with a licensed San Diego leak technician now.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={BUSINESS_INFO.telLink}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-extrabold px-8 py-4 rounded-xl text-base shadow-md transition-all flex items-center justify-center gap-2"
                id="cta-bottom-call"
              >
                <Phone className="w-5 h-5" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <a
                href="/contact/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-blue-700 font-bold px-6 py-4 rounded-xl text-sm border border-blue-200 shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <span>Dispatch Office &amp; Hours</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

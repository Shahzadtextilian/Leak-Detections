import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  ShieldCheck,
  Phone,
  ArrowRight,
  Droplets,
  Flame,
  CheckCircle2,
  AlertTriangle,
  Search,
  Wrench,
  Activity,
  Layers,
  FileText,
  Share2,
  Facebook,
  Radio,
  Eye,
  ThermometerSnowflake,
  Gauge,
  Sparkles,
  ChevronRight,
  BookOpen,
  Check
} from 'lucide-react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { APP_IMAGES } from '../data/images';
import { BLOG_POSTS, BlogPost } from '../data/blogs';

interface BlogPageProps {
  onNavigate: (page: Page) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  // Support switching between post 1 (General Guide) and post 2 (Underground & Slab In-Depth Technical Guide)
  const [selectedSlug, setSelectedSlug] = useState<string>(
    'underground-slab-water-leak-detection-guide'
  );

  const activePost = BLOG_POSTS.find((p) => p.slug === selectedSlug) || BLOG_POSTS[1];

  const handleSelectPost = (slug: string) => {
    setSelectedSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Article Selector Navigation Bar */}
      <section className="bg-slate-950 border-b border-slate-800 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Leak Detection Diagnostic Knowledge Center:</span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              {BLOG_POSTS.map((post) => {
                const isActive = post.slug === selectedSlug;
                return (
                  <button
                    key={post.slug}
                    onClick={() => handleSelectPost(post.slug)}
                    className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30 font-bold'
                        : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    <span>{post.shortTitle}</span>
                    {isActive && <Check className="w-3.5 h-3.5" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Article Header */}
      <section className="bg-slate-900 text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumbs" className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
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
            <span className="text-slate-300">Blog &amp; Knowledge Center</span>
            <span>/</span>
            <span className="text-white font-medium">{activePost.shortTitle}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="bg-blue-600/30 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/40">
              {activePost.badge}
            </span>
            <span className="bg-emerald-600/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              CSLB Industry Verified Diagnostic Standard
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {activePost.slug === 'guide-to-leak-detection-and-repair' ? (
              <>
                The Complete Guide to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                  Leak Detection
                </span>{' '}
                and{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
                  Leak Repair
                </span>{' '}
                in City Heights, San Diego
              </>
            ) : (
              <>
                Underground Water &amp; Slab{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                  Leak Detection
                </span>
                : How Plumbers Pinpoint Hidden Pipe Leaks Without Jackhammers
              </>
            )}
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-400" />
              <span>{activePost.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Published {activePost.publishDate} &bull; Updated October 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{activePost.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Content Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 leading-relaxed">
        {/* Switcher Banner if on either post */}
        <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <FileText className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              {activePost.slug === 'underground-slab-water-leak-detection-guide'
                ? 'Looking for our foundational overview?'
                : 'Looking for our in-depth technical slab leak guide?'}
            </span>
          </div>
          <button
            onClick={() =>
              handleSelectPost(
                activePost.slug === 'underground-slab-water-leak-detection-guide'
                  ? 'guide-to-leak-detection-and-repair'
                  : 'underground-slab-water-leak-detection-guide'
              )
            }
            className="text-blue-600 hover:text-blue-800 font-bold underline flex items-center gap-1 shrink-0"
          >
            <span>
              {activePost.slug === 'underground-slab-water-leak-detection-guide'
                ? 'Read: The Complete Leak Detection & Repair Guide'
                : 'Read: Underground Water & Slab Leak Detection Deep Dive'}
            </span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* POST 2 CONTENT: Technical Deep Dive for Top Google Ranking on All Leak Detection Keywords */}
        {activePost.slug === 'underground-slab-water-leak-detection-guide' ? (
          <>
            {/* Quick Keyword & Executive Summary Callout */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50/50 border border-blue-200 rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 font-extrabold text-blue-950 text-base">
                <Activity className="w-5 h-5 text-blue-600" />
                <span>Executive Summary: Non-Invasive Water Leak Detection Standards</span>
              </div>
              <p className="text-xs sm:text-sm text-blue-950 leading-relaxed">
                When water lines crack beneath concrete foundations, behind insulated drywall, or four feet underground along a municipal service lateral, the damage compounds by the hour. <strong>Professional water leak detection</strong> eliminates the costly guesswork of demolition by pairing acoustic micro-sensors, infrared thermography, and tracer gas forensics. Below is an authoritative technical analysis of how certified leak specialists detect, isolate, and repair hidden leaks across residential and commercial San Diego properties.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block w-full mb-1">
                  Targeted Diagnostic Disciplines:
                </span>
                {[
                  'water leak detection',
                  'slab leak detection',
                  'underground water leak detection',
                  'acoustic pipe locating',
                  'thermal imaging leak detection',
                  'hidden water leak inspection',
                  'emergency leak detection',
                  'residential leak detection',
                  'commercial leak detection',
                  'water leak repair'
                ].map((kw) => (
                  <span
                    key={kw}
                    className="bg-white border border-blue-200 text-blue-700 font-semibold px-2.5 py-0.5 rounded-md text-xs shadow-xs"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={APP_IMAGES.thermalImaging}
                alt="Infrared FLIR thermal imaging camera identifying hidden sub-slab water leak temperature differentials under concrete floor"
                width={800}
                height={420}
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="bg-slate-900 text-slate-300 text-xs px-4 py-2.5 flex items-center justify-between">
                <span>FLIR infrared thermography pinpointing a pressurized hot-water slab pipe rupture.</span>
                <span className="text-cyan-400 font-semibold">San Diego County &bull; 92105</span>
              </div>
            </div>

            {/* Section 1: The Physics of Hidden Leaks */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                1. What is Modern Water Leak Detection? The Science of Non-Destructive Locating
              </h2>
              <p>
                Every pressurized plumbing system operates under constant hydraulic force—typically between 50 and 80 PSI in municipal San Diego water districts. When a hairline fissure, pinhole corrosion pit, or cracked joint develops in copper, galvanized steel, or PEX supply lines, water exits at high velocity into the surrounding soil, aggregate, or structural framing.
              </p>
              <p>
                In the past, locating such breaches required destructive exploratory trenching. Plumbers would sledgehammer floor tiles or tear down plaster walls in hopes of chancing upon the wet pipe. Today, <strong>non-invasive water leak detection</strong> is a rigorous acoustic and thermal engineering discipline that maps subterranean plumbing grids with pinpoint accuracy.
              </p>
              <p>
                By analyzing the mechanical vibrations, frequency signatures, and thermodynamic gradients produced by pressurized leaks, experienced diagnostic technicians can isolate the exact puncture coordinates to within a 4-inch radius—before a single floor tile or section of drywall is disturbed.
              </p>
            </section>

            {/* Urgent Dispatch Callout */}
            <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center justify-center sm:justify-start gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                  <span>Immediate Water Leak Detection Dispatch</span>
                </div>
                <div className="text-xl sm:text-2xl font-black">
                  Suspect a Slab or Hidden Pipe Leak in City Heights?
                </div>
                <p className="text-xs text-blue-100 max-w-lg">
                  Connecting San Diego homeowners with CSLB-licensed, insured leak detection contractors equipped with acoustic ground mics and FLIR infrared gear.
                </p>
              </div>
              <a
                href={BUSINESS_INFO.telLink}
                className="shrink-0 bg-white hover:bg-slate-100 text-blue-700 font-extrabold px-6 py-3.5 rounded-xl text-sm shadow-md transition-transform active:scale-95 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call (619) 910-9411</span>
              </a>
            </div>

            {/* Section 2: The 5 Core Technologies */}
            <section className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                2. The 5 Core Technologies Powering Electronic Leak Detection
              </h2>
              <p>
                To consistently achieve <strong>top-tier leak detection precision</strong>, diagnostic specialists do not rely on a single gadget. They deploy a multi-layered diagnostic protocol matching the building material, pipe diameter, and soil composition:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {/* Tech 1 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Radio className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    1. Electro-Acoustic Ground Microphones
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Water escaping a pressurized orifice vibrates the pipe wall, generating high-frequency audio waves (500 Hz to 2,500 Hz) that travel through concrete slabs and compacted earth. Specialists use seismic ground listening discs coupled with noise-canceling digital amplifiers to trace the peak amplitude and zero in on the ruptured fitting.
                  </p>
                </div>

                {/* Tech 2 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <ThermometerSnowflake className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    2. FLIR High-Resolution Infrared Thermography
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Hot water slab leaks transfer heat into the surrounding concrete slab, creating thermal blooms clearly visible on infrared imagers. For cold water lines, thermal cameras register evaporative cooling signatures behind drywall cavities and ceiling joists, identifying hidden ceiling and wall leaks before water stains show.
                  </p>
                </div>

                {/* Tech 3 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    3. Digital Static Pressure Decay Testing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Before beginning acoustic scans, technicians isolate individual domestic plumbing manifolds and hook up calibrated digital manometers. By monitoring PSI drop down to 0.05 PSI over a 15-minute test, the technician proves beyond doubt whether the leak is on the cold domestic line, hot line, irrigation branch, or pool return.
                  </p>
                </div>

                {/* Tech 4 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                    <Search className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    4. Non-Toxic Tracer Gas (Helium/Hydrogen) Testing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    For deep underground yard lines, large commercial asphalt lots, or polybutylene pipes that do not conduct sound effectively, lines are evacuated and charged with safe, food-grade tracer gas. Being lighter than air, the tracer gas escapes through microscopic pinholes, percolates up through 4 feet of soil or concrete, and is detected by sniffing snouts sensitive to parts-per-million.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Slab Leak Detection Focus */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                3. Slab Leak Detection: Why San Diego &amp; City Heights Homes Are Particularly Vulnerable
              </h2>
              <p>
                A <strong>slab leak</strong> refers specifically to a pipe failure occurring underneath or encased within the concrete foundation slab of a residential or commercial building. In older neighborhoods like City Heights (zip code 92105), Talmadge, Normal Heights, and North Park, thousands of mid-century single-family houses and multi-unit apartments were built using type M or L copper piping laid directly atop soil before concrete was poured.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span>The 3 Primary Catalysts of Slab Leaks in Central San Diego:</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Expansive Adobe Clay Soil:</strong> City Heights sits atop expansive clay formations. As seasonal moisture fluctuates, the soil expands and contracts, stressing underground copper joints until they fatigue and shear.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Gravel Abrasion &amp; Thermal Expansion:</strong> Hot water lines expand each time a shower runs and contract when cooling. If the copper rubs against sharp underground aggregate without protective foam sleeving, the pipe wall wears thin and punctures.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Electrolytic &amp; Chemical Soil Corrosion:</strong> Direct contact between bare copper and mineralized clay initiates galvanic pitting, eating pinholes into the metal from the exterior inward.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4: Warning Signs Checklist */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                4. Signs You Need Immediate Slab &amp; Water Leak Detection
              </h2>
              <p>
                Because subterranean leaks remain out of sight, homeowners must watch for subtle behavioral and structural warnings before water undermines foundation stability:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-slate-900 block font-bold">Unexplained Water Bill Inflation</strong>
                    <span className="text-xs text-slate-600">A $100 to $400 monthly surge on your City of San Diego water utility statement with no changes in household consumption is the classic #1 sign of an active underground leak.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <Activity className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-slate-900 block font-bold">Warm or Damp Flooring Spots</strong>
                    <span className="text-xs text-slate-600">Walking barefoot across hallway tile, linoleum, or hardwood and feeling a localized warm patch indicates a hot water line leaking beneath the slab.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-slate-900 block font-bold">Continuous Sound of Running Water</strong>
                    <span className="text-xs text-slate-600">Hearing a faint hissing, whooshing, or trickling noise in quiet rooms when all faucets, toilets, and appliances are shut off.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <Layers className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-slate-900 block font-bold">Foundation Cracks or Buckling Baseboards</strong>
                    <span className="text-xs text-slate-600">Water saturating foundation soil causes uneven settling or hydraulic heave, resulting in hairline cracks in exterior stucco, warped baseboards, or sticking interior doors.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Step-by-Step DIY Meter Test */}
            <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
                <Search className="w-4 h-4 text-cyan-400" />
                <span>The 10-Minute Homeowner Water Meter Test</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                You can independently verify whether your home has a hidden pressurized water leak right now using your curb water meter:
              </p>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                  <div>
                    <strong className="text-white font-semibold">Turn Off All Indoor and Outdoor Water:</strong> Ensure washing machines, dishwashers, ice makers, and garden sprinklers are completely idle. Do not flush toilets during the test.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                  <div>
                    <strong className="text-white font-semibold">Inspect the Water Meter Dial:</strong> Locate the meter box at your street curb. Open the lid carefully. Look for a small red, blue, or silver triangle, gear, or digital flow rate indicator.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                  <div>
                    <strong className="text-white font-semibold">Observe Movement:</strong> If the low-flow dial is spinning, or the digital register increases over 15 minutes, water is actively leaking. Immediately call our 24/7 dispatch hotline at <strong>(619) 910-9411</strong> to schedule non-invasive acoustic locating.
                  </div>
                </li>
              </ol>
            </section>

            {/* Section 6: From Detection to Repair */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                5. Water Leak Repair Solutions: Spot Repair vs. Overhead PEX Rerouting
              </h2>
              <p>
                Once <strong>leak detection</strong> confirms the exact location of the pipe breach, property owners have two primary repair avenues:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-blue-600" />
                    <span>Direct Slab Spot Repair</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A technician cuts a localized opening directly over the acoustically pinpointed leak, clears back aggregate, removes the compromised copper section, and brazes in a new type L copper or brass sleeve. Ideal when piping is otherwise healthy and the leak is located under easily repaired flooring.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Overhead PEX Line Bypass (Reroute)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Rather than jackhammering through expensive hardwood or custom tile, plumbers abandon the leaking sub-slab line entirely. A new corrosion-proof, flexible PEX supply line is fed through the attic, baseboards, or drywall to re-feed the fixture—eliminating the risk of future slab leaks along that line forever.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Local City Heights Context & Dispatch Info */}
            <section className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
              <h3 className="font-extrabold text-blue-950 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-red-500" />
                <span>Need Underground Leak Detection in City Heights, San Diego?</span>
              </h3>
              <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
                Whether you live near 43rd Street, University Avenue, Fairmount Avenue, Azalea Park, or Teralta West, our qualified contractor network connects you with pre-screened California State License Board (CSLB) contractors specialized in non-destructive electronic leak detection and long-term leak repair.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.telLink}
                  className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
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
                  className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-3.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Explore Water &amp; Slab Leak Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </section>
          </>
        ) : (
          /* POST 1 CONTENT: Foundation Guide to Leak Detection and Leak Repair */
          <>
            {/* Key Takeaways Callout Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-6 sm:p-7 space-y-3">
              <div className="flex items-center gap-2 font-bold text-blue-950 text-base">
                <Activity className="w-5 h-5 text-blue-600" />
                <span>Key Takeaways for Property Owners</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-blue-900">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Non-Invasive Leak Detection:</strong> Modern acoustic ground sensors and FLIR thermal cameras pinpoint underground slab and wall leaks within inches—without destructive floor excavation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Timely Leak Repair:</strong> Addressing pinhole copper slab leaks early prevents foundation soil erosion, mold proliferation, and massive San Diego water bill hikes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Natural Gas Emergency:</strong> If you smell rotten egg odor or suspect a gas line leak, evacuate immediately and call SDG&amp;E (1-800-411-7343) or 911 before scheduling certified repair work.</span>
                </li>
              </ul>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={APP_IMAGES.heroWaterLeak}
                alt="Licensed technician performing acoustic leak detection on a concrete slab in City Heights San Diego"
                width={800}
                height={420}
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="bg-slate-900 text-slate-300 text-xs px-4 py-2 flex items-center justify-between">
                <span>Specialized acoustic listening equipment locating hidden pressurized pipe leaks.</span>
                <span className="text-cyan-400 font-semibold">City Heights, CA 92105</span>
              </div>
            </div>

            {/* Section 1: What is Leak Detection? */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                1. What is Professional Leak Detection and Why is Non-Invasive Locating Essential?
              </h2>
              <p>
                When water escapes from pressurized copper or PEX supply lines buried deep beneath concrete foundation slabs, behind finished drywall, or under front-yard landscaping, the leak rarely surfaces directly above the ruptured pipe. Water naturally tracks the path of least resistance, traveling along subterranean gravel beds, footing trenches, or floor joists before emerging ten or twenty feet away.
              </p>
              <p>
                Historically, plumbers relied on invasive guesswork—jackhammering through hardwood floors or tearing open drywall cavities to discover the source. Today, professional <strong>leak detection</strong> utilizes precision electronic instrumentation that identifies the exact location of sub-surface leaks without causing structural damage:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Search className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Acoustic Ground Probes</h3>
                  <p className="text-xs text-slate-600">
                    Ultra-sensitive piezoelectric microphones amplify the distinct high-frequency sound of water escaping pressurized pipes under concrete slabs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Thermal FLIR Imaging</h3>
                  <p className="text-xs text-slate-600">
                    Infrared cameras reveal subtle surface temperature differentials created by hot water slab leaks or evaporative cooling behind drywall.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Activity className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Line Pressure Decay</h3>
                  <p className="text-xs text-slate-600">
                    Digital manometers measure static pressure loss down to fractions of a PSI, isolating whether the breach is on the hot, cold, or irrigation system.
                  </p>
                </div>
              </div>
            </section>

            {/* Urgent Callout Banner */}
            <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-rose-200">
                  Need Immediate Leak Detection or Leak Repair?
                </div>
                <div className="text-xl sm:text-2xl font-black">
                  24/7 City Heights Priority Hotline
                </div>
                <p className="text-xs text-rose-100 max-w-md">
                  Speak with a local dispatch coordinator stationed on 43rd Street for urgent water and gas leak diagnostics.
                </p>
              </div>
              <a
                href={BUSINESS_INFO.telLink}
                className="shrink-0 bg-white hover:bg-slate-100 text-red-600 font-extrabold px-6 py-3.5 rounded-xl text-sm shadow-md transition-transform active:scale-95 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (619) 910-9411</span>
              </a>
            </div>

            {/* Section 2: Warning Signs */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                2. When Does a Homeowner Need Professional Leak Repair?
              </h2>
              <p>
                In City Heights and the broader San Diego metro, thousands of homes built in the mid-20th century feature copper piping laid directly beneath slab foundations without protective conduit. Over decades, acidic soil conditions, thermal expansion friction, and aggressive water chemistry induce pinhole pitting corrosion.
              </p>
              <p>
                Watch for these critical symptoms indicating it is time to arrange professional <strong>leak detection</strong> followed by lasting <strong>leak repair</strong>:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-slate-900 block font-bold">Unexplained Water Bill Spikes</strong>
                    <span className="text-xs text-slate-600">A sudden increase in your City of San Diego Public Utilities water bill without increased usage strongly points to an active underground leak.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <Activity className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-slate-900 block font-bold">Warm Spots on Flooring</strong>
                    <span className="text-xs text-slate-600">Unexplained warm patches on tile, linoleum, or engineered wood indicate a hot water slab line breach radiating through concrete.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-slate-900 block font-bold">Spinning Meter Flow Indicator</strong>
                    <span className="text-xs text-slate-600">If your water meter's low-flow dial or digital register turns while all fixtures and appliances are turned off, water is actively leaking.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <Flame className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-slate-900 block font-bold">Sulfur or Rotten Egg Odor</strong>
                    <span className="text-xs text-slate-600">Natural gas suppliers inject mercaptan to give natural gas a distinct sulfur smell. Any trace of gas requires immediate evacuation and specialized gas leak repair.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Leak Repair Options */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                3. Common Leak Repair Techniques Explained
              </h2>
              <p>
                Once non-invasive <strong>leak detection</strong> accurately isolates the exact pipe breach, your licensed plumbing specialist will present repair methods tailored to your property’s age, foundation structure, and budget:
              </p>

              <div className="space-y-3">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-blue-600" />
                    <span>Direct Spot Repair (Slab Penetration)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When a pinhole occurs in an isolated, accessible area on relatively young piping, technicians open a small surgical section of the concrete slab, excise the degraded copper pipe segment, and solder or press-fit a high-grade replacement copper or PEX fitting before re-pouring concrete.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-blue-600" />
                    <span>Overhead Pipe Rerouting (Bypass Method)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    For older copper systems with multiple pinhole vulnerabilities, opening the slab is often uneconomical. Instead, specialists abandon the leaking pipe under the foundation entirely and route a new, flexible, insulated PEX line through the attic or ceiling joists, completely eliminating future slab leak risks on that branch.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-blue-600" />
                    <span>Gas Line Sectional Replacement &amp; Pressure Certification</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Natural gas leaks require strict CSLB code compliance. Technicians replace damaged black iron or corrugated stainless steel tubing (CSST), rebuild faulty appliance shut-off valves, and perform a formal manometer pressure holding test to secure SDG&amp;E gas restoration approval.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Why Local City Heights Context Matters */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                4. Why Prompt Leak Detection &amp; Leak Repair Protects San Diego Home Value
              </h2>
              <p>
                City Heights properties along University Avenue, 43rd Street, and Fairmount Avenue sit on expansive clay soils common across central San Diego. When subterranean water leaks soak into this soil, the clay swells unevenly, exerting intense upward pressure against concrete slabs. Over time, this hydraulic heave causes cracked tile, unaligned doorways, and catastrophic foundation movement.
              </p>
              <p>
                Furthermore, San Diego's warm coastal climate creates an ideal incubation environment for black mold (Stachybotrys chartarum) inside damp wall cavities within just 24 to 48 hours of water intrusion. Prompt <strong>leak detection</strong> and prompt <strong>leak repair</strong> save thousands of dollars in water mitigation and mold remediation expenses.
              </p>
            </section>

            {/* Section 5: Step-by-Step Emergency Response */}
            <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>What to Do Right Now if You Suspect an Active Leak</span>
              </div>

              <ol className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                  <div>
                    <strong className="text-white font-semibold">Locate Your Main Water Shut-Off Valve:</strong> Turn the valve clockwise to stop incoming pressurized water flow and halt foundation saturation immediately.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                  <div>
                    <strong className="text-white font-semibold">For Gas Odors, Evacuate First:</strong> Do not touch light switches, appliances, or garage openers. Vacate the home and dial SDG&amp;E at 1-800-411-7343 or 911 from outside.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                  <div>
                    <strong className="text-white font-semibold">Call Our 24/7 City Heights Dispatch Center:</strong> Dial <strong>(619) 910-9411</strong> to have an on-call licensed leak detection and repair specialist routed directly to your home.
                  </div>
                </li>
              </ol>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.telLink}
                  className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4 animate-pulse" />
                  <span>Call Dispatch: {BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <a
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-5 py-3.5 rounded-xl text-xs border border-slate-700 transition-colors text-center flex items-center justify-center"
                >
                  View Dispatch Location (3431 43rd St)
                </a>
              </div>
            </section>
          </>
        )}

        {/* Social Share & Follow Section at Article End */}
        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-slate-400" />
            <span className="font-semibold text-slate-700">Follow &amp; Connect with Us on Social Media:</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium transition-colors border border-blue-200"
              aria-label="Follow Leak Detection Pro on Facebook"
            >
              <Facebook className="w-4 h-4 text-blue-600" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Related Services Links for Internal Linking & SEO */}
        <div className="pt-4 border-t border-slate-200">
          <h3 className="font-bold text-slate-900 text-sm mb-3">
            Related Emergency Services in City Heights, San Diego:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="/water-leak/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('water-leak');
              }}
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-left flex items-center justify-between group"
            >
              <div>
                <div className="font-bold text-sm text-slate-900 group-hover:text-blue-600">
                  Water &amp; Slab Leak Detection
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Acoustic ground sensor &amp; thermal FLIR diagnostics
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/gas-leak/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('gas-leak');
              }}
              className="p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all text-left flex items-center justify-between group"
            >
              <div>
                <div className="font-bold text-sm text-slate-900 group-hover:text-amber-700">
                  Emergency Gas Leak Detection
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Combustible gas sniffer &amp; SDG&amp;E tag clearances
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

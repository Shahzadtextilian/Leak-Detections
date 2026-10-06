import React from 'react';
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
  Facebook
} from 'lucide-react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { APP_IMAGES } from '../data/images';

interface BlogPageProps {
  onNavigate: (page: Page) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-16">
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
            <span className="text-white font-medium">Leak Detection &amp; Leak Repair Guide</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="bg-blue-600/30 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/40">
              Homeowner Diagnostic Guide
            </span>
            <span className="bg-emerald-600/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              CSLB Industry Advisory
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            The Complete Guide to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">Leak Detection</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">Leak Repair</span> in City Heights, San Diego
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-400" />
              <span>City Heights Leak Detection Editorial Team</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Updated October 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Content Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 leading-relaxed">
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
